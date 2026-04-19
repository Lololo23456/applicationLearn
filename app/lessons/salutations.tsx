import SessionScreen from '../components/SessionScreen'
import { buildSession } from '../data/exercices'
import { SALUTATIONS } from '../data/cards'

export default function SalutationsLesson() {
  return <SessionScreen exercises={buildSession(SALUTATIONS)} title="Salutations" />
}
