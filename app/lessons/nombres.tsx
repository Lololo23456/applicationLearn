import SessionScreen from '../components/SessionScreen'
import { buildSession } from '../data/exercices'
import { NOMBRES } from '../data/cards'

export default function NombresLesson() {
  return <SessionScreen exercises={buildSession(NOMBRES)} title="Nombres" />
}
