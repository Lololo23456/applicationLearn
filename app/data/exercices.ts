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
// Phase 1 : flashcards intro pour les nouvelles cartes
// Phase 2 : QCMs pour les révisions dues
// Phase 3 : QCMs test pour les nouvelles cartes (rappel espacé)

const MAX_NEW     = 5
const MAX_REVIEWS = 10
const MAX_TOTAL   = 15

// Session intelligente structurée :
// - nouvelles cartes → uniquement de la leçon active (première débloquée avec du nouveau)
// - révisions dues   → de TOUTES les leçons apprises
export function buildSmartSession(
  activeNewVocab:   Card[],       // nouvelles cartes de la leçon active uniquement
  activeNewLetters: LetterCard[], // nouvelles lettres de la leçon active uniquement
  dueVocab:        Card[],       // toutes révisions dues (vocab)
  dueLetters:      LetterCard[], // toutes révisions dues (alphabet)
): Exercise[] {
  const pickedNewVocab   = activeNewVocab.slice(0, MAX_NEW)
  const remainingNew     = MAX_NEW - pickedNewVocab.length
  const pickedNewLetters = activeNewLetters.slice(0, remainingNew)

  const pickedDueVocab   = shuffle([...dueVocab]).slice(0, MAX_REVIEWS)
  const remainingDue     = MAX_REVIEWS - pickedDueVocab.length
  const pickedDueLetters = shuffle([...dueLetters]).slice(0, remainingDue)

  const exercises: Exercise[] = []

  // Phase 1 : introduction flashcards (leçon active)
  pickedNewVocab.forEach(card   => exercises.push({ type: 'flashcard',          card }))
  pickedNewLetters.forEach(card => exercises.push({ type: 'alphabet-flashcard', card }))

  // Phase 2 : révisions QCM (toutes leçons)
  pickedDueVocab.forEach(card   => exercises.push({ type: 'qcm',          card }))
  pickedDueLetters.forEach(card => exercises.push({ type: 'alphabet-qcm', card }))

  // Phase 3 : test QCM nouvelles cartes (rappel espacé)
  pickedNewVocab.forEach(card   => exercises.push({ type: 'qcm',          card }))
  pickedNewLetters.forEach(card => exercises.push({ type: 'alphabet-qcm', card }))

  return exercises.slice(0, MAX_TOTAL)
}
