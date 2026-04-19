// exercices.ts — types et builders de sessions d'apprentissage

import { Card } from './cards'
import { LetterCard, ARABIC_ALPHABET } from './alphabet'

// Union discriminée : 4 types d'exercices possibles
export type VocabExercise    = { type: 'flashcard'          | 'qcm';          card: Card }
export type AlphabetExercise = { type: 'alphabet-flashcard' | 'alphabet-qcm'; card: LetterCard }
export type Exercise = VocabExercise | AlphabetExercise

export function isVocabExercise(e: Exercise): e is VocabExercise {
  return e.type === 'flashcard' || e.type === 'qcm'
}

// Fisher-Yates
export function shuffle<T>(array: T[]): T[] {
  const result = [...array]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

// Session vocabulaire : 2 flashcards puis 1 QCM
export function buildSession(cards: Card[]): Exercise[] {
  return cards.map((card, index): Exercise =>
    index % 3 === 2
      ? { type: 'qcm',       card }
      : { type: 'flashcard', card }
  )
}

// Session alphabet : 2 flashcards-lettre puis 1 QCM-lettre
export function buildAlphabetSession(letters: LetterCard[]): Exercise[] {
  return shuffle([...letters]).map((card, index): Exercise =>
    index % 3 === 2
      ? { type: 'alphabet-qcm',       card }
      : { type: 'alphabet-flashcard', card }
  )
}

// QCM vocabulaire : question = mot arabe, choix = traductions françaises
export function buildQCM(cards: Card[], targetCard: Card) {
  const wrongAnswers = shuffle(cards.filter(c => c.arabic !== targetCard.arabic))
    .slice(0, 3)
    .map(c => c.french)
  return {
    question: targetCard.arabic,
    correct:  targetCard.french,
    choices:  shuffle([...wrongAnswers, targetCard.french]),
  }
}

// QCM alphabet : question = lettre, choix = sons
export function buildAlphabetQCM(targetCard: LetterCard) {
  const wrongAnswers = shuffle(ARABIC_ALPHABET.filter(c => c.letter !== targetCard.letter))
    .slice(0, 3)
    .map(c => c.sound)
  return {
    question: targetCard.letter,
    correct:  targetCard.sound,
    choices:  shuffle([...wrongAnswers, targetCard.sound]),
  }
}
