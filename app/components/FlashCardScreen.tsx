// FlashCardScreen.tsx — carte retournable avec notation SM-2

import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from '../data/cards';

type FlashCardProps = {
  arabic: string;
  french: string;
  onRate: (quality: number) => void;
}

// Boutons de notation partagés entre FlashCard vocabulaire et alphabet
export function RatingButtons({ onRate }: { onRate: (q: number) => void }) {
  return (
    <View style={styles.ratingRow}>
      <TouchableOpacity style={[styles.ratingBtn, styles.ratingForgot]} onPress={() => onRate(1)}>
        <Text style={styles.ratingEmoji}>😕</Text>
        <Text style={styles.ratingLabel}>Oublié</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.ratingBtn, styles.ratingHesitated]} onPress={() => onRate(3)}>
        <Text style={styles.ratingEmoji}>😐</Text>
        <Text style={styles.ratingLabel}>Hésité</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.ratingBtn, styles.ratingKnew]} onPress={() => onRate(5)}>
        <Text style={styles.ratingEmoji}>😊</Text>
        <Text style={styles.ratingLabel}>Su !</Text>
      </TouchableOpacity>
    </View>
  )
}

export function FlashCard({ arabic, french, onRate }: FlashCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <View style={styles.cardWrapper}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => !isFlipped && setIsFlipped(true)}
        activeOpacity={isFlipped ? 1 : 0.8}
      >
        <Text style={styles.hint}>{isFlipped ? 'Français' : 'Arabe'}</Text>
        <Text style={styles.word}>{isFlipped ? french : arabic}</Text>
        {!isFlipped && <Text style={styles.hint}>Appuie pour retourner</Text>}
      </TouchableOpacity>

      {/* Les boutons de notation n'apparaissent qu'après le retournement */}
      {isFlipped && <RatingButtons onRate={onRate} />}
    </View>
  )
}

// FlashCardScreen — mode cartes seules sans SM-2 (non utilisé dans le flow principal)
export default function FlashCardScreen({ cards, title }: { cards: Card[]; title: string }) {
  const [cardIndex, setCardIndex] = useState(0)
  const card = cards[cardIndex]

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.counter}>{cardIndex + 1} / {cards.length}</Text>
      <FlashCard
        key={cardIndex}
        arabic={card.arabic}
        french={card.french}
        onRate={() => setCardIndex((cardIndex + 1) % cards.length)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F5F4EF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: '#2C2C2A',
  },
  counter: {
    fontSize: 14,
    color: '#888780',
  },
  cardWrapper: {
    width: '100%',
    gap: 16,
  },
  card: {
    width: '100%',
    height: 220,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#D3D1C7',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  word: {
    fontSize: 52,
    color: '#2C2C2A',
  },
  hint: {
    fontSize: 13,
    color: '#B4B2A9',
  },
  ratingRow: {
    flexDirection: 'row',
    gap: 10,
  },
  ratingBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 1.5,
    borderBottomWidth: 4,
    gap: 4,
  },
  ratingForgot: {
    backgroundColor: '#FCEBEB',
    borderColor: '#A32D2D',
  },
  ratingHesitated: {
    backgroundColor: '#FFF8E6',
    borderColor: '#B8860B',
  },
  ratingKnew: {
    backgroundColor: '#EAF3DE',
    borderColor: '#3B6D11',
  },
  ratingEmoji: {
    fontSize: 22,
  },
  ratingLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#2C2C2A',
  },
})
