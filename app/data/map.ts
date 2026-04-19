import { Lessons, MARRAKECH_LESSONS, TUNIS_LESSONS, CAIRE_LESSONS } from './lessons'
import { VERBES, SALUTATIONS, NOMBRES, COULEURS } from './cards'

export type UnlockCondition = {
  cardIds: string[]
  minLearned: number
}

export type CityStop = {
  id: string
  type: 'city'
  name: string
  emoji: string
  position: { x: number; y: number }
  lessons: Lessons[]
  unlockCondition?: UnlockCondition
}

export type RevisionStop = {
  id: string
  type: 'revision'
  position: { x: number; y: number }
  visible: boolean
}

export type MapStop = CityStop | RevisionStop

const VERBES_IDS    = VERBES.map(c => c.arabic)
const TUNIS_IDS     = [...SALUTATIONS, ...NOMBRES, ...COULEURS].map(c => c.arabic)

export const MAP_STOPS: MapStop[] = [
  {
    id: 'marrakech', type: 'city', name: 'Marrakech', emoji: '🕌',
    position: { x: 200, y: 150 },
    lessons: MARRAKECH_LESSONS,
    // Marrakech est toujours débloqué
  },
  { id: 'revision-1', type: 'revision', position: { x: 140, y: 310 }, visible: false },
  {
    id: 'tunis', type: 'city', name: 'Tunis', emoji: '🏛️',
    position: { x: 260, y: 460 },
    lessons: TUNIS_LESSONS,
    unlockCondition: { cardIds: VERBES_IDS, minLearned: 5 },
  },
  { id: 'revision-2', type: 'revision', position: { x: 170, y: 610 }, visible: false },
  {
    id: 'caire', type: 'city', name: 'Le Caire', emoji: '🔺',
    position: { x: 240, y: 760 },
    lessons: CAIRE_LESSONS,
    unlockCondition: { cardIds: TUNIS_IDS, minLearned: 10 },
  },
]

export const MAP_CONNECTIONS: Array<[string, string]> = [
  ['marrakech', 'revision-1'],
  ['revision-1', 'tunis'],
  ['tunis', 'revision-2'],
  ['revision-2', 'caire'],
]
