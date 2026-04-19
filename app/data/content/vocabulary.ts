export interface VocabCard {
  id: string
  arabic: string
  transliteration: string
  french: string
  plural?: string
  pluralTranslit?: string
  gender?: 'm' | 'f'
  exampleArabic: string
  exampleTranslit: string
  exampleFrench: string
  category: string
}

export const VOCABULARY: VocabCard[] = [
  // ── Famille & personnes ──────────────────────────────────────────────────────
  {
    id: 'vocab-01', category: 'Famille',
    arabic: 'أَب', transliteration: 'ab', french: 'père', gender: 'm',
    plural: 'آبَاء', pluralTranslit: 'ābāʾ',
    exampleArabic: 'أَبِي رَجُلٌ طَيِّب', exampleTranslit: 'abī rajulun ṭayyib',
    exampleFrench: "Mon père est un homme bien.",
  },
  {
    id: 'vocab-02', category: 'Famille',
    arabic: 'أُمّ', transliteration: 'umm', french: 'mère', gender: 'f',
    plural: 'أُمَّهَات', pluralTranslit: 'ummahāt',
    exampleArabic: 'أُمِّي تَعِيشُ فِي الْمَدِينَة', exampleTranslit: 'ummī taʿīshu fī l-madīna',
    exampleFrench: "Ma mère vit en ville.",
  },
  {
    id: 'vocab-03', category: 'Famille',
    arabic: 'أَخ', transliteration: 'akh', french: 'frère', gender: 'm',
    plural: 'إِخْوَة', pluralTranslit: 'ikhwa',
    exampleArabic: 'عِنْدِي أَخٌ وَأُخْت', exampleTranslit: 'ʿindī khun wa-ukht',
    exampleFrench: "J'ai un frère et une sœur.",
  },
  {
    id: 'vocab-04', category: 'Famille',
    arabic: 'أُخْت', transliteration: 'ukht', french: 'sœur', gender: 'f',
    plural: 'أَخَوَات', pluralTranslit: 'akhawāt',
    exampleArabic: 'أُخْتِي طَالِبَة', exampleTranslit: 'ukhtī ṭāliba',
    exampleFrench: "Ma sœur est étudiante.",
  },
  {
    id: 'vocab-05', category: 'Famille',
    arabic: 'وَلَد', transliteration: 'walad', french: 'garçon / enfant', gender: 'm',
    plural: 'أَوْلَاد', pluralTranslit: 'awlād',
    exampleArabic: 'الْوَلَدُ يَلْعَبُ', exampleTranslit: 'al-waladu yalʿabu',
    exampleFrench: "L'enfant joue.",
  },
  {
    id: 'vocab-06', category: 'Famille',
    arabic: 'بِنْت', transliteration: 'bint', french: 'fille', gender: 'f',
    plural: 'بَنَات', pluralTranslit: 'banāt',
    exampleArabic: 'الْبِنْتُ ذَكِيَّة', exampleTranslit: 'al-bintu dhakiyya',
    exampleFrench: "La fille est intelligente.",
  },
  {
    id: 'vocab-07', category: 'Famille',
    arabic: 'رَجُل', transliteration: 'rajul', french: 'homme', gender: 'm',
    plural: 'رِجَال', pluralTranslit: 'rijāl',
    exampleArabic: 'رَجُلٌ كَرِيم', exampleTranslit: 'rajulun karīm',
    exampleFrench: "Un homme généreux.",
  },
  {
    id: 'vocab-08', category: 'Famille',
    arabic: 'امْرَأَة', transliteration: 'imraʾa', french: 'femme', gender: 'f',
    plural: 'نِسَاء', pluralTranslit: 'nisāʾ',
    exampleArabic: 'الْمَرْأَةُ عَالِمَة', exampleTranslit: 'al-marʾatu ʿālima',
    exampleFrench: "La femme est savante.",
  },
  {
    id: 'vocab-09', category: 'Famille',
    arabic: 'عَائِلَة', transliteration: 'ʿāʾila', french: 'famille', gender: 'f',
    exampleArabic: 'عَائِلَتِي كَبِيرَة', exampleTranslit: 'ʿāʾilatī kabīra',
    exampleFrench: "Ma famille est grande.",
  },
  {
    id: 'vocab-10', category: 'Famille',
    arabic: 'صَدِيق', transliteration: 'ṣadīq', french: 'ami', gender: 'm',
    plural: 'أَصْدِقَاء', pluralTranslit: 'aṣdiqāʾ',
    exampleArabic: 'صَدِيقِي طَيِّب', exampleTranslit: 'ṣadīqī ṭayyib',
    exampleFrench: "Mon ami est gentil.",
  },

  // ── Corps humain ─────────────────────────────────────────────────────────────
  {
    id: 'vocab-11', category: 'Corps',
    arabic: 'رَأْس', transliteration: 'raʾs', french: 'tête', gender: 'm',
    plural: 'رُؤُوس', pluralTranslit: 'ruʾūs',
    exampleArabic: 'رَأْسِي يُؤْلِمُنِي', exampleTranslit: 'raʾsī yuʾlimanī',
    exampleFrench: "J'ai mal à la tête.",
  },
  {
    id: 'vocab-12', category: 'Corps',
    arabic: 'يَد', transliteration: 'yad', french: 'main', gender: 'f',
    plural: 'أَيْدِي', pluralTranslit: 'aydī',
    exampleArabic: 'يَدِي صَغِيرَة', exampleTranslit: 'yadī ṣaghīra',
    exampleFrench: "Ma main est petite.",
  },
  {
    id: 'vocab-13', category: 'Corps',
    arabic: 'عَيْن', transliteration: 'ʿayn', french: 'œil', gender: 'f',
    plural: 'عُيُون', pluralTranslit: 'ʿuyūn',
    exampleArabic: 'عَيْنُهُ سَوْدَاء', exampleTranslit: 'ʿaynuhu sawdāʾ',
    exampleFrench: "Son œil est noir.",
  },
  {
    id: 'vocab-14', category: 'Corps',
    arabic: 'قَلْب', transliteration: 'qalb', french: 'cœur', gender: 'm',
    plural: 'قُلُوب', pluralTranslit: 'qulūb',
    exampleArabic: 'الْقَلْبُ يَنْبُض', exampleTranslit: 'al-qalbu yanbuḍ',
    exampleFrench: "Le cœur bat.",
  },
  {
    id: 'vocab-15', category: 'Corps',
    arabic: 'لِسَان', transliteration: 'lisān', french: 'langue / bouche', gender: 'm',
    plural: 'أَلْسِنَة', pluralTranslit: 'alsina',
    exampleArabic: 'اللِّسَانُ سِلَاح', exampleTranslit: 'al-lisānu silāḥ',
    exampleFrench: "La langue est une arme.",
  },

  // ── Nature & lieux ───────────────────────────────────────────────────────────
  {
    id: 'vocab-16', category: 'Nature',
    arabic: 'سَمَاء', transliteration: 'samāʾ', french: 'ciel', gender: 'f',
    exampleArabic: 'السَّمَاءُ زَرْقَاء', exampleTranslit: 'as-samāʾu zarqāʾ',
    exampleFrench: "Le ciel est bleu.",
  },
  {
    id: 'vocab-17', category: 'Nature',
    arabic: 'أَرْض', transliteration: 'arḍ', french: 'terre / sol', gender: 'f',
    exampleArabic: 'الْأَرْضُ كَبِيرَة', exampleTranslit: 'al-arḍu kabīra',
    exampleFrench: "La terre est grande.",
  },
  {
    id: 'vocab-18', category: 'Nature',
    arabic: 'شَمْس', transliteration: 'shams', french: 'soleil', gender: 'f',
    exampleArabic: 'الشَّمْسُ سَاطِعَة', exampleTranslit: 'ash-shamsu sāṭiʿa',
    exampleFrench: "Le soleil brille.",
  },
  {
    id: 'vocab-19', category: 'Nature',
    arabic: 'قَمَر', transliteration: 'qamar', french: 'lune', gender: 'm',
    exampleArabic: 'الْقَمَرُ جَمِيل', exampleTranslit: 'al-qamaru jamīl',
    exampleFrench: "La lune est belle.",
  },
  {
    id: 'vocab-20', category: 'Nature',
    arabic: 'مَاء', transliteration: 'māʾ', french: 'eau', gender: 'm',
    exampleArabic: 'الْمَاءُ حَيَاة', exampleTranslit: 'al-māʾu ḥayāt',
    exampleFrench: "L'eau est la vie.",
  },
  {
    id: 'vocab-21', category: 'Nature',
    arabic: 'نَهْر', transliteration: 'nahr', french: 'rivière / fleuve', gender: 'm',
    plural: 'أَنْهَار', pluralTranslit: 'anhār',
    exampleArabic: 'النَّهْرُ طَوِيل', exampleTranslit: 'an-nahru ṭawīl',
    exampleFrench: "Le fleuve est long.",
  },
  {
    id: 'vocab-22', category: 'Nature',
    arabic: 'جَبَل', transliteration: 'jabal', french: 'montagne', gender: 'm',
    plural: 'جِبَال', pluralTranslit: 'jibāl',
    exampleArabic: 'الْجَبَلُ عَالٍ', exampleTranslit: 'al-jabalu ʿālin',
    exampleFrench: "La montagne est haute.",
  },
  {
    id: 'vocab-23', category: 'Nature',
    arabic: 'بَحْر', transliteration: 'baḥr', french: 'mer / océan', gender: 'm',
    plural: 'بِحَار', pluralTranslit: 'biḥār',
    exampleArabic: 'الْبَحْرُ عَمِيق', exampleTranslit: 'al-baḥru ʿamīq',
    exampleFrench: "La mer est profonde.",
  },
  {
    id: 'vocab-24', category: 'Nature',
    arabic: 'رِيح', transliteration: 'rīḥ', french: 'vent', gender: 'f',
    exampleArabic: 'الرِّيحُ قَوِيَّة', exampleTranslit: 'ar-rīḥu qawiyya',
    exampleFrench: "Le vent est fort.",
  },
  {
    id: 'vocab-25', category: 'Nature',
    arabic: 'نَار', transliteration: 'nār', french: 'feu', gender: 'f',
    exampleArabic: 'النَّارُ حَارَّة', exampleTranslit: 'an-nāru ḥārra',
    exampleFrench: "Le feu est chaud.",
  },

  // ── Lieux & bâtiments ────────────────────────────────────────────────────────
  {
    id: 'vocab-26', category: 'Lieux',
    arabic: 'بَيْت', transliteration: 'bayt', french: 'maison', gender: 'm',
    plural: 'بُيُوت', pluralTranslit: 'buyūt',
    exampleArabic: 'بَيْتُنَا كَبِير', exampleTranslit: 'baytunā kabīr',
    exampleFrench: "Notre maison est grande.",
  },
  {
    id: 'vocab-27', category: 'Lieux',
    arabic: 'مَدِينَة', transliteration: 'madīna', french: 'ville', gender: 'f',
    plural: 'مُدُن', pluralTranslit: 'mudun',
    exampleArabic: 'الْمَدِينَةُ جَمِيلَة', exampleTranslit: 'al-madīnatu jamīla',
    exampleFrench: "La ville est belle.",
  },
  {
    id: 'vocab-28', category: 'Lieux',
    arabic: 'مَسْجِد', transliteration: 'masjid', french: 'mosquée', gender: 'm',
    plural: 'مَسَاجِد', pluralTranslit: 'masājid',
    exampleArabic: 'الْمَسْجِدُ قَرِيب', exampleTranslit: 'al-masjidu qarīb',
    exampleFrench: "La mosquée est proche.",
  },
  {
    id: 'vocab-29', category: 'Lieux',
    arabic: 'مَدْرَسَة', transliteration: 'madrasa', french: 'école', gender: 'f',
    plural: 'مَدَارِس', pluralTranslit: 'madāris',
    exampleArabic: 'الْمَدْرَسَةُ بَعِيدَة', exampleTranslit: 'al-madrasatu baʿīda',
    exampleFrench: "L'école est loin.",
  },
  {
    id: 'vocab-30', category: 'Lieux',
    arabic: 'طَرِيق', transliteration: 'ṭarīq', french: 'route / chemin', gender: 'm',
    plural: 'طُرُق', pluralTranslit: 'ṭuruq',
    exampleArabic: 'الطَّرِيقُ طَوِيل', exampleTranslit: 'aṭ-ṭarīqu ṭawīl',
    exampleFrench: "La route est longue.",
  },

  // ── Savoirs & Islam ──────────────────────────────────────────────────────────
  {
    id: 'vocab-31', category: 'Savoir',
    arabic: 'عِلْم', transliteration: 'ʿilm', french: 'connaissance / science', gender: 'm',
    plural: 'عُلُوم', pluralTranslit: 'ʿulūm',
    exampleArabic: 'الْعِلْمُ نُور', exampleTranslit: 'al-ʿilmu nūr',
    exampleFrench: "La connaissance est lumière.",
  },
  {
    id: 'vocab-32', category: 'Savoir',
    arabic: 'كِتَاب', transliteration: 'kitāb', french: 'livre', gender: 'm',
    plural: 'كُتُب', pluralTranslit: 'kutub',
    exampleArabic: 'الْكِتَابُ مُفِيد', exampleTranslit: 'al-kitābu mufīd',
    exampleFrench: "Le livre est utile.",
  },
  {
    id: 'vocab-33', category: 'Savoir',
    arabic: 'لُغَة', transliteration: 'lugha', french: 'langue (idiome)', gender: 'f',
    plural: 'لُغَات', pluralTranslit: 'lughāt',
    exampleArabic: 'اللُّغَةُ الْعَرَبِيَّةُ جَمِيلَة', exampleTranslit: 'al-lughatu l-ʿarabiyyatu jamīla',
    exampleFrench: "La langue arabe est belle.",
  },
  {
    id: 'vocab-34', category: 'Savoir',
    arabic: 'كَلِمَة', transliteration: 'kalima', french: 'mot / parole', gender: 'f',
    plural: 'كَلِمَات', pluralTranslit: 'kalimāt',
    exampleArabic: 'هٰذِهِ كَلِمَةٌ صَعْبَة', exampleTranslit: 'hādhihi kalimatun ṣaʿba',
    exampleFrench: "Ce mot est difficile.",
  },
  {
    id: 'vocab-35', category: 'Savoir',
    arabic: 'قُرْآن', transliteration: 'qurʾān', french: 'Coran', gender: 'm',
    exampleArabic: 'الْقُرْآنُ كَلَامُ اللّٰه', exampleTranslit: 'al-qurʾānu kalāmu llāh',
    exampleFrench: "Le Coran est la parole de Dieu.",
  },

  // ── Vie quotidienne ──────────────────────────────────────────────────────────
  {
    id: 'vocab-36', category: 'Quotidien',
    arabic: 'يَوْم', transliteration: 'yawm', french: 'jour', gender: 'm',
    plural: 'أَيَّام', pluralTranslit: 'ayyām',
    exampleArabic: 'الْيَوْمُ جَمِيل', exampleTranslit: 'al-yawmu jamīl',
    exampleFrench: "La journée est belle.",
  },
  {
    id: 'vocab-37', category: 'Quotidien',
    arabic: 'لَيْل', transliteration: 'layl', french: 'nuit', gender: 'm',
    exampleArabic: 'اللَّيْلُ هَادِئ', exampleTranslit: 'al-laylu hādiʾ',
    exampleFrench: "La nuit est calme.",
  },
  {
    id: 'vocab-38', category: 'Quotidien',
    arabic: 'وَقْت', transliteration: 'waqt', french: 'temps / moment', gender: 'm',
    exampleArabic: 'الْوَقْتُ ثَمِين', exampleTranslit: 'al-waqtu thamīn',
    exampleFrench: "Le temps est précieux.",
  },
  {
    id: 'vocab-39', category: 'Quotidien',
    arabic: 'طَعَام', transliteration: 'ṭaʿām', french: 'nourriture', gender: 'm',
    exampleArabic: 'الطَّعَامُ لَذِيذ', exampleTranslit: 'aṭ-ṭaʿāmu ladhīdh',
    exampleFrench: "La nourriture est délicieuse.",
  },
  {
    id: 'vocab-40', category: 'Quotidien',
    arabic: 'خُبْز', transliteration: 'khubz', french: 'pain', gender: 'm',
    exampleArabic: 'الْخُبْزُ طَازَج', exampleTranslit: 'al-khubzu ṭāzaj',
    exampleFrench: "Le pain est frais.",
  },
  {
    id: 'vocab-41', category: 'Quotidien',
    arabic: 'سَلَام', transliteration: 'salām', french: 'paix / salut', gender: 'm',
    exampleArabic: 'السَّلَامُ أَسَاسُ كُلِّ شَيْء', exampleTranslit: 'as-salāmu asāsu kulli shayʾ',
    exampleFrench: "La paix est la base de tout.",
  },
  {
    id: 'vocab-42', category: 'Quotidien',
    arabic: 'صَبَاح', transliteration: 'ṣabāḥ', french: 'matin', gender: 'm',
    exampleArabic: 'صَبَاحُ الْخَيْر', exampleTranslit: 'ṣabāḥu l-khayr',
    exampleFrench: "Bonjour (litt. : matin de bien).",
  },
  {
    id: 'vocab-43', category: 'Quotidien',
    arabic: 'مَسَاء', transliteration: 'masāʾ', french: 'soir', gender: 'm',
    exampleArabic: 'مَسَاءُ الْخَيْر', exampleTranslit: 'masāʾu l-khayr',
    exampleFrench: "Bonsoir (litt. : soir de bien).",
  },
  {
    id: 'vocab-44', category: 'Quotidien',
    arabic: 'بَاب', transliteration: 'bāb', french: 'porte', gender: 'm',
    plural: 'أَبْوَاب', pluralTranslit: 'abwāb',
    exampleArabic: 'الْبَابُ مَفْتُوح', exampleTranslit: 'al-bābu maftūḥ',
    exampleFrench: "La porte est ouverte.",
  },
  {
    id: 'vocab-45', category: 'Quotidien',
    arabic: 'كُرْسِيّ', transliteration: 'kursī', french: 'chaise / trône', gender: 'm',
    plural: 'كَرَاسِيّ', pluralTranslit: 'karāsī',
    exampleArabic: 'اجْلِسْ عَلَى الْكُرْسِيّ', exampleTranslit: 'ijlis ʿalā l-kursī',
    exampleFrench: "Assieds-toi sur la chaise.",
  },

  // ── Qualités & sentiments ────────────────────────────────────────────────────
  {
    id: 'vocab-46', category: 'Qualités',
    arabic: 'كَبِير', transliteration: 'kabīr', french: 'grand / important', gender: 'm',
    exampleArabic: 'هٰذَا رَجُلٌ كَبِير', exampleTranslit: 'hādhā rajulun kabīr',
    exampleFrench: "C'est un grand homme.",
  },
  {
    id: 'vocab-47', category: 'Qualités',
    arabic: 'صَغِير', transliteration: 'ṣaghīr', french: 'petit', gender: 'm',
    exampleArabic: 'الْوَلَدُ صَغِير', exampleTranslit: 'al-waladu ṣaghīr',
    exampleFrench: "L'enfant est petit.",
  },
  {
    id: 'vocab-48', category: 'Qualités',
    arabic: 'جَمِيل', transliteration: 'jamīl', french: 'beau / joli', gender: 'm',
    exampleArabic: 'الطَّبِيعَةُ جَمِيلَة', exampleTranslit: 'aṭ-ṭabīʿatu jamīla',
    exampleFrench: "La nature est belle.",
  },
  {
    id: 'vocab-49', category: 'Qualités',
    arabic: 'حَق', transliteration: 'ḥaqq', french: 'vérité / droit', gender: 'm',
    exampleArabic: 'الْحَقُّ وَاضِح', exampleTranslit: 'al-ḥaqqu wāḍiḥ',
    exampleFrench: "La vérité est claire.",
  },
  {
    id: 'vocab-50', category: 'Qualités',
    arabic: 'نُور', transliteration: 'nūr', french: 'lumière', gender: 'm',
    plural: 'أَنْوَار', pluralTranslit: 'anwār',
    exampleArabic: 'الْعِلْمُ نُور', exampleTranslit: 'al-ʿilmu nūr',
    exampleFrench: "La connaissance est lumière.",
  },
]

export const VOCAB_LESSONS: { lessonId: string; title: string; subtitle: string; cardIds: string[] }[] = [
  { lessonId: 'vocab-l1', title: 'Famille & Personnes', subtitle: '10 mots essentiels', cardIds: VOCABULARY.slice(0,10).map(c=>c.id) },
  { lessonId: 'vocab-l2', title: 'Corps humain & Nature', subtitle: '10 mots du monde', cardIds: VOCABULARY.slice(10,20).map(c=>c.id) },
  { lessonId: 'vocab-l3', title: 'Lieux & Bâtiments',   subtitle: '10 lieux importants', cardIds: VOCABULARY.slice(20,30).map(c=>c.id) },
  { lessonId: 'vocab-l4', title: 'Savoir & Spirituel',  subtitle: '10 mots du savoir', cardIds: VOCABULARY.slice(30,40).map(c=>c.id) },
  { lessonId: 'vocab-l5', title: 'Vie Quotidienne',     subtitle: '10 mots du quotidien', cardIds: VOCABULARY.slice(40,50).map(c=>c.id) },
]

export const VOCAB_MAP = new Map(VOCABULARY.map(c => [c.id, c]))
