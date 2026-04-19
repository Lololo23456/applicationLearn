import { Card, VERBES, SALUTATIONS, NOMBRES, COULEURS, FAMILLE, PHRASES } from './cards'
import { ARABIC_ALPHABET } from './alphabet'
import { getLearnedCount } from './progressStore'

export interface LessonUnlockCondition {
  cardIds: string[]
  minLearned: number
  label: string        // ex: "20/28 lettres apprises"
}

export interface Lessons {
    id: number
    title: string
    subtitle: string
    status: 'completed' | 'available' | 'locked'
    cards: Card[]
    route: string
    unlockCondition?: LessonUnlockCondition
}

export function isLessonUnlocked(lesson: Lessons): boolean {
  if (!lesson.unlockCondition) return true
  return getLearnedCount(lesson.unlockCondition.cardIds) >= lesson.unlockCondition.minLearned
}

export function getLessonProgress(lesson: Lessons): { current: number; required: number } | null {
  if (!lesson.unlockCondition) return null
  return {
    current: getLearnedCount(lesson.unlockCondition.cardIds),
    required: lesson.unlockCondition.minLearned,
  }
}

// IDs pour les conditions de déverrouillage
const ALPHABET_IDS    = ARABIC_ALPHABET.map(c => c.letter)
const SALUTATIONS_IDS = SALUTATIONS.map(c => c.arabic)
const NOMBRES_IDS     = NOMBRES.map(c => c.arabic)
const FAMILLE_IDS     = FAMILLE.map(c => c.arabic)

// ── Marrakech ─────────────────────────────────────────────────
export const lesson2: Lessons = {
    id: 2, title: 'Alphabet', subtitle: `${ARABIC_ALPHABET.length} lettres`,
    status: 'available', cards: [], route: '/lessons/alphabet',
}
export const lesson1: Lessons = {
    id: 1, title: 'Verbes', subtitle: `${VERBES.length} cartes`,
    status: 'available', cards: VERBES, route: '/lessons/verbes',
    unlockCondition: { cardIds: ALPHABET_IDS, minLearned: 20, label: '20/28 lettres apprises' },
}

// ── Tunis ─────────────────────────────────────────────────────
export const lesson3: Lessons = {
    id: 3, title: 'Salutations', subtitle: `${SALUTATIONS.length} phrases`,
    status: 'available', cards: SALUTATIONS, route: '/lessons/salutations',
}
export const lesson4: Lessons = {
    id: 4, title: 'Nombres', subtitle: `${NOMBRES.length} cartes`,
    status: 'available', cards: NOMBRES, route: '/lessons/nombres',
    unlockCondition: { cardIds: SALUTATIONS_IDS, minLearned: 5, label: '5/8 salutations apprises' },
}
export const lesson5: Lessons = {
    id: 5, title: 'Couleurs', subtitle: `${COULEURS.length} cartes`,
    status: 'available', cards: COULEURS, route: '/lessons/couleurs',
    unlockCondition: { cardIds: NOMBRES_IDS, minLearned: 5, label: '5/10 nombres appris' },
}

// ── Le Caire ──────────────────────────────────────────────────
export const lesson6: Lessons = {
    id: 6, title: 'La famille', subtitle: `${FAMILLE.length} cartes`,
    status: 'available', cards: FAMILLE, route: '/lessons/famille',
}
export const lesson7: Lessons = {
    id: 7, title: 'Phrases utiles', subtitle: `${PHRASES.length} phrases`,
    status: 'available', cards: PHRASES, route: '/lessons/phrases',
    unlockCondition: { cardIds: FAMILLE_IDS, minLearned: 5, label: '5/8 famille apprise' },
}

export const MARRAKECH_LESSONS: Lessons[] = [lesson2, lesson1]
export const TUNIS_LESSONS: Lessons[]     = [lesson3, lesson4, lesson5]
export const CAIRE_LESSONS: Lessons[]     = [lesson6, lesson7]

export const ALL_LESSONS: Lessons[] = [
    ...MARRAKECH_LESSONS, ...TUNIS_LESSONS, ...CAIRE_LESSONS,
]
