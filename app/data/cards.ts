export interface Card {
    arabic: string;
    french: string;
}

// ── Marrakech ────────────────────────────────────────────────
export const VERBES: Card[] = [
    { arabic: 'أَتَى',  french: 'venir'   },
    { arabic: 'كَتَبَ', french: 'écrire'  },
    { arabic: 'قَرَأَ', french: 'lire'    },
    { arabic: 'ذَهَبَ', french: 'aller'   },
    { arabic: 'أَكَلَ', french: 'manger'  },
    { arabic: 'شَرِبَ', french: 'boire'   },
    { arabic: 'نَامَ',  french: 'dormir'  },
]

// ── Tunis ─────────────────────────────────────────────────────
export const SALUTATIONS: Card[] = [
    { arabic: 'مَرْحَبًا',            french: 'Bonjour'                    },
    { arabic: 'أَهْلًا وَسَهْلًا',    french: 'Bienvenue'                  },
    { arabic: 'كَيْفَ حَالُك؟',       french: 'Comment vas-tu ?'           },
    { arabic: 'بِخَيْر، شُكْرًا',     french: 'Bien, merci'               },
    { arabic: 'شُكْرًا',              french: 'Merci'                      },
    { arabic: 'مِن فَضْلِك',          french: 'S\'il te plaît'             },
    { arabic: 'مَعَ السَّلَامَة',      french: 'Au revoir'                  },
    { arabic: 'إِلَى اللِّقَاء',      french: 'À bientôt'                  },
]

export const NOMBRES: Card[] = [
    { arabic: 'وَاحِد',   french: 'un'    },
    { arabic: 'اثْنَان',  french: 'deux'  },
    { arabic: 'ثَلَاثَة', french: 'trois' },
    { arabic: 'أَرْبَعَة', french: 'quatre' },
    { arabic: 'خَمْسَة',  french: 'cinq'  },
    { arabic: 'سِتَّة',   french: 'six'   },
    { arabic: 'سَبْعَة',  french: 'sept'  },
    { arabic: 'ثَمَانِيَة', french: 'huit' },
    { arabic: 'تِسْعَة',  french: 'neuf'  },
    { arabic: 'عَشَرَة',  french: 'dix'   },
]

export const COULEURS: Card[] = [
    { arabic: 'أَحْمَر',    french: 'rouge'  },
    { arabic: 'أَزْرَق',    french: 'bleu'   },
    { arabic: 'أَخْضَر',    french: 'vert'   },
    { arabic: 'أَصْفَر',    french: 'jaune'  },
    { arabic: 'أَبْيَض',    french: 'blanc'  },
    { arabic: 'أَسْوَد',    french: 'noir'   },
    { arabic: 'بُرْتُقَالِي', french: 'orange' },
    { arabic: 'بَنَفْسَجِي', french: 'violet' },
]

// ── Le Caire ──────────────────────────────────────────────────
export const FAMILLE: Card[] = [
    { arabic: 'أَب',    french: 'Père'        },
    { arabic: 'أُم',    french: 'Mère'        },
    { arabic: 'أَخ',    french: 'Frère'       },
    { arabic: 'أُخْت',  french: 'Sœur'        },
    { arabic: 'اِبْن',  french: 'Fils'        },
    { arabic: 'اِبْنَة', french: 'Fille'       },
    { arabic: 'جَدّ',   french: 'Grand-père'  },
    { arabic: 'جَدَّة', french: 'Grand-mère'  },
]

export const PHRASES: Card[] = [
    { arabic: 'أُرِيد',               french: 'Je veux'                    },
    { arabic: 'أَيْن',                french: 'Où est'                     },
    { arabic: 'كَم',                  french: 'Combien'                    },
    { arabic: 'لَا أَفْهَم',          french: 'Je ne comprends pas'        },
    { arabic: 'تَكَلَّم بِبُطْء',     french: 'Parle lentement'            },
    { arabic: 'اسْمِي',               french: 'Mon nom est'                },
    { arabic: 'نَعَم',                french: 'Oui'                        },
    { arabic: 'لَا',                  french: 'Non'                        },
]
