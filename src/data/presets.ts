import { CardData } from '../types';

export const CHINESE_PRESET: CardData = {
  id: 'preset_chinese',
  language: 'chinese',
  headerTitle: "Yvette's Chinese Word Of The Day ♥",
  headerSubtitle: "Learn Chinese Live Better ♥",
  avatarUrl: '',
  avatarPreset: 'girl_1',
  
  mainWord: '樓',
  phoneticMain: 'lóu',
  phoneticSecondary: 'ㄅㄆㄇㄈ / ㄌㄡˊ',
  wordTag: 'HSK 2',
  
  photoUrl: '',
  photoPreset: 'building',

  meaningLabel: 'Meaning:',
  meaningPrimary: 'floor; story (of a building); building',
  meaningSecondary: 'piano (di un edificio); palazzo',

  sentenceLabel: 'Example Sentence',
  sentenceForeign: '我住在五樓。',
  sentencePhonetic: 'Wǒ zhù zài wǔ lóu.',
  sentenceTranslation1: 'I live on the fifth floor.',
  sentenceTranslation2: 'Abito al quinto piano.',

  stickyNote1: {
    show: true,
    title: 'Daily Mantra',
    text: 'Practice Today, Succeed Tomorrow! ♥',
    rotation: -2,
    color: '#fef08a',
    fontSize: 15,
  },
  stickyNote2: {
    show: true,
    title: 'Note',
    text: 'Mandarin Vocabulary Booster ♥',
    rotation: 2,
    color: '#fef9c3',
    fontSize: 15,
  },

  relatedWordsTitle: 'Helpful Words with 樓 ♥',
  relatedWords: [
    { id: '1', word: '一樓', phonetic: 'yī lóu', meaning: '1st floor' },
    { id: '2', word: '樓上', phonetic: 'lóushàng', meaning: 'upstairs' },
    { id: '3', word: '樓下', phonetic: 'lóuxià', meaning: 'downstairs' },
    { id: '4', word: '樓梯', phonetic: 'lóutī', meaning: 'stairs' },
    { id: '5', word: '大樓', phonetic: 'dàlóu', meaning: 'building' },
  ],

  footerTagLeft: 'TAIWAN',
  footerTagLeftSub: 'MAKES LIFE BETTER',
  brandingText: 'Yvette Mandarin ♥',
  showSocialIcons: true,

  topSticker1: '💬',
  topSticker2: '⭐',
  stickerKey: 'boba',
  stickerSize: 48,
  themeId: 'kawaii_pink',
  aspectRatio: '9:16',

  fontMain: 'Noto Sans SC',
  fontLatin: 'Plus Jakarta Sans',
  fontHandwriting: 'Caveat',

  showPhoneticSecondary: true,
  showPhoto: true,
  showMeaningSection: true,
  showSentenceSection: true,
  showRelatedWordsSection: true,
  showFooterTags: true,
  showStickyNotes: true,

  cardPadding: 20,
  mainWordSize: 96,
  avatarSize: 76,
  photoSize: 110,
  stickyNoteFontSize: 16,
};

