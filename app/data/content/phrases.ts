export interface PhraseCard {
  id: string
  arabic: string
  transliteration: string
  french: string
  context: string           // contexte d'utilisation
  grammaticalNote: string   // note grammaticale courte
}

export const PHRASES: PhraseCard[] = [
  {
    id: 'phrase-01',
    arabic: 'السَّلَامُ عَلَيْكُمْ',
    transliteration: 'as-salāmu ʿalaykum',
    french: 'Que la paix soit sur vous',
    context: "Salutation islamique universelle, utilisée à tout moment de la journée.",
    grammaticalNote: "السَّلَام (la paix) + عَلَيْ (sur) + كُمْ (vous). Répond : وَعَلَيْكُمُ السَّلَام",
  },
  {
    id: 'phrase-02',
    arabic: 'كَيْفَ حَالُكَ؟',
    transliteration: 'kayfa ḥāluka?',
    french: 'Comment vas-tu ?',
    context: "Formule de politesse après la salutation.",
    grammaticalNote: "كَيْفَ = comment | حَال = état/santé | كَ = ton (masc. sing.)",
  },
  {
    id: 'phrase-03',
    arabic: 'أَنَا بِخَيْر، شُكْرًا',
    transliteration: 'anā bi-khayr, shukran',
    french: 'Je vais bien, merci',
    context: "Réponse standard à 'comment vas-tu'.",
    grammaticalNote: "أَنَا = je | بِخَيْر = en bien (bi = préposition 'en/avec', خَيْر = bien/bonté)",
  },
  {
    id: 'phrase-04',
    arabic: 'مَا اسْمُكَ؟',
    transliteration: 'mā smuka?',
    french: 'Quel est ton nom ?',
    context: "Pour demander le prénom de quelqu'un.",
    grammaticalNote: "مَا = quel(le) | اسْم = nom | كَ = ton. L'alif initial de اسم chute après مَا.",
  },
  {
    id: 'phrase-05',
    arabic: 'اسْمِي مُحَمَّد',
    transliteration: 'ismī Muḥammad',
    french: 'Mon nom est Mohammed',
    context: "Se présenter. Remplace 'مُحَمَّد' par ton prénom.",
    grammaticalNote: "اسْم = nom | ي = mon (pronom possessif 1ère pers.)",
  },
  {
    id: 'phrase-06',
    arabic: 'أَيْنَ الْمَسْجِدُ؟',
    transliteration: 'ayna l-masjidu?',
    french: 'Où est la mosquée ?',
    context: "Demander une direction.",
    grammaticalNote: "أَيْنَ = où | الْمَسْجِد = la mosquée (avec article الـ). Fin en ُ = nominatif.",
  },
  {
    id: 'phrase-07',
    arabic: 'هَلْ تَتَكَلَّمُ الْعَرَبِيَّةَ؟',
    transliteration: 'hal tatakallamu l-ʿarabiyyata?',
    french: "Parles-tu arabe ?",
    context: "Demander si quelqu'un parle arabe.",
    grammaticalNote: "هَلْ = particule interrogative | تَتَكَلَّمُ = tu parles (forme V) | الْعَرَبِيَّة = l'arabe (accusatif)",
  },
  {
    id: 'phrase-08',
    arabic: 'أُرِيدُ أَنْ أَتَعَلَّمَ',
    transliteration: 'urīdu an ataʿallama',
    french: 'Je veux apprendre',
    context: "Exprimer un désir d'apprendre.",
    grammaticalNote: "أُرِيدُ = je veux (forme IV de ر-و-د) | أَنْ = que/de (+ subjonctif) | أَتَعَلَّمَ = j'apprenne (forme V)",
  },
  {
    id: 'phrase-09',
    arabic: 'شُكْرًا جَزِيلًا',
    transliteration: 'shukran jazīlan',
    french: 'Merci beaucoup',
    context: "Remercier chaleureusement.",
    grammaticalNote: "شُكْرًا = merci (accusatif indéfini, forme adverbiale) | جَزِيلًا = beaucoup/abondant",
  },
  {
    id: 'phrase-10',
    arabic: 'مَعَ السَّلَامَة',
    transliteration: 'maʿa s-salāma',
    french: 'Au revoir (avec la sécurité)',
    context: "Formule de départ. Répond à 'mā salāmtu'.",
    grammaticalNote: "مَعَ = avec | السَّلَامَة = la sécurité/intégrité (accusatif). Litt. : 'avec la sécurité'.",
  },
]

export const PHRASE_LESSONS: { lessonId: string; title: string; subtitle: string; cardIds: string[] }[] = [
  {
    lessonId: 'phrase-l1',
    title: 'Salutations de base',
    subtitle: '5 phrases fondamentales',
    cardIds: ['phrase-01','phrase-02','phrase-03','phrase-04','phrase-05'],
  },
  {
    lessonId: 'phrase-l2',
    title: 'Au quotidien',
    subtitle: '5 phrases pratiques',
    cardIds: ['phrase-06','phrase-07','phrase-08','phrase-09','phrase-10'],
  },
]

export const PHRASE_MAP = new Map(PHRASES.map(c => [c.id, c]))
