import { Card } from './cards'
import { LetterCard, ARABIC_ALPHABET } from './alphabet'
import { getProgress, isCardDue } from './progressStore'

// Union discriminée : 4 types d'exercices + flag remédiation
export type VocabExercise    = { type: 'flashcard'          | 'qcm';          card: Card;       isRemedy?: boolean }
export type AlphabetExercise = { type: 'alphabet-flashcard' | 'alphabet-qcm'; card: LetterCard; isRemedy?: boolean }
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

// Session vocabulaire par leçon : 2 flashcards puis 1 QCM
export function buildSession(cards: Card[]): Exercise[] {
  return cards.map((card, index): Exercise =>
    index % 3 === 2
      ? { type: 'qcm',       card }
      : { type: 'flashcard', card }
  )
}

// Session alphabet par leçon : 2 flashcards-lettre puis 1 QCM-lettre
export function buildAlphabetSession(letters: LetterCard[]): Exercise[] {
  return shuffle([...letters]).map((card, index): Exercise =>
    index % 3 === 2
      ? { type: 'alphabet-qcm',       card }
      : { type: 'alphabet-flashcard', card }
  )
}

// QCM vocabulaire : question = mot arabe, choix = traductions françaises
export function buildQCM(cards: Card[], targetCard: Card) {
  const pool = cards.length >= 4 ? cards : [...cards, ...ARABIC_ALPHABET.slice(0, 4).map(l => ({ arabic: l.letter, french: l.name }))]
  const wrongAnswers = shuffle(pool.filter(c => c.arabic !== targetCard.arabic))
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

// ── Session intelligente ──────────────────────────────────────────────────────
// Règle : chaque carte est d'abord vue en flashcard, puis testée en QCM.
// Nouvelles cartes → leçon active uniquement.
// Révisions dues   → toutes les leçons apprises.
// La session ne se termine que quand tous les QCMs sont réussis (géré dans SmartSessionScreen).

const MAX_NEW_ITEMS    = 4   // nouvelles cartes max par session
const MAX_REVIEW_ITEMS = 4   // révisions max par session

export function buildSmartSession(
  activeNewVocab:   Card[],
  activeNewLetters: LetterCard[],
  dueVocab:        Card[],
  dueLetters:      LetterCard[],
): Exercise[] {
  // Sélectionner les items
  const pickedNewVocab   = activeNewVocab.slice(0, MAX_NEW_ITEMS)
  const pickedNewLetters = activeNewLetters.slice(0, MAX_NEW_ITEMS - pickedNewVocab.length)
  const pickedDueVocab   = shuffle([...dueVocab]).slice(0, MAX_REVIEW_ITEMS)
  const pickedDueLetters = shuffle([...dueLetters]).slice(0, MAX_REVIEW_ITEMS - pickedDueVocab.length)

  const allVocab   = [...pickedNewVocab,   ...pickedDueVocab]
  const allLetters = [...pickedNewLetters, ...pickedDueLetters]

  // Phase 1 : flashcard pour TOUS les items (intro ou rappel)
  const flashcards: Exercise[] = [
    ...allVocab.map(card   => ({ type: 'flashcard'          as const, card })),
    ...allLetters.map(card => ({ type: 'alphabet-flashcard' as const, card })),
  ]

  // Phase 2 : QCM pour TOUS les items (test)
  const qcms: Exercise[] = [
    ...allVocab.map(card   => ({ type: 'qcm'          as const, card })),
    ...allLetters.map(card => ({ type: 'alphabet-qcm' as const, card })),
  ]

  return [...flashcards, ...qcms]
}
