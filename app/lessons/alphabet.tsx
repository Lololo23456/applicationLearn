// alphabet.tsx — leçon alphabet arabe
import SessionScreen from '../components/SessionScreen'
import { buildAlphabetSession } from '../data/exercices'
import { ARABIC_ALPHABET } from '../data/alphabet'

export default function AlphabetLesson() {
  return <SessionScreen exercises={buildAlphabetSession(ARABIC_ALPHABET)} title="Alphabet" />
}
