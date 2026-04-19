import { useCallback, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { getStats, getStreak } from '../data/progressStore'
import { MODULES, ALL_CARD_IDS } from '../data/modules'

export default function StatsScreen() {
  const [global, setGlobal]   = useState({ total: 0, learned: 0, mastered: 0, due: 0 })
  const [streak, setStreak]   = useState(0)
  const [modStats, setModStats] = useState<{ id: string; learned: number; mastered: number; total: number; due: number }[]>([])

  useFocusEffect(useCallback(() => {
    setGlobal(getStats(ALL_CARD_IDS))
    setStreak(getStreak())
    setModStats(MODULES.map(m => ({ id: m.id, ...getStats(m.allCardIds) })))
  }, []))

  const retentionPct = global.learned > 0
    ? Math.round((global.mastered / global.learned) * 100)
    : 0

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.pageTitle}>Mes progrès</Text>

        {/* Streak */}
        <View style={styles.streakCard}>
          <Text style={styles.streakEmoji}>🔥</Text>
          <View>
            <Text style={styles.streakValue}>{streak} jour{streak > 1 ? 's' : ''}</Text>
            <Text style={styles.streakLabel}>Série en cours</Text>
          </View>
        </View>

        {/* Stats globales */}
        <View style={styles.statsRow}>
          <StatBox value={global.total}   label="Cartes totales"  color="#1A1A2E" />
          <StatBox value={global.learned} label="Apprises"        color="#1B4F72" />
          <StatBox value={global.mastered}label="Maîtrisées"      color="#059669" />
          <StatBox value={global.due}     label="À réviser"       color="#C8973A" />
        </View>

        {/* Taux de rétention */}
        <View style={styles.retentionCard}>
          <Text style={styles.retentionTitle}>Taux de rétention</Text>
          <View style={styles.retentionBarBg}>
            <View style={[styles.retentionBarFill, { width: `${retentionPct}%` }]} />
          </View>
          <Text style={styles.retentionPct}>{retentionPct}%</Text>
          <Text style={styles.retentionSub}>des cartes apprises sont maîtrisées</Text>
        </View>

        {/* Par module */}
        <Text style={styles.sectionTitle}>Par module</Text>
        {MODULES.map(mod => {
          const ms = modStats.find(s => s.id === mod.id) ?? { learned: 0, mastered: 0, total: mod.allCardIds.length, due: 0 }
          const pct = ms.total > 0 ? ms.learned / ms.total : 0
          return (
            <View key={mod.id} style={styles.moduleCard}>
              <View style={styles.moduleHeader}>
                <Text style={styles.moduleIcon}>{mod.icon}</Text>
                <Text style={styles.moduleName}>{mod.title}</Text>
                <Text style={[styles.moduleCount, { color: mod.color }]}>{ms.learned}/{ms.total}</Text>
              </View>
              <View style={styles.moduleBarBg}>
                <View style={[styles.moduleBarFill, { width: `${Math.round(pct * 100)}%`, backgroundColor: mod.color }]} />
              </View>
              <View style={styles.moduleSubRow}>
                <Text style={styles.moduleSub}>{ms.mastered} maîtrisées</Text>
                {ms.due > 0 && <Text style={[styles.moduleDue, { color: mod.color }]}>{ms.due} à réviser</Text>}
              </View>
            </View>
          )
        })}

        <View style={{ height: 24 }} />
      </ScrollView>
    </SafeAreaView>
  )
}

function StatBox({ value, label, color }: { value: number; label: string; color: string }) {
  return (
    <View style={styles.statBox}>
      <Text style={[styles.statValue, { color }]}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  safe:    { flex: 1, backgroundColor: '#F8F7F4' },
  scroll:  { flex: 1 },
  content: { padding: 20, gap: 16 },
  pageTitle: { fontSize: 26, fontWeight: '900', color: '#1A1A2E', paddingTop: 8 },

  streakCard: {
    backgroundColor: '#FEF3C7', borderRadius: 16, padding: 20,
    flexDirection: 'row', alignItems: 'center', gap: 16,
  },
  streakEmoji: { fontSize: 40 },
  streakValue: { fontSize: 26, fontWeight: '800', color: '#D97706' },
  streakLabel: { fontSize: 13, color: '#92400E' },

  statsRow: { flexDirection: 'row', gap: 10 },
  statBox: {
    flex: 1, backgroundColor: '#FFFFFF', borderRadius: 14, padding: 14, alignItems: 'center', gap: 4,
    shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 6, shadowOffset: { width: 0, height: 2 }, elevation: 1,
  },
  statValue: { fontSize: 24, fontWeight: '800' },
  statLabel: { fontSize: 11, color: '#9CA3AF', textAlign: 'center' },

  retentionCard: {
    backgroundColor: '#FFFFFF', borderRadius: 16, padding: 20, gap: 8,
    shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 8, shadowOffset: { width: 0, height: 2 }, elevation: 2,
  },
  retentionTitle:  { fontSize: 14, fontWeight: '700', color: '#1A1A2E' },
  retentionBarBg:  { height: 12, backgroundColor: '#F3F4F6', borderRadius: 6, overflow: 'hidden' },
  retentionBarFill:{ height: '100%', backgroundColor: '#059669', borderRadius: 6 },
  retentionPct:    { fontSize: 32, fontWeight: '900', color: '#059669' },
  retentionSub:    { fontSize: 13, color: '#6B7280' },

  sectionTitle: { fontSize: 18, fontWeight: '800', color: '#1A1A2E' },
  moduleCard: {
    backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, gap: 8,
    shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 6, shadowOffset: { width: 0, height: 2 }, elevation: 1,
  },
  moduleHeader: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  moduleIcon:   { fontSize: 22 },
  moduleName:   { flex: 1, fontSize: 15, fontWeight: '700', color: '#1A1A2E' },
  moduleCount:  { fontSize: 14, fontWeight: '700' },
  moduleBarBg:  { height: 6, backgroundColor: '#F3F4F6', borderRadius: 3, overflow: 'hidden' },
  moduleBarFill:{ height: '100%', borderRadius: 3 },
  moduleSubRow: { flexDirection: 'row', justifyContent: 'space-between' },
  moduleSub:    { fontSize: 12, color: '#6B7280' },
  moduleDue:    { fontSize: 12, fontWeight: '600' },
})