export const KOREAN_PRESET: CardData = {
  id: 'preset_korean',
  language: 'korean',
  headerTitle: "Sora's Korean Word Of The Day ♥",
  headerSubtitle: "Master Korean Step By Step ♥",
  avatarUrl: '',
  avatarPreset: 'girl_2',

  mainWord: '하늘',
  phoneticMain: 'haneul',
  phoneticSecondary: '天 (Hanja)',
  wordTag: 'TOPIK 1',

  photoUrl: '',
  photoPreset: 'sky',

  meaningLabel: 'Meaning:',
  meaningPrimary: 'sky; heaven; firmament',
  meaningSecondary: 'cielo; firmamento',

  sentenceLabel: 'Example Sentence',
  sentenceForeign: '오늘 하늘이 참 푸르고 예뻐요.',
  sentencePhonetic: 'Oneul haneuri cham pureugo yeppeoyo.',
  sentenceTranslation1: 'The sky is so blue and pretty today.',
  sentenceTranslation2: 'Oggi il cielo è davvero blu e bello.',

  stickyNote1: {
    show: true,
    title: 'Daily Mantra',
    text: 'Every day a new word ♥',
    rotation: -2,
    color: '#e0e7ff',
  },
  stickyNote2: {
    show: true,
    title: 'Encouragement',
    text: 'Keep learning! You are doing amazing ♥',
    rotation: 3,
    color: '#fef08a',
  },

  relatedWordsTitle: 'Helpful Words with 하늘 ♥',
  relatedWords: [
    { id: '1', word: '하늘색', phonetic: 'haneulseak', meaning: 'sky blue' },
    { id: '2', word: '밤하늘', phonetic: 'bam-haneul', meaning: 'night sky' },
    { id: '3', word: '파란 하늘', phonetic: 'paran haneul', meaning: 'blue sky' },
    { id: '4', word: '천국', phonetic: 'cheonguk', meaning: 'paradise' },
    { id: '5', word: '구름', phonetic: 'gureum', meaning: 'cloud' },
  ],

  footerTagLeft: 'KOREA',
  footerTagLeftSub: 'DAILY HANGUL DIGEST',
  brandingText: 'Sora Korean Study ♥',
  showSocialIcons: true,

  topSticker1: '✨',
  topSticker2: '🌸',
  stickerKey: 'cherry_blossom',
  stickerSize: 48,
  themeId: 'korean_lavender',
  aspectRatio: '9:16',

  fontMain: 'Noto Sans KR',
  fontLatin: 'Plus Jakarta Sans',
  fontHandwriting: 'Gaegu',

  showPhoneticSecondary: true,
  showPhoto: true,
  showMeaningSection: true,
  showSentenceSection: true,
  showRelatedWordsSection: true,
  showFooterTags: true,
  showStickyNotes: true,

  cardPadding: 20,
  mainWordSize: 92,
  avatarSize: 76,
  photoSize: 110,
  stickyNoteFontSize: 16,
};

export const RUSSIAN_PRESET: CardData = {
  id: 'preset_russian',
  language: 'russian',
  headerTitle: "Anya's Russian Word Of The Day ♥",
  headerSubtitle: "Learn Russian Every Day ♥",
  avatarUrl: '',
  avatarPreset: 'cat',

  mainWord: 'Здание',
  phoneticMain: '[ˈzdanije]',
  phoneticSecondary: 'сущ. ср. р. (Noun, neuter)',
  wordTag: 'TORFL 1',

  photoUrl: '',
  photoPreset: 'building',

  meaningLabel: 'Meaning:',
  meaningPrimary: 'building; structure; edifice',
  meaningSecondary: 'edificio; costruzione; struttura',

  sentenceLabel: 'Example Sentence',
  sentenceForeign: 'Это красивое здание находится в центре города.',
  sentencePhonetic: 'Eto krasivoye zdaniye nakhoditsya v tsentre goroda.',
  sentenceTranslation1: 'This beautiful building is located in the city center.',
  sentenceTranslation2: "Questo bell'edificio si trova nel centro della città.",

  stickyNote1: {
    show: true,
    title: 'Daily Mantra',
    text: 'Шаг за шагом к цели ♥',
    rotation: -2,
    color: '#fef08a',
    fontSize: 15,
  },
  stickyNote2: {
    show: true,
    title: 'Grammar Tip',
    text: 'Neuter nouns in Russian often end in -о or -е ♥',
    rotation: 2,
    color: '#fee2e2',
    fontSize: 15,
  },

  relatedWordsTitle: 'Helpful Words with Здание ♥',
  relatedWords: [
    { id: '1', word: 'Строить', phonetic: 'stroit\'', meaning: 'to build' },
    { id: '2', word: 'Архитектура', phonetic: 'arkhitektura', meaning: 'architecture' },
    { id: '3', word: 'Этаж', phonetic: 'etazh', meaning: 'floor / story' },
    { id: '4', word: 'Вход', phonetic: 'vkhod', meaning: 'entrance' },
    { id: '5', word: 'Дом', phonetic: 'dom', meaning: 'house / home' },
  ],

  footerTagLeft: 'RUSSIA',
  footerTagLeftSub: 'RUSSIAN LANGUAGE CLUB',
  brandingText: 'Anya Russian Notes ♥',
  showSocialIcons: true,

  topSticker1: '🎀',
  topSticker2: '⭐',
  stickerKey: 'matryoshka',
  stickerSize: 48,
  themeId: 'journal_scrapbook',
  aspectRatio: '9:16',

  fontMain: 'Montserrat',
  fontLatin: 'Plus Jakarta Sans',
  fontHandwriting: 'Caveat',

  showPhoneticSecondary: true,
  showPhoto: true,
  showMeaningSection: true,
  showSentenceSection: true,
  showRelatedWordsSection: true,
  showFooterTags: true,
  showStickyNotes: true,

  cardPadding: 20,
  mainWordSize: 88,
  avatarSize: 76,
  photoSize: 110,
  stickyNoteFontSize: 16,
};

