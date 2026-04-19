import { ALPHABET, ALPHABET_LESSONS, ALPHABET_MAP, AlphabetCard } from './content/alphabet'
import { VOCABULARY, VOCAB_LESSONS, VOCAB_MAP, VocabCard } from './content/vocabulary'
import { CONJUGATION, CONJ_LESSONS, CONJ_MAP, ConjugationCard } from './content/conjugation'
import { PHRASES, PHRASE_LESSONS, PHRASE_MAP, PhraseCard } from './content/phrases'
import { shuffle } from './utils'

export type CardType = 'alphabet' | 'vocab' | 'conjugation' | 'phrase'
export type AnyCard = AlphabetCard | VocabCard | ConjugationCard | PhraseCard

export interface Lesson {
  id: string
  moduleId: CardType
  title: string
  subtitle: string
  cardIds: string[]
}

export interface Module {
  id: CardType
  title: string
  icon: string
  color: string
  description: string
  lessons: Lesson[]
  allCardIds: string[]
}

export const MODULES: Module[] = [
  {
    id: 'alphabet',
    title: 'Alphabet',
    icon: 'ا',
    color: '#1B4F72',
    description: "Les 28 lettres de l'alphabet arabe avec leurs formes et prononciations",
    lessons: ALPHABET_LESSONS.map(l => ({ id: l.lessonId, moduleId: 'alphabet' as CardType, title: l.title, subtitle: '4 lettres', cardIds: l.cardIds })),
    allCardIds: ALPHABET.map(c => c.id),
  },
  {
    id: 'vocab',
    title: 'Vocabulaire',
    icon: '📖',
    color: '#0E6655',
    description: '100 mots de vocabulaire classique avec exemples et contexte',
    lessons: VOCAB_LESSONS.map(l => ({ id: l.lessonId, moduleId: 'vocab' as CardType, title: l.title, subtitle: l.subtitle, cardIds: l.cardIds })),
    allCardIds: VOCABULARY.map(c => c.id),
  },
  {
    id: 'conjugation',
    title: 'Conjugaison',
    icon: '⚙️',
    color: '#6C3483',
    description: '20 verbes courants avec leur racine trilittère et leurs formes',
    lessons: CONJ_LESSONS.map(l => ({ id: l.lessonId, moduleId: 'conjugation' as CardType, title: l.title, subtitle: l.subtitle, cardIds: l.cardIds })),
    allCardIds: CONJUGATION.map(c => c.id),
  },
  {
    id: 'phrase',
    title: 'Phrases',
    icon: '💬',
    color: '#B7411A',
    description: '30 expressions courantes en arabe classique avec analyse grammaticale',
    lessons: PHRASE_LESSONS.map(l => ({ id: l.lessonId, moduleId: 'phrase' as CardType, title: l.title, subtitle: l.subtitle, cardIds: l.cardIds })),
    allCardIds: PHRASES.map(c => c.id),
  },
]

export const ALL_CARD_IDS = MODULES.flatMap(m => m.allCardIds)

export function getCardType(cardId: string): CardType {
  if (cardId.startsWith('alph-'))   return 'alphabet'
  if (cardId.startsWith('vocab-'))  return 'vocab'
  if (cardId.startsWith('conj-'))   return 'conjugation'
  return 'phrase'
}

export function getCard(cardId: string): AnyCard | undefined {
  const type = getCardType(cardId)
  if (type === 'alphabet')    return ALPHABET_MAP.get(cardId)
  if (type === 'vocab')       return VOCAB_MAP.get(cardId)
  if (type === 'conjugation') return CONJ_MAP.get(cardId)
  return PHRASE_MAP.get(cardId)
}

export function getLessonById(lessonId: string): Lesson | undefined {
  return MODULES.flatMap(m => m.lessons).find(l => l.id === lessonId)
}

export function getModuleByLessonId(lessonId: string): Module | undefined {
  return MODULES.find(m => m.lessons.some(l => l.id === lessonId))
}

// ── Génération d'exercices ────────────────────────────────────────────────────

export interface Exercise {
  cardId: string
  type: 'qcm' | 'writing'
  question: string
  questionSub?: string       // translittération ou note
  correct: string
  choices?: string[]         // pour QCM uniquement
  hint?: string
}

function buildAlphabetExercises(card: AlphabetCard, allCards: AlphabetCard[]): Exercise[] {
  const others = shuffle(allCards.filter(c => c.id !== card.id))
  // Exercice 1 : lettre → nom
  const ex1: Exercise = {
    cardId: card.id,
    type: 'qcm',
    question: card.letter,
    questionSub: 'Quel est le nom de cette lettre ?',
    correct: card.name,
    choices: shuffle([card.name, ...others.slice(0, 3).map(c => c.name)]),
  }
  // Exercice 2 : nom → translittération
  const ex2: Exercise = {
    cardId: card.id,
    type: 'qcm',
    question: `${card.name} (${card.letter})`,
    questionSub: 'Quelle est la translittération ?',
    correct: card.transliteration,
    choices: shuffle([card.transliteration, ...others.slice(0, 3).map(c => c.transliteration)]),
  }
  return [ex1, ex2]
}

