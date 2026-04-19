import { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Exercise } from '../../data/modules'

type Props = {
  exercise: Exercise
  onAnswer: (quality: number) => void
}

export default function QCMExercise({ exercise, onAnswer }: Props) {
  const [selected, setSelected] = useState<string | null>(null)
  const choices = exercise.choices ?? []

  function handleChoice(choice: string) {
    if (selected) return
    setSelected(choice)
    setTimeout(() => onAnswer(choice === exercise.correct ? 5 : 1), 900)
  }

  const isArabicQuestion = /[\u0600-\u06FF]/.test(exercise.question)

  return (
    <View style={styles.container}>
      <View style={styles.questionCard}>
        <Text style={[styles.question, isArabicQuestion && styles.questionArabic]}>
          {exercise.question}
        </Text>
        {exercise.questionSub ? (
          <Text style={styles.questionSub}>{exercise.questionSub}</Text>
        ) : null}
      </View>

      <View style={styles.choicesGrid}>
        {choices.map((choice, i) => {
          const isSelected = selected === choice
          const isCorrect  = choice === exercise.correct
          const showResult = selected !== null

          let bg     = '#FFFFFF'
          let border = '#E5E7EB'
          let textC  = '#1A1A2E'

          if (showResult && isCorrect)          { bg = '#D1FAE5'; border = '#059669'; textC = '#065F46' }
          else if (showResult && isSelected)    { bg = '#FEE2E2'; border = '#DC2626'; textC = '#991B1B' }

          const isArabicChoice = /[\u0600-\u06FF]/.test(choice)

          return (
            <TouchableOpacity
              key={i}
              style={[styles.choice, { backgroundColor: bg, borderColor: border }]}
              onPress={() => handleChoice(choice)}
              disabled={!!selected}
              activeOpacity={0.75}
            >
              <Text style={[styles.choiceText, { color: textC }, isArabicChoice && styles.choiceArabic]}>
                {choice}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:     { flex: 1, justifyContent: 'center', gap: 24 },
  questionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 28,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
    gap: 8,
  },
  question:      { fontSize: 28, fontWeight: '700', color: '#1A1A2E', textAlign: 'center' },
  questionArabic: { fontSize: 48, writingDirection: 'rtl' },
  questionSub:   { fontSize: 14, color: '#6B7280', textAlign: 'center', lineHeight: 20 },
  choicesGrid:   { gap: 10 },
  choice: {
    borderRadius: 14,
    borderWidth: 1.5,
    borderBottomWidth: 4,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  choiceText:   { fontSize: 16, fontWeight: '600', color: '#1A1A2E', textAlign: 'center' },
  choiceArabic: { fontSize: 22, writingDirection: 'rtl' },
})
