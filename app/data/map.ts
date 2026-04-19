// map.ts — données de la carte isométrique

import { Lessons, ALL_LESSONS } from './lessons';

export type CityStop = {
  id: string;
  type: 'city';
  name: string;
  emoji: string;
  position: { x: number; y: number };
  lessons: Lessons[];
  unlocked: boolean;
};

export type RevisionStop = {
  id: string;
  type: 'revision';
  position: { x: number; y: number };
  visible: boolean;
};

export type MapStop = CityStop | RevisionStop;

export const MAP_STOPS: MapStop[] = [
  {
    id: 'marrakech',
    type: 'city',
    name: 'Marrakech',
    emoji: '🕌',
    position: { x: 200, y: 150 },
    lessons: ALL_LESSONS,
    unlocked: true,
  },
  {
    id: 'revision-1',
    type: 'revision',
    position: { x: 140, y: 310 },
    visible: false,
  },
  {
    id: 'tunis',
    type: 'city',
    name: 'Tunis',
    emoji: '🏛️',
    position: { x: 260, y: 460 },
    lessons: [],
    unlocked: false,
  },
  {
    id: 'revision-2',
    type: 'revision',
    position: { x: 170, y: 610 },
    visible: false,
  },
  {
    id: 'caire',
    type: 'city',
    name: 'Le Caire',
    emoji: '🔺',
    position: { x: 240, y: 760 },
    lessons: [],
    unlocked: false,
  },
];

export const MAP_CONNECTIONS: Array<[string, string]> = [
  ['marrakech', 'revision-1'],
  ['revision-1', 'tunis'],
  ['tunis', 'revision-2'],
  ['revision-2', 'caire'],
];
