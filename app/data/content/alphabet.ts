export interface AlphabetCard {
  id: string
  letter: string           // forme isolée : ب
  name: string             // nom français : Ba
  nameArabic: string       // nom arabe : بَاء
  transliteration: string  // son : b
  forms: {
    isolated: string
    initial: string        // lettre + tatweel
    medial: string         // tatweel + lettre + tatweel
    final: string          // tatweel + lettre
  }
  connects: boolean        // se connecte des deux côtés
  pronunciation: string    // description courte
  exampleWord: string      // mot exemple
  exampleTranslit: string
  exampleMeaning: string
}

export const ALPHABET: AlphabetCard[] = [
  {
    id: 'alph-01', letter: 'ا', name: 'Alif', nameArabic: 'أَلِف', transliteration: 'ā / a',
    forms: { isolated: 'ا', initial: 'اـ', medial: 'ـا', final: 'ـا' },
    connects: false,
    pronunciation: "Voyelle longue. S'écrit différemment selon qu'elle porte une hamza (أ إ) ou non (ا).",
    exampleWord: 'أَرْض', exampleTranslit: 'arḍ', exampleMeaning: 'terre',
  },
  {
    id: 'alph-02', letter: 'ب', name: 'Ba', nameArabic: 'بَاء', transliteration: 'b',
    forms: { isolated: 'ب', initial: 'بـ', medial: 'ـبـ', final: 'ـب' },
    connects: true,
    pronunciation: 'Comme le B français, bien occlusive bilabiale.',
    exampleWord: 'بَيْت', exampleTranslit: 'bayt', exampleMeaning: 'maison',
  },
  {
    id: 'alph-03', letter: 'ت', name: 'Ta', nameArabic: 'تَاء', transliteration: 't',
    forms: { isolated: 'ت', initial: 'تـ', medial: 'ـتـ', final: 'ـت' },
    connects: true,
    pronunciation: 'Comme le T français, occlusive dentale.',
    exampleWord: 'تُفَّاح', exampleTranslit: 'tuffāḥ', exampleMeaning: 'pomme',
  },
  {
    id: 'alph-04', letter: 'ث', name: 'Tha', nameArabic: 'ثَاء', transliteration: 'th',
    forms: { isolated: 'ث', initial: 'ثـ', medial: 'ـثـ', final: 'ـث' },
    connects: true,
    pronunciation: "Comme le 'th' anglais dans 'think', fricative dentale sourde.",
    exampleWord: 'ثَلَاثَة', exampleTranslit: 'thalātha', exampleMeaning: 'trois',
  },
  {
    id: 'alph-05', letter: 'ج', name: 'Jim', nameArabic: 'جِيم', transliteration: 'j',
    forms: { isolated: 'ج', initial: 'جـ', medial: 'ـجـ', final: 'ـج' },
    connects: true,
    pronunciation: "Comme le J français ou le 'g' de 'gym' selon les régions. En fusha : comme le G dur.",
    exampleWord: 'جَبَل', exampleTranslit: 'jabal', exampleMeaning: 'montagne',
  },
  {
    id: 'alph-06', letter: 'ح', name: 'Ha (pharyngal)', nameArabic: 'حَاء', transliteration: 'ḥ',
    forms: { isolated: 'ح', initial: 'حـ', medial: 'ـحـ', final: 'ـح' },
    connects: true,
    pronunciation: "Friction pharyngale sourde. Comme un H aspiré du fond de la gorge, sans vibration.",
    exampleWord: 'حَيَاة', exampleTranslit: 'ḥayāt', exampleMeaning: 'vie',
  },
  {
    id: 'alph-07', letter: 'خ', name: 'Kha', nameArabic: 'خَاء', transliteration: 'kh',
    forms: { isolated: 'خ', initial: 'خـ', medial: 'ـخـ', final: 'ـخ' },
    connects: true,
    pronunciation: "Comme le 'ch' allemand dans 'Bach', fricative vélaire sourde.",
    exampleWord: 'خُبْز', exampleTranslit: 'khubz', exampleMeaning: 'pain',
  },
  {
    id: 'alph-08', letter: 'د', name: 'Dal', nameArabic: 'دَال', transliteration: 'd',
    forms: { isolated: 'د', initial: 'دـ', medial: 'ـد', final: 'ـد' },
    connects: false,
    pronunciation: 'Comme le D français, occlusive dentale voisée.',
    exampleWord: 'دِرَاسَة', exampleTranslit: 'dirāsa', exampleMeaning: 'étude',
  },
  {
    id: 'alph-09', letter: 'ذ', name: 'Dhal', nameArabic: 'ذَال', transliteration: 'dh',
    forms: { isolated: 'ذ', initial: 'ذـ', medial: 'ـذ', final: 'ـذ' },
    connects: false,
    pronunciation: "Comme le 'th' anglais dans 'this', fricative dentale voisée.",
    exampleWord: 'ذَهَب', exampleTranslit: 'dhahab', exampleMeaning: 'or',
  },
  {
    id: 'alph-10', letter: 'ر', name: 'Ra', nameArabic: 'رَاء', transliteration: 'r',
    forms: { isolated: 'ر', initial: 'رـ', medial: 'ـر', final: 'ـر' },
    connects: false,
    pronunciation: 'R roulé, vibrant alvéolaire. Légèrement emphatique selon le contexte.',
    exampleWord: 'رَجُل', exampleTranslit: 'rajul', exampleMeaning: 'homme',
  },
  {
    id: 'alph-11', letter: 'ز', name: 'Zay', nameArabic: 'زَاي', transliteration: 'z',
    forms: { isolated: 'ز', initial: 'زـ', medial: 'ـز', final: 'ـز' },
    connects: false,
    pronunciation: 'Comme le Z français, fricative alvéolaire voisée.',
    exampleWord: 'زَمَان', exampleTranslit: 'zamān', exampleMeaning: 'temps',
  },
  {
    id: 'alph-12', letter: 'س', name: 'Sin', nameArabic: 'سِين', transliteration: 's',
    forms: { isolated: 'س', initial: 'سـ', medial: 'ـسـ', final: 'ـس' },
    connects: true,
    pronunciation: 'Comme le S français, fricative alvéolaire sourde.',
    exampleWord: 'سَمَاء', exampleTranslit: 'samāʾ', exampleMeaning: 'ciel',
  },
  {
    id: 'alph-13', letter: 'ش', name: 'Shin', nameArabic: 'شِين', transliteration: 'sh',
    forms: { isolated: 'ش', initial: 'شـ', medial: 'ـشـ', final: 'ـش' },
    connects: true,
    pronunciation: "Comme le 'ch' français dans 'chat', fricative post-alvéolaire.",
    exampleWord: 'شَمْس', exampleTranslit: 'shams', exampleMeaning: 'soleil',
  },
  {
    id: 'alph-14', letter: 'ص', name: 'Sad (emphatique)', nameArabic: 'صَاد', transliteration: 'ṣ',
    forms: { isolated: 'ص', initial: 'صـ', medial: 'ـصـ', final: 'ـص' },
    connects: true,
    pronunciation: "S emphatique : articulation plus reculée, lèvres arrondies. Colore les voyelles voisines en 'o/â'.",
    exampleWord: 'صَبَاح', exampleTranslit: 'ṣabāḥ', exampleMeaning: 'matin',
  },
  {
    id: 'alph-15', letter: 'ض', name: 'Dad (emphatique)', nameArabic: 'ضَاد', transliteration: 'ḍ',
    forms: { isolated: 'ض', initial: 'ضـ', medial: 'ـضـ', final: 'ـض' },
    connects: true,
    pronunciation: "D emphatique, propre à l'arabe. La langue arabe est parfois appelée 'langue du ḍ'.",
    exampleWord: 'ضَوْء', exampleTranslit: 'ḍawʾ', exampleMeaning: 'lumière',
  },
  {
    id: 'alph-16', letter: 'ط', name: 'Ta (emphatique)', nameArabic: 'طَاء', transliteration: 'ṭ',
    forms: { isolated: 'ط', initial: 'طـ', medial: 'ـطـ', final: 'ـط' },
    connects: true,
    pronunciation: 'T emphatique : articulation avec la langue rétractée vers le voile du palais.',
    exampleWord: 'طَرِيق', exampleTranslit: 'ṭarīq', exampleMeaning: 'route',
  },
  {
    id: 'alph-17', letter: 'ظ', name: 'Dha (emphatique)', nameArabic: 'ظَاء', transliteration: 'ẓ',
    forms: { isolated: 'ظ', initial: 'ظـ', medial: 'ـظـ', final: 'ـظ' },
    connects: true,
    pronunciation: "Dhal emphatique. Dans certaines traditions, prononcé comme un D ou Z emphatique.",
    exampleWord: 'ظِلّ', exampleTranslit: 'ẓill', exampleMeaning: 'ombre',
  },
  {
    id: 'alph-18', letter: 'ع', name: 'Ayn', nameArabic: 'عَيْن', transliteration: 'ʿ',
    forms: { isolated: 'ع', initial: 'عـ', medial: 'ـعـ', final: 'ـع' },
    connects: true,
    pronunciation: "Constriction pharyngale voisée — unique à l'arabe. Contraction du pharynx en émettant un son.",
    exampleWord: 'عِلْم', exampleTranslit: 'ʿilm', exampleMeaning: 'connaissance',
  },
  {
    id: 'alph-19', letter: 'غ', name: 'Ghayn', nameArabic: 'غَيْن', transliteration: 'gh',
    forms: { isolated: 'غ', initial: 'غـ', medial: 'ـغـ', final: 'ـغ' },
    connects: true,
    pronunciation: "Comme le R parisien, fricative uvulaire voisée. Version voisée du خ.",
    exampleWord: 'غَيْم', exampleTranslit: 'ghaym', exampleMeaning: 'nuage',
  },
  {
    id: 'alph-20', letter: 'ف', name: 'Fa', nameArabic: 'فَاء', transliteration: 'f',
    forms: { isolated: 'ف', initial: 'فـ', medial: 'ـفـ', final: 'ـف' },
    connects: true,
    pronunciation: 'Comme le F français, fricative labio-dentale sourde.',
    exampleWord: 'فِكْر', exampleTranslit: 'fikr', exampleMeaning: 'pensée',
  },
  {
    id: 'alph-21', letter: 'ق', name: 'Qaf', nameArabic: 'قَاف', transliteration: 'q',
    forms: { isolated: 'ق', initial: 'قـ', medial: 'ـقـ', final: 'ـق' },
    connects: true,
    pronunciation: "K articulé très en arrière, au niveau de l'uvule. Occlusive uvulaire sourde.",
    exampleWord: 'قَلْب', exampleTranslit: 'qalb', exampleMeaning: 'cœur',
  },
  {
    id: 'alph-22', letter: 'ك', name: 'Kaf', nameArabic: 'كَاف', transliteration: 'k',
    forms: { isolated: 'ك', initial: 'كـ', medial: 'ـكـ', final: 'ـك' },
    connects: true,
    pronunciation: 'Comme le K français, occlusive vélaire sourde.',
    exampleWord: 'كِتَاب', exampleTranslit: 'kitāb', exampleMeaning: 'livre',
  },
  {
    id: 'alph-23', letter: 'ل', name: 'Lam', nameArabic: 'لَام', transliteration: 'l',
    forms: { isolated: 'ل', initial: 'لـ', medial: 'ـلـ', final: 'ـل' },
    connects: true,
    pronunciation: "Comme le L français. Note : لا (lā) = non, et اللَّه (Allāh) a un L emphatique.",
    exampleWord: 'لُغَة', exampleTranslit: 'lugha', exampleMeaning: 'langue',
  },
  {
    id: 'alph-24', letter: 'م', name: 'Mim', nameArabic: 'مِيم', transliteration: 'm',
    forms: { isolated: 'م', initial: 'مـ', medial: 'ـمـ', final: 'ـم' },
    connects: true,
    pronunciation: 'Comme le M français, nasale bilabiale.',
    exampleWord: 'مَدِينَة', exampleTranslit: 'madīna', exampleMeaning: 'ville',
  },
  {
    id: 'alph-25', letter: 'ن', name: 'Nun', nameArabic: 'نُون', transliteration: 'n',
    forms: { isolated: 'ن', initial: 'نـ', medial: 'ـنـ', final: 'ـن' },
    connects: true,
    pronunciation: 'Comme le N français, nasale alvéolaire.',
    exampleWord: 'نَهْر', exampleTranslit: 'nahr', exampleMeaning: 'rivière',
  },
  {
    id: 'alph-26', letter: 'ه', name: 'Ha (glottale)', nameArabic: 'هَاء', transliteration: 'h',
    forms: { isolated: 'ه', initial: 'هـ', medial: 'ـهـ', final: 'ـه' },
    connects: true,
    pronunciation: "H aspiré doux, comme en anglais 'hello'. Toujours prononcé en arabe classique.",
    exampleWord: 'هَوَاء', exampleTranslit: 'hawāʾ', exampleMeaning: 'air',
  },
  {
    id: 'alph-27', letter: 'و', name: 'Waw', nameArabic: 'وَاو', transliteration: 'w / ū',
    forms: { isolated: 'و', initial: 'وـ', medial: 'ـو', final: 'ـو' },
    connects: false,
    pronunciation: "Consonne : comme le W anglais. Voyelle longue : ū comme dans 'roue'.",
    exampleWord: 'وَطَن', exampleTranslit: 'waṭan', exampleMeaning: 'patrie',
  },
  {
    id: 'alph-28', letter: 'ي', name: 'Ya', nameArabic: 'يَاء', transliteration: 'y / ī',
    forms: { isolated: 'ي', initial: 'يـ', medial: 'ـيـ', final: 'ـي' },
    connects: true,
    pronunciation: "Consonne : comme le Y anglais. Voyelle longue : ī comme dans 'vie'.",
    exampleWord: 'يَد', exampleTranslit: 'yad', exampleMeaning: 'main',
  },
]