export const SAMPLE_LIBRARY: { lang: 'chinese' | 'korean' | 'russian'; word: string; phonetic: string; meaning: string; data: Partial<CardData> }[] = [
  {
    lang: 'chinese',
    word: '愛',
    phonetic: 'ài',
    meaning: 'love; affection',
    data: {
      mainWord: '愛',
      phoneticMain: 'ài',
      phoneticSecondary: 'ㄞˋ',
      meaningPrimary: 'love; affection; to love',
      meaningSecondary: 'amore; volere bene',
      sentenceForeign: '我很愛我的家人。',
      sentencePhonetic: 'Wǒ hěn ài wǒ de jiārén.',
      sentenceTranslation1: 'I love my family very much.',
      sentenceTranslation2: 'Amo molto la mia famiglia.',
      relatedWords: [
        { id: '1', word: '愛人', phonetic: 'àiren', meaning: 'spouse / lover' },
        { id: '2', word: '可愛', phonetic: 'kě\'ài', meaning: 'cute / lovely' },
        { id: '3', word: '愛好', phonetic: 'àihào', meaning: 'hobby' },
        { id: '4', word: '關愛', phonetic: 'guān\'ài', meaning: 'care and affection' },
      ],
      photoPreset: 'heart',
      stickerKey: 'heart_star'
    }
  },
  {
    lang: 'chinese',
    word: '貓',
    phonetic: 'māo',
    meaning: 'cat',
    data: {
      mainWord: '貓',
      phoneticMain: 'māo',
      phoneticSecondary: 'ㄇㄠ',
      meaningPrimary: 'cat; feline',
      meaningSecondary: 'gatto',
      sentenceForeign: '那隻小貓在睡覺。',
      sentencePhonetic: 'Nà zhī xiǎomāo zài shuìjiào.',
      sentenceTranslation1: 'That kitten is sleeping.',
      sentenceTranslation2: 'Quel gattino sta dormendo.',
      relatedWords: [
        { id: '1', word: '小貓', phonetic: 'xiǎomāo', meaning: 'kitten' },
        { id: '2', word: '黑貓', phonetic: 'hēimāo', meaning: 'black cat' },
        { id: '3', word: '貓咪', phonetic: 'māomī', meaning: 'kitty' },
        { id: '4', word: '貓糧', phonetic: 'māoliáng', meaning: 'cat food' },
      ],
      photoPreset: 'cat',
      stickerKey: 'cat'
    }
  },
  {
    lang: 'korean',
    word: '사랑',
    phonetic: 'sarang',
    meaning: 'love',
    data: {
      mainWord: '사랑',
      phoneticMain: 'sarang',
      phoneticSecondary: '愛 (Hanja)',
      meaningPrimary: 'love; affection',
      meaningSecondary: 'amore',
      sentenceForeign: '당신을 정말 사랑해요.',
      sentencePhonetic: 'Dangsineul jeongmal saranghaeyo.',
      sentenceTranslation1: 'I really love you.',
      sentenceTranslation2: 'Ti amo davvero.',
      relatedWords: [
        { id: '1', word: '사랑해', phonetic: 'saranghae', meaning: 'I love you' },
        { id: '2', word: '사랑스러운', phonetic: 'sarangseureowun', meaning: 'lovely' },
        { id: '3', word: '첫사랑', phonetic: 'cheotsarang', meaning: 'first love' },
        { id: '4', word: '연인', phonetic: 'yeonin', meaning: 'sweetheart' },
      ],
      photoPreset: 'heart',
      stickerKey: 'heart_star'
    }
  },
  {
    lang: 'korean',
    word: '커피',
    phonetic: 'keopi',
    meaning: 'coffee',
    data: {
      mainWord: '커피',
      phoneticMain: 'keopi',
      phoneticSecondary: 'Coffee (Eng)',
      meaningPrimary: 'coffee',
      meaningSecondary: 'caffè',
      sentenceForeign: '아침에 따뜻한 커피 한 잔 마셔요.',
      sentencePhonetic: 'Achime ttatteut-han keopi han jan masyeoyo.',
      sentenceTranslation1: 'I drink a hot cup of coffee in the morning.',
      sentenceTranslation2: 'Bevo una tazza di caffè caldo la mattina.',
      relatedWords: [
        { id: '1', word: '아이스 커피', phonetic: 'aiseu keopi', meaning: 'iced coffee' },
        { id: '2', word: '커피숍', phonetic: 'keopisyop', meaning: 'coffee shop' },
        { id: '3', word: '원두', phonetic: 'wondu', meaning: 'coffee beans' },
        { id: '4', word: '카페인', phonetic: 'kapein', meaning: 'caffeine' },
      ],
      photoPreset: 'coffee',
      stickerKey: 'coffee'
    }
  },
  {
    lang: 'russian',
    word: 'Любовь',
    phonetic: '[lʲʊˈbofʲ]',
    meaning: 'love',
    data: {
      mainWord: 'Любовь',
      phoneticMain: '[lʲʊˈbofʲ]',
      phoneticSecondary: 'сущ. жен. р.',
      meaningPrimary: 'love; passion; affection',
      meaningSecondary: 'amore; affetto',
      sentenceForeign: 'Любовь делает мир прекраснее.',
      sentencePhonetic: 'Lyubov\' delayet mir prekrasneye.',
      sentenceTranslation1: 'Love makes the world more beautiful.',
      sentenceTranslation2: 'L\'amore rende il mondo più bello.',
      relatedWords: [
        { id: '1', word: 'Любить', phonetic: 'lyubit\'', meaning: 'to love' },
        { id: '2', word: 'Любимый', phonetic: 'lyubimyy', meaning: 'beloved / favorite' },
        { id: '3', word: 'Влюбленный', phonetic: 'vlyublennyy', meaning: 'in love' },
        { id: '4', word: 'Симпатия', phonetic: 'simpatiya', meaning: 'affection' },
      ],
      photoPreset: 'heart',
      stickerKey: 'heart_star'
    }
  },
  {
    lang: 'russian',
    word: 'Мечта',
    phonetic: '[mʲɪt͡sʲˈta]',
    meaning: 'dream; aspiration',
    data: {
      mainWord: 'Мечта',
      phoneticMain: '[mʲɪt͡sʲˈta]',
      phoneticSecondary: 'сущ. жен. р.',
      meaningPrimary: 'dream; wish; aspiration',
      meaningSecondary: 'sogno; desiderio',
      sentenceForeign: 'Следуй за своей мечтой каждый день.',
      sentencePhonetic: 'Sleduy za svoyey mechtey kazhdyy den\'.',
      sentenceTranslation1: 'Follow your dream every day.',
      sentenceTranslation2: 'Segui il tuo sogno ogni giorno.',
      relatedWords: [
        { id: '1', word: 'Мечтать', phonetic: 'mechtat\'', meaning: 'to dream' },
        { id: '2', word: 'Мечтатель', phonetic: 'mechtatel\'', meaning: 'dreamer' },
        { id: '3', word: 'Заветный', phonetic: 'zavetnyy', meaning: 'cherished' },
        { id: '4', word: 'Надежда', phonetic: 'nadezhda', meaning: 'hope' },
      ],
      photoPreset: 'sky',
      stickerKey: 'star'
    }
  }
];
