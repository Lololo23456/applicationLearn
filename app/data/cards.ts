// cards.ts — base de données du vocabulaire
// Chaque "Card" est une paire arabe ↔ français

// L'interface définit la forme d'une carte : deux champs obligatoires
export interface Card {
    arabic: string;  // le mot en arabe
    french: string;  // sa traduction en français
}

export const VERBES: Card[] = [
    { arabic: 'أَتَى',  french: 'venir'   },
    { arabic: 'كَتَبَ', french: 'écrire'  },
    { arabic: 'قَرَأَ', french: 'lire'    },
    { arabic: 'ذَهَبَ', french: 'aller'   },
    { arabic: 'أَكَلَ', french: 'manger'  },
    { arabic: 'شَرِبَ', french: 'boire'   },
    { arabic: 'نَامَ',  french: 'dormir'  },
];

// Liste des nombres
export const NOMBRES: Card[] = [
    { arabic: 'وَاحِد', french: 'un'    },
    { arabic: 'اثْنَان', french: 'deux'  },
    { arabic: 'ثَلَاثَة', french: 'trois' },
];

// Liste des couleurs
export const COULEURS: Card[] = [
    { arabic: 'أَحْمَر', french: 'rouge' },
    { arabic: 'أَزْرَق', french: 'bleu'  },
];
