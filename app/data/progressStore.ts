// progressStore.ts — store en mémoire pour le progrès SM-2
// À remplacer par AsyncStorage quand on fera la persistance du profil

import { CardProgress, initialProgress, updateSM2, isDue } from './sm2'

// Map en mémoire : cardId (mot arabe) → CardProgress
const store = new Map<string, CardProgress>()

export function getProgress(cardId: string): CardProgress {
  if (!store.has(cardId)) {
    store.set(cardId, initialProgress(cardId))
  }
  return store.get(cardId)!
}

// Enregistre une réponse et met à jour SM-2
export function recordAnswer(cardId: string, quality: number): CardProgress {
  const updated = updateSM2(getProgress(cardId), quality)
  store.set(cardId, updated)
  return updated
}

// Retourne les IDs des cartes dues parmi une liste
export function getDueCardIds(cardIds: string[]): string[] {
  return cardIds.filter(id => isDue(getProgress(id)))
}

// Retourne toutes les progressions enregistrées
export function getAllProgress(): CardProgress[] {
  return Array.from(store.values())
}
