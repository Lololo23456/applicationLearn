import SessionScreen from '../components/SessionScreen'
import { buildSession } from '../data/exercices'
import { PHRASES } from '../data/cards'

export default function PhrasesLesson() {
  return <SessionScreen exercises={buildSession(PHRASES)} title="Phrases utiles" />
}
