import SessionScreen from '../components/SessionScreen'
import { buildSession } from '../data/exercices'
import { FAMILLE } from '../data/cards'

export default function FamilleLesson() {
  return <SessionScreen exercises={buildSession(FAMILLE)} title="La famille" />
}
