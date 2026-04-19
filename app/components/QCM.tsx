// QCM.tsx — question à choix multiples avec notation SM-2 automatique

import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'

type QCMProps = {
  question: string
  correct: string
  choices: string[]
  onNext: (quality: number) => void  // quality calculée automatiquement
}

export function QCM({ question, correct, choices, onNext }: QCMProps) {
  const [selected, setSelected] = useState<string | null>(null)
  const hasAnswered = selected !== null

  // Quality SM-2 : correct = 4, faux = 1
  const quality = selected === correct ? 4 : 1

  function getChoiceStyle(choice: string) {
    if (!hasAnswered) return styles.neutral
    if (choice === correct) return styles.correct
    if (choice === selected) return styles.wrong
    return styles.dimmed
  }

  function getTextStyle(choice: string) {
    if (!hasAnswered) return styles.neutralText
    if (choice === correct) return styles.correctText
    if (choice === selected) return styles.wrongText
    return styles.dimmedText
  }

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>

      <View style={styles.choicesContainer}>
        {choices.map((choice) => (
          <Pressable
            key={choice}
            style={({ pressed }) => [
              styles.choiceBase,
              getChoiceStyle(choice),
              pressed && !hasAnswered && styles.pressed,
            ]}
            onPress={() => { if (!hasAnswered) setSelected(choice) }}
          >
            <Text style={getTextStyle(choice)}>{choice}</Text>
          </Pressable>
        ))}
      </View>

      {hasAnswered && (
        <Pressable style={styles.continueBtn} onPress={() => onNext(quality)}>
          <Text style={styles.continueBtnText}>Continuer</Text>
        </Pressable>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 16,
    justifyContent: 'center',
  },
  question: {
    fontSize: 48,
    textAlign: 'center',
    marginBottom: 16,
  },
  choicesContainer: {
    gap: 12,
  },
  choiceBase: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1.5,
    borderBottomWidth: 4,
    alignItems: 'center',
  },
  neutral:  { backgroundColor: '#EEEDFE', borderColor: '#534AB7' },
  correct:  { backgroundColor: '#EAF3DE', borderColor: '#3B6D11' },
  wrong:    { backgroundColor: '#FCEBEB', borderColor: '#A32D2D' },
  dimmed:   { backgroundColor: '#F1EFE8', borderColor: '#B4B2A9', opacity: 0.5 },
  pressed:  { borderBottomWidth: 2, transform: [{ translateY: 2 }] },

  neutralText:  { fontSize: 16, fontWeight: '500', color: '#3C3489' },
  correctText:  { fontSize: 16, fontWeight: '500', color: '#27500A' },
  wrongText:    { fontSize: 16, fontWeight: '500', color: '#791F1F' },
  dimmedText:   { fontSize: 16, fontWeight: '500', color: '#888780' },

  continueBtn: {
    marginTop: 8,
    backgroundColor: '#2C2C2A',
    padding: 16,
    borderRadius: 12,
    borderBottomWidth: 4,
    borderColor: '#000',
    alignItems: 'center',
  },
  continueBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
})
