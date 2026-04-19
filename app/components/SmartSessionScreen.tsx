import { useState, useMemo } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import { FlashCard } from './FlashCardScreen'
import { QCM } from './QCM'
import { AlphabetFlashCard, AlphabetQCM } from './AlphabetExercises'
import { Exercise, isVocabExercise, buildQCM } from '../data/exercices'
import { recordAnswer, getProgress } from '../data/progressStore'
import { Card } from '../data/cards'

type Props = {
  initialQueue: Exercise[]
  vocabPool: Card[]
}

function cardIdOf(e: Exercise): string {
  return isVocabExercise(e) ? e.card.arabic : e.card.letter
}

export default function SmartSessionScreen({ initialQueue, vocabPool }: Props) {
  const router = useRouter()

  // IDs de toutes les cartes qui doivent être maîtrisées (= passer un QCM avec quality >= 3)
  const targetCardIds = useMemo<Set<string>>(() => {
    const ids = initialQueue
      .filter(e => e.type === 'qcm' || e.type === 'alphabet-qcm')
      .map(cardIdOf)
    return new Set(ids)
  }, [])

  const [queue, setQueue]         = useState<Exercise[]>(initialQueue)
  const [index, setIndex]         = useState(0)
  const [masteredIds, setMastered] = useState<Set<string>>(new Set())
  const [results, setResults]     = useState<{ cardId: string; quality: number }[]>([])
  const [done, setDone]           = useState(false)

  const current = queue[index]

  function handleNext(quality: number) {
    const cardId = cardIdOf(current)
    recordAnswer(cardId, quality)
    setResults(prev => [...prev, { cardId, quality }])

    const isQCM    = current.type === 'qcm' || current.type === 'alphabet-qcm'
    const isRemedy = current.isRemedy ?? false

    let newMastered = masteredIds
    let nextQueue   = queue

    if (isQCM) {
      if (quality >= 3) {
        // Carte maîtrisée
        newMastered = new Set([...masteredIds, cardId])
        setMastered(newMastered)
      } else {
        // Raté → remédiation : flashcard + QCM en fin de queue
        const flashRemedy: Exercise = isVocabExercise(current)
          ? { type: 'flashcard',          card: current.card, isRemedy: true }
          : { type: 'alphabet-flashcard', card: current.card, isRemedy: true }
        const qcmRemedy: Exercise = isVocabExercise(current)
          ? { type: 'qcm',          card: current.card, isRemedy: true }
          : { type: 'alphabet-qcm', card: current.card, isRemedy: true }
        nextQueue = [...queue, flashRemedy, qcmRemedy]
        setQueue(nextQueue)
      }
    }

    const nextIndex = index + 1

    // La session se termine quand TOUTES les cibles sont maîtrisées
    // (peu importe s'il reste des exercices dans la queue)
    const allMastered = [...targetCardIds].every(id => newMastered.has(id))

    if (allMastered || nextIndex >= nextQueue.length) {
      setDone(true)
    } else {
      setIndex(nextIndex)
    }
  }

  if (done) {
    const correct = results.filter(r => r.quality >= 3).length
    const wrong   = results.filter(r => r.quality < 3).length

    const allCardIds = [...new Set(results.map(r => r.cardId))]
    const reviews = allCardIds.map(id => getProgress(id).nextReview).filter(Boolean)
    const nextReviewMs  = reviews.length ? Math.min(...reviews) : Date.now()
    const daysLeft = Math.max(0, Math.ceil((nextReviewMs - Date.now()) / (24 * 60 * 60 * 1000)))
    const nextReviewLabel = daysLeft === 0 ? "aujourd'hui plus tard"
      : daysLeft === 1 ? 'demain'
      : `dans ${daysLeft} jours`

    return (
      <View style={styles.doneScreen}>
        <Text style={styles.doneEmoji}>🎉</Text>
        <Text style={styles.doneTitle}>Session terminée !</Text>

        <View style={styles.summaryBox}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryIcon}>✅</Text>
            <Text style={styles.summaryText}>{masteredIds.size} carte{masteredIds.size !== 1 ? 's' : ''} maîtrisée{masteredIds.size !== 1 ? 's' : ''}</Text>
          </View>
          {wrong > 0 && (
            <View style={styles.summaryRow}>
              <Text style={styles.summaryIcon}>🔄</Text>
              <Text style={styles.summaryText}>{wrong} tentative{wrong !== 1 ? 's' : ''} ratée{wrong !== 1 ? 's' : ''}</Text>
            </View>
          )}
          <View style={styles.summaryRow}>
            <Text style={styles.summaryIcon}>⏰</Text>
            <Text style={styles.summaryText}>Prochaine révision {nextReviewLabel}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.primaryBtn} onPress={() => router.replace('/apprendre')}>
          <Text style={styles.primaryBtnText}>Continuer à apprendre</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryBtn} onPress={() => router.back()}>
          <Text style={styles.secondaryBtnText}>Retour à la carte</Text>
        </TouchableOpacity>
      </View>
    )
  }

  // Progression = cartes maîtrisées / cibles totales
  const progressPct = targetCardIds.size > 0 ? masteredIds.size / targetCardIds.size : 0

  function renderExercise() {
    switch (current.type) {
      case 'flashcard':
        return (
          <FlashCard
            key={`${index}-${current.card.arabic}`}
            arabic={current.card.arabic}
            french={current.card.french}
            onRate={handleNext}
          />
        )
      case 'qcm':
        return (
          <QCM
            key={`${index}-${current.card.arabic}`}
            {...buildQCM(vocabPool, current.card)}
            onNext={handleNext}
          />
        )
      case 'alphabet-flashcard':
        return (
          <AlphabetFlashCard
            key={`${index}-${current.card.letter}`}
            card={current.card}
            onRate={handleNext}
          />
        )
      case 'alphabet-qcm':
        return (
          <AlphabetQCM
            key={`${index}-${current.card.letter}`}
            card={current.card}
            onNext={handleNext}
          />
        )
    }
  }

  return (
    <View style={styles.screen}>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${Math.round(progressPct * 100)}%` }]} />
      </View>
      <Text style={styles.counter}>{masteredIds.size} / {targetCardIds.size} maîtrisées</Text>
      {current.isRemedy && (
        <Text style={styles.remedyBadge}>🔄 Remédiation</Text>
      )}
      <View style={styles.exerciseContainer}>
        {renderExercise()}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1, backgroundColor: '#F5F4EF', padding: 24, paddingTop: 48,
  },
  progressBar: {
    height: 6, backgroundColor: '#E0DDD5', borderRadius: 3,
    marginBottom: 12, overflow: 'hidden',
  },
  progressFill: {
    height: '100%', backgroundColor: '#534AB7', borderRadius: 3,
  },
  counter: {
    fontSize: 13, color: '#888780', textAlign: 'right', marginBottom: 4,
  },
  remedyBadge: {
    fontSize: 12, color: '#D97706', textAlign: 'right', marginBottom: 12,
  },
  exerciseContainer: { flex: 1 },

  doneScreen: {
    flex: 1, backgroundColor: '#F5F4EF',
    alignItems: 'center', justifyContent: 'center',
    padding: 24, gap: 16,
  },
  doneEmoji:  { fontSize: 64 },
  doneTitle:  { fontSize: 26, fontWeight: '700', color: '#2C2C2A', marginBottom: 8 },
  summaryBox: {
    width: '100%', backgroundColor: '#fff',
    borderRadius: 16, padding: 20, gap: 12,
    shadowColor: '#000', shadowOpacity: 0.06,
    shadowRadius: 6, shadowOffset: { width: 0, height: 2 }, elevation: 2,
  },
  summaryRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  summaryIcon: { fontSize: 20 },
  summaryText: { fontSize: 15, color: '#2C2C2A' },
  primaryBtn: {
    width: '100%', backgroundColor: '#534AB7',
    paddingVertical: 14, borderRadius: 14,
    borderBottomWidth: 4, borderColor: '#3B348A', alignItems: 'center',
  },
  primaryBtnText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  secondaryBtn: {
    paddingVertical: 10, alignItems: 'center',
  },
  secondaryBtnText: { color: '#888780', fontSize: 14 },
})
