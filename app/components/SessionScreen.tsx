// SessionScreen.tsx — orchestrateur unique pour tous les types de sessions

import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import { FlashCard } from './FlashCardScreen'
import { QCM } from './QCM'
import { AlphabetFlashCard, AlphabetQCM } from './AlphabetExercises'
import { Exercise, isVocabExercise, buildQCM } from '../data/exercices'
import { recordAnswer } from '../data/progressStore'
import { Card } from '../data/cards'

type Props = {
  exercises: Exercise[]
  title: string
  onComplete?: () => void
}

export default function SessionScreen({ exercises, title, onComplete }: Props) {
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [done, setDone] = useState(false)
  const current = exercises[currentIndex]

  // Cartes vocabulaire extraites pour générer les mauvaises réponses QCM
  const vocabCards: Card[] = exercises
    .filter(isVocabExercise)
    .map(e => e.card)

  function handleNext(quality: number) {
    // cardId = mot arabe pour le vocabulaire, lettre pour l'alphabet
    const cardId = isVocabExercise(current) ? current.card.arabic : current.card.letter
    recordAnswer(cardId, quality)

    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setDone(true)
      onComplete?.()
    }
  }

  if (done) {
    return (
      <View style={styles.doneScreen}>
        <Text style={styles.doneEmoji}>🎉</Text>
        <Text style={styles.doneTitle}>Session terminée !</Text>
        <Text style={styles.doneSub}>{exercises.length} exercices complétés</Text>
        <TouchableOpacity style={styles.doneBtn} onPress={() => router.back()}>
          <Text style={styles.doneBtnText}>Retour à la carte</Text>
        </TouchableOpacity>
      </View>
    )
  }

  function renderExercise() {
    switch (current.type) {
      case 'flashcard':
        return (
          <FlashCard
            key={currentIndex}
            arabic={current.card.arabic}
            french={current.card.french}
            onRate={handleNext}
          />
        )
      case 'qcm':
        return (
          <QCM
            key={currentIndex}
            {...buildQCM(vocabCards, current.card)}
            onNext={handleNext}
          />
        )
      case 'alphabet-flashcard':
        return (
          <AlphabetFlashCard
            key={currentIndex}
            card={current.card}
            onRate={handleNext}
          />
        )
      case 'alphabet-qcm':
        return (
          <AlphabetQCM
            key={currentIndex}
            card={current.card}
            onNext={handleNext}
          />
        )
    }
  }

  return (
    <View style={styles.screen}>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${(currentIndex / exercises.length) * 100}%` }]} />
      </View>
      <Text style={styles.counter}>{currentIndex + 1} / {exercises.length}</Text>

      <View style={styles.exerciseContainer}>
        {renderExercise()}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F5F4EF',
    padding: 24,
    paddingTop: 48,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#E0DDD5',
    borderRadius: 3,
    marginBottom: 12,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#534AB7',
    borderRadius: 3,
  },
  counter: {
    fontSize: 13,
    color: '#888780',
    textAlign: 'right',
    marginBottom: 24,
  },
  exerciseContainer: { flex: 1 },
  doneScreen: {
    flex: 1,
    backgroundColor: '#F5F4EF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 12,
  },
  doneEmoji:  { fontSize: 64 },
  doneTitle:  { fontSize: 26, fontWeight: '700', color: '#2C2C2A' },
  doneSub:    { fontSize: 15, color: '#888780', marginBottom: 16 },
  doneBtn: {
    backgroundColor: '#534AB7',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 14,
    borderBottomWidth: 4,
    borderColor: '#3B348A',
  },
  doneBtnText: { color: '#fff', fontSize: 16, fontWeight: '700' },
})
