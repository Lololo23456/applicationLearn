// CitySheet.tsx — bottom sheet qui apparaît quand on tape sur une ville

import { useEffect, useRef } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { CityStop } from '../data/map';

type Props = {
  city: CityStop | null;
  onClose: () => void;
};

export function CitySheet({ city, onClose }: Props) {
  const router = useRouter();
  const slideAnim = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    if (city) {
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        damping: 20,
        stiffness: 200,
      }).start();
    } else {
      slideAnim.setValue(300);
    }
  }, [city]);

  if (!city) return null;

  const availableLesson = city.lessons.find(l => l.status === 'available' || l.status === 'completed');

  function handleStart(route: string) {
    onClose();
    router.push(route as any);
  }

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
              const isLocked = lesson.status === 'locked';
              const isCompleted = lesson.status === 'completed';
              return (
                <TouchableOpacity
                  key={lesson.id}
                  style={[styles.lessonRow, isLocked && styles.lessonRowLocked]}
                  disabled={isLocked}
                  onPress={() => handleStart(lesson.route)}
                >
                  <Text style={styles.lessonIcon}>
                    {isCompleted ? '✅' : isLocked ? '🔒' : '⭐'}
                  </Text>
                  <View style={styles.lessonInfo}>
                    <Text style={[styles.lessonTitle, isLocked && styles.lessonTitleLocked]}>
                      Leçon {index + 1} — {lesson.title}
                    </Text>
                    <Text style={styles.lessonMeta}>{lesson.subtitle}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        )}

        {availableLesson && (
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => handleStart(availableLesson.route)}
          >
            <Text style={styles.startButtonText}>Commencer</Text>
          </TouchableOpacity>
        )}
      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  sheet: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingBottom: 40,
    maxHeight: '60%',
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 16,
  },
  cityEmoji: {
    fontSize: 40,
    textAlign: 'center',
  },
  cityName: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 20,
    color: '#1A1A2E',
  },
  emptyText: {
    textAlign: 'center',
    color: '#999',
    fontStyle: 'italic',
    marginBottom: 16,
  },
  lessonList: {
    marginBottom: 16,
  },
  lessonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#F7F5FF',
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1.5,
    borderBottomWidth: 4,
    borderColor: '#534AB7',
  },
  lessonRowLocked: {
    backgroundColor: '#F5F5F5',
    borderColor: '#D0D0D0',
    opacity: 0.6,
  },
  lessonIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  lessonInfo: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1A1A2E',
  },
  lessonTitleLocked: {
    color: '#999',
  },
  lessonMeta: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  startButton: {
    backgroundColor: '#534AB7',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderColor: '#3B348A',
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
