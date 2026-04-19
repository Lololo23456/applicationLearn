export interface ConjugationCard {
  id: string
  root: string              // racine trilittère : ك-ت-ب
  rootMeaning: string       // sens de la racine : écrire
  scheme: string            // schème verbal : فَعَلَ يَفْعُلُ
  past3ms: string           // passé 3ème masc. sing. : كَتَبَ
  past3msTranslit: string
  present3ms: string        // présent 3ème masc. sing. : يَكْتُبُ
  present3msTranslit: string
  imperative2ms: string     // impératif 2ème masc. sing. : اُكْتُبْ
  imperativeTranslit: string
  verbalNoun: string        // masdar : كِتَابَة
  verbalNounTranslit: string
  verbalNounMeaning: string
  exampleArabic: string
  exampleTranslit: string
  exampleFrench: string
  type: 'I' | 'II' | 'III' // type de verbe (forme I surtout pour débutants)
}

export const CONJUGATION: ConjugationCard[] = [
  {
    id: 'conj-01',
    root: 'ك-ت-ب', rootMeaning: 'écrire', scheme: 'فَعَلَ يَفْعُلُ', type: 'I',
    past3ms: 'كَتَبَ', past3msTranslit: 'kataba',
    present3ms: 'يَكْتُبُ', present3msTranslit: 'yaktubu',
    imperative2ms: 'اُكْتُبْ', imperativeTranslit: 'uktub',
    verbalNoun: 'كِتَابَة', verbalNounTranslit: 'kitāba', verbalNounMeaning: "écriture / le fait d'écrire",
    exampleArabic: 'الطَّالِبُ يَكْتُبُ الدَّرْسَ',
    exampleTranslit: 'aṭ-ṭālibu yaktubu ad-darsa',
    exampleFrench: "L'étudiant écrit la leçon.",
  },
  {
    id: 'conj-02',
    root: 'ق-ر-أ', rootMeaning: 'lire', scheme: 'فَعَلَ يَفْعَلُ', type: 'I',
    past3ms: 'قَرَأَ', past3msTranslit: 'qaraʾa',
    present3ms: 'يَقْرَأُ', present3msTranslit: 'yaqraʾu',
    imperative2ms: 'اِقْرَأْ', imperativeTranslit: 'iqraʾ',
    verbalNoun: 'قِرَاءَة', verbalNounTranslit: 'qirāʾa', verbalNounMeaning: 'lecture / le fait de lire',
    exampleArabic: 'اِقْرَأْ بِاسْمِ رَبِّكَ',
    exampleTranslit: 'iqraʾ bi-smi rabbika',
    exampleFrench: "Lis au nom de ton Seigneur. (Coran 96:1)",
  },
  {
    id: 'conj-03',
    root: 'ذ-ه-ب', rootMeaning: 'aller', scheme: 'فَعَلَ يَفْعَلُ', type: 'I',
    past3ms: 'ذَهَبَ', past3msTranslit: 'dhahaba',
    present3ms: 'يَذْهَبُ', present3msTranslit: 'yadhhabu',
    imperative2ms: 'اِذْهَبْ', imperativeTranslit: 'idhhab',
    verbalNoun: 'ذَهَاب', verbalNounTranslit: 'dhahāb', verbalNounMeaning: "le fait d'aller / départ",
    exampleArabic: 'ذَهَبَ الطَّالِبُ إِلَى الْمَدْرَسَة',
    exampleTranslit: 'dhahaba aṭ-ṭālibu ilā l-madrasa',
    exampleFrench: "L'étudiant est allé à l'école.",
  },
  {
    id: 'conj-04',
    root: 'أ-ك-ل', rootMeaning: 'manger', scheme: 'فَعَلَ يَأْكُلُ', type: 'I',
    past3ms: 'أَكَلَ', past3msTranslit: 'akala',
    present3ms: 'يَأْكُلُ', present3msTranslit: 'yaʾkulu',
    imperative2ms: 'كُلْ', imperativeTranslit: 'kul',
    verbalNoun: 'أَكْل', verbalNounTranslit: 'akl', verbalNounMeaning: 'le fait de manger / nourriture',
    exampleArabic: 'الْوَلَدُ يَأْكُلُ الْخُبْزَ',
    exampleTranslit: 'al-waladu yaʾkulu l-khubza',
    exampleFrench: "L'enfant mange le pain.",
  },
  {
    id: 'conj-05',
    root: 'ش-ر-ب', rootMeaning: 'boire', scheme: 'فَعَلَ يَشْرَبُ', type: 'I',
    past3ms: 'شَرِبَ', past3msTranslit: 'shariba',
    present3ms: 'يَشْرَبُ', present3msTranslit: 'yashrabu',
    imperative2ms: 'اِشْرَبْ', imperativeTranslit: 'ishrab',
    verbalNoun: 'شُرْب', verbalNounTranslit: 'shurb', verbalNounMeaning: 'le fait de boire / boisson',
    exampleArabic: 'اِشْرَبِ الْمَاءَ',
    exampleTranslit: 'ishrabi l-māʾa',
    exampleFrench: "Bois l'eau.",
  },
  {
    id: 'conj-06',
    root: 'ع-ل-م', rootMeaning: 'savoir / connaître', scheme: 'فَعِلَ يَفْعَلُ', type: 'I',
    past3ms: 'عَلِمَ', past3msTranslit: 'ʿalima',
    present3ms: 'يَعْلَمُ', present3msTranslit: 'yaʿlamu',
    imperative2ms: 'اِعْلَمْ', imperativeTranslit: 'iʿlam',
    verbalNoun: 'عِلْم', verbalNounTranslit: 'ʿilm', verbalNounMeaning: 'connaissance / science',
    exampleArabic: 'اِعْلَمْ أَنَّ اللّٰهَ عَلِيم',
    exampleTranslit: 'iʿlam anna llāha ʿalīm',
    exampleFrench: "Sache que Dieu est Omniscient.",
  },
  {
    id: 'conj-07',
    root: 'ف-ه-م', rootMeaning: 'comprendre', scheme: 'فَعِلَ يَفْعَلُ', type: 'I',
    past3ms: 'فَهِمَ', past3msTranslit: 'fahima',
    present3ms: 'يَفْهَمُ', present3msTranslit: 'yafhamu',
    imperative2ms: 'اِفْهَمْ', imperativeTranslit: 'ifham',
    verbalNoun: 'فَهْم', verbalNounTranslit: 'fahm', verbalNounMeaning: 'compréhension',
    exampleArabic: 'هَلْ فَهِمْتَ الدَّرْسَ؟',
    exampleTranslit: 'hal fahimta d-darsa?',
    exampleFrench: "As-tu compris la leçon ?",
  },
  {
    id: 'conj-08',
    root: 'س-م-ع', rootMeaning: 'entendre / écouter', scheme: 'فَعِلَ يَفْعَلُ', type: 'I',
    past3ms: 'سَمِعَ', past3msTranslit: 'samiʿa',
    present3ms: 'يَسْمَعُ', present3msTranslit: 'yasmaʿu',
    imperative2ms: 'اِسْمَعْ', imperativeTranslit: 'ismaʿ',
    verbalNoun: 'سَمَاع', verbalNounTranslit: 'samāʿ', verbalNounMeaning: 'ouïe / écoute',
    exampleArabic: 'اللّٰهُ يَسْمَعُ كُلَّ شَيْء',
    exampleTranslit: 'allāhu yasmaʿu kulla shayʾ',
    exampleFrench: "Dieu entend toute chose.",
  },
  {
    id: 'conj-09',
    root: 'ق-و-ل', rootMeaning: 'dire / parler', scheme: 'فَعَلَ يَفْعُلُ (أجوف)', type: 'I',
    past3ms: 'قَالَ', past3msTranslit: 'qāla',
    present3ms: 'يَقُولُ', present3msTranslit: 'yaqūlu',
    imperative2ms: 'قُلْ', imperativeTranslit: 'qul',
    verbalNoun: 'قَوْل', verbalNounTranslit: 'qawl', verbalNounMeaning: 'parole / discours',
    exampleArabic: 'قُلِ الْحَقَّ',
    exampleTranslit: 'quli l-ḥaqqa',
    exampleFrench: "Dis la vérité.",
  },
  {
    id: 'conj-10',
    root: 'ج-ل-س', rootMeaning: "s'asseoir", scheme: 'فَعَلَ يَفْعِلُ', type: 'I',
    past3ms: 'جَلَسَ', past3msTranslit: 'jalasa',
    present3ms: 'يَجْلِسُ', present3msTranslit: 'yajlisu',
    imperative2ms: 'اِجْلِسْ', imperativeTranslit: 'ijlis',
    verbalNoun: 'جُلُوس', verbalNounTranslit: 'julūs', verbalNounMeaning: "le fait de s'asseoir / séance",
    exampleArabic: 'اِجْلِسْ وَاقْرَأْ',
    exampleTranslit: 'ijlis wa-qraʾ',
    exampleFrench: "Assieds-toi et lis.",
  },
]

export const CONJ_LESSONS: { lessonId: string; title: string; subtitle: string; cardIds: string[] }[] = [
  { lessonId: 'conj-l1', title: 'Écrire & Lire',            subtitle: 'Racines ك-ت-ب et ق-ر-أ', cardIds: ['conj-01','conj-02'] },
  { lessonId: 'conj-l2', title: 'Aller & Manger',           subtitle: 'Racines ذ-ه-ب et أ-ك-ل', cardIds: ['conj-03','conj-04'] },
  { lessonId: 'conj-l3', title: 'Boire & Savoir',           subtitle: 'Racines ش-ر-ب et ع-ل-م', cardIds: ['conj-05','conj-06'] },
  { lessonId: 'conj-l4', title: 'Comprendre & Entendre',    subtitle: 'Racines ف-ه-م et س-م-ع', cardIds: ['conj-07','conj-08'] },
  { lessonId: 'conj-l5', title: "Dire & S'asseoir",         subtitle: 'Racines ق-و-ل et ج-ل-س', cardIds: ['conj-09','conj-10'] },
]

export const CONJ_MAP = new Map(CONJUGATION.map(c => [c.id, c]))
