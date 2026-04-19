import { Card, VERBES, SALUTATIONS, NOMBRES, COULEURS, FAMILLE, PHRASES } from './cards'
import { ARABIC_ALPHABET } from './alphabet'

export interface Lessons {
    id: number
    title: string
    subtitle: string
    status: 'completed' | 'available' | 'locked'
    cards: Card[]
    route: string
}

// ── Marrakech ─────────────────────────────────────────────────
export const lesson1: Lessons = {
    id: 1, title: 'Verbes', subtitle: `${VERBES.length} cartes`,
    status: 'available', cards: VERBES, route: '/lessons/verbes',
}
export const lesson2: Lessons = {
    id: 2, title: 'Alphabet', subtitle: `${ARABIC_ALPHABET.length} lettres`,
    status: 'available', cards: [], route: '/lessons/alphabet',
}

// ── Tunis ─────────────────────────────────────────────────────
export const lesson3: Lessons = {
    id: 3, title: 'Salutations', subtitle: `${SALUTATIONS.length} phrases`,
    status: 'available', cards: SALUTATIONS, route: '/lessons/salutations',
}
export const lesson4: Lessons = {
    id: 4, title: 'Nombres', subtitle: `${NOMBRES.length} cartes`,
    status: 'available', cards: NOMBRES, route: '/lessons/nombres',
}
export const lesson5: Lessons = {
    id: 5, title: 'Couleurs', subtitle: `${COULEURS.length} cartes`,
    status: 'available', cards: COULEURS, route: '/lessons/couleurs',
}

// ── Le Caire ──────────────────────────────────────────────────
export const lesson6: Lessons = {
    id: 6, title: 'La famille', subtitle: `${FAMILLE.length} cartes`,
    status: 'available', cards: FAMILLE, route: '/lessons/famille',
}
export const lesson7: Lessons = {
    id: 7, title: 'Phrases utiles', subtitle: `${PHRASES.length} phrases`,
    status: 'available', cards: PHRASES, route: '/lessons/phrases',
}

export const MARRAKECH_LESSONS: Lessons[] = [lesson2, lesson1]
export const TUNIS_LESSONS: Lessons[]     = [lesson3, lesson4, lesson5]
export const CAIRE_LESSONS: Lessons[]     = [lesson6, lesson7]

// Toutes les leçons vocab (pour les stats globales)
export const ALL_LESSONS: Lessons[] = [
    ...MARRAKECH_LESSONS, ...TUNIS_LESSONS, ...CAIRE_LESSONS,
]
