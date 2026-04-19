import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { Lesson, getCard, getCardType } from '../data/modules'
import { AlphabetCard } from '../data/content/alphabet'
import { VocabCard } from '../data/content/vocabulary'
import { ConjugationCard } from '../data/content/conjugation'
import { PhraseCard } from '../data/content/phrases'
import { GRAMMAR_MAP, GrammarIntro, GrammarPoint } from '../data/grammarIntros'

function LetterFormsRow({ card }: { card: AlphabetCard }) {
  return (
    <View style={styles.formsRow}>
      {[
        { label: 'Isolée', form: card.forms.isolated },
        { label: 'Finale', form: card.forms.final },
        { label: 'Médiane', form: card.forms.medial },
        { label: 'Initiale', form: card.forms.initial },
      ].map(({ label, form }) => (
        <View key={label} style={styles.formCell}>
          <Text style={styles.formLetter}>{form}</Text>
          <Text style={styles.formLabel}>{label}</Text>
        </View>
      ))}
    </View>
  )
}

function AlphabetTheory({ card }: { card: AlphabetCard }) {
  return (
    <View style={styles.cardSection}>
      <View style={styles.letterHeader}>
        <Text style={styles.bigLetter}>{card.letter}</Text>
        <View>
          <Text style={styles.letterName}>{card.name} — {card.nameArabic}</Text>
          <Text style={styles.translit}>/{card.transliteration}/</Text>
          <Text style={styles.connectNote}>
            {card.connects ? '↔ Se connecte des deux côtés' : '→ Se connecte uniquement à droite'}
          </Text>
        </View>
      </View>
      <LetterFormsRow card={card} />
      <View style={styles.pronBox}>
        <Text style={styles.pronTitle}>Prononciation</Text>
        <Text style={styles.pronText}>{card.pronunciation}</Text>
      </View>
      <View style={styles.exampleBox}>
        <Text style={styles.exampleArabic}>{card.exampleWord}</Text>
        <Text style={styles.exampleTranslit}>{card.exampleTranslit}</Text>
        <Text style={styles.exampleMeaning}>{card.exampleMeaning}</Text>
      </View>
    </View>
  )
}

function VocabTheory({ card }: { card: VocabCard }) {
  return (
    <View style={styles.cardSection}>
      <Text style={styles.arabicMain}>{card.arabic}</Text>
      <Text style={styles.translit}>{card.transliteration}</Text>
      <Text style={styles.frenchMain}>{card.french}</Text>
      {card.gender ? (
        <Text style={styles.gramNote}>Genre : {card.gender === 'm' ? 'masculin (مذكر)' : 'féminin (مؤنث)'}</Text>
      ) : null}
      {card.plural ? (
        <Text style={styles.gramNote}>Pluriel : {card.plural} ({card.pluralTranslit})</Text>
      ) : null}
      <View style={styles.exampleSentence}>
        <Text style={styles.sentenceArabic}>{card.exampleArabic}</Text>
        <Text style={styles.sentenceTranslit}>{card.exampleTranslit}</Text>
        <Text style={styles.sentenceFrench}>{card.exampleFrench}</Text>
      </View>
    </View>
  )
}

