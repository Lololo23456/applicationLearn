import AsyncStorage from '@react-native-async-storage/async-storage'
import { CardProgress, initialProgress, updateSM2, isDue, isMastered } from './sm2'

const STORAGE_KEY = 'fusha_progress_v1'
const STREAK_KEY  = 'fusha_streak_v1'

const store = new Map<string, CardProgress>()

interface StreakData { streak: number; lastDate: string }
let streakCache: StreakData = { streak: 0, lastDate: '' }

export async function initStore(): Promise<void> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY)
    if (raw) {
      const entries: CardProgress[] = JSON.parse(raw)
      entries.forEach(p => store.set(p.cardId, p))
    }
    const streakRaw = await AsyncStorage.getItem(STREAK_KEY)
    if (streakRaw) streakCache = JSON.parse(streakRaw)
  } catch {}
}

function persist(): void {
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify([...store.values()])).catch(() => {})
}

export function getProgress(cardId: string): CardProgress {
  return store.get(cardId) ?? initialProgress(cardId)
}

export function recordAnswer(cardId: string, quality: number): CardProgress {
  const updated = updateSM2(getProgress(cardId), quality)
  store.set(cardId, updated)
  persist()
  return updated
}

export async function recordSessionComplete(): Promise<void> {
  const today = new Date().toISOString().slice(0, 10)
  if (streakCache.lastDate === today) return
  const yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10)
  streakCache = {
    streak: streakCache.lastDate === yesterday ? streakCache.streak + 1 : 1,
    lastDate: today,
  }
  await AsyncStorage.setItem(STREAK_KEY, JSON.stringify(streakCache)).catch(() => {})
}

export function getStreak(): number {
  const today     = new Date().toISOString().slice(0, 10)
  const yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10)
  if (streakCache.lastDate === today || streakCache.lastDate === yesterday) return streakCache.streak
  return 0
}

export function getDueCardIds(cardIds: string[]): string[] {
  return cardIds.filter(id => isDue(getProgress(id)))
}

export function getLearnedCount(cardIds: string[]): number {
  return cardIds.filter(id => getProgress(id).repetitions >= 1).length
}

export function getMasteredCount(cardIds: string[]): number {
  return cardIds.filter(id => isMastered(getProgress(id))).length
}

export function isCardDue(cardId: string): boolean {
  return isDue(getProgress(cardId))
}

export function getNextReviewTime(cardIds: string[]): number | null {
  const future = cardIds
    .map(id => getProgress(id))
    .filter(p => p.repetitions > 0 && p.nextReview > Date.now())
    .map(p => p.nextReview)
  return future.length ? Math.min(...future) : null
}

export function getStats(allIds: string[]) {
  const total   = allIds.length
  const learned = getLearnedCount(allIds)
  const mastered = getMasteredCount(allIds)
  const due     = getDueCardIds(allIds).length
  return { total, learned, mastered, due }
}
