// lessons.ts — définition des leçons disponibles dans l'app

import { Card, VERBES } from '../data/cards';
import { ARABIC_ALPHABET } from '../data/alphabet';

export interface Lessons {
    id: number
    title: string
    subtitle: string                                // ex: "7 cartes" ou "10 lettres"
    status: 'completed' | 'available' | 'locked'
    cards: Card[]
    route: string
}

export const lesson1: Lessons = {
    id: 1,
    title: 'Verbes',
    subtitle: `${VERBES.length} cartes`,
    status: 'available',
    cards: VERBES,
    route: '/lessons/verbes',
}

export const lesson2: Lessons = {
    id: 2,
    title: 'Alphabet',
    subtitle: `${ARABIC_ALPHABET.length} lettres`,
    status: 'available',
    cards: [],   // l'alphabet a ses propres données dans alphabet.ts
    route: '/lessons/alphabet',
}

export const ALL_LESSONS: Lessons[] = [lesson2, lesson1];
