export interface CardProgress {
  cardId: string
  easiness: number    // EF, démarre à 2.5, min 1.3
  interval: number    // jours jusqu'à la prochaine révision
  repetitions: number // réponses correctes consécutives
  nextReview: number  // timestamp ms
  lastReview: number  // timestamp ms (0 = jamais)
}

export function initialProgress(cardId: string): CardProgress {
  return { cardId, easiness: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: 0 }
}

// quality : 0-5 | 5=parfait, 4=correct, 3=correct avec effort, <3=incorrect
export function updateSM2(prev: CardProgress, quality: number): CardProgress {
  const q = Math.max(0, Math.min(5, Math.round(quality)))
  let { easiness, interval, repetitions } = prev

  if (q >= 3) {
    if (repetitions === 0)      interval = 1
    else if (repetitions === 1) interval = 6
    else                        interval = Math.round(interval * easiness)
    repetitions += 1
  } else {
    repetitions = 0
    interval = 1
  }

  easiness = Math.max(1.3, easiness + 0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))

  return {
    cardId: prev.cardId,
    easiness,
    interval,
    repetitions,
    nextReview: Date.now() + interval * 24 * 60 * 60 * 1000,
    lastReview: Date.now(),
  }
}

export function isDue(p: CardProgress): boolean {
  return p.repetitions > 0 && Date.now() >= p.nextReview
}

export function isNew(p: CardProgress): boolean {
  return p.repetitions === 0
}

export function isMastered(p: CardProgress): boolean {
  return p.repetitions >= 5 && p.easiness >= 2.0
}

export function daysUntilReview(p: CardProgress): number {
  return Math.max(0, Math.ceil((p.nextReview - Date.now()) / (24 * 60 * 60 * 1000)))
}
