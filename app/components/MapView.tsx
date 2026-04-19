// MapView.tsx — carte avec camps de révision SM-2 adaptatifs

import { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useFocusEffect, useRouter } from 'expo-router';
import { MAP_STOPS, MAP_CONNECTIONS, CityStop, RevisionStop } from '../data/map';
import { CitySheet } from './CitySheet';
import { getDueCardIds } from '../data/progressStore';
import { ALL_LESSONS } from '../data/lessons';
import { ARABIC_ALPHABET } from '../data/alphabet';

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 950;

function MapLine({ from, to }: { from: { x: number; y: number }; to: { x: number; y: number } }) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);
  const cx = (from.x + to.x) / 2;
  const cy = (from.y + to.y) / 2;

  return (
    <View style={{
      position: 'absolute',
      left: cx - length / 2,
      top: cy - 3,
      width: length,
      height: 6,
      backgroundColor: '#C4A47C',
      borderRadius: 3,
      transform: [{ rotate: `${angle}deg` }],
    }} />
  );
}

function CityNode({ stop, onPress }: { stop: CityStop; onPress: () => void }) {
  const bgColor = stop.unlocked ? '#EEEDFE' : '#F1EFE8';
  const borderColor = stop.unlocked ? '#534AB7' : '#B4B2A9';

  return (
    <TouchableOpacity
      style={[styles.cityNode, { backgroundColor: bgColor, borderColor, left: stop.position.x - 40, top: stop.position.y - 40 }]}
      onPress={onPress}
      disabled={!stop.unlocked}
      activeOpacity={0.8}
    >
      <Text style={styles.cityEmoji}>{stop.emoji}</Text>
      <Text style={[styles.cityLabel, !stop.unlocked && styles.cityLabelLocked]}>
        {stop.name}
      </Text>
    </TouchableOpacity>
  );
}

function RevisionNode({ stop, dueCount, onPress }: { stop: RevisionStop; dueCount: number; onPress: () => void }) {
  const hasDue = dueCount > 0;

  return (
    <TouchableOpacity
      style={[
        styles.revisionNode,
        { left: stop.position.x - 24, top: stop.position.y - 24 },
        !hasDue && styles.revisionNodeInactive,
      ]}
      onPress={onPress}
      disabled={!hasDue}
      activeOpacity={0.8}
    >
      <Text style={styles.revisionEmoji}>{hasDue ? '🔥' : '🏕️'}</Text>
      {hasDue && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{dueCount}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

export default function MapView() {
  const router = useRouter();
  const [selectedCity, setSelectedCity] = useState<CityStop | null>(null);
  const [dueCount, setDueCount] = useState(0);

  // Recalcule les cartes dues à chaque fois que l'écran prend le focus
  // (après une session de leçon ou de révision)
  useFocusEffect(
    useCallback(() => {
      const vocabIds = ALL_LESSONS.flatMap(l => l.cards.map(c => c.arabic));
      const letterIds = ARABIC_ALPHABET.map(c => c.letter);
      setDueCount(getDueCardIds([...vocabIds, ...letterIds]).length);
    }, [])
  );

  function getPos(id: string) {
    return MAP_STOPS.find(s => s.id === id)?.position ?? { x: 0, y: 0 };
  }

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={[styles.scrollContent, { alignItems: 'center' }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT }}>

          {MAP_CONNECTIONS.map(([fromId, toId]) => (
            <MapLine key={`${fromId}-${toId}`} from={getPos(fromId)} to={getPos(toId)} />
          ))}

          {MAP_STOPS.map(stop => {
            if (stop.type === 'city') {
              return (
                <CityNode
                  key={stop.id}
                  stop={stop}
                  onPress={() => setSelectedCity(stop)}
                />
              );
            }
            // Seul le premier camp de révision est actif pour l'instant
            const isFirstCamp = stop.id === 'revision-1';
            return (
              <RevisionNode
                key={stop.id}
                stop={stop}
                dueCount={isFirstCamp ? dueCount : 0}
                onPress={() => router.push('/revision')}
              />
            );
          })}
        </View>
      </ScrollView>

      <CitySheet city={selectedCity} onClose={() => setSelectedCity(null)} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0E4C2',
  },
  scrollContent: {
    paddingVertical: 24,
  },
  cityNode: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderBottomWidth: 6,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  cityEmoji: { fontSize: 28 },
  cityLabel: {
    fontSize: 9,
    fontWeight: '700',
    color: '#534AB7',
    marginTop: 2,
  },
  cityLabelLocked: { color: '#B4B2A9' },
  revisionNode: {
    position: 'absolute',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFF3CD',
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: '#F59E0B',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  revisionNodeInactive: {
    backgroundColor: '#F1EFE8',
    borderColor: '#C4BFB0',
    opacity: 0.5,
    elevation: 1,
  },
  revisionEmoji: { fontSize: 20 },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#EF4444',
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
  },
});
