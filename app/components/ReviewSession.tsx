import { useState, useMemo } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import { getDueCardIds, recordAnswer, recordSessionComplete } from '../data/progressStore'
import { ALL_CARD_IDS, generateExerciseForCard, Exercise } from '../data/modules'
import { shuffle } from '../data/utils'
import QCMExercise from './exercises/QCMExercise'
import WritingExercise from './exercises/WritingExercise'

export default function ReviewSession() {
  const router = useRouter()

  const exercises = useMemo<Exercise[]>(() => {
    const due = getDueCardIds(ALL_CARD_IDS)
    return shuffle(due)
      .map(id => generateExerciseForCard(id))
      .filter((e): e is Exercise => e !== null)
  }, [])

  const [index, setIndex]     = useState(0)
  const [correct, setCorrect] = useState(0)
  const [done, setDone]       = useState(false)

  const current = exercises[index]

  async function handleAnswer(quality: number) {
    if (!current) return
    recordAnswer(current.cardId, quality)
    if (quality >= 4) setCorrect(c => c + 1)

    const next = index + 1
    if (next >= exercises.length) {
      await recordSessionComplete()
      setDone(true)
    } else {
      setIndex(next)
    }
  }

  if (exercises.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyEmoji}>🌙</Text>
        <Text style={styles.emptyTitle}>Rien à réviser !</Text>
        <Text style={styles.emptySub}>
          Tu es à jour. Reviens demain ou apprends de nouvelles leçons.
        </Text>
        <TouchableOpacity style={styles.btn} onPress={() => router.back()}>
          <Text style={styles.btnText}>Retour</Text>
        </TouchableOpacity>
      </View>
    )
  }

  if (done) {
    const pct = exercises.length > 0 ? Math.round((correct / exercises.length) * 100) : 0
    return (
      <View style={styles.doneContainer}>
        <Text style={styles.doneEmoji}>{pct >= 80 ? '🎉' : pct >= 50 ? '💪' : '📚'}</Text>
        <Text style={styles.doneTitle}>Session terminée !</Text>
        <View style={styles.doneStats}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{exercises.length}</Text>
            <Text style={styles.statLabel}>Cartes révisées</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={[styles.statValue, { color: '#059669' }]}>{correct}</Text>
            <Text style={styles.statLabel}>Correctes</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={[styles.statValue, { color: '#1B4F72' }]}>{pct}%</Text>
            <Text style={styles.statLabel}>Taux de réussite</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => router.replace('/')}>
          <Text style={styles.btnText}>Retour au tableau de bord</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const progress = exercises.length > 0 ? (index + 1) / exercises.length : 0

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${Math.round(progress * 100)}%` }]} />
        </View>
        <Text style={styles.counter}>{index + 1} / {exercises.length}</Text>
      </View>

      {current.type === 'qcm' ? (
        <QCMExercise exercise={current} onAnswer={handleAnswer} />
      ) : (
        <WritingExercise exercise={current} onAnswer={handleAnswer} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container:     { flex: 1, backgroundColor: '#F8F7F4', padding: 20, paddingTop: 0 },
  header:        { paddingTop: 12, marginBottom: 24, gap: 6 },
  progressBar:   { height: 6, backgroundColor: '#E5E7EB', borderRadius: 3, overflow: 'hidden' },
  progressFill:  { height: '100%', backgroundColor: '#C8973A', borderRadius: 3 },
  counter:       { fontSize: 12, color: '#9CA3AF', textAlign: 'right' },

  emptyContainer: { flex: 1, backgroundColor: '#F8F7F4', alignItems: 'center', justifyContent: 'center', padding: 32, gap: 16 },
  emptyEmoji:     { fontSize: 64 },
  emptyTitle:     { fontSize: 24, fontWeight: '800', color: '#1A1A2E' },
  emptySub:       { fontSize: 15, color: '#6B7280', textAlign: 'center', lineHeight: 22 },

  doneContainer: { flex: 1, backgroundColor: '#F8F7F4', alignItems: 'center', justifyContent: 'center', padding: 32, gap: 20 },
  doneEmoji:     { fontSize: 72 },
  doneTitle:     { fontSize: 28, fontWeight: '800', color: '#1A1A2E' },
  doneStats:     { flexDirection: 'row', gap: 16, width: '100%' },
  statItem:      { flex: 1, backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, alignItems: 'center', gap: 4,
                   shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 6, shadowOffset: { width: 0, height: 2 }, elevation: 2 },
  statValue:     { fontSize: 28, fontWeight: '800', color: '#1A1A2E' },
  statLabel:     { fontSize: 12, color: '#6B7280', textAlign: 'center' },

  btn:     { width: '100%', backgroundColor: '#1B4F72', borderRadius: 14, paddingVertical: 14,
             alignItems: 'center', borderBottomWidth: 4, borderColor: '#154360' },
  btnText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
})
