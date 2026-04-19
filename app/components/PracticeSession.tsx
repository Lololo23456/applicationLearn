import { useState, useMemo } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Lesson, generateExercisesForLesson, Exercise } from '../data/modules'
import { recordAnswer } from '../data/progressStore'
import QCMExercise from './exercises/QCMExercise'
import WritingExercise from './exercises/WritingExercise'

type Props = {
  lesson: Lesson
  onComplete: (results: { cardId: string; quality: number }[]) => void
}

export default function PracticeSession({ lesson, onComplete }: Props) {
  const exercises = useMemo(() => generateExercisesForLesson(lesson), [lesson.id])
  const [index, setIndex]     = useState(0)
  const [results, setResults] = useState<{ cardId: string; quality: number }[]>([])

  const current = exercises[index]

  function handleAnswer(quality: number) {
    recordAnswer(current.cardId, quality)
    const newResults = [...results, { cardId: current.cardId, quality }]
    setResults(newResults)

    const next = index + 1
    if (next >= exercises.length) {
      onComplete(newResults)
    } else {
      setIndex(next)
    }
  }

  if (!current) return null

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
  container:    { flex: 1, backgroundColor: '#F8F7F4', padding: 20, paddingTop: 0 },
  header:       { paddingTop: 12, marginBottom: 24, gap: 6 },
  progressBar:  { height: 6, backgroundColor: '#E5E7EB', borderRadius: 3, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: '#1B4F72', borderRadius: 3 },
  counter:      { fontSize: 12, color: '#9CA3AF', textAlign: 'right' },
})
