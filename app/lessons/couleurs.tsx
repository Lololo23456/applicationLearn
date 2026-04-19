import SessionScreen from '../components/SessionScreen'
import { buildSession } from '../data/exercices'
import { COULEURS } from '../data/cards'

export default function CouleursLesson() {
  return <SessionScreen exercises={buildSession(COULEURS)} title="Couleurs" />
}
