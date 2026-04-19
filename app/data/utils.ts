export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Distance de Levenshtein pour tolérer les petites fautes de frappe
export function levenshtein(a: string, b: string): number {
  const m = a.length, n = b.length
  const dp: number[][] = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  )
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = a[i-1] === b[j-1] ? dp[i-1][j-1] : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
  return dp[m][n]
}

export function normalizeAnswer(s: string): string {
  return s.trim().toLowerCase()
    .replace(/[àâä]/g, 'a')
    .replace(/[éèêë]/g, 'e')
    .replace(/[îï]/g, 'i')
    .replace(/[ôö]/g, 'o')
    .replace(/[ûüù]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
}

// quality 5=parfait, 4=proche, 3=partiel, 1=faux
export function gradeWritingAnswer(userAnswer: string, correct: string): number {
  const a = normalizeAnswer(userAnswer)
  const b = normalizeAnswer(correct)
  if (a === b) return 5
  const dist = levenshtein(a, b)
  const ratio = dist / Math.max(a.length, b.length, 1)
  if (ratio <= 0.15) return 4  // 1-2 caractères d'écart
  if (ratio <= 0.30) return 3  // erreur partielle
  return 1                      // faux
}
