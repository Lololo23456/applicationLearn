import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { getLessonById, getModuleByLessonId } from '../data/modules'
import TheoryView from '../components/TheoryView'
import PracticeSession from '../components/PracticeSession'

type Step = 'theory' | 'practice' | 'done'

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const router  = useRouter()
  const [step, setStep]     = useState<Step>('theory')
  const [correct, setCorrect] = useState(0)
  const [total, setTotal]     = useState(0)

  const lesson = getLessonById(id ?? '')
  const module  = getModuleByLessonId(id ?? '')

  if (!lesson || !module) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.center}>
          <Text style={styles.errorText}>Leçon introuvable.</Text>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backBtnText}>Retour</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }

  function handlePracticeComplete(results: { cardId: string; quality: number }[]) {
    const c = results.filter(r => r.quality >= 4).length
    setCorrect(c)
    setTotal(results.length)
    setStep('done')
  }

  const moduleColor = module.color

  if (step === 'theory') {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={[styles.header, { borderBottomColor: moduleColor }]}>
          <TouchableOpacity onPress={() => router.back()} hitSlop={12}>
            <Ionicons name="close" size={24} color="#1A1A2E" />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={styles.headerModule}>{module.title}</Text>
            <Text style={styles.headerStep}>Étape 1 / 2 — Théorie</Text>
          </View>
          <TouchableOpacity
            style={[styles.nextStepBtn, { backgroundColor: moduleColor }]}
            onPress={() => setStep('practice')}
          >
            <Text style={styles.nextStepBtnText}>Pratiquer →</Text>
          </TouchableOpacity>
        </View>
        <TheoryView lesson={lesson} />
      </SafeAreaView>
    )
  }

  if (step === 'practice') {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={[styles.header, { borderBottomColor: moduleColor }]}>
          <TouchableOpacity onPress={() => setStep('theory')} hitSlop={12}>
            <Ionicons name="chevron-back" size={24} color="#1A1A2E" />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={styles.headerModule}>{module.title}</Text>
            <Text style={styles.headerStep}>Étape 2 / 2 — Pratique</Text>
          </View>
          <View style={{ width: 80 }} />
        </View>
        <PracticeSession lesson={lesson} onComplete={handlePracticeComplete} />
      </SafeAreaView>
    )
  }

  // Done
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0
  const emoji = pct >= 80 ? '🎉' : pct >= 50 ? '💪' : '📚'

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.doneContainer}>
        <Text style={styles.doneEmoji}>{emoji}</Text>
        <Text style={styles.doneTitle}>Leçon terminée !</Text>
        <Text style={styles.doneSub}>{lesson.title}</Text>

        <View style={styles.doneStats}>
          <View style={styles.doneStatItem}>
            <Text style={[styles.doneStatValue, { color: moduleColor }]}>{pct}%</Text>
            <Text style={styles.doneStatLabel}>Réussite</Text>
          </View>
          <View style={styles.doneStatItem}>
            <Text style={styles.doneStatValue}>{correct}</Text>
            <Text style={styles.doneStatLabel}>Correctes</Text>
          </View>
          <View style={styles.doneStatItem}>
            <Text style={styles.doneStatValue}>{total - correct}</Text>
            <Text style={styles.doneStatLabel}>À revoir</Text>
          </View>
        </View>

        <View style={styles.sm2Note}>
          <Text style={styles.sm2NoteText}>
            ✓ {lesson.cardIds.length} cartes ajoutées à ta file de révision SM-2.{'\n'}
            Reviens demain pour les consolider !
          </Text>
        </View>

        <TouchableOpacity style={[styles.primaryBtn, { backgroundColor: moduleColor }]} onPress={() => router.replace('/')}>
          <Text style={styles.primaryBtnText}>Tableau de bord</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryBtn} onPress={() => { setStep('theory'); setCorrect(0); setTotal(0) }}>
          <Text style={styles.secondaryBtnText}>Revoir la théorie</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe:   { flex: 1, backgroundColor: '#F8F7F4' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16, padding: 24 },
  errorText: { fontSize: 18, color: '#6B7280' },

  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 12,
    borderBottomWidth: 2, backgroundColor: '#FFFFFF',
  },
  headerCenter:   { flex: 1, alignItems: 'center' },
  headerModule:   { fontSize: 13, fontWeight: '700', color: '#6B7280' },
  headerStep:     { fontSize: 11, color: '#9CA3AF', marginTop: 2 },
  nextStepBtn:    { borderRadius: 10, paddingVertical: 8, paddingHorizontal: 14 },
  nextStepBtnText:{ color: '#FFFFFF', fontSize: 13, fontWeight: '700' },

  // Done screen
  doneContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 28, gap: 16 },
  doneEmoji:     { fontSize: 72 },
  doneTitle:     { fontSize: 28, fontWeight: '900', color: '#1A1A2E' },
  doneSub:       { fontSize: 15, color: '#6B7280', textAlign: 'center', marginTop: -8 },

  doneStats: { flexDirection: 'row', gap: 12, width: '100%' },
  doneStatItem: {
    flex: 1, backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, alignItems: 'center', gap: 4,
    shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 6, shadowOffset: { width: 0, height: 2 }, elevation: 2,
  },
  doneStatValue: { fontSize: 28, fontWeight: '800', color: '#1A1A2E' },
  doneStatLabel: { fontSize: 12, color: '#6B7280', textAlign: 'center' },

  sm2Note: { backgroundColor: '#EBF5FB', borderRadius: 14, padding: 16, width: '100%' },
  sm2NoteText: { fontSize: 14, color: '#1B4F72', lineHeight: 21, textAlign: 'center' },

  primaryBtn:     { width: '100%', borderRadius: 14, paddingVertical: 14, alignItems: 'center',
                    borderBottomWidth: 4, borderColor: 'rgba(0,0,0,0.2)' },
  primaryBtnText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
  secondaryBtn:   { paddingVertical: 10 },
  secondaryBtnText:{ color: '#6B7280', fontSize: 14 },

  backBtn:     { backgroundColor: '#1B4F72', borderRadius: 12, paddingVertical: 12, paddingHorizontal: 24 },
  backBtnText: { color: '#FFFFFF', fontSize: 15, fontWeight: '700' },
})
