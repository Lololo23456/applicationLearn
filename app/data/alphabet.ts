// alphabet.ts — données des 10 premières lettres arabes

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
