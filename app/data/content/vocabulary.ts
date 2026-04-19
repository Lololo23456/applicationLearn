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

  // ── Couleurs ─────────────────────────────────────────────────────────────────
  {
    id: 'vocab-51', category: 'Couleurs',
    arabic: 'أَبْيَض', transliteration: 'abyaḍ', french: 'blanc', gender: 'm',
    exampleArabic: 'الثَّلْجُ أَبْيَض', exampleTranslit: 'ath-thalju abyaḍ',
    exampleFrench: "La neige est blanche.",
  },
  {
    id: 'vocab-52', category: 'Couleurs',
    arabic: 'أَسْوَد', transliteration: 'aswad', french: 'noir', gender: 'm',
    exampleArabic: 'اللَّيْلُ أَسْوَد', exampleTranslit: 'al-laylu aswad',
    exampleFrench: "La nuit est noire.",
  },
  {
    id: 'vocab-53', category: 'Couleurs',
    arabic: 'أَحْمَر', transliteration: 'aḥmar', french: 'rouge', gender: 'm',
    exampleArabic: 'الْوَرْدَةُ حَمْرَاء', exampleTranslit: 'al-wardatu ḥamrāʾ',
    exampleFrench: "La rose est rouge.",
  },
  {
    id: 'vocab-54', category: 'Couleurs',
    arabic: 'أَزْرَق', transliteration: 'azraq', french: 'bleu', gender: 'm',
    exampleArabic: 'الْبَحْرُ أَزْرَق', exampleTranslit: 'al-baḥru azraq',
    exampleFrench: "La mer est bleue.",
  },
  {
    id: 'vocab-55', category: 'Couleurs',
    arabic: 'أَخْضَر', transliteration: 'akhḍar', french: 'vert', gender: 'm',
    exampleArabic: 'الشَّجَرُ أَخْضَر', exampleTranslit: 'ash-shajaru akhḍar',
    exampleFrench: "Les arbres sont verts.",
  },
  {
    id: 'vocab-56', category: 'Couleurs',
    arabic: 'أَصْفَر', transliteration: 'aṣfar', french: 'jaune', gender: 'm',
    exampleArabic: 'الذَّهَبُ أَصْفَر', exampleTranslit: 'adh-dhahabu aṣfar',
    exampleFrench: "L'or est jaune.",
  },
  {
    id: 'vocab-57', category: 'Couleurs',
    arabic: 'بُنِّيّ', transliteration: 'bunnī', french: 'marron / brun', gender: 'm',
    exampleArabic: 'الْخُبْزُ بُنِّيّ', exampleTranslit: 'al-khubzu bunnī',
    exampleFrench: "Le pain est marron.",
  },
  {
    id: 'vocab-58', category: 'Couleurs',
    arabic: 'رَمَادِيّ', transliteration: 'ramādī', french: 'gris', gender: 'm',
    exampleArabic: 'السَّمَاءُ رَمَادِيَّة الْيَوْم', exampleTranslit: 'as-samāʾu ramādiyyatu l-yawm',
    exampleFrench: "Le ciel est gris aujourd'hui.",
  },
  {
    id: 'vocab-59', category: 'Couleurs',
    arabic: 'بَنَفْسَجِيّ', transliteration: 'banafsajī', french: 'violet', gender: 'm',
    exampleArabic: 'الزَّهْرَةُ بَنَفْسَجِيَّة', exampleTranslit: 'az-zahRatu banafsajiyya',
    exampleFrench: "La fleur est violette.",
  },
  {
    id: 'vocab-60', category: 'Couleurs',
    arabic: 'وَرْدِيّ', transliteration: 'wardī', french: 'rose (couleur)', gender: 'm',
    exampleArabic: 'الْوَرْدَةُ وَرْدِيَّة', exampleTranslit: 'al-wardatu wardiyya',
    exampleFrench: "La rose est rose.",
  },

  // ── Nombres ──────────────────────────────────────────────────────────────────
  {
    id: 'vocab-61', category: 'Nombres',
    arabic: 'وَاحِد', transliteration: 'wāḥid', french: 'un', gender: 'm',
    exampleArabic: 'اللّٰهُ وَاحِد', exampleTranslit: 'allāhu wāḥid',
    exampleFrench: "Dieu est Un.",
  },
  {
    id: 'vocab-62', category: 'Nombres',
    arabic: 'اثْنَان', transliteration: 'ithnān', french: 'deux', gender: 'm',
    exampleArabic: 'لَهُ وَلَدَانِ اثْنَان', exampleTranslit: 'lahu waladāni thnān',
    exampleFrench: "Il a deux enfants.",
  },
  {
    id: 'vocab-63', category: 'Nombres',
    arabic: 'ثَلَاثَة', transliteration: 'thalātha', french: 'trois', gender: 'm',
    exampleArabic: 'قَرَأْتُ ثَلَاثَةَ كُتُب', exampleTranslit: 'qaraʾtu thalāthata kutub',
    exampleFrench: "J'ai lu trois livres.",
  },
  {
    id: 'vocab-64', category: 'Nombres',
    arabic: 'أَرْبَعَة', transliteration: 'arbaʿa', french: 'quatre', gender: 'm',
    exampleArabic: 'فِي الشَّهْرِ أَرْبَعَةُ أَسَابِيع', exampleTranslit: 'fī sh-shahri arbaʿatu asābīʿ',
    exampleFrench: "Le mois a quatre semaines.",
  },
  {
    id: 'vocab-65', category: 'Nombres',
    arabic: 'خَمْسَة', transliteration: 'khamsa', french: 'cinq', gender: 'm',
    exampleArabic: 'الصَّلَاةُ خَمْسُ مَرَّات', exampleTranslit: 'aṣ-ṣalātu khamsu marrāt',
    exampleFrench: "La prière est cinq fois par jour.",
  },
  {
    id: 'vocab-66', category: 'Nombres',
    arabic: 'سِتَّة', transliteration: 'sitta', french: 'six', gender: 'm',
    exampleArabic: 'سِتَّةُ أَيَّامٍ لِلْعَمَل', exampleTranslit: 'sittatu ayyāmin lil-ʿamal',
    exampleFrench: "Six jours pour travailler.",
  },
  {
    id: 'vocab-67', category: 'Nombres',
    arabic: 'سَبْعَة', transliteration: 'sabʿa', french: 'sept', gender: 'm',
    exampleArabic: 'الْأُسْبُوعُ سَبْعَةُ أَيَّام', exampleTranslit: 'al-usbūʿu sabʿatu ayyām',
    exampleFrench: "La semaine a sept jours.",
  },
  {
    id: 'vocab-68', category: 'Nombres',
    arabic: 'ثَمَانِيَة', transliteration: 'thamāniya', french: 'huit', gender: 'm',
    exampleArabic: 'النَّوْمُ ثَمَانِيُ سَاعَات', exampleTranslit: 'an-nawmu thamānī sāʿāt',
    exampleFrench: "Le sommeil est huit heures.",
  },
  {
    id: 'vocab-69', category: 'Nombres',
    arabic: 'تِسْعَة', transliteration: 'tisʿa', french: 'neuf', gender: 'm',
    exampleArabic: 'تِسْعَةٌ وَتِسْعُونَ اسْمًا للّٰه', exampleTranslit: 'tisʿatun wa-tisʿūna sman lillāh',
    exampleFrench: "Dieu a quatre-vingt-dix-neuf noms.",
  },
  {
    id: 'vocab-70', category: 'Nombres',
    arabic: 'عَشَرَة', transliteration: 'ʿashara', french: 'dix', gender: 'm',
    exampleArabic: 'الْعَشَرَةُ أَصَابِعُ الْيَدَيْن', exampleTranslit: 'al-ʿasharatu aṣābiʿu l-yadayn',
    exampleFrench: "Dix doigts aux deux mains.",
  },

  // ── Nourriture ───────────────────────────────────────────────────────────────
  {
    id: 'vocab-71', category: 'Nourriture',
    arabic: 'لَحْم', transliteration: 'laḥm', french: 'viande', gender: 'm',
    exampleArabic: 'يَأْكُلُ الرَّجُلُ اللَّحْمَ', exampleTranslit: 'yaʾkulu r-rajulu l-laḥma',
    exampleFrench: "L'homme mange la viande.",
  },
  {
    id: 'vocab-72', category: 'Nourriture',
    arabic: 'حَلِيب', transliteration: 'ḥalīb', french: 'lait', gender: 'm',
    exampleArabic: 'الْحَلِيبُ مُفِيدٌ لِلصِّحَّة', exampleTranslit: 'al-ḥalību mufīdun liṣ-ṣiḥḥa',
    exampleFrench: "Le lait est bon pour la santé.",
  },
  {
    id: 'vocab-73', category: 'Nourriture',
    arabic: 'فَاكِهَة', transliteration: 'fākiha', french: 'fruit', gender: 'f',
    plural: 'فَوَاكِه', pluralTranslit: 'fawākih',
    exampleArabic: 'الْفَاكِهَةُ حُلْوَة', exampleTranslit: 'al-fākihatu ḥulwa',
    exampleFrench: "Le fruit est sucré.",
  },
  {
    id: 'vocab-74', category: 'Nourriture',
    arabic: 'خُضَار', transliteration: 'khuḍār', french: 'légumes', gender: 'm',
    exampleArabic: 'الْخُضَارُ مُفِيدٌ لِلصِّحَّة', exampleTranslit: 'al-khuḍāru mufīdun liṣ-ṣiḥḥa',
    exampleFrench: "Les légumes sont bons pour la santé.",
  },
  {
    id: 'vocab-75', category: 'Nourriture',
    arabic: 'زَيْت', transliteration: 'zayt', french: "huile d'olive", gender: 'm',
    exampleArabic: 'طَبَخْتُ بِالزَّيْت', exampleTranslit: 'ṭabakhtu biz-zayt',
    exampleFrench: "J'ai cuisiné à l'huile d'olive.",
  },
  {
    id: 'vocab-76', category: 'Nourriture',
    arabic: 'مِلْح', transliteration: 'milḥ', french: 'sel', gender: 'm',
    exampleArabic: 'أَضِفِ الْمِلْحَ إِلَى الطَّعَام', exampleTranslit: 'aḍifi l-milḥa ilā ṭ-ṭaʿām',
    exampleFrench: "Ajoute le sel à la nourriture.",
  },
  {
    id: 'vocab-77', category: 'Nourriture',
    arabic: 'سُكَّر', transliteration: 'sukkar', french: 'sucre', gender: 'm',
    exampleArabic: 'أُحِبُّ الْقَهْوَةَ بِسُكَّر', exampleTranslit: 'uḥibbu l-qahwata bi-sukkar',
    exampleFrench: "J'aime le café avec du sucre.",
  },
  {
    id: 'vocab-78', category: 'Nourriture',
    arabic: 'قَهْوَة', transliteration: 'qahwa', french: 'café', gender: 'f',
    exampleArabic: 'الْقَهْوَةُ الْعَرَبِيَّةُ مَشْهُورَة', exampleTranslit: 'al-qahwatu l-ʿarabiyyatu mashhūra',
    exampleFrench: "Le café arabe est célèbre.",
  },
  {
    id: 'vocab-79', category: 'Nourriture',
    arabic: 'شَاي', transliteration: 'shāy', french: 'thé', gender: 'm',
    exampleArabic: 'نَشْرَبُ الشَّايَ فِي الصَّبَاح', exampleTranslit: 'nashrabu sh-shāya fī ṣ-ṣabāḥ',
    exampleFrench: "Nous buvons le thé le matin.",
  },
  {
    id: 'vocab-80', category: 'Nourriture',
    arabic: 'تَمْر', transliteration: 'tamr', french: 'dattes', gender: 'm',
    exampleArabic: 'التَّمْرُ فَاكِهَةُ الصَّحْرَاء', exampleTranslit: 'at-tamru fākihatu ṣ-ṣaḥrāʾ',
    exampleFrench: "La datte est le fruit du désert.",
  },

  // ── Adjectifs essentiels ─────────────────────────────────────────────────────
  {
    id: 'vocab-81', category: 'Adjectifs',
    arabic: 'جَدِيد', transliteration: 'jadīd', french: 'nouveau / neuf', gender: 'm',
    exampleArabic: 'اشْتَرَيْتُ كِتَابًا جَدِيدًا', exampleTranslit: 'ishtaraytu kitāban jadīdan',
    exampleFrench: "J'ai acheté un nouveau livre.",
  },
  {
    id: 'vocab-82', category: 'Adjectifs',
    arabic: 'قَدِيم', transliteration: 'qadīm', french: 'ancien / vieux', gender: 'm',
    exampleArabic: 'الْقُدْسُ مَدِينَةٌ قَدِيمَة', exampleTranslit: 'al-qudsu madīnatun qadīma',
    exampleFrench: "Jérusalem est une ancienne ville.",
  },
  {
    id: 'vocab-83', category: 'Adjectifs',
    arabic: 'طَوِيل', transliteration: 'ṭawīl', french: 'long / grand (en hauteur)', gender: 'm',
    exampleArabic: 'الرَّجُلُ طَوِيل', exampleTranslit: 'ar-rajulu ṭawīl',
    exampleFrench: "L'homme est grand.",
  },
  {
    id: 'vocab-84', category: 'Adjectifs',
    arabic: 'قَصِير', transliteration: 'qaṣīr', french: 'court / petit (en hauteur)', gender: 'm',
    exampleArabic: 'الطَّرِيقُ قَصِير', exampleTranslit: 'aṭ-ṭarīqu qaṣīr',
    exampleFrench: "Le chemin est court.",
  },
  {
    id: 'vocab-85', category: 'Adjectifs',
    arabic: 'حَارّ', transliteration: 'ḥārr', french: 'chaud', gender: 'm',
    exampleArabic: 'الصَّيْفُ حَارّ', exampleTranslit: 'aṣ-ṣayfu ḥārr',
    exampleFrench: "L'été est chaud.",
  },
  {
    id: 'vocab-86', category: 'Adjectifs',
    arabic: 'بَارِد', transliteration: 'bārid', french: 'froid', gender: 'm',
    exampleArabic: 'الشِّتَاءُ بَارِد', exampleTranslit: 'ash-shitāʾu bārid',
    exampleFrench: "L'hiver est froid.",
  },
  {
    id: 'vocab-87', category: 'Adjectifs',
    arabic: 'قَوِيّ', transliteration: 'qawī', french: 'fort / puissant', gender: 'm',
    exampleArabic: 'اللّٰهُ قَوِيٌّ عَزِيز', exampleTranslit: 'allāhu qawiyyun ʿazīz',
    exampleFrench: "Dieu est Fort et Puissant.",
  },
  {
    id: 'vocab-88', category: 'Adjectifs',
    arabic: 'ضَعِيف', transliteration: 'ḍaʿīf', french: 'faible', gender: 'm',
    exampleArabic: 'الْإِنْسَانُ ضَعِيف', exampleTranslit: 'al-insānu ḍaʿīf',
    exampleFrench: "L'homme est faible.",
  },
  {
    id: 'vocab-89', category: 'Adjectifs',
    arabic: 'سَرِيع', transliteration: 'sarīʿ', french: 'rapide / vite', gender: 'm',
    exampleArabic: 'الْبَرْقُ سَرِيع', exampleTranslit: 'al-barqu sarīʿ',
    exampleFrench: "L'éclair est rapide.",
  },
  {
    id: 'vocab-90', category: 'Adjectifs',
    arabic: 'بَطِيء', transliteration: 'baṭīʾ', french: 'lent', gender: 'm',
    exampleArabic: 'السُّلْحُفَاةُ بَطِيئَة', exampleTranslit: 'as-sulḥufātu baṭīʾa',
    exampleFrench: "La tortue est lente.",
  },

  // ── Temps & Société ──────────────────────────────────────────────────────────
  {
    id: 'vocab-91', category: 'Temps',
    arabic: 'سَاعَة', transliteration: 'sāʿa', french: 'heure', gender: 'f',
    plural: 'سَاعَات', pluralTranslit: 'sāʿāt',
    exampleArabic: 'كَمِ السَّاعَةُ الْآن؟', exampleTranslit: 'kami s-sāʿatu l-ān?',
    exampleFrench: "Quelle heure est-il maintenant ?",
  },
  {
    id: 'vocab-92', category: 'Temps',
    arabic: 'أُسْبُوع', transliteration: 'usbūʿ', french: 'semaine', gender: 'm',
    plural: 'أَسَابِيع', pluralTranslit: 'asābīʿ',
    exampleArabic: 'الْأُسْبُوعُ سَبْعَةُ أَيَّام', exampleTranslit: 'al-usbūʿu sabʿatu ayyām',
    exampleFrench: "La semaine a sept jours.",
  },
  {
    id: 'vocab-93', category: 'Temps',
    arabic: 'شَهْر', transliteration: 'shahr', french: 'mois', gender: 'm',
    plural: 'أَشْهُر', pluralTranslit: 'ashhur',
    exampleArabic: 'رَمَضَانُ شَهْرٌ مُبَارَك', exampleTranslit: 'ramaḍānu shahrun mubārak',
    exampleFrench: "Le ramadan est un mois béni.",
  },
  {
    id: 'vocab-94', category: 'Temps',
    arabic: 'سَنَة', transliteration: 'sana', french: 'année', gender: 'f',
    plural: 'سَنَوَات', pluralTranslit: 'sanawāt',
    exampleArabic: 'السَّنَةُ اثْنَا عَشَرَ شَهْرًا', exampleTranslit: 'as-sanatu thna ʿashara shahran',
    exampleFrench: "L'année a douze mois.",
  },
  {
    id: 'vocab-95', category: 'Temps',
    arabic: 'شَيْء', transliteration: 'shayʾ', french: 'chose', gender: 'm',
    plural: 'أَشْيَاء', pluralTranslit: 'ashyāʾ',
    exampleArabic: 'كُلُّ شَيْءٍ بِإِذْنِ اللّٰه', exampleTranslit: 'kullu shayʾin bi-idhni llāh',
    exampleFrench: "Toute chose (est) avec la permission de Dieu.",
  },
  {
    id: 'vocab-96', category: 'Société',
    arabic: 'عَمَل', transliteration: 'ʿamal', french: 'travail / action', gender: 'm',
    plural: 'أَعْمَال', pluralTranslit: 'aʿmāl',
    exampleArabic: 'الْعَمَلُ الصَّالِحُ نُور', exampleTranslit: 'al-ʿamalu ṣ-ṣāliḥu nūr',
    exampleFrench: "L'action pieuse est lumière.",
  },
  {
    id: 'vocab-97', category: 'Société',
    arabic: 'مَال', transliteration: 'māl', french: 'argent / richesse', gender: 'm',
    plural: 'أَمْوَال', pluralTranslit: 'amwāl',
    exampleArabic: 'الْمَالُ زِينَةُ الْحَيَاة', exampleTranslit: 'al-mālu zīnatu l-ḥayāt',
    exampleFrench: "L'argent est l'ornement de la vie.",
  },
  {
    id: 'vocab-98', category: 'Société',
    arabic: 'مَلِك', transliteration: 'malik', french: 'roi', gender: 'm',
    plural: 'مُلُوك', pluralTranslit: 'mulūk',
    exampleArabic: 'الْمَلِكُ يَحْكُمُ بِالْعَدْل', exampleTranslit: 'al-maliku yaḥkumu bil-ʿadl',
    exampleFrench: "Le roi gouverne avec justice.",
  },
  {
    id: 'vocab-99', category: 'Société',
    arabic: 'شَعْب', transliteration: 'shaʿb', french: 'peuple / nation', gender: 'm',
    plural: 'شُعُوب', pluralTranslit: 'shuʿūb',
    exampleArabic: 'الشَّعْبُ يُرِيدُ الْحُرِّيَّة', exampleTranslit: 'ash-shaʿbu yurīdu l-ḥurriyya',
    exampleFrench: "Le peuple veut la liberté.",
  },
  {
    id: 'vocab-100', category: 'Société',
    arabic: 'حَيَاة', transliteration: 'ḥayāt', french: 'vie', gender: 'f',
    exampleArabic: 'الْحَيَاةُ قَصِيرَة', exampleTranslit: 'al-ḥayātu qaṣīra',
    exampleFrench: "La vie est courte.",
  },
]

