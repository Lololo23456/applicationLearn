import { useMemo } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import { MAP_STOPS, CityStop } from './data/map'
import { getLearnedCount, getNextReviewTime, getProgress, isCardDue } from './data/progressStore'
import { ARABIC_ALPHABET } from './data/alphabet'
import { ALL_LESSONS, isLessonUnlocked } from './data/lessons'
import { buildSmartSession } from './data/exercices'
import SmartSessionScreen from './components/SmartSessionScreen'
import { Card } from './data/cards'
import { LetterCard } from './data/alphabet'

function getUnlockedCities(): CityStop[] {
  return MAP_STOPS.filter((s): s is CityStop => {
    if (s.type !== 'city') return false
    if (!s.unlockCondition) return true
    return getLearnedCount(s.unlockCondition.cardIds) >= s.unlockCondition.minLearned
  })
}

function buildSessionData() {
  const unlockedCities = getUnlockedCities()
  const unlockedCityIds = new Set(unlockedCities.map(c => c.id))

  // Toutes les leçons des villes débloquées, dans l'ordre du curriculum
  const availableLessons = ALL_LESSONS.filter(l => {
    // La leçon doit appartenir à une ville débloquée
    const city = unlockedCities.find(c => c.lessons.some(cl => cl.id === l.id))
    return city !== undefined
  })

  // Leçon active = première leçon débloquée avec des cartes jamais vues
  let activeNewVocab: Card[] = []
  let activeNewLetters: LetterCard[] = []

  for (const lesson of availableLessons) {
    if (!isLessonUnlocked(lesson)) continue

    if (lesson.route === '/lessons/alphabet') {
      const newLetters = ARABIC_ALPHABET.filter(c => getProgress(c.letter).repetitions === 0)
      if (newLetters.length > 0) {
        activeNewLetters = newLetters
        break
      }
    } else {
      const newCards = lesson.cards.filter(c => getProgress(c.arabic).repetitions === 0)
      if (newCards.length > 0) {
        activeNewVocab = newCards
        break
      }
    }
  }

  // Révisions dues : TOUTES les leçons apprises (peu importe la leçon active)
  const allLearnedVocab: Card[] = []
  const allLearnedLetters: LetterCard[] = []

  for (const lesson of availableLessons) {
    if (!isLessonUnlocked(lesson)) continue
    if (lesson.route === '/lessons/alphabet') {
      ARABIC_ALPHABET.forEach(c => { if (isCardDue(c.letter)) allLearnedLetters.push(c) })
    } else {
      lesson.cards.forEach(c => { if (isCardDue(c.arabic)) allLearnedVocab.push(c) })
    }
  }

  // Pool de vocab complet pour les distracteurs QCM
  const vocabPool: Card[] = availableLessons
    .filter(l => l.route !== '/lessons/alphabet' && isLessonUnlocked(l))
    .flatMap(l => l.cards)

  return { activeNewVocab, activeNewLetters, dueVocab: allLearnedVocab, dueLetters: allLearnedLetters, vocabPool }
}

export default function ApprendreScreen() {
  const router = useRouter()

  const { activeNewVocab, activeNewLetters, dueVocab, dueLetters, vocabPool } = useMemo(
    () => buildSessionData(),
    []
  )

  const exercises = useMemo(
    () => buildSmartSession(activeNewVocab, activeNewLetters, dueVocab, dueLetters),
    [activeNewVocab, activeNewLetters, dueVocab, dueLetters]
  )

  if (exercises.length === 0) {
    const allIds = [
      ...vocabPool.map(c => c.arabic),
      ...ARABIC_ALPHABET.map(c => c.letter),
    ]
    const nextReview = getNextReviewTime(allIds)
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