// Groupes de lettres par leçon
export const ALPHABET_LESSONS: { lessonId: string; title: string; cardIds: string[] }[] = [
  { lessonId: 'alph-l1', title: 'ا ب ت ث — Les premières lettres', cardIds: ['alph-01','alph-02','alph-03','alph-04'] },
  { lessonId: 'alph-l2', title: 'ج ح خ د — Les gutturales',        cardIds: ['alph-05','alph-06','alph-07','alph-08'] },
  { lessonId: 'alph-l3', title: 'ذ ر ز س — Les sifflantes',        cardIds: ['alph-09','alph-10','alph-11','alph-12'] },
  { lessonId: 'alph-l4', title: 'ش ص ض ط — Les emphatiques',       cardIds: ['alph-13','alph-14','alph-15','alph-16'] },
  { lessonId: 'alph-l5', title: 'ظ ع غ ف — Pharyngales & F',       cardIds: ['alph-17','alph-18','alph-19','alph-20'] },
  { lessonId: 'alph-l6', title: 'ق ك ل م — Q K L M',               cardIds: ['alph-21','alph-22','alph-23','alph-24'] },
  { lessonId: 'alph-l7', title: 'ن ه و ي — Les dernières',         cardIds: ['alph-25','alph-26','alph-27','alph-28'] },
]

export const ALPHABET_MAP = new Map(ALPHABET.map(c => [c.id, c]))