export const VOCAB_LESSONS: { lessonId: string; title: string; subtitle: string; cardIds: string[] }[] = [
  { lessonId: 'vocab-l1',  title: 'Famille & Personnes',    subtitle: '10 mots essentiels',    cardIds: VOCABULARY.slice(0,10).map(c=>c.id) },
  { lessonId: 'vocab-l2',  title: 'Corps humain & Nature',  subtitle: '10 mots du monde',      cardIds: VOCABULARY.slice(10,20).map(c=>c.id) },
  { lessonId: 'vocab-l3',  title: 'Lieux & Bâtiments',      subtitle: '10 lieux importants',   cardIds: VOCABULARY.slice(20,30).map(c=>c.id) },
  { lessonId: 'vocab-l4',  title: 'Savoir & Spirituel',     subtitle: '10 mots du savoir',     cardIds: VOCABULARY.slice(30,40).map(c=>c.id) },
  { lessonId: 'vocab-l5',  title: 'Vie Quotidienne',        subtitle: '10 mots du quotidien',  cardIds: VOCABULARY.slice(40,50).map(c=>c.id) },
  { lessonId: 'vocab-l6',  title: 'Les Couleurs',           subtitle: '10 couleurs en arabe',  cardIds: VOCABULARY.slice(50,60).map(c=>c.id) },
  { lessonId: 'vocab-l7',  title: 'Les Nombres',            subtitle: '10 chiffres fondamentaux', cardIds: VOCABULARY.slice(60,70).map(c=>c.id) },
  { lessonId: 'vocab-l8',  title: 'Nourriture & Boissons',  subtitle: '10 aliments du monde arabe', cardIds: VOCABULARY.slice(70,80).map(c=>c.id) },
  { lessonId: 'vocab-l9',  title: 'Adjectifs Essentiels',   subtitle: '10 qualificatifs clés', cardIds: VOCABULARY.slice(80,90).map(c=>c.id) },
  { lessonId: 'vocab-l10', title: 'Temps & Société',        subtitle: '10 mots de la vie sociale', cardIds: VOCABULARY.slice(90,100).map(c=>c.id) },
]

export const VOCAB_MAP = new Map(VOCABULARY.map(c => [c.id, c]))
