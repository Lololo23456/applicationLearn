import AsyncStorage from '@react-native-async-storage/async-storage'
import { CardProgress, initialProgress, updateSM2, isDue } from './sm2'

const STORAGE_KEY = 'sm2_progress_v1'
const store = new Map<string, CardProgress>()

export async function initStore(): Promise<void> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY)
    if (raw) {
      const entries: CardProgress[] = JSON.parse(raw)
      entries.forEach(p => store.set(p.cardId, p))
    }
  } catch {
    // Si la lecture échoue on repart d'un store vide
  }
}

function persist(): void {
  const entries = Array.from(store.values())
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(entries)).catch(() => {})
}

export function getProgress(cardId: string): CardProgress {
  if (!store.has(cardId)) {
    store.set(cardId, initialProgress(cardId))
  }
  return store.get(cardId)!
}

export function recordAnswer(cardId: string, quality: number): CardProgress {
  const updated = updateSM2(getProgress(cardId), quality)
  store.set(cardId, updated)
  persist()
  return updated
}

export function getDueCardIds(cardIds: string[]): string[] {
  return cardIds.filter(id => isDue(getProgress(id)))
}

export function getAllProgress(): CardProgress[] {
  return Array.from(store.values())
}
