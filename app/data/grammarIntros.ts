export interface GrammarExample {
  arabic: string
  transliteration: string
  french: string
}

export interface GrammarPoint {
  title: string
  explanation: string
  examples?: GrammarExample[]
}

export interface GrammarIntro {
  lessonId: string
  conceptTitle: string
  summary: string
  color: string
  points: GrammarPoint[]
}

export const GRAMMAR_INTROS: GrammarIntro[] = [

  // ── Alphabet ────────────────────────────────────────────────────────────────

  {
    lessonId: 'alph-l1',
    conceptTitle: "L'écriture arabe : principes fondamentaux",
    summary: "L'alphabet arabe est un abjad — il note principalement les consonnes.",
    color: '#EBF5FB',
    points: [
      {
        title: "De droite à gauche",
        explanation: "L'arabe s'écrit et se lit de droite à gauche (من اليمين إلى اليسار). Les livres s'ouvrent à l'envers par rapport au français. Les chiffres, eux, s'écrivent de gauche à droite.",
        examples: [
          { arabic: 'بَيْت', transliteration: 'bayt', french: 'maison — de droite à gauche : ب ي ت' },
        ],
      },
      {
        title: "4 formes par lettre",
        explanation: "Chaque lettre change de forme selon sa position dans le mot : isolée, en début (initiale), au milieu (médiane), en fin (finale). Ces formes sont liées — comme si on écrivait en cursive.",
        examples: [
          { arabic: 'ب — بـ — ـبـ — ـب', transliteration: 'b isolée / initiale / médiane / finale', french: 'La lettre Ba dans ses 4 positions' },
        ],
      },
      {
        title: "Les voyelles courtes sont optionnelles",
        explanation: "L'arabe classique (fusha) s'écrit normalement sans les voyelles courtes (harakat). Elles sont notées dans le Coran et les manuels pour débutants. Les voyelles longues (ا و ي) font partie des consonnes.",
        examples: [
          { arabic: 'كَتَبَ', transliteration: 'kataba', french: 'il a écrit — avec harakat' },
          { arabic: 'كتب', transliteration: 'kataba', french: 'il a écrit — sans harakat (lecture normale)' },
        ],
      },
      {
        title: "Pas de majuscules",
        explanation: "L'arabe ne distingue pas majuscules et minuscules. Un nom propre, un début de phrase, le mot اللّٰه — tout s'écrit de la même façon.",
      },
    ],
  },

  {
    lessonId: 'alph-l2',
    conceptTitle: "Les consonnes gutturales et pharyngales",
    summary: "Quatre nouvelles consonnes articulées dans la gorge, sans équivalent en français.",
    color: '#EBF5FB',
    points: [
      {
        title: "ج — Jim : une seule lettre, deux prononciations",
        explanation: "En arabe classique (fusha), ج se prononce comme le G dur de 'gare'. Dans les pays du Golfe, certains le prononcent comme le Y anglais, et en Égypte comme le G dur aussi mais parfois aspiré. Apprenez d'abord la prononciation fusha.",
        examples: [{ arabic: 'جَبَل', transliteration: 'jabal', french: 'montagne' }],
      },
      {
        title: "ح — Ha pharyngal : pas de H muet",
        explanation: "Le ح est une friction produite dans le pharynx, sans vibration des cordes vocales. Pour le pratiquer : soufflez sur une vitre froide, puis contractez légèrement le pharynx. Ce son est toujours prononcé en arabe classique — il n'est jamais muet.",
        examples: [{ arabic: 'حَيَاة', transliteration: 'ḥayāt', french: 'vie' }],
      },
      {
        title: "خ — Kha : le 'r' parisien sans vibration",
        explanation: "Le خ ressemble au 'ch' allemand (Bach), au 'j' espagnol (jardín), ou au 'r' parisien prononcé sourd. C'est une fricative vélaire/uvulaire sans vibration. Commencez par prononcer un 'k' en laissant l'air passer.",
        examples: [{ arabic: 'خُبْز', transliteration: 'khubz', french: 'pain' }],
      },
      {
        title: "Lettres non-connectantes : ا et د",
        explanation: "Six lettres de l'alphabet ne se connectent qu'à droite : ا و ر ز د ذ. Quand on les rencontre dans un mot, la jonction s'interrompt — la lettre suivante reprend en forme initiale.",
        examples: [{ arabic: 'دَرَسَ', transliteration: 'darasa', french: 'il a étudié — les 3 lettres ne se connectent pas' }],
      },
    ],
  },

  {
    lessonId: 'alph-l3',
    conceptTitle: "Les lettres non-connectantes et les sifflantes",
    summary: "Comprendre pourquoi certains mots arabes semblent 'coupés' en plusieurs blocs.",
    color: '#EBF5FB',
    points: [
      {
        title: "Les 6 lettres non-connectantes",
        explanation: "Les lettres ا و ر ز د ذ ne se connectent jamais à la lettre suivante (gauche). Résultat : un mot peut être coupé en 2, 3, voire 4 blocs distincts. Ce n'est pas une erreur — c'est la règle.",
        examples: [
          { arabic: 'دَرَسَ', transliteration: 'darasa', french: '3 blocs séparés : د + ر + سَ' },
          { arabic: 'وَلَد', transliteration: 'walad', french: 'enfant : و (non-conn.) + لَد (connecté)' },
        ],
      },
      {
        title: "ذ vs د — la différence vibratoire",
        explanation: "ذ (dhal) est la version VOISÉE de ث (tha). En français, c'est comme la différence entre 'f' et 'v' : même articulation, mais ذ vibre. Exercice : prononcez 'the' en anglais = ذ. Prononcez 'think' en anglais = ث.",
        examples: [{ arabic: 'ذَهَب', transliteration: 'dhahab', french: 'or' }],
      },
      {
        title: "س (sin) vs ش (shin) — deux sifflantes",
        explanation: "س = S doux comme dans 'soleil'. ش = Ch comme dans 'chat'. La distinction est importante car ces lettres coexistent dans la même leçon. Mémorisation : ش ressemble visuellement à س avec des 'dents' au-dessus.",
        examples: [
          { arabic: 'سَمَاء', transliteration: 'samāʾ', french: 'ciel' },
          { arabic: 'شَمْس', transliteration: 'shams', french: 'soleil' },
        ],
      },
    ],
  },

  {
    lessonId: 'alph-l4',
    conceptTitle: "Les consonnes emphatiques (المخرج المفخم)",
    summary: "L'arabe possède 4 consonnes 'emphatiques' qui n'ont aucun équivalent en français.",
    color: '#EBF5FB',
    points: [
      {
        title: "Qu'est-ce qu'une consonne emphatique ?",
        explanation: "Les consonnes ص ض ط ظ sont articulées avec la langue rétractée vers l'arrière (pharyngalisation), créant une résonance dans le pharynx. Elles 'colorent' les voyelles voisines : le 'a' devient plus proche de 'â' ou 'o', et 'i' se rapproche de 'é'.",
        examples: [
          { arabic: 'صَبَاح', transliteration: 'ṣabāḥ', french: 'matin — le A de ṣabāḥ est plus arrière que normal' },
        ],
      },
      {
        title: "ص — Sad emphatique : S de fond de gorge",
        explanation: "Prononcez un S normal, puis rétracter la langue et arrondir légèrement les lèvres — vous obtenez ص. Dans les mots avec ص, les voyelles sonnent plus 'creuses'. Contraste : سَلَام (salām = paix) vs صَلَاة (ṣalāt = prière).",
        examples: [{ arabic: 'صَلَاة', transliteration: 'ṣalāt', french: 'prière (le mot le plus connu avec ص)' }],
      },
      {
        title: "ض — Dad : la lettre identitaire de l'arabe",
        explanation: "L'arabe est parfois appelé لُغَةُ الضَّاد (lughat aḍ-ḍād), 'la langue du ḍād', car ض est une lettre unique à la langue arabe. C'est un D emphatique, articulé sur le côté de la langue contre les molaires supérieures.",
        examples: [{ arabic: 'رَمَضَان', transliteration: 'ramaḍān', french: 'Ramadan — ض dans son contexte le plus connu' }],
      },
      {
        title: "ط — Ta emphatique vs ت ordinaire",
        explanation: "ت et ط s'articulent au même endroit (pointe de la langue contre les dents), mais ط est emphatique. Différence de sens : طَابَ (ṭāba = être bon) ≠ تَابَ (tāba = se repentir). La distinction est donc fondamentale.",
        examples: [
          { arabic: 'طَرِيق', transliteration: 'ṭarīq', french: 'route' },
          { arabic: 'تَرِيق', transliteration: 'tarīq', french: 'n\'existe pas en arabe — illustre la différence' },
        ],
      },
    ],
  },

  {
    lessonId: 'alph-l5',
    conceptTitle: "Le ʿAyn et les pharyngales",
    summary: "Le ع est souvent qualifié de son 'le plus difficile' pour les Européens — mais il s'apprend avec de la pratique.",
    color: '#EBF5FB',
    points: [
      {
        title: "ع — ʿAyn : constriction pharyngale voisée",
        explanation: "Le ع est produit par une constriction forte du pharynx avec vibration des cordes vocales. Il n'existe dans aucune langue européenne. Approche pratique : commencez par toussoter, puis ajoutez une voix. Ou : prononcez 'aaah' en contractant fortement le pharynx comme si vous étiez légèrement étranglé.",
        examples: [
          { arabic: 'عِلْم', transliteration: 'ʿilm', french: 'connaissance — ʿ est transcrit avec une virgule inversée' },
          { arabic: 'عَيْن', transliteration: 'ʿayn', french: 'œil — mais aussi le nom de la lettre elle-même !' },
        ],
      },
      {
        title: "غ — Ghayn : le R parisien arabe",
        explanation: "غ est la version VOISÉE de خ. Comme خ (kh = r parisien sourd), mais avec vibration. Prononcez le 'r' parisien ('paris') et vous avez غ. Contrairement au R uvulaire français, غ est légèrement plus guttural.",
        examples: [{ arabic: 'غَيْم', transliteration: 'ghaym', french: 'nuage — gh + aym' }],
      },
      {
        title: "ظ — Dha emphatique : rare mais important",
        explanation: "ظ est le moins fréquent des emphatiques. Dans certaines traditions de récitation, il se prononce comme un ذ emphatique (D th-voisé emphatique). Dans d'autres, comme un D ou Z emphatique. En fusha académique : maintenir la distinction avec ذ et ض.",
        examples: [{ arabic: 'ظِلّ', transliteration: 'ẓill', french: 'ombre' }],
      },
    ],
  },

  {
    lessonId: 'alph-l6',
    conceptTitle: "L'article défini et l'assimilation (الإدغام)",
    summary: "L'article الـ se prononce différemment selon la lettre qui suit.",
    color: '#EBF5FB',
    points: [
      {
        title: "الـ — L'article défini",
        explanation: "En arabe, l'article défini est الـ (al-). Il est invariable en genre et en nombre — contrairement au français 'le/la/les'. Il se préfixe directement au nom : بَيْت (une maison) → البَيْت (la maison).",
        examples: [
          { arabic: 'كِتَاب → الكِتَاب', transliteration: 'kitāb → al-kitāb', french: 'un livre → le livre' },
        ],
      },
      {
        title: "Lettres solaires (حروف شمسية) : le L s'assimile",
        explanation: "Avec 14 lettres dites 'solaires', le ل de l'article s'assimile à la lettre suivante — on entend la lettre deux fois. Les lettres solaires sont : ت ث د ذ ر ز س ش ص ض ط ظ ل ن. Mémo : ce sont toutes des dentales, alvéolaires ou sibilantes.",
        examples: [
          { arabic: 'الشَّمْس', transliteration: 'ash-shams', french: 'le soleil — al + shams = ash-shams (ss)' },
          { arabic: 'النَّهْر', transliteration: 'an-nahr', french: 'le fleuve — al + nahr = an-nahr (nn)' },
        ],
      },
      {
        title: "Lettres lunaires (حروف قمرية) : le L se prononce",
        explanation: "Avec les 14 lettres lunaires, le ل de l'article se prononce normalement : al-qamar. Lettres lunaires : ا ب ج ح خ ع غ ف ق ك م و ه ي. Mémo : القَمَر commence par ق, une lettre lunaire — logique !",
        examples: [
          { arabic: 'الْقَمَر', transliteration: 'al-qamar', french: 'la lune — le L se prononce pleinement' },
          { arabic: 'الْكِتَاب', transliteration: 'al-kitāb', french: 'le livre — même chose avec ك' },
        ],
      },
      {
        title: "ق — Qaf : l'uvulaire",
        explanation: "ق s'articule à l'uvule (la petite cloche au fond de la bouche), beaucoup plus en arrière que ك. C'est une occlusive uvulaire sourde. Dans certains dialectes arabes, ق devient un coup de glotte (ء) ou un G, mais en fusha il est toujours uvulaire.",
        examples: [{ arabic: 'قَلْب', transliteration: 'qalb', french: 'cœur — q à l\'uvule' }],
      },
    ],
  },

  {
    lessonId: 'alph-l7',
    conceptTitle: "Les semi-voyelles : و et ي",
    summary: "و et ي jouent un double rôle : consonnes ou voyelles longues selon leur position.",
    color: '#EBF5FB',
    points: [
      {
        title: "و : consonne W ou voyelle longue Ū",
        explanation: "Comme consonne : و = W (anglais 'water'). Comme voyelle : و après une consonne = ū (son 'ou' long, comme dans 'roue'). Le contexte et les harakat indiquent le rôle. C'est la même lettre, deux fonctions.",
        examples: [
          { arabic: 'وَلَد', transliteration: 'walad', french: 'enfant — و consonne W' },
          { arabic: 'نُور', transliteration: 'nūr', french: 'lumière — و voyelle longue ū' },
        ],
      },
      {
        title: "ي : consonne Y ou voyelle longue Ī",
        explanation: "Comme consonne : ي = Y (anglais 'yes'). Comme voyelle : ي après une consonne = ī (son 'i' long, comme dans 'vie'). Ces deux lettres sont au cœur de la morphologie arabe — elles apparaissent dans presque tous les mots.",
        examples: [
          { arabic: 'يَد', transliteration: 'yad', french: 'main — ي consonne Y' },
          { arabic: 'كَبِير', transliteration: 'kabīr', french: 'grand — ي voyelle longue ī' },
        ],
      },
      {
        title: "ه — Ha doux : toujours prononcé",
        explanation: "Contrairement au H français (souvent muet), le ه arabe se prononce toujours. C'est une fricative glottale douce, comme le H anglais dans 'hello'. À ne pas confondre avec ح (pharyngal, beaucoup plus fort).",
        examples: [{ arabic: 'هُوَ — هِيَ', transliteration: 'huwa — hiya', french: 'il — elle (pronoms personnels)' }],
      },
      {
        title: "Bilan : l'alphabet est maintenant complet",
        explanation: "Vous avez étudié les 28 lettres. La prochaine étape : lire des mots réels et reconnaître les racines. Le vocabulaire devient alors beaucoup plus logique — chaque groupe de 3 consonnes porte un sens fondamental.",
        examples: [
          { arabic: 'ك-ت-ب → كَتَبَ / كِتَاب / كَاتِب', transliteration: 'k-t-b', french: 'écrire / livre / écrivain — une racine, trois mots' },
        ],
      },
    ],
  },

  // ── Vocabulaire ─────────────────────────────────────────────────────────────

  {
    lessonId: 'vocab-l1',
    conceptTitle: "Les noms arabes : genre et définition",
    summary: "Tout nom arabe est masculin ou féminin, défini ou indéfini.",
    color: '#E9F7EF',
    points: [
      {
        title: "Le genre grammatical",
        explanation: "En arabe, chaque nom est soit masculin (مُذَكَّر), soit féminin (مُؤَنَّث). Le féminin se reconnaît souvent à la terminaison ة (tā' marbūṭa), qui se prononce 'a' ou 'at' selon la voyelle finale. Mais certains féminins sont irréguliers (أُمّ = mère est féminin sans ة).",
        examples: [
          { arabic: 'وَلَد / بِنْت', transliteration: 'walad / bint', french: 'garçon (m.) / fille (f. — sans ة, féminin naturel)' },
          { arabic: 'أَب / أُمّ', transliteration: 'ab / umm', french: 'père (m.) / mère (f. — irrégulier)' },
        ],
      },
      {
        title: "L'article défini الـ",
        explanation: "Il n'existe pas d'article indéfini en arabe — un nom sans article est automatiquement indéfini. L'article الـ (al-) est identique pour le masculin et le féminin, le singulier et le pluriel.",
        examples: [
          { arabic: 'وَلَد → الوَلَد', transliteration: 'walad → al-walad', french: 'un garçon → le garçon' },
          { arabic: 'أُمّ → الأُمّ', transliteration: 'umm → al-umm', french: 'une mère → la mère' },
        ],
      },
      {
        title: "Le tanwīn (التنوين) : la nunation",
        explanation: "À l'écrit complet, un nom indéfini au nominatif prend ٌ (double ḍamma) sur la dernière lettre — ce qui se prononce 'un'. C'est le tanwīn. Il indique l'indéfinition + le cas grammatical.",
        examples: [
          { arabic: 'وَلَدٌ كَرِيمٌ', transliteration: 'waladun karīmun', french: 'un garçon généreux (nominatif indéfini)' },
        ],
      },
    ],
  },

  {
    lessonId: 'vocab-l2',
    conceptTitle: "La phrase nominale (الجملة الاسمية)",
    summary: "En arabe, 'être' au présent ne se traduit par aucun mot — il est sous-entendu.",
    color: '#E9F7EF',
    points: [
      {
        title: "Pas de 'être' au présent",
        explanation: "En arabe classique, la phrase nominale n'utilise pas de verbe au présent. Le sujet (مبتدأ - mubtadaʾ) + le prédicat (خبر - khabar) suffisent. Le prédicat s'accorde en genre avec le sujet.",
        examples: [
          { arabic: 'السَّمَاءُ جَمِيلَةٌ', transliteration: 'as-samāʾu jamīlatun', french: 'Le ciel (est) beau — pas de verbe !' },
          { arabic: 'الرَّجُلُ كَبِيرٌ', transliteration: 'ar-rajulu kabīrun', french: "L'homme (est) grand" },
        ],
      },
      {
        title: "Accord du prédicat",
        explanation: "Si le sujet est féminin, le prédicat adjective prend la forme féminine (avec ة). Si le sujet est masculin, le prédicat reste à sa forme de base.",
        examples: [
          { arabic: 'الشَّمْسُ سَاطِعَةٌ', transliteration: 'ash-shamsu sāṭiʿatun', french: 'Le soleil (f. en arabe) brille — sāṭiʿa (f.)' },
          { arabic: 'النَّهْرُ طَوِيلٌ', transliteration: 'an-nahru ṭawīlun', french: 'Le fleuve (m.) est long — ṭawīl (m.)' },
        ],
      },
      {
        title: "Le cas nominatif",
        explanation: "Le sujet d'une phrase nominale est au cas nominatif — marqué par la voyelle finale ُ (ḍamma) ou ٌ (tanwīn ḍamma). C'est le premier des trois cas de la déclinaison arabe.",
        examples: [
          { arabic: 'الْمَاءُ حَيَاةٌ', transliteration: 'al-māʾu ḥayātun', french: "L'eau (est) vie — māʾu au nominatif" },
        ],
      },
    ],
  },

  {
    lessonId: 'vocab-l3',
    conceptTitle: "La possession : l'annexion (الإضافة)",
    summary: "L'iḍāfa est la structure fondamentale pour exprimer la possession et la composition.",
    color: '#E9F7EF',
    points: [
      {
        title: "Structure de l'iḍāfa",
        explanation: "Pour dire 'le X de Y', on place les deux noms directement l'un après l'autre. Le premier nom (المضاف) perd son article. Le second (المضاف إليه) prend la kasra (i) du génitif. Pas de préposition 'de' !",
        examples: [
          { arabic: 'كِتَابُ الطَّالِبِ', transliteration: 'kitābu ṭ-ṭālibi', french: "le livre de l'étudiant" },
          { arabic: 'بَابُ البَيْتِ', transliteration: 'bābu l-bayti', french: 'la porte de la maison' },
        ],
      },
      {
        title: "Iḍāfa avec pronom possessif",
        explanation: "On peut aussi attacher un pronom suffixe directement au nom. Ces suffixes sont : ي (mon), كَ (ton), هُ (son), نَا (notre), etc. Le nom prend alors le génitif.",
        examples: [
          { arabic: 'بَيْتِي — بَيْتُكَ — بَيْتُهُ', transliteration: 'baytī — baytuka — baytuhu', french: 'ma maison — ta maison — sa maison' },
        ],
      },
      {
        title: "Iḍāfa en chaîne",
        explanation: "On peut enchaîner plusieurs noms : 'la porte de la maison de l'homme'. Seul le dernier nom de la chaîne peut prendre l'article ou le tanwīn.",
        examples: [
          { arabic: 'كَلَامُ اللّٰهِ', transliteration: 'kalāmu llāhi', french: 'la parole de Dieu — iḍāfa classique' },
        ],
      },
    ],
  },

  {
    lessonId: 'vocab-l4',
    conceptTitle: "L'accord des adjectifs et les phrases verbales",
    summary: "En arabe, l'adjectif suit le nom et s'accorde en genre, nombre, et définition.",
    color: '#E9F7EF',
    points: [
      {
        title: "L'adjectif suit le nom",
        explanation: "Contrairement au français où l'adjectif peut précéder, en arabe il suit toujours le nom. L'adjectif s'accorde en genre et en définition : si le nom est défini (avec الـ), l'adjectif prend aussi الـ.",
        examples: [
          { arabic: 'كِتَابٌ مُفِيدٌ', transliteration: 'kitābun mufīdun', french: 'un livre utile (indéfini, m.)' },
          { arabic: 'الكِتَابُ المُفِيدُ', transliteration: 'al-kitābu l-mufīdu', french: 'le livre utile (défini — les deux ont الـ)' },
        ],
      },
      {
        title: "La phrase verbale (الجملة الفعلية)",
        explanation: "L'arabe a aussi des phrases verbales, qui commencent par le verbe. Le verbe précède souvent le sujet — c'est l'ordre VSO (Verbe-Sujet-Objet) naturel en arabe classique, même si SVO est aussi possible.",
        examples: [
          { arabic: 'قَرَأَ الطَّالِبُ الكِتَابَ', transliteration: 'qaraʾa ṭ-ṭālibu l-kitāba', french: "L'étudiant a lu le livre (verbe en premier)" },
        ],
      },
      {
        title: "L'accusatif : le cas de l'objet direct",
        explanation: "L'objet direct d'un verbe prend le cas accusatif, marqué par la voyelle finale َ (fatḥa) ou ً (tanwīn fatḥa). C'est le deuxième des trois cas arabes.",
        examples: [
          { arabic: 'أَكَلَ الوَلَدُ خُبْزًا', transliteration: 'akala l-waladu khubzan', french: "L'enfant a mangé du pain — خُبْز à l'accusatif (an)" },
        ],
      },
    ],
  },

  {
    lessonId: 'vocab-l5',
    conceptTitle: "Les prépositions et la possession",
    summary: "Les prépositions arabes gouvernent le génitif et permettent d'exprimer relations et localisation.",
    color: '#E9F7EF',
    points: [
      {
        title: "Les prépositions essentielles",
        explanation: "Les principales prépositions arabes : في (fī = dans), عَلَى (ʿalā = sur), مِن (min = de/depuis), إِلَى (ilā = vers/à), مَعَ (maʿa = avec), بِ (bi = par/avec/en). Elles se placent avant le nom qu'elles gouvernent.",
        examples: [
          { arabic: 'في البَيْتِ', transliteration: 'fī l-bayti', french: 'dans la maison' },
          { arabic: 'عَلَى الكُرْسِيِّ', transliteration: 'ʿalā l-kursīyi', french: 'sur la chaise' },
        ],
      },
      {
        title: "عِنْدَ : exprimer la possession",
        explanation: "L'arabe n'a pas de verbe 'avoir'. La possession s'exprime avec عِنْدَ (ʿinda = chez) + pronom suffixe. عِنْدِي = chez moi = j'ai. عِنْدَكَ = chez toi = tu as.",
        examples: [
          { arabic: 'عِنْدِي كِتَابٌ', transliteration: 'ʿindī kitābun', french: "J'ai un livre (litt. : chez moi un livre)" },
          { arabic: 'لَيْسَ عِنْدَهُ وَقْتٌ', transliteration: 'laysa ʿindahu waqtun', french: "Il n'a pas le temps (litt. : n'est pas chez lui du temps)" },
        ],
      },
      {
        title: "Le cas génitif",
        explanation: "Après une préposition, le nom prend le cas génitif — marqué par la kasra (ِ) en finale. C'est le troisième cas de la déclinaison arabe. Exemple : في البَيْتِ (fī l-bayti) — le ِ final sur بَيْت.",
        examples: [
          { arabic: 'مِنَ المَدْرَسَةِ', transliteration: 'mina l-madrasati', french: "de l'école — madrasati au génitif" },
        ],
      },
    ],
  },

  // ── Conjugaison ─────────────────────────────────────────────────────────────

  {
    lessonId: 'conj-l1',
    conceptTitle: "La racine trilittère : le génie de l'arabe",
    summary: "Toute la morphologie arabe est construite autour de racines de 3 consonnes.",
    color: '#F4ECF7',
    points: [
      {
        title: "Le système des racines",
        explanation: "La plus grande particularité de l'arabe : presque tous les mots dérivent d'une RACINE de 3 consonnes (parfois 4). Ces consonnes portent un sens fondamental. En faisant varier les voyelles et les préfixes/suffixes autour de cette racine, on crée des dizaines de mots liés sémantiquement.",
        examples: [
          { arabic: 'ك-ت-ب', transliteration: 'k-t-b', french: "idée d'écriture" },
          { arabic: 'كَتَبَ / كِتَاب / كَاتِب / مَكْتَبَة / مَكْتُوب', transliteration: 'kataba / kitāb / kātib / maktaba / maktūb', french: 'écrire / livre / écrivain / bibliothèque / lettre (écrite)' },
        ],
      },
      {
        title: "Le schème verbal (الوَزْن)",
        explanation: "Les grammairiens arabes utilisent les consonnes ف-ع-ل (f-ʿ-l) comme consonnes fantômes pour illustrer les patrons morphologiques. فَعَلَ (faʿala) = le patron du verbe passé. En remplaçant ف par k, ع par t, ل par b : kataba. Ce système permet de décrire toute la morphologie.",
        examples: [
          { arabic: 'فَعَلَ ← كَتَبَ', transliteration: 'faʿala ← kataba', french: 'schème ← verbe réel (ك-ت-ب)' },
          { arabic: 'فَعَلَ ← قَرَأَ', transliteration: 'faʿala ← qaraʾa', french: 'même schème pour lire (ق-ر-أ)' },
        ],
      },
      {
        title: "Pourquoi apprendre les racines ?",
        explanation: "Connaître la racine d'un mot permet de deviner le sens d'autres mots de la même famille. Quand vous verrez مَكْتَبَة pour la première fois, si vous connaissez ك-ت-ب, vous devinrez que c'est 'lieu d'écriture = bureau/bibliothèque'. Cette logique s'applique à tout l'arabe.",
        examples: [
          { arabic: 'ع-ل-م → عَلِمَ / عِلْم / عَالِم / مَعْلُومَة', transliteration: 'ʿ-l-m', french: 'savoir / connaissance / savant / information' },
        ],
      },
    ],
  },

  {
    lessonId: 'conj-l2',
    conceptTitle: "Le passé et le présent arabes",
    summary: "Le verbe arabe marque le temps par des voyelles internes + des préfixes/suffixes.",
    color: '#F4ECF7',
    points: [
      {
        title: "Le passé (الماضي) : voyelles dans la racine",
        explanation: "Au passé, le verbe porte ses informations de temps dans les voyelles entre les consonnes de la racine. La 3ème personne masculin singulier (il) est la forme de référence — la plus simple : ka-ta-ba. Les autres personnes s'obtiennent par des suffixes.",
        examples: [
          { arabic: 'كَتَبَ / كَتَبَتْ / كَتَبُوا', transliteration: 'kataba / katabat / katabū', french: 'il écrivit / elle écrivit / ils écrivirent' },
        ],
      },
      {
        title: "Le présent (المضارع) : préfixes + voyelles",
        explanation: "Au présent, la personne s'exprime par des PRÉFIXES : يَ (il/ils), تَ (tu/vous/elle), أَ (je), نَ (nous). La racine subit aussi des changements de voyelles internes selon le schème du verbe.",
        examples: [
          { arabic: 'يَكْتُبُ / تَكْتُبُ / أَكْتُبُ / نَكْتُبُ', transliteration: 'yaktubu / taktubu / aktubu / naktubu', french: "il écrit / tu écris / j'écris / nous écrivons" },
        ],
      },
      {
        title: "Les 3 modes du présent",
        explanation: "La voyelle finale du présent indique le mode grammatical. ُ (ḍamma) = indicatif (yaktub-u = il écrit). َ (fatḥa) = subjonctif (yaktub-a = qu'il écrive). ْ (sukūn) = apocopé/jussif (yaktub = qu'il écrive / négatif). Ce système est essentiel pour lire le Coran.",
        examples: [
          { arabic: 'يَكْتُبُ / أَنْ يَكْتُبَ / لَمْ يَكْتُبْ', transliteration: 'yaktubu / an yaktuba / lam yaktub', french: "il écrit / qu'il écrive / il n'a pas écrit" },
        ],
      },
    ],
  },

  {
    lessonId: 'conj-l3',
    conceptTitle: "Les patrons verbaux (الأوزان)",
    summary: "L'arabe classe ses verbes en 10 formes dérivées, chacune ajoutant une nuance de sens.",
    color: '#F4ECF7',
    points: [
      {
        title: "La Forme I : le verbe de base",
        explanation: "La Forme I (فَعَلَ) est le verbe le plus simple. La voyelle centrale du passé peut être a, i, ou u, selon le verbe. Cette voyelle est imprévisible et doit être apprise avec chaque verbe.",
        examples: [
          { arabic: 'كَتَبَ (a) / شَرِبَ (i) / كَرُمَ (u)', transliteration: 'kataba / shariba / karuma', french: 'écrire / boire / être généreux — 3 patterns de la Forme I' },
        ],
      },
      {
        title: "Forme II : intensification (فَعَّلَ)",
        explanation: "La Forme II double la 2ème consonne de la racine (avec shadda). Elle indique souvent une action intensifiée, ou rend un verbe transitif. Exemples : عَلِمَ (savoir) → عَلَّمَ (enseigner).",
        examples: [
          { arabic: 'دَرَسَ → دَرَّسَ', transliteration: 'darasa → darrasa', french: 'étudier → enseigner (Form II rend transitif)' },
        ],
      },
      {
        title: "Forme IV : causatif (أَفْعَلَ)",
        explanation: "La Forme IV ajoute un أَ initial et signifie souvent 'faire faire'. أَكْرَمَ (honorer) de كَرُمَ (être généreux). أَرَادَ (vouloir) de Forme IV de ر-و-د.",
        examples: [
          { arabic: 'أَرَادَ أَنْ يَذْهَبَ', transliteration: 'arāda an yadhaba', french: 'Il voulut aller — Forme IV + subjonctif' },
        ],
      },
    ],
  },

  {
    lessonId: 'conj-l4',
    conceptTitle: "Le masdar (المصدر) : le nom verbal",
    summary: "Chaque verbe arabe génère un nom verbal (masdar) qui exprime l'action comme concept abstrait.",
    color: '#F4ECF7',
    points: [
      {
        title: "Qu'est-ce que le masdar ?",
        explanation: "Le masdar est à la fois l'infinitif et le nom d'action. Il peut fonctionner comme sujet, objet, ou nom qualificatif. Contrairement aux verbes français, le masdar en arabe est un nom à part entière — il se décline et peut prendre l'article.",
        examples: [
          { arabic: 'الفَهْمُ أَسَاسُ العِلْمِ', transliteration: 'al-fahmu asāsu l-ʿilmi', french: 'La compréhension est la base de la connaissance — فَهْم comme sujet' },
        ],
      },
      {
        title: "Le masdar comme objet interne (المفعول المطلق)",
        explanation: "En arabe, on peut utiliser le masdar du même verbe juste après ce verbe pour intensifier. C'est l'objet interne ou mafʿūl muṭlaq. Exemple : ضَرَبَ ضَرْبًا شَدِيدًا = 'il frappa un coup violent' — le masdar renforce le verbe.",
        examples: [
          { arabic: 'فَهِمَ فَهْمًا جَيِّدًا', transliteration: 'fahima fahman jayyidan', french: 'il comprit bien (litt. : il comprit une bonne compréhension)' },
        ],
      },
      {
        title: "Masdar vs nom d'agent et nom de patient",
        explanation: "De la même racine, on dérive aussi : le nom d'agent (فَاعِل = celui qui fait) et le nom de patient (مَفْعُول = celui qui subit). Ces 3 dérivés sont fondamentaux.",
        examples: [
          { arabic: 'فَهِمَ / فَهْم / فَاهِم / مَفْهُوم', transliteration: 'fahima / fahm / fāhim / mafhūm', french: 'comprendre / compréhension / celui qui comprend / compris/concept' },
        ],
      },
    ],
  },

  {
    lessonId: 'conj-l5',
    conceptTitle: "Les verbes irréguliers : creux et doublés",
    summary: "Deux types de verbes irréguliers très fréquents : les creux (أجوف) et les doublés (مضاعف).",
    color: '#F4ECF7',
    points: [
      {
        title: "Verbe CREUX (أجوف) : و ou ي en 2ème position",
        explanation: "Quand la 2ème radicale est و ou ي, le verbe est dit 'creux'. Au passé, la voyelle du milieu devient longue : قَوَلَ → قَالَ (qāla). Au présent : يَقُولُ. La règle : les semi-voyelles s'allongent et parfois changent.",
        examples: [
          { arabic: 'قَالَ / يَقُولُ / قُلْ', transliteration: 'qāla / yaqūlu / qul', french: 'il dit / il dit (présent) / dis ! — noter les contractions' },
        ],
      },
      {
        title: "Verbe DOUBLÉ (مضاعف) : 2ème et 3ème radicales identiques",
        explanation: "Quand les 2ème et 3ème radicales sont identiques, elles se fondent en une seule consonne avec shadda (ّ). Exemple : ر-د-د → رَدَّ (radda = il répondit). Au présent : يَرُدُّ (yarudd-u).",
        examples: [
          { arabic: 'رَدَّ / يَرُدُّ / رُدَّ', transliteration: 'radda / yaruddu / rudda', french: 'il répondit / il répond / il fut répondu (passif)' },
        ],
      },
      {
        title: "قَالَ : le verbe 'dire' en contexte coranique",
        explanation: "قَالَ est l'un des verbes les plus fréquents du Coran et de la littérature arabe. Il introduit les discours directs. Sa maîtrise est essentielle pour lire les textes classiques.",
        examples: [
          { arabic: 'قَالَ اللّٰهُ تَعَالَى', transliteration: 'qāla llāhu taʿālā', french: "Dieu Le Très-Haut dit... (formule d'introduction coranique)" },
        ],
      },
    ],
  },

  // ── Phrases ─────────────────────────────────────────────────────────────────

  {
    lessonId: 'phrase-l1',
    conceptTitle: "La structure des phrases arabes de salutation",
    summary: "Les salutations arabes sont des phrases nominales avec une structure grammaticale précise.",
    color: '#FEF5E7',
    points: [
      {
        title: "السَّلَامُ عَلَيْكُمْ : analyse complète",
        explanation: "Cette phrase est composée de : السَّلَام (le sujet : la paix) + عَلَيْكُمْ (le prédicat : sur vous = préposition عَلَى + suffixe pluriel كُمْ). Pas de verbe. C'est une phrase nominale avec un prédicat prépositionnel.",
        examples: [
          { arabic: 'وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللّٰهِ', transliteration: 'wa-ʿalaykumu s-salāmu wa-raḥmatu llāhi', french: 'Et sur vous la paix et la miséricorde de Dieu (réponse complète)' },
        ],
      },
      {
        title: "كَيْفَ حَالُكَ : l'interrogation nominale",
        explanation: "كَيْفَ (comment) est un outil interrogatif invariable. Il se place en début de phrase. حَالُكَ = ton état (حَال + suffixe كَ). La phrase est donc : 'Comment ton état ?' — sans verbe, sans sujet explicite.",
        examples: [
          { arabic: 'كَيْفَ حَالُكَ؟ — الحَمْدُ لِلّٰهِ', transliteration: 'kayfa ḥāluka? — al-ḥamdu lillāhi', french: 'Comment vas-tu ? — Grâce à Dieu (réponse courante)' },
        ],
      },
      {
        title: "مَا اسْمُكَ : le nom interrogatif",
        explanation: "مَا (quoi/quel) interroge sur la nature d'une chose ou d'une personne. اسْمُ = nom (état construit). كَ = ton (suffixe 2ème masc. sing.). L'alif de اسم disparaît après مَا par euphonie.",
        examples: [
          { arabic: 'مَا اسْمُكَ؟ — اسْمِي أَحْمَد', transliteration: 'mā smuka? — ismī Aḥmad', french: 'Quel est ton nom ? — Mon nom est Ahmad' },
        ],
      },
    ],
  },

  {
    lessonId: 'phrase-l2',
    conceptTitle: "Les questions et l'expression du désir",
    summary: "L'arabe dispose de plusieurs outils pour questionner et exprimer la volonté.",
    color: '#FEF5E7',
    points: [
      {
        title: "Les mots interrogatifs",
        explanation: "أَيْنَ (où), كَيْفَ (comment), مَتَى (quand), لِمَاذَا (pourquoi), مَنْ (qui), مَاذَا (quoi), كَمْ (combien). هَلْ est la particule d'interrogation oui/non — elle précède un verbe ou un nom sans changer le sens.",
        examples: [
          { arabic: 'هَلْ تَتَكَلَّمُ الْعَرَبِيَّةَ؟', transliteration: 'hal tatakallamu l-ʿarabiyyata?', french: 'Parles-tu arabe ? — هَلْ + verbe = question fermée' },
          { arabic: 'أَيْنَ الْمَسْجِدُ؟', transliteration: 'ayna l-masjidu?', french: 'Où est la mosquée ? — question ouverte' },
        ],
      },
      {
        title: "أُرِيدُ أَنْ + subjonctif",
        explanation: "Pour exprimer le désir, on utilise أَرَادَ (vouloir, Forme IV) + أَنْ (que/de) + le verbe au subjonctif (mode apocopé). أَنْ est une particule de subordination qui déclenche le subjonctif.",
        examples: [
          { arabic: 'أُرِيدُ أَنْ أَتَعَلَّمَ', transliteration: 'urīdu an ataʿallama', french: "Je veux apprendre (litt. : je veux que j'apprenne)" },
          { arabic: 'يُرِيدُ أَنْ يَذْهَبَ', transliteration: 'yurīdu an yadhaba', french: 'Il veut aller — même structure' },
        ],
      },
      {
        title: "الوَدَاع : les formules d'au-revoir",
        explanation: "مَعَ السَّلَامَة = avec la sécurité (formule de départ). إِلَى اللِّقَاء = à la prochaine rencontre. اللّٰهُ مَعَكَ = Dieu soit avec toi. Ces formules sont toutes des phrases nominales ou des iḍāfas.",
        examples: [
          { arabic: 'مَعَ السَّلَامَة — فِي أَمَانِ اللّٰهِ', transliteration: 'maʿa s-salāma — fī amāni llāhi', french: 'Au revoir — Sous la protection de Dieu (formule plus formelle)' },
        ],
      },
    ],
  },
]

export const GRAMMAR_MAP = new Map(GRAMMAR_INTROS.map(g => [g.lessonId, g]))
