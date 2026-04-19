import { useState, useCallback } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { getStats } from '../data/progressStore'
import { ALL_LESSONS } from '../data/lessons'
import { ARABIC_ALPHABET } from '../data/alphabet'

const LEVELS = [
  { min: 0,  max: 0,  label: 'Curieux',  emoji: '🌱' },
  { min: 1,  max: 4,  label: 'Débutant', emoji: '📖' },
  { min: 5,  max: 10, label: 'Apprenti', emoji: '🎓' },
  { min: 11, max: 18, label: 'Savant',   emoji: '⭐' },
  { min: 19, max: 99, label: 'Maître',   emoji: '🏆' },
]

function getLevel(mastered: number) {
  return LEVELS.find(l => mastered >= l.min && mastered <= l.max) ?? LEVELS[0]
}

export default function ProfilScreen() {
  const [stats, setStats] = useState({ learned: 0, mastered: 0, dueToday: 0, total: 22 })

  useFocusEffect(
    useCallback(() => {
      const vocabIds = ALL_LESSONS.flatMap(l => l.cards.map(c => c.arabic))
      const letterIds = ARABIC_ALPHABET.map(c => c.letter)
      setStats(getStats([...vocabIds, ...letterIds]))
    }, [])
  )

  const level = getLevel(stats.mastered)
  const progressPct = stats.total > 0 ? stats.learned / stats.total : 0

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.avatarCircle}>
        <Text style={styles.avatarEmoji}>{level.emoji}</Text>
      </View>
      <Text style={styles.levelLabel}>{level.label}</Text>

      <View style={styles.progressBarBg}>
        <View style={[styles.progressBarFill, { width: `${Math.round(progressPct * 100)}%` }]} />
      </View>
      <Text style={styles.progressText}>
        {stats.learned} / {stats.total} cartes apprises
      </Text>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{stats.mastered}</Text>
          <Text style={styles.statLabel}>Maîtrisées</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{stats.learned}</Text>
          <Text style={styles.statLabel}>Apprises</Text>
        </View>
        <View style={[styles.statCard, stats.dueToday > 0 && styles.statCardDue]}>
          <Text style={[styles.statValue, stats.dueToday > 0 && styles.statValueDue]}>
            {stats.dueToday}
          </Text>
          <Text style={styles.statLabel}>À réviser</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F5F4EF' },
  content: { alignItems: 'center', paddingTop: 60, paddingBottom: 40, paddingHorizontal: 24 },
  avatarCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#634FCA',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: '#634FCA',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  avatarEmoji: { fontSize: 56 },
  levelLabel: { fontSize: 22, fontWeight: '700', color: '#2C2C2A', marginBottom: 24 },
  progressBarBg: {
    width: '100%',
    height: 10,
    backgroundColor: '#E0DDD5',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressBarFill: { height: '100%', backgroundColor: '#534AB7', borderRadius: 5 },
  progressText: { fontSize: 13, color: '#888780', marginBottom: 32 },
  statsRow: { flexDirection: 'row', gap: 12, width: '100%' },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  statCardDue: { backgroundColor: '#FFF3CD' },
  statValue: { fontSize: 28, fontWeight: '700', color: '#2C2C2A' },
  statValueDue: { color: '#D97706' },
  statLabel: { fontSize: 12, color: '#888780', marginTop: 4 },
})
