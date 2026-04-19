// alphabet.ts — les 28 lettres de l'alphabet arabe

export type LetterCard = {
  letter: string        // la lettre arabe : 'ب'
  name: string          // nom de la lettre : 'Ba'
  sound: string         // son en français : 'b'
  example: string       // mot exemple en arabe : 'بَيْت'
  meaning: string       // traduction du mot exemple : 'maison'
}

export const ARABIC_ALPHABET: LetterCard[] = [
  { letter: 'ا', name: 'Alif',  sound: 'a / â',      example: 'أَب',    meaning: 'père'    },
  { letter: 'ب', name: 'Ba',    sound: 'b',           example: 'بَيْت',  meaning: 'maison'  },
  { letter: 'ت', name: 'Ta',    sound: 't',           example: 'تُفَّاح', meaning: 'pomme'   },
  { letter: 'ث', name: 'Tha',   sound: 'th',          example: 'ثَلْج',  meaning: 'neige'   },
  { letter: 'ج', name: 'Jim',   sound: 'dj',          example: 'جَمَل',  meaning: 'chameau' },
  { letter: 'ح', name: 'Ha',    sound: 'h (aspiré)',  example: 'حَلِيب', meaning: 'lait'    },
  { letter: 'خ', name: 'Kha',   sound: 'kh',          example: 'خُبْز',  meaning: 'pain'    },
  { letter: 'د', name: 'Dal',   sound: 'd',           example: 'دَار',   meaning: 'maison'  },
  { letter: 'ذ', name: 'Dhal',  sound: 'dh',          example: 'ذَهَب',  meaning: 'or'      },
  { letter: 'ر', name: 'Ra',    sound: 'r (roulé)',   example: 'رَأْس',  meaning: 'tête'    },
  { letter: 'ز', name: 'Zay',   sound: 'z',           example: 'زَيْت',  meaning: 'huile'   },
  { letter: 'س', name: 'Sin',   sound: 's',           example: 'سَمَك',  meaning: 'poisson' },
  { letter: 'ش', name: 'Shin',  sound: 'ch',          example: 'شَمْس',  meaning: 'soleil'  },
  { letter: 'ص', name: 'Sad',   sound: 's (emphat.)', example: 'صَابُون', meaning: 'savon'   },
  { letter: 'ض', name: 'Dad',   sound: 'd (emphat.)', example: 'ضَوْء',  meaning: 'lumière' },
  { letter: 'ط', name: 'Ta',    sound: 't (emphat.)', example: 'طَيْر',  meaning: 'oiseau'  },
  { letter: 'ظ', name: 'Dha',   sound: 'dh (emphat.)',example: 'ظَهْر',  meaning: 'dos'     },
  { letter: 'ع', name: 'Ayn',   sound: 'ʿ (ayn)',     example: 'عَيْن',  meaning: 'œil'     },
  { letter: 'غ', name: 'Ghayn', sound: 'gh',          example: 'غَابَة', meaning: 'forêt'   },
  { letter: 'ف', name: 'Fa',    sound: 'f',           example: 'فَم',    meaning: 'bouche'  },
  { letter: 'ق', name: 'Qaf',   sound: 'q',           example: 'قَلْب',  meaning: 'cœur'    },
  { letter: 'ك', name: 'Kaf',   sound: 'k',           example: 'كِتَاب', meaning: 'livre'   },
  { letter: 'ل', name: 'Lam',   sound: 'l',           example: 'لَبَن',  meaning: 'yaourt'  },
  { letter: 'م', name: 'Mim',   sound: 'm',           example: 'مَاء',   meaning: 'eau'     },
  { letter: 'ن', name: 'Nun',   sound: 'n',           example: 'نَار',   meaning: 'feu'     },
  { letter: 'ه', name: 'Ha',    sound: 'h (doux)',    example: 'هَوَاء', meaning: 'air'     },
  { letter: 'و', name: 'Waw',   sound: 'w / û',       example: 'وَرْد',  meaning: 'rose'    },
  { letter: 'ي', name: 'Ya',    sound: 'y / î',       example: 'يَد',    meaning: 'main'    },
]

// Mélange Fisher-Yates
export function shuffleLetters<T>(array: T[]): T[] {
  const result = [...array]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]]
  }
  return result
}
