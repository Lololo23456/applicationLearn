import { useEffect, useRef } from 'react'
import { Modal, View, Text, TouchableOpacity, StyleSheet, Animated, ScrollView } from 'react-native'
import { useRouter } from 'expo-router'
import { CityStop } from '../data/map'
import { isLessonUnlocked, getLessonProgress } from '../data/lessons'

type Props = {
  city: CityStop | null
  onClose: () => void
}

export function CitySheet({ city, onClose }: Props) {
  const router = useRouter()
  const slideAnim = useRef(new Animated.Value(300)).current

  useEffect(() => {
    if (city) {
      Animated.spring(slideAnim, {
        toValue: 0, useNativeDriver: true, damping: 20, stiffness: 200,
      }).start()
    } else {
      slideAnim.setValue(300)
    }
  }, [city])

  if (!city) return null

  function handleStart(route: string) {
    onClose()
    router.push(route as any)
  }

  const firstAvailable = city.lessons.find(l => isLessonUnlocked(l))

  return (
    <Modal visible={!!city} transparent animationType="fade" onRequestClose={onClose}>
      <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose} />

      <Animated.View style={[styles.sheet, { transform: [{ translateY: slideAnim }] }]}>
        <View style={styles.handle} />

        <Text style={styles.cityEmoji}>{city.emoji}</Text>
        <Text style={styles.cityName}>{city.name}</Text>

        {city.lessons.length === 0 ? (
          <Text style={styles.emptyText}>Aucune leçon disponible pour l'instant.</Text>
        ) : (
          <ScrollView style={styles.lessonList} showsVerticalScrollIndicator={false}>
            {city.lessons.map((lesson, index) => {
              const locked = !isLessonUnlocked(lesson)
              const progress = getLessonProgress(lesson)
              const progressPct = progress ? Math.min(1, progress.current / progress.required) : 0

              return (
                <TouchableOpacity
                  key={lesson.id}
                  style={[styles.lessonRow, locked && styles.lessonRowLocked]}
                  disabled={locked}
                  onPress={() => handleStart(lesson.route)}
                >
                  <Text style={styles.lessonIcon}>
                    {locked ? '🔒' : '⭐'}
                  </Text>
                  <View style={styles.lessonInfo}>
                    <Text style={[styles.lessonTitle, locked && styles.lessonTitleLocked]}>
                      Leçon {index + 1} — {lesson.title}
                    </Text>
                    <Text style={styles.lessonMeta}>{lesson.subtitle}</Text>

                    {locked && progress && (
                      <View style={styles.lockHint}>
                        <View style={styles.progressBarBg}>
                          <View style={[styles.progressBarFill, { width: `${Math.round(progressPct * 100)}%` }]} />
                        </View>
                        <Text style={styles.lockLabel}>
                          {progress.current}/{progress.required} — {lesson.unlockCondition!.label}
                        </Text>
                      </View>
                    )}
                  </View>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
        )}

        {firstAvailable && (
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => handleStart(firstAvailable.route)}
          >
            <Text style={styles.startButtonText}>Commencer</Text>
          </TouchableOpacity>
        )}
      </Animated.View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  backdrop:    { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' },
  sheet: {
    backgroundColor: '#fff', borderTopLeftRadius: 24, borderTopRightRadius: 24,
    padding: 24, paddingBottom: 40, maxHeight: '65%',
  },
  handle: {
    width: 40, height: 4, backgroundColor: '#E0E0E0',
    borderRadius: 2, alignSelf: 'center', marginBottom: 16,
  },
  cityEmoji: { fontSize: 40, textAlign: 'center' },
  cityName:  { fontSize: 22, fontWeight: '700', textAlign: 'center', marginTop: 8, marginBottom: 20, color: '#1A1A2E' },
  emptyText: { textAlign: 'center', color: '#999', fontStyle: 'italic', marginBottom: 16 },
  lessonList: { marginBottom: 16 },
  lessonRow: {
    flexDirection: 'row', alignItems: 'flex-start',
    paddingVertical: 12, paddingHorizontal: 16,
    backgroundColor: '#F7F5FF', borderRadius: 12, marginBottom: 10,
    borderWidth: 1.5, borderBottomWidth: 4, borderColor: '#534AB7',
  },
  lessonRowLocked: { backgroundColor: '#F5F5F5', borderColor: '#D0D0D0', opacity: 0.8 },
  lessonIcon:  { fontSize: 20, marginRight: 12, marginTop: 2 },
  lessonInfo:  { flex: 1 },
  lessonTitle: { fontSize: 15, fontWeight: '600', color: '#1A1A2E' },
  lessonTitleLocked: { color: '#999' },
  lessonMeta:  { fontSize: 12, color: '#888', marginTop: 2 },
  lockHint:    { marginTop: 8, gap: 4 },
  progressBarBg: {
    height: 5, backgroundColor: '#E0DDD5', borderRadius: 3, overflow: 'hidden',
  },
  progressBarFill: { height: '100%', backgroundColor: '#634FCA', borderRadius: 3 },
  lockLabel:   { fontSize: 11, color: '#888', marginTop: 2 },
  startButton: {
    backgroundColor: '#534AB7', borderRadius: 14, paddingVertical: 14,
    alignItems: 'center', borderBottomWidth: 4, borderColor: '#3B348A',
  },
  startButtonText: { color: '#fff', fontSize: 16, fontWeight: '700' },
})
