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

  // ── Expressions religieuses ───────────────────────────────────────────────────
  {
    id: 'phrase-11',
    arabic: 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ',
    transliteration: 'bismi llāhi r-raḥmāni r-raḥīm',
    french: 'Au nom de Dieu le Tout-Miséricordieux, le Très-Miséricordieux',
    context: "La Basmala. Ouvre chaque sourate du Coran et tout acte important.",
    grammaticalNote: "بِ = préposition 'au nom de' | اسْم = nom | الرَّحْمٰن / الرَّحِيم = deux attributs de miséricorde divine",
  },
  {
    id: 'phrase-12',
    arabic: 'الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِينَ',
    transliteration: 'al-ḥamdu lillāhi rabbi l-ʿālamīn',
    french: 'Louange à Dieu, Seigneur des mondes',
    context: "Ouverture de la Fātiḥa (première sourate). Expression de gratitude.",
    grammaticalNote: "الْحَمْد = la louange (nominatif) | لِ = à (datif) | رَبّ = Seigneur (apposition en génitif) | الْعَالَمِين = les mondes (pluriel masculin sain)",
  },
  {
    id: 'phrase-13',
    arabic: 'إِنْ شَاءَ اللّٰهُ',
    transliteration: 'in shāʾa llāhu',
    french: 'Si Dieu le veut (Inch\'Allah)',
    context: "Exprime la soumission à la volonté divine. Utilisé pour tout projet futur.",
    grammaticalNote: "إِنْ = si (conditionnel) | شَاءَ = il a voulu (passé de ش-ي-أ) | اللّٰه = Dieu (nominatif, sujet)",
  },
  {
    id: 'phrase-14',
    arabic: 'مَا شَاءَ اللّٰهُ',
    transliteration: 'māshāʾa llāhu',
    french: 'Ce que Dieu a voulu — quelle merveille !',
    context: "Exprime l'admiration et la gratitude. Utilisé pour complimenter sans attirer le mauvais œil.",
    grammaticalNote: "مَا = ce que (relatif) | شَاءَ = a voulu | اللّٰه = Dieu. Phrase nominale exclamative.",
  },
  {
    id: 'phrase-15',
    arabic: 'أَسْتَغْفِرُ اللّٰهَ',
    transliteration: 'astaghfiru llāha',
    french: 'Je demande pardon à Dieu',
    context: "L'istighfār : formule de repentir. Répétée après la prière ou en cas d'erreur.",
    grammaticalNote: "أَسْتَغْفِرُ = je demande le pardon (forme X, 1ère pers.) | اللّٰهَ = Dieu (accusatif, complément d'objet)",
  },

  // ── Voyage & pratique ────────────────────────────────────────────────────────
  {
    id: 'phrase-16',
    arabic: 'أَيْنَ الْحَمَّامُ؟',
    transliteration: 'ayna l-ḥammāmu?',
    french: 'Où sont les toilettes ?',
    context: "Nécessité pratique en voyage dans un pays arabophone.",
    grammaticalNote: "أَيْنَ = où (interrogatif de lieu) | الْحَمَّام = la salle de bain (nominatif, sujet implicite)",
  },
  {
    id: 'phrase-17',
    arabic: 'كَمْ هٰذَا؟',
    transliteration: 'kam hādhā?',
    french: 'Combien ça coûte ?',
    context: "Demander le prix d'un article au marché ou dans une boutique.",
    grammaticalNote: "كَمْ = combien (interrogatif de quantité) | هٰذَا = ceci (démonstratif masculin)",
  },
  {
    id: 'phrase-18',
    arabic: 'لَا أَفْهَمُ',
    transliteration: 'lā afhamu',
    french: 'Je ne comprends pas',
    context: "Exprimer l'incompréhension face à quelqu'un qui parle arabe.",
    grammaticalNote: "لَا = ne...pas (négation du présent) | أَفْهَمُ = je comprends (1ère pers. présent de ف-ه-م)",
  },
  {
    id: 'phrase-19',
    arabic: 'مِنْ أَيْنَ أَنْتَ؟',
    transliteration: 'min ayna anta?',
    french: 'D\'où viens-tu ?',
    context: "Demander l'origine de quelqu'un.",
    grammaticalNote: "مِنْ = de (préposition d'origine) | أَيْنَ = où | أَنْتَ = tu (pronom personnel masculin)",
  },
  {
    id: 'phrase-20',
    arabic: 'أَنَا مِنْ فَرَنْسَا',
    transliteration: 'anā min faransā',
    french: 'Je suis de France',
    context: "Se présenter en donnant son pays d'origine.",
    grammaticalNote: "أَنَا = je | مِنْ = de (origine) | فَرَنْسَا = France (nom propre invariable, emprunté)",
  },

  // ── Questions courantes ───────────────────────────────────────────────────────
  {
    id: 'phrase-21',
    arabic: 'كَمْ عُمْرُكَ؟',
    transliteration: 'kam ʿumruka?',
    french: 'Quel âge as-tu ?',
    context: "Demander l'âge de quelqu'un.",
    grammaticalNote: "كَمْ = combien | عُمْر = âge/vie | كَ = ton (suffixe possessif masculin 2ème pers.)",
  },
  {
    id: 'phrase-22',
    arabic: 'عُمْرِي عِشْرُونَ سَنَة',
    transliteration: 'ʿumrī ʿishrūna sana',
    french: "J'ai vingt ans",
    context: "Répondre à la question sur l'âge.",
    grammaticalNote: "عُمْرِي = mon âge (iḍāfa : عُمْر + ي) | عِشْرُون = vingt (pluriel sain masculin) | سَنَة = an (accusatif)",
  },
  {
    id: 'phrase-23',
    arabic: 'أُحِبُّ الْعَرَبِيَّةَ',
    transliteration: 'uḥibbu l-ʿarabiyya',
    french: "J'aime l'arabe",
    context: "Exprimer son amour pour la langue arabe.",
    grammaticalNote: "أُحِبُّ = j'aime (forme IV de ح-ب-ب, 1ère pers.) | الْعَرَبِيَّة = l'arabe (accusatif, objet direct)",
  },
  {
    id: 'phrase-24',
    arabic: 'هٰذَا صَعْب',
    transliteration: 'hādhā ṣaʿb',
    french: "C'est difficile",
    context: "Exprimer la difficulté face à un exercice ou une situation.",
    grammaticalNote: "هٰذَا = ceci (démonstratif) | صَعْب = difficile (adjectif, nominatif, prédicat implicite)",
  },
  {
    id: 'phrase-25',
    arabic: 'هٰذَا سَهْل',
    transliteration: 'hādhā sahl',
    french: "C'est facile",
    context: "Exprimer la facilité. Opposé de صَعْب.",
    grammaticalNote: "هٰذَا = ceci | سَهْل = facile (adjectif). Phrase nominale sans copule 'est'.",
  },

  // ── Expressions du quotidien ──────────────────────────────────────────────────
  {
    id: 'phrase-26',
    arabic: 'مِنْ فَضْلِكَ',
    transliteration: 'min faḍlika',
    french: "S'il te plaît",
    context: "Formule de politesse pour faire une demande.",
    grammaticalNote: "مِنْ = de | فَضْل = grâce/faveur | كَ = ton (génitif). Litt. : 'de ta grâce'.",
  },
  {
    id: 'phrase-27',
    arabic: 'عَفْوًا',
    transliteration: 'ʿafwan',
    french: 'Pardon / De rien / Excusez-moi',
    context: "Employé pour s'excuser (pardon) ou répondre à un remerciement (de rien).",
    grammaticalNote: "عَفْو = pardon/grâce (masdar) au cas accusatif indéfini (-an). Forme adverbiale.",
  },
  {
    id: 'phrase-28',
    arabic: 'تَفَضَّلْ',
    transliteration: 'tafaḍḍal',
    french: 'Voici / Entrez / Je vous en prie',
    context: "Invitation à entrer, à prendre quelque chose, ou formule de bienveillance.",
    grammaticalNote: "تَفَضَّلْ = impératif de la forme V de ف-ض-ل. Au féminin : تَفَضَّلِي. Au pluriel : تَفَضَّلُوا.",
  },
  {
    id: 'phrase-29',
    arabic: 'إِلَى اللِّقَاء',
    transliteration: 'ilā l-liqāʾ',
    french: 'À bientôt / Au revoir',
    context: "Formule de départ plus douce que مَعَ السَّلَامَة.",
    grammaticalNote: "إِلَى = jusqu'à / à (préposition) | اللِّقَاء = la rencontre (accusatif). Litt. : 'jusqu'à la rencontre'.",
  },
  {
    id: 'phrase-30',
    arabic: 'بِالتَّوْفِيق',
    transliteration: 'bi-t-tawfīq',
    french: 'Bonne chance / Avec succès',
    context: "Souhait adressé à quelqu'un avant un examen, un projet, un voyage.",
    grammaticalNote: "بِ = avec (préposition) | التَّوْفِيق = le succès/la réussite accordée par Dieu. Expression figée.",
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
  {
    lessonId: 'phrase-l3',
    title: 'Expressions religieuses',
    subtitle: '5 formules coraniques et islamiques',
    cardIds: ['phrase-11','phrase-12','phrase-13','phrase-14','phrase-15'],
  },
  {
    lessonId: 'phrase-l4',
    title: 'Voyage & Pratique',
    subtitle: '5 phrases pour voyager en pays arabe',
    cardIds: ['phrase-16','phrase-17','phrase-18','phrase-19','phrase-20'],
  },
  {
    lessonId: 'phrase-l5',
    title: 'Questions courantes',
    subtitle: '5 questions et réponses essentielles',
    cardIds: ['phrase-21','phrase-22','phrase-23','phrase-24','phrase-25'],
  },
  {
    lessonId: 'phrase-l6',
    title: 'Politesse & Expressions',
    subtitle: '5 formules de courtoisie',
    cardIds: ['phrase-26','phrase-27','phrase-28','phrase-29','phrase-30'],
  },
]

export const PHRASE_MAP = new Map(PHRASES.map(c => [c.id, c]))
