import { useCallback, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import { useRouter } from 'expo-router'
import { useFocusEffect } from '@react-navigation/native'
import { getStats, getDueCardIds, getStreak } from '../data/progressStore'
import { MODULES, ALL_CARD_IDS } from '../data/modules'

interface ModuleStats { learned: number; total: number; due: number }

export default function DashboardScreen() {
  const router = useRouter()
  const [dueCount, setDueCount]     = useState(0)
  const [streak, setStreak]         = useState(0)
  const [moduleStats, setModuleStats] = useState<Record<string, ModuleStats>>({})

  useFocusEffect(useCallback(() => {
    setDueCount(getDueCardIds(ALL_CARD_IDS).length)
    setStreak(getStreak())
    const ms: Record<string, ModuleStats> = {}
    for (const m of MODULES) {
      const s = getStats(m.allCardIds)
      ms[m.id] = { learned: s.learned, total: s.total, due: s.due }
    }
    setModuleStats(ms)
  }, []))

  const hasDue = dueCount > 0

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.appName}>فُصْحَى</Text>
            <Text style={styles.appSubtitle}>Arabe classique</Text>
          </View>
          {streak > 0 && (
            <View style={styles.streakBadge}>
              <Text style={styles.streakEmoji}>🔥</Text>
              <Text style={styles.streakCount}>{streak}</Text>
            </View>
          )}
        </View>

        {/* Révisions du jour */}
        <TouchableOpacity
          style={[styles.revisionCard, !hasDue && styles.revisionCardEmpty]}
          onPress={() => router.push('/revisions' as any)}
          activeOpacity={0.85}
          disabled={!hasDue}
        >
          <View>
            <Text style={styles.revisionLabel}>
              {hasDue ? 'Révisions du jour' : 'Aucune révision'}
            </Text>
            <Text style={styles.revisionCount}>
              {hasDue ? `${dueCount} carte${dueCount > 1 ? 's' : ''} à réviser` : 'Tu es à jour ! 🎉'}
            </Text>
          </View>
          {hasDue && (
            <View style={styles.revisionBtn}>
              <Text style={styles.revisionBtnText}>Commencer →</Text>
            </View>
          )}
        </TouchableOpacity>

        {/* Modules */}
        <Text style={styles.sectionTitle}>Modules</Text>
        <View style={styles.modulesGrid}>
          {MODULES.map(mod => {
            const ms = moduleStats[mod.id] ?? { learned: 0, total: mod.allCardIds.length, due: 0 }
            const pct = ms.total > 0 ? ms.learned / ms.total : 0
            const firstUnfinishedLesson = mod.lessons.find(l => {
              const ls = getStats(l.cardIds)
              return ls.learned < ls.total
            }) ?? mod.lessons[0]

            return (
              <TouchableOpacity
                key={mod.id}
                style={[styles.moduleCard, { borderTopColor: mod.color }]}
                onPress={() => router.push({ pathname: '/lesson/[id]' as any, params: { id: firstUnfinishedLesson.id } })}
                activeOpacity={0.8}
              >
                <Text style={styles.moduleIcon}>{mod.icon}</Text>
                <Text style={styles.moduleTitle}>{mod.title}</Text>
                <Text style={styles.moduleProgress}>{ms.learned}/{ms.total}</Text>

                <View style={styles.moduleBar}>
                  <View style={[styles.moduleBarFill, { width: `${Math.round(pct * 100)}%`, backgroundColor: mod.color }]} />
                </View>

                {ms.due > 0 && (
                  <View style={[styles.dueBadge, { backgroundColor: mod.color }]}>
                    <Text style={styles.dueBadgeText}>{ms.due}</Text>
                  </View>
                )}
              </TouchableOpacity>
            )
          })}
        </View>

        {/* Toutes les leçons */}
        <Text style={styles.sectionTitle}>Leçons</Text>
        {MODULES.map(mod => (
          <View key={mod.id} style={styles.lessonGroup}>
            <View style={[styles.lessonGroupHeader, { backgroundColor: mod.color }]}>
              <Text style={styles.lessonGroupIcon}>{mod.icon}</Text>
              <Text style={styles.lessonGroupTitle}>{mod.title}</Text>
            </View>
            {mod.lessons.map(lesson => {
              const ls = getStats(lesson.cardIds)
              const lPct = ls.total > 0 ? ls.learned / ls.total : 0
              return (
                <TouchableOpacity
                  key={lesson.id}
                  style={styles.lessonRow}
                  onPress={() => router.push({ pathname: '/lesson/[id]' as any, params: { id: lesson.id } })}
                  activeOpacity={0.75}
                >
                  <View style={styles.lessonInfo}>
                    <Text style={styles.lessonTitle}>{lesson.title}</Text>
                    <Text style={styles.lessonSub}>{lesson.subtitle}</Text>
                  </View>
                  <View style={styles.lessonRight}>
                    <Text style={[styles.lessonPct, { color: mod.color }]}>{Math.round(lPct * 100)}%</Text>
                    {ls.due > 0 && <Text style={styles.lessonDue}>{ls.due} dûes</Text>}
                  </View>
                </TouchableOpacity>
              )
            })}
          </View>
        ))}

        <View style={{ height: 24 }} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe:    { flex: 1, backgroundColor: '#F8F7F4' },
  scroll:  { flex: 1 },
  content: { padding: 20, gap: 16 },

  header:       { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 8 },
  appName:      { fontSize: 32, fontWeight: '900', color: '#1B4F72', writingDirection: 'rtl' },
  appSubtitle:  { fontSize: 13, color: '#6B7280', marginTop: 2 },
  streakBadge:  { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FEF3C7',
                  borderRadius: 20, paddingHorizontal: 12, paddingVertical: 6, gap: 4 },
  streakEmoji:  { fontSize: 18 },
  streakCount:  { fontSize: 18, fontWeight: '800', color: '#D97706' },

  revisionCard: {
    backgroundColor: '#1B4F72', borderRadius: 20, padding: 20,
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    shadowColor: '#1B4F72', shadowOpacity: 0.3, shadowRadius: 12, shadowOffset: { width: 0, height: 4 }, elevation: 6,
  },
  revisionCardEmpty: { backgroundColor: '#E5E7EB' },
  revisionLabel:     { fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 4 },
  revisionCount:     { fontSize: 18, fontWeight: '700', color: '#FFFFFF' },
  revisionBtn:       { backgroundColor: '#C8973A', borderRadius: 12, paddingVertical: 10, paddingHorizontal: 16 },
  revisionBtnText:   { color: '#FFFFFF', fontWeight: '700', fontSize: 14 },

  sectionTitle: { fontSize: 18, fontWeight: '800', color: '#1A1A2E', marginBottom: -4 },

  modulesGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  moduleCard: {
    width: '47%', backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16,
    borderTopWidth: 4, gap: 6,
    shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 8, shadowOffset: { width: 0, height: 2 }, elevation: 2,
    position: 'relative',
  },
  moduleIcon:     { fontSize: 28 },
  moduleTitle:    { fontSize: 15, fontWeight: '700', color: '#1A1A2E' },
  moduleProgress: { fontSize: 12, color: '#6B7280' },
  moduleBar:      { height: 4, backgroundColor: '#F3F4F6', borderRadius: 2, overflow: 'hidden' },
  moduleBarFill:  { height: '100%', borderRadius: 2 },
  dueBadge: {
    position: 'absolute', top: 10, right: 10,
    borderRadius: 10, minWidth: 20, height: 20,
    alignItems: 'center', justifyContent: 'center', paddingHorizontal: 5,
  },
  dueBadgeText: { color: '#FFFFFF', fontSize: 11, fontWeight: '700' },

  lessonGroup:       { backgroundColor: '#FFFFFF', borderRadius: 16, overflow: 'hidden',
                       shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 6, shadowOffset: { width: 0, height: 2 }, elevation: 1 },
  lessonGroupHeader: { flexDirection: 'row', alignItems: 'center', gap: 10, padding: 14 },
  lessonGroupIcon:   { fontSize: 18 },
  lessonGroupTitle:  { fontSize: 14, fontWeight: '800', color: '#FFFFFF' },
  lessonRow: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingVertical: 14, paddingHorizontal: 16,
    borderTopWidth: 1, borderTopColor: '#F3F4F6',
  },
  lessonInfo:  { flex: 1 },
  lessonTitle: { fontSize: 14, fontWeight: '600', color: '#1A1A2E' },
  lessonSub:   { fontSize: 12, color: '#9CA3AF', marginTop: 2 },
  lessonRight: { alignItems: 'flex-end', gap: 2 },
  lessonPct:   { fontSize: 14, fontWeight: '700' },
  lessonDue:   { fontSize: 11, color: '#C8973A', fontWeight: '600' },
})
