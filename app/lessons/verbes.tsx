// verbes.tsx — leçon vocabulaire verbes
import SessionScreen from '../components/SessionScreen'
import { buildSession } from '../data/exercices'
import { VERBES } from '../data/cards'

export default function VerbsLesson() {
  return <SessionScreen exercises={buildSession(VERBES)} title="Verbes" />
}