function buildVocabExercises(card: VocabCard, allCards: VocabCard[]): Exercise[] {
  const others = shuffle(allCards.filter(c => c.id !== card.id))
  // Exercice 1 : arabe → français QCM
  const ex1: Exercise = {
    cardId: card.id,
    type: 'qcm',
    question: card.arabic,
    questionSub: card.transliteration,
    correct: card.french,
    choices: shuffle([card.french, ...others.slice(0, 3).map(c => c.french)]),
  }
  // Exercice 2 : français → français (écriture de la traduction)
  const ex2: Exercise = {
    cardId: card.id,
    type: 'writing',
    question: card.arabic,
    questionSub: `${card.transliteration} — Traduire en français`,
    correct: card.french,
    hint: card.exampleFrench,
  }
  return [ex1, ex2]
}

function buildConjExercises(card: ConjugationCard, allCards: ConjugationCard[]): Exercise[] {
  const others = shuffle(allCards.filter(c => c.id !== card.id))
  // Exercice 1 : passé → sens
  const ex1: Exercise = {
    cardId: card.id,
    type: 'qcm',
    question: card.past3ms,
    questionSub: `(${card.past3msTranslit}) — Que signifie ce verbe ?`,
    correct: card.rootMeaning,
    choices: shuffle([card.rootMeaning, ...others.slice(0, 3).map(c => c.rootMeaning)]),
  }
  // Exercice 2 : sens → présent QCM
  const ex2: Exercise = {
    cardId: card.id,
    type: 'qcm',
    question: `Quel est le présent de "${card.rootMeaning}" ?`,
    questionSub: `Racine : ${card.root}`,
    correct: `${card.present3ms} (${card.present3msTranslit})`,
    choices: shuffle([
      `${card.present3ms} (${card.present3msTranslit})`,
      ...others.slice(0, 3).map(c => `${c.present3ms} (${c.present3msTranslit})`),
    ]),
  }
  return [ex1, ex2]
}

function buildPhraseExercises(card: PhraseCard, allCards: PhraseCard[]): Exercise[] {
  const others = shuffle(allCards.filter(c => c.id !== card.id))
  // Exercice 1 : arabe → français
  const ex1: Exercise = {
    cardId: card.id,
    type: 'qcm',
    question: card.arabic,
    questionSub: card.transliteration,
    correct: card.french,
    choices: shuffle([card.french, ...others.slice(0, 3).map(c => c.french)]),
  }
  // Exercice 2 : français → arabe (QCM)
  const ex2: Exercise = {
    cardId: card.id,
    type: 'qcm',
    question: `Comment dit-on :\n"${card.french}"`,
    correct: card.arabic,
    choices: shuffle([card.arabic, ...others.slice(0, 3).map(c => c.arabic)]),
  }
  return [ex1, ex2]
}

export function generateExercisesForLesson(lesson: Lesson): Exercise[] {
  const type = lesson.moduleId
  if (type === 'alphabet') {
    const cards = lesson.cardIds.map(id => ALPHABET_MAP.get(id)!).filter(Boolean)
    return cards.flatMap(c => buildAlphabetExercises(c, ALPHABET))
  }
  if (type === 'vocab') {
    const cards = lesson.cardIds.map(id => VOCAB_MAP.get(id)!).filter(Boolean)
    return cards.flatMap(c => buildVocabExercises(c, VOCABULARY))
  }
  if (type === 'conjugation') {
    const cards = lesson.cardIds.map(id => CONJ_MAP.get(id)!).filter(Boolean)
    return cards.flatMap(c => buildConjExercises(c, CONJUGATION))
  }
  // phrase
  const cards = lesson.cardIds.map(id => PHRASE_MAP.get(id)!).filter(Boolean)
  return cards.flatMap(c => buildPhraseExercises(c, PHRASES))
}

export function generateExerciseForCard(cardId: string): Exercise | null {
  const type = getCardType(cardId)
  if (type === 'alphabet') {
    const card = ALPHABET_MAP.get(cardId)
    if (!card) return null
    const others = shuffle(ALPHABET.filter(c => c.id !== cardId))
    return {
      cardId,
      type: 'qcm',
      question: card.letter,
      questionSub: 'Quel est le nom de cette lettre ?',
      correct: card.name,
      choices: shuffle([card.name, ...others.slice(0, 3).map(c => c.name)]),
    }
  }
  if (type === 'vocab') {
    const card = VOCAB_MAP.get(cardId)
    if (!card) return null
    const others = shuffle(VOCABULARY.filter(c => c.id !== cardId))
    return {
      cardId,
      type: 'qcm',
      question: card.arabic,
      questionSub: card.transliteration,
      correct: card.french,
      choices: shuffle([card.french, ...others.slice(0, 3).map(c => c.french)]),
    }
  }
  if (type === 'conjugation') {
    const card = CONJ_MAP.get(cardId)
    if (!card) return null
    const others = shuffle(CONJUGATION.filter(c => c.id !== cardId))
    return {
      cardId,
      type: 'qcm',
      question: card.past3ms,
      questionSub: `(${card.past3msTranslit}) — Que signifie ce verbe ?`,
      correct: card.rootMeaning,
      choices: shuffle([card.rootMeaning, ...others.slice(0, 3).map(c => c.rootMeaning)]),
    }
  }
  const card = PHRASE_MAP.get(cardId)
  if (!card) return null
  const others = shuffle(PHRASES.filter(c => c.id !== cardId))
  return {
    cardId,
    type: 'qcm',
    question: card.arabic,
    questionSub: card.transliteration,
    correct: card.french,
    choices: shuffle([card.french, ...others.slice(0, 3).map(c => c.french)]),
  }
}