function ConjTheory({ card }: { card: ConjugationCard }) {
  return (
    <View style={styles.cardSection}>
      <View style={styles.rootHeader}>
        <Text style={styles.rootText}>{card.root}</Text>
        <Text style={styles.rootMeaning}>{card.rootMeaning}</Text>
      </View>
      <Text style={styles.schemeText}>Schème : {card.scheme}</Text>
      <View style={styles.conjTable}>
        {[
          { label: 'Passé (الماضي)', ar: card.past3ms, tr: card.past3msTranslit },
          { label: 'Présent (المضارع)', ar: card.present3ms, tr: card.present3msTranslit },
          { label: 'Impératif (الأمر)', ar: card.imperative2ms, tr: card.imperativeTranslit },
          { label: 'Masdar (المصدر)', ar: card.verbalNoun, tr: card.verbalNounTranslit },
        ].map(row => (
          <View key={row.label} style={styles.conjRow}>
            <Text style={styles.conjLabel}>{row.label}</Text>
            <View style={styles.conjRight}>
              <Text style={styles.conjArabic}>{row.ar}</Text>
              <Text style={styles.conjTranslit}>{row.tr}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.exampleSentence}>
        <Text style={styles.sentenceArabic}>{card.exampleArabic}</Text>
        <Text style={styles.sentenceTranslit}>{card.exampleTranslit}</Text>
        <Text style={styles.sentenceFrench}>{card.exampleFrench}</Text>
      </View>
    </View>
  )
}

function PhraseTheory({ card }: { card: PhraseCard }) {
  return (
    <View style={styles.cardSection}>
      <Text style={styles.arabicMain}>{card.arabic}</Text>
      <Text style={styles.translit}>{card.transliteration}</Text>
      <Text style={styles.frenchMain}>{card.french}</Text>
      <View style={styles.contextBox}>
        <Text style={styles.contextTitle}>Contexte</Text>
        <Text style={styles.contextText}>{card.context}</Text>
      </View>
      <View style={styles.contextBox}>
        <Text style={styles.contextTitle}>Note grammaticale</Text>
        <Text style={styles.contextText}>{card.grammaticalNote}</Text>
      </View>
    </View>
  )
}

function GrammarTable({ table }: { table: NonNullable<GrammarPoint['table']> }) {
  return (
    <View style={styles.table}>
      <View style={[styles.tableRow, styles.tableHeader]}>
        {table.headers.map((h, i) => (
          <Text key={i} style={[styles.tableCell, styles.tableHeaderCell, { flex: i === 0 ? 1.2 : 1 }]}>{h}</Text>
        ))}
      </View>
      {table.rows.map((row, ri) => (
        <View key={ri} style={[styles.tableRow, ri % 2 === 1 && styles.tableRowAlt]}>
          {row.map((cell, ci) => {
            const isArabic = /[\u0600-\u06FF]/.test(cell)
            return (
              <Text
                key={ci}
                style={[styles.tableCell, { flex: ci === 0 ? 1.2 : 1 }, isArabic && styles.tableCellArabic]}
              >
                {cell}
              </Text>
            )
          })}
        </View>
      ))}
    </View>
  )
}

function GrammarPointView({ point, color }: { point: GrammarPoint; color: string }) {
  return (
    <View style={styles.grammarPoint}>
      <View style={[styles.grammarPointBar, { backgroundColor: color }]} />
      <View style={styles.grammarPointContent}>
        <Text style={styles.grammarPointTitle}>{point.title}</Text>
        <Text style={styles.grammarPointExplanation}>{point.explanation}</Text>
        {point.table && <GrammarTable table={point.table} />}
        {point.examples?.map((ex, i) => (
          <View key={i} style={styles.grammarExample}>
            <Text style={styles.grammarExArabic}>{ex.arabic}</Text>
            {ex.transliteration ? <Text style={styles.grammarExTranslit}>{ex.transliteration}</Text> : null}
            <Text style={styles.grammarExFrench}>{ex.french}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

function GrammarIntroSection({ intro }: { intro: GrammarIntro }) {
  return (
    <View style={[styles.grammarIntroBox, { backgroundColor: intro.color }]}>
      <Text style={styles.grammarIntroTitle}>{intro.conceptTitle}</Text>
      <Text style={styles.grammarIntroSummary}>{intro.summary}</Text>
      <View style={styles.grammarIntroPoints}>
        {intro.points.map((point, i) => (
          <GrammarPointView key={i} point={point} color="#6C3483" />
        ))}
      </View>
    </View>
  )
}

export default function TheoryView({ lesson }: { lesson: Lesson }) {
  const grammarIntro = GRAMMAR_MAP.get(lesson.id)

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Text style={styles.lessonTitle}>{lesson.title}</Text>
      <Text style={styles.lessonSubtitle}>{lesson.subtitle}</Text>
      <View style={styles.divider} />

      {grammarIntro && (
        <>
          <GrammarIntroSection intro={grammarIntro} />
          <View style={styles.divider} />
        </>
      )}

      {lesson.cardIds.map(id => {
        const card = getCard(id)
        if (!card) return null
        const type = getCardType(id)
        return (
          <View key={id}>
            {type === 'alphabet'    && <AlphabetTheory card={card as AlphabetCard} />}
            {type === 'vocab'       && <VocabTheory    card={card as VocabCard} />}
            {type === 'conjugation' && <ConjTheory     card={card as ConjugationCard} />}
            {type === 'phrase'      && <PhraseTheory   card={card as PhraseCard} />}
            <View style={styles.separator} />
          </View>
        )
      })}
      <View style={{ height: 40 }} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll:          { flex: 1 },
  content:         { padding: 24 },
  lessonTitle:     { fontSize: 22, fontWeight: '800', color: '#1A1A2E' },
  lessonSubtitle:  { fontSize: 14, color: '#6B7280', marginTop: 4 },
  divider:         { height: 1, backgroundColor: '#E5E7EB', marginVertical: 20 },
  separator:       { height: 1, backgroundColor: '#F3F4F6', marginVertical: 16 },

  cardSection:    { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 20, gap: 12, marginBottom: 4,
                    shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 8, shadowOffset: { width: 0, height: 2 }, elevation: 2 },

  // Alphabet
  letterHeader:   { flexDirection: 'row', alignItems: 'center', gap: 16 },
  bigLetter:      { fontSize: 72, color: '#1B4F72', width: 100, textAlign: 'center', writingDirection: 'rtl' },
  letterName:     { fontSize: 18, fontWeight: '700', color: '#1A1A2E' },
  translit:       { fontSize: 15, color: '#6B7280', fontStyle: 'italic' },
  connectNote:    { fontSize: 12, color: '#9CA3AF', marginTop: 4 },

  formsRow:       { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#F8F7F4', borderRadius: 12, padding: 12 },
  formCell:       { alignItems: 'center', gap: 4 },
  formLetter:     { fontSize: 32, color: '#1B4F72', writingDirection: 'rtl' },
  formLabel:      { fontSize: 11, color: '#6B7280' },

  pronBox:        { backgroundColor: '#EBF5FB', borderRadius: 10, padding: 12 },
  pronTitle:      { fontSize: 12, fontWeight: '700', color: '#1B4F72', marginBottom: 4 },
  pronText:       { fontSize: 14, color: '#1A1A2E', lineHeight: 20 },

  exampleBox:     { backgroundColor: '#F0FDF4', borderRadius: 10, padding: 12, alignItems: 'center', gap: 2 },
  exampleArabic:  { fontSize: 28, color: '#065F46', writingDirection: 'rtl' },
  exampleTranslit:{ fontSize: 13, color: '#6B7280', fontStyle: 'italic' },
  exampleMeaning: { fontSize: 14, color: '#1A1A2E', fontWeight: '600' },

  // Vocab & phrases
  arabicMain:     { fontSize: 48, color: '#1B4F72', textAlign: 'center', writingDirection: 'rtl' },
  frenchMain:     { fontSize: 24, fontWeight: '700', color: '#1A1A2E', textAlign: 'center' },
  gramNote:       { fontSize: 13, color: '#6B7280', textAlign: 'center' },

  exampleSentence:{ backgroundColor: '#F8F7F4', borderRadius: 10, padding: 14, gap: 4, marginTop: 4 },
  sentenceArabic: { fontSize: 20, color: '#1B4F72', textAlign: 'right', writingDirection: 'rtl' },
  sentenceTranslit:{ fontSize: 12, color: '#9CA3AF', fontStyle: 'italic' },
  sentenceFrench: { fontSize: 14, color: '#374151', fontStyle: 'italic' },

  // Conjugation
  rootHeader:     { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  rootText:       { fontSize: 32, color: '#6C3483', writingDirection: 'rtl' },
  rootMeaning:    { fontSize: 20, fontWeight: '700', color: '#1A1A2E' },
  schemeText:     { fontSize: 13, color: '#6B7280', fontStyle: 'italic' },
  conjTable:      { gap: 10 },
  conjRow:        { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                    backgroundColor: '#F8F7F4', borderRadius: 10, padding: 10 },
  conjLabel:      { fontSize: 13, color: '#6B7280', flex: 1 },
  conjRight:      { alignItems: 'flex-end', gap: 2 },
  conjArabic:     { fontSize: 22, color: '#6C3483', writingDirection: 'rtl' },
  conjTranslit:   { fontSize: 12, color: '#9CA3AF', fontStyle: 'italic' },

  // Phrases
  contextBox:     { backgroundColor: '#FFF7ED', borderRadius: 10, padding: 12 },
  contextTitle:   { fontSize: 12, fontWeight: '700', color: '#B7411A', marginBottom: 4 },
  contextText:    { fontSize: 14, color: '#374151', lineHeight: 21 },

  // Grammar intro block
  grammarIntroBox:     { borderRadius: 16, padding: 20, gap: 14 },
  grammarIntroTitle:   { fontSize: 17, fontWeight: '800', color: '#1A1A2E' },
  grammarIntroSummary: { fontSize: 14, color: '#374151', lineHeight: 20, fontStyle: 'italic' },
  grammarIntroPoints:  { gap: 16 },

  grammarPoint:        { flexDirection: 'row', gap: 12 },
  grammarPointBar:     { width: 3, borderRadius: 2, marginTop: 2 },
  grammarPointContent: { flex: 1, gap: 8 },
  grammarPointTitle:   { fontSize: 15, fontWeight: '700', color: '#1A1A2E' },
  grammarPointExplanation: { fontSize: 13, color: '#374151', lineHeight: 20 },

  grammarExample:      { backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 10, padding: 10, gap: 2 },
  grammarExArabic:     { fontSize: 20, color: '#6C3483', textAlign: 'right', writingDirection: 'rtl' },
  grammarExTranslit:   { fontSize: 12, color: '#9CA3AF', fontStyle: 'italic' },
  grammarExFrench:     { fontSize: 13, color: '#374151' },

  // Table
  table:           { borderRadius: 10, overflow: 'hidden', borderWidth: 1, borderColor: '#E5E7EB' },
  tableRow:        { flexDirection: 'row' },
  tableRowAlt:     { backgroundColor: 'rgba(0,0,0,0.03)' },
  tableHeader:     { backgroundColor: '#6C3483' },
  tableCell:       { flex: 1, padding: 7, fontSize: 12, color: '#374151', borderRightWidth: 1, borderRightColor: '#E5E7EB' },
  tableHeaderCell: { color: '#FFFFFF', fontWeight: '700', fontSize: 12 },
  tableCellArabic: { fontSize: 15, textAlign: 'right', writingDirection: 'rtl', color: '#1A1A2E' },
})
