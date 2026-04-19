// revision.tsx — session de révision SM-2 avec les cartes dues

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import { ALL_LESSONS } from './data/lessons'
import { ARABIC_ALPHABET } from './data/alphabet'
import { getDueCardIds } from './data/progressStore'
import { Exercise, shuffle } from './data/exercices'
import SessionScreen from './components/SessionScreen'

export default function RevisionScreen() {
  const router = useRouter()

  // Cartes vocabulaire dues
  const allVocabCards = ALL_LESSONS.flatMap(l => l.cards)
  const dueVocabCards = allVocabCards.filter(c =>
    getDueCardIds([c.arabic]).length > 0
  )

  // Lettres alphabet dues
  const dueLetters = ARABIC_ALPHABET.filter(c =>
    getDueCardIds([c.letter]).length > 0
  )

  // Exercices de révision : flashcard uniquement (pas de QCM en révision)
  const exercises: Exercise[] = shuffle([
    ...dueVocabCards.map((card): Exercise => ({ type: 'flashcard', card })),
    ...dueLetters.map((card): Exercise => ({ type: 'alphabet-flashcard', card })),
  ])

  if (exercises.length === 0) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyEmoji}>✨</Text>
        <Text style={styles.emptyTitle}>Tout est à jour !</Text>
        <Text style={styles.emptySub}>Aucune carte à réviser pour l'instant.</Text>
        <TouchableOpacity style={styles.btn} onPress={() => router.back()}>
          <Text style={styles.btnText}>Retour à la carte</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return <SessionScreen exercises={exercises} title="Révision" />
}

const styles = StyleSheet.create({
  empty: {
    flex: 1,
    backgroundColor: '#F5F4EF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 12,
  },
  emptyEmoji: { fontSize: 64 },
  emptyTitle: { fontSize: 24, fontWeight: '700', color: '#2C2C2A' },
  emptySub: { fontSize: 15, color: '#888780', textAlign: 'center', marginBottom: 16 },
  btn: {
    backgroundColor: '#534AB7',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 14,
    borderBottomWidth: 4,
    borderColor: '#3B348A',
  },
  btnText: { color: '#fff', fontSize: 16, fontWeight: '700' },
})
