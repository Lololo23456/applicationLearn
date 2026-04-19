import { useState, useRef } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import { Exercise } from '../../data/modules'
import { gradeWritingAnswer } from '../../data/utils'

type Props = {
  exercise: Exercise
  onAnswer: (quality: number) => void
}

export default function WritingExercise({ exercise, onAnswer }: Props) {
  const [input, setInput]     = useState('')
  const [result, setResult]   = useState<'correct' | 'partial' | 'wrong' | null>(null)
  const [quality, setQuality] = useState(0)
  const inputRef = useRef<TextInput>(null)

  function handleSubmit() {
    if (!input.trim() || result) return
    const q = gradeWritingAnswer(input, exercise.correct)
    const r = q >= 4 ? 'correct' : q >= 3 ? 'partial' : 'wrong'
    setQuality(q)
    setResult(r)
  }

  function handleContinue() {
    onAnswer(quality)
  }

  const isArabic = /[\u0600-\u06FF]/.test(exercise.question)

  const resultColors = {
    correct: { bg: '#D1FAE5', border: '#059669', text: '#065F46' },
    partial: { bg: '#FEF3C7', border: '#D97706', text: '#92400E' },
    wrong:   { bg: '#FEE2E2', border: '#DC2626', text: '#991B1B' },
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
      <View style={styles.questionCard}>
        <Text style={[styles.question, isArabic && styles.questionArabic]}>
          {exercise.question}
        </Text>
        {exercise.questionSub ? (
          <Text style={styles.questionSub}>{exercise.questionSub}</Text>
        ) : null}
      </View>

      {result ? (
        <View style={[styles.resultBox, { backgroundColor: resultColors[result].bg, borderColor: resultColors[result].border }]}>
          <Text style={[styles.resultLabel, { color: resultColors[result].text }]}>
            {result === 'correct' ? '✓ Correct !' : result === 'partial' ? '~ Presque !' : '✗ Incorrect'}
          </Text>
          <Text style={[styles.resultCorrect, { color: resultColors[result].text }]}>
            Réponse : {exercise.correct}
          </Text>
          {exercise.hint && result === 'wrong' ? (
            <Text style={styles.hint}>{exercise.hint}</Text>
          ) : null}
        </View>
      ) : null}

      <View style={styles.inputRow}>
        <TextInput
          ref={inputRef}
          style={[styles.input, result && { opacity: 0.6 }]}
          value={input}
          onChangeText={setInput}
          placeholder="Votre réponse..."
          placeholderTextColor="#9CA3AF"
          editable={!result}
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
          autoFocus
        />
      </View>

      {!result ? (
        <TouchableOpacity
          style={[styles.btn, !input.trim() && styles.btnDisabled]}
          onPress={handleSubmit}
          disabled={!input.trim()}
          activeOpacity={0.8}
        >
          <Text style={styles.btnText}>Valider</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.btn} onPress={handleContinue} activeOpacity={0.8}>
          <Text style={styles.btnText}>Continuer →</Text>
        </TouchableOpacity>
      )}
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container:      { flex: 1, justifyContent: 'center', gap: 20 },
  questionCard: {
    backgroundColor: '#FFFFFF', borderRadius: 20, padding: 28,
    alignItems: 'center',
    shadowColor: '#000', shadowOpacity: 0.07, shadowRadius: 12, shadowOffset: { width: 0, height: 4 }, elevation: 3,
    gap: 8,
  },
  question:        { fontSize: 28, fontWeight: '700', color: '#1A1A2E', textAlign: 'center' },
  questionArabic:  { fontSize: 48, writingDirection: 'rtl' },
  questionSub:     { fontSize: 14, color: '#6B7280', textAlign: 'center' },
  resultBox: {
    borderRadius: 14, borderWidth: 1.5, padding: 16, gap: 4,
  },
  resultLabel:   { fontSize: 16, fontWeight: '700' },
  resultCorrect: { fontSize: 15 },
  hint:          { fontSize: 13, color: '#6B7280', fontStyle: 'italic', marginTop: 4 },
  inputRow:      { flexDirection: 'row' },
  input: {
    flex: 1, backgroundColor: '#FFFFFF', borderRadius: 14,
    borderWidth: 1.5, borderColor: '#E5E7EB', borderBottomWidth: 4,
    paddingVertical: 14, paddingHorizontal: 18,
    fontSize: 16, color: '#1A1A2E',
  },
  btn: {
    backgroundColor: '#1B4F72', borderRadius: 14,
    paddingVertical: 14, alignItems: 'center',
    borderBottomWidth: 4, borderColor: '#154360',
  },
  btnDisabled: { backgroundColor: '#D1D5DB', borderColor: '#9CA3AF' },
  btnText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
})
