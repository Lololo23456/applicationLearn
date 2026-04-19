// sm2.ts — algorithme SM-2 de répétition espacée

export type CardProgress = {
  cardId: string
  easiness: number     // facteur de facilité, défaut 2.5, min 1.3
  interval: number     // jours avant la prochaine révision
  repetitions: number  // nombre de bonnes réponses consécutives
  nextReview: number   // timestamp unix de la prochaine révision
}

export function initialProgress(cardId: string): CardProgress {
  return {
    cardId,
    easiness: 2.5,
    interval: 1,
    repetitions: 0,
    nextReview: Date.now(), // due immédiatement la première fois
  }
}

// Met à jour le progrès d'une carte selon SM-2
// quality : 0-5
//   0-2 → mauvaise réponse (remet à zéro)
//   3   → correct avec difficulté
//   4   → correct après hésitation
//   5   → réponse parfaite
export function updateSM2(progress: CardProgress, quality: number): CardProgress {
  const q = Math.max(0, Math.min(5, quality))
  let { easiness, interval, repetitions } = progress

  // Mise à jour du facteur de facilité
  easiness = Math.max(1.3, easiness + 0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))

  if (q < 3) {
    // Mauvaise réponse : on repart à zéro
    repetitions = 0
    interval = 1
  } else {
    // Bonne réponse : on espace davantage
    if (repetitions === 0) interval = 1
    else if (repetitions === 1) interval = 6
    else interval = Math.round(interval * easiness)
    repetitions++
  }

  return {
    cardId: progress.cardId,
    easiness,
    interval,
    repetitions,
    nextReview: Date.now() + interval * 24 * 60 * 60 * 1000,
  }
}

export function isDue(progress: CardProgress): boolean {
  // Une carte n'est due que si elle a déjà été étudiée au moins une fois
  // (repetitions = 0 = jamais vue → appartient aux leçons, pas aux révisions)
  return progress.repetitions > 0 && Date.now() >= progress.nextReview
}

// Jours restants avant la prochaine révision (0 si due)
export function daysUntilReview(progress: CardProgress): number {
  const ms = progress.nextReview - Date.now()
  return Math.max(0, Math.ceil(ms / (24 * 60 * 60 * 1000)))
}
