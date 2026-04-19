// AlphabetExercises.tsx — composants visuels pour les exercices alphabet
// (pas de logique de session ici — SessionScreen s'en charge)

import { useState } from 'react'
import { View, Text, TouchableOpacity, Pressable, StyleSheet } from 'react-native'
import { LetterCard } from '../data/alphabet'
import { buildAlphabetQCM } from '../data/exercices'
import { RatingButtons } from './FlashCardScreen'

// Carte lettre : recto = lettre + nom + son / verso = mot exemple
export function AlphabetFlashCard({ card, onRate }: { card: LetterCard; onRate: (q: number) => void }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => !isFlipped && setIsFlipped(true)}
        activeOpacity={isFlipped ? 1 : 0.8}
      >
        {!isFlipped ? (
          <View style={styles.content}>
            <Text style={styles.bigLetter}>{card.letter}</Text>
            <Text style={styles.letterName}>{card.name}</Text>
            <View style={styles.soundPill}>
              <Text style={styles.soundText}>Son : {card.sound}</Text>
            </View>
            <Text style={styles.hint}>Appuie pour voir un exemple</Text>
          </View>
        ) : (
          <View style={styles.content}>
            <Text style={styles.exampleArabic}>{card.example}</Text>
            <Text style={styles.exampleMeaning}>{card.meaning}</Text>
            <Text style={styles.hint}>Exemple avec {card.name}</Text>
          </View>
        )}
      </TouchableOpacity>

      {isFlipped && <RatingButtons onRate={onRate} />}
    </View>
  )
}

// QCM lettre : affiche la lettre, 4 sons à choisir
export function AlphabetQCM({ card, onNext }: { card: LetterCard; onNext: (q: number) => void }) {
  const [{ question, correct, choices }] = useState(() => buildAlphabetQCM(card))
  const [selected, setSelected] = useState<string | null>(null)
  const hasAnswered = selected !== null
  const quality = selected === correct ? 4 : 1

  function getStyle(choice: string) {
    if (!hasAnswered) return styles.choiceNeutral
    if (choice === correct) return styles.choiceCorrect
    if (choice === selected) return styles.choiceWrong
    return styles.choiceDimmed
  }

  function getTextStyle(choice: string) {
    if (!hasAnswered) return styles.choiceNeutralText
    if (choice === correct) return styles.choiceCorrectText
    if (choice === selected) return styles.choiceWrongText
    return styles.choiceDimmedText
  }

  return (
    <View style={styles.qcmContainer}>
      <Text style={styles.bigLetter}>{question}</Text>
      <Text style={styles.qcmQuestion}>Quel est le son de cette lettre ?</Text>

      <View style={styles.choicesContainer}>
        {choices.map(choice => (
          <Pressable
            key={choice}
            style={({ pressed }) => [
              styles.choiceBase,
              getStyle(choice),
              pressed && !hasAnswered && styles.choicePressed,
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
  wrapper: { gap: 16 },
  card: {
    width: '100%',
    minHeight: 260,
    backgroundColor: '#fff',
    borderRadius: 24,
    borderWidth: 0.5,
    borderColor: '#D3D1C7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  content: { alignItems: 'center', gap: 10 },
  bigLetter: { fontSize: 96, color: '#2C2C2A', textAlign: 'center' },
  letterName: { fontSize: 22, fontWeight: '600', color: '#534AB7' },
  soundPill: {
    backgroundColor: '#EEEDFE',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  soundText: { fontSize: 15, color: '#3C3489', fontWeight: '500' },
  hint: { fontSize: 12, color: '#B4B2A9', marginTop: 4 },
  exampleArabic: { fontSize: 52, color: '#2C2C2A', textAlign: 'center' },
  exampleMeaning: { fontSize: 20, color: '#534AB7', fontWeight: '500' },

  qcmContainer: { flex: 1, gap: 16, alignItems: 'center' },
  qcmQuestion: { fontSize: 16, color: '#888780', marginBottom: 8 },
  choicesContainer: { width: '100%', gap: 12 },
  choiceBase: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1.5,
    borderBottomWidth: 4,
    alignItems: 'center',
  },
  choiceNeutral:  { backgroundColor: '#EEEDFE', borderColor: '#534AB7' },
  choiceCorrect:  { backgroundColor: '#EAF3DE', borderColor: '#3B6D11' },
  choiceWrong:    { backgroundColor: '#FCEBEB', borderColor: '#A32D2D' },
  choiceDimmed:   { backgroundColor: '#F1EFE8', borderColor: '#B4B2A9', opacity: 0.5 },
  choicePressed:  { borderBottomWidth: 2, transform: [{ translateY: 2 }] },
  choiceNeutralText:  { fontSize: 16, fontWeight: '500', color: '#3C3489' },
  choiceCorrectText:  { fontSize: 16, fontWeight: '500', color: '#27500A' },
  choiceWrongText:    { fontSize: 16, fontWeight: '500', color: '#791F1F' },
  choiceDimmedText:   { fontSize: 16, fontWeight: '500', color: '#888780' },
  continueBtn: {
    width: '100%',
    marginTop: 8,
    backgroundColor: '#2C2C2A',
    padding: 16,
    borderRadius: 12,
    borderBottomWidth: 4,
    borderColor: '#000',
    alignItems: 'center',
  },
  continueBtnText: { color: '#fff', fontSize: 16, fontWeight: '500' },
})
