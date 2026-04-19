import { useMemo } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import { MAP_STOPS, CityStop } from './data/map'
import { getLearnedCount, getNextReviewTime } from './data/progressStore'
import { ARABIC_ALPHABET } from './data/alphabet'
import { buildSmartSession, hasCardsAvailable } from './data/exercices'
import SmartSessionScreen from './components/SmartSessionScreen'

function getUnlockedCities(): CityStop[] {
  return MAP_STOPS.filter((s): s is CityStop => {
    if (s.type !== 'city') return false
    if (!s.unlockCondition) return true
    return getLearnedCount(s.unlockCondition.cardIds) >= s.unlockCondition.minLearned
  })
}

export default function ApprendreScreen() {
  const router = useRouter()

  const { vocabCards, letterCards, vocabPool } = useMemo(() => {
    const cities = getUnlockedCities()
    const hasAlphabet = cities.some(c => c.lessons.some(l => l.route === '/lessons/alphabet'))
    const vocab = cities.flatMap(c => c.lessons.flatMap(l => l.cards))
    return {
      vocabCards:  vocab,
      letterCards: hasAlphabet ? ARABIC_ALPHABET : [],
      vocabPool:   vocab,  // pool complet pour les distracteurs QCM
    }
  }, [])

  const exercises = useMemo(
    () => buildSmartSession(vocabCards, letterCards),
    [vocabCards, letterCards]
  )

  // Aucune carte disponible → message "reviens demain"
  if (exercises.length === 0) {
    const nextReview = getNextReviewTime([
      ...vocabCards.map(c => c.arabic),
      ...letterCards.map(c => c.letter),
    ])

    const daysLeft = nextReview
      ? Math.max(0, Math.ceil((nextReview - Date.now()) / (24 * 60 * 60 * 1000)))
      : null

    const nextLabel = daysLeft === null ? ''
      : daysLeft === 0 ? "aujourd'hui plus tard"
      : daysLeft === 1 ? 'demain'
      : `dans ${daysLeft} jours`

    return (
      <View style={styles.emptyScreen}>
        <Text style={styles.emptyEmoji}>🌙</Text>
        <Text style={styles.emptyTitle}>C'est tout pour aujourd'hui !</Text>
        <Text style={styles.emptySub}>
          Tu as fait toutes tes révisions.{'\n'}
          {nextLabel ? `Reviens ${nextLabel}.` : 'Continue à explorer les villes !'}
        </Text>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backBtnText}>Retour à la carte</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SmartSessionScreen
      initialQueue={exercises}
      vocabPool={vocabPool}
    />
  )
}

const styles = StyleSheet.create({
  emptyScreen: {
    flex: 1, backgroundColor: '#F5F4EF',
    alignItems: 'center', justifyContent: 'center',
    padding: 32, gap: 16,
  },
  emptyEmoji: { fontSize: 72 },
  emptyTitle: { fontSize: 24, fontWeight: '700', color: '#2C2C2A', textAlign: 'center' },
  emptySub:   { fontSize: 15, color: '#888780', textAlign: 'center', lineHeight: 22 },
  backBtn: {
    marginTop: 16, backgroundColor: '#534AB7',
    paddingVertical: 14, paddingHorizontal: 32,
    borderRadius: 14, borderBottomWidth: 4, borderColor: '#3B348A',
  },
  backBtnText: { color: '#fff', fontSize: 16, fontWeight: '700' },
})
