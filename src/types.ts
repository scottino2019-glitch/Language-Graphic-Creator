export type LanguageType = 'chinese' | 'korean' | 'russian';

export type AspectRatioType = '9:16' | '4:5' | '1:1' | '3:4';

export interface RelatedWord {
  id: string;
  word: string;
  phonetic: string;
  meaning: string;
}

export interface StickyNote {
  show: boolean;
  title: string;
  text: string;
  rotation: number; // e.g. -3 to 3 deg
  color: string;
  fontSize?: number; // e.g. 12 to 24px (default 16)
  fontFamily?: string;
}

export interface CardData {
  id: string;
  language: LanguageType;
  
  // Header section
  headerTitle: string; // e.g. "Yvette's Chinese Word Of The Day ♥"
  headerSubtitle: string; // e.g. "Learn Chinese Live Better ♥"
  avatarUrl: string; // URL or base64 or preset key
  avatarPreset: string; // e.g. 'girl_1', 'boy_1', 'panda', 'cat', 'custom'
  
  // Main Word Section
  mainWord: string; // e.g. "樓" or "하늘" or "Здание"
  phoneticMain: string; // e.g. "lóu" or "haneul" or "[ˈzdanije]"
  phoneticSecondary?: string; // e.g. Bopomofo "ㄌㄡˊ" or Hanja "天" or Grammar "сущ. ср. р."
  wordTag?: string; // e.g. "HSK 3", "TOPIK 1", "Nouns"
  
  // Main Image/Photo
  photoUrl?: string; // URL or preset
  photoPreset?: string; // e.g. 'building', 'sky', 'flower', 'coffee', 'custom'
  photoShape?: 'rounded' | 'circle' | 'square' | 'polaroid';
  photoBorder?: boolean;

  // Meaning Section
  meaningLabel: string; // e.g. "Meaning:"
  meaningPrimary: string; // e.g. "floor; story (of a building); building"
  meaningSecondary?: string; // e.g. "piano (di un edificio)"

  // Example Sentence Section
  sentenceLabel: string; // e.g. "Example Sentence"
  sentenceForeign: string; // e.g. "我住在五樓。"
  sentencePhonetic: string; // e.g. "Wǒ zhù zài wǔ lóu."
  sentenceTranslation1: string; // e.g. "I live on the fifth floor."
  sentenceTranslation2?: string; // e.g. "Abito al quinto piano."
  
  // Side Sticky note
  stickyNote1: StickyNote;
  stickyNote2: StickyNote;

  // Helpful Words Grid
  relatedWordsTitle: string; // e.g. "Helpful Words with 樓 ♥"
  relatedWords: RelatedWord[];

  // Footer Tags & Branding
  footerTagLeft: string; // e.g. "TAIWAN"
  footerTagLeftSub: string; // e.g. "MAKES LIFE BETTER"
  brandingText: string; // e.g. "Yvette Mandarin ♥"
  showSocialIcons: boolean; // Instagram, Youtube, TikTok

  // Decorative Stickers
  topSticker1?: string; // Top header left sticker/emoji (e.g. '💬', '✨', '🌸', '🎀', '👑')
  topSticker2?: string; // Top header right sticker/emoji (e.g. '⭐', '💖', '🧋', '☕', '🍃')
  stickerKey: string; // e.g. 'boba', 'cherry_blossom', 'matryoshka', 'coffee', 'star', 'heart_star'
  stickerCustomUrl?: string; // Custom uploaded sticker image URL
  stickerSize?: number; // e.g. 30 to 80px (default 48)

  // Styling properties
  themeId: string; // e.g. 'kawaii_pink', 'matcha_mint', 'journal_scrapbook', 'korean_lavender', 'dark_study', 'warm_peach', 'ink_carmine'
  aspectRatio: AspectRatioType;
  
  // Custom Fonts
  fontMain: string; // Font for target language characters
  fontLatin: string; // Font for English / Transliteration / Numbers
  fontHandwriting: string; // Font for sticky notes / quotes
  
  // Custom Color Overrides (optional)
  customBgColor?: string;
  customCardColor?: string;
  customAccentColor?: string;
  customTextColor?: string;

  // Display toggles
  showPhoneticSecondary: boolean;
  showPhoto: boolean;
  showMeaningSection: boolean;
  showSentenceSection: boolean;
  showRelatedWordsSection: boolean;
  showFooterTags: boolean;
  showStickyNotes: boolean;
  
  // Scale / Padding adjustments
  cardPadding: number; // e.g. 16 to 32
  mainWordSize: number; // e.g. 48 to 140
  avatarSize?: number; // e.g. 48 to 120 (default 72)
  photoSize?: number; // e.g. 60 to 180 (default 120)
  stickyNoteFontSize?: number; // default 16
  relatedWordFontSize?: number; // e.g. 16 to 32 (default 22)
}

export interface ThemeConfig {
  id: string;
  name: string;
  emoji: string;
  bgGradient: string;
  bgColor: string;
  cardBg: string;
  cardBorder: string;
  primaryAccent: string; // e.g. pink-500
  primaryAccentText: string;
  secondaryAccent: string; // e.g. yellow-100
  secondaryAccentText: string;
  textColor: string;
  textMuted: string;
  badgeBg: string;
  badgeText: string;
  stickyBg: string;
  stickyText: string;
  pillBg: string;
  pillText: string;
  patternOverlay?: string; // e.g. 'grid', 'dots', 'paper', 'none'
}
