export interface StickerOption {
  key: string;
  name: string;
  emoji: string;
  svg: string; // SVG inline string or render helper
}

export const AVATAR_PRESETS = [
  { key: 'girl_1', name: 'Girl Anime/Chibi 1', emoji: '👧' },
  { key: 'girl_2', name: 'Girl Anime/Chibi 2', emoji: '👩' },
  { key: 'boy_1', name: 'Boy Anime/Chibi 1', emoji: '👦' },
  { key: 'panda', name: 'Cute Panda', emoji: '🐼' },
  { key: 'cat', name: 'Kawaii Cat', emoji: '🐱' },
  { key: 'shiba', name: 'Shiba Inu Dog', emoji: '🐕' },
  { key: 'teacher', name: 'Teacher Glasses', emoji: '👩‍🏫' },
  { key: 'robot', name: 'Friendly Robot', emoji: '🤖' },
  { key: 'custom', name: 'Custom Upload Image', emoji: '🖼️' },
];

export const PHOTO_PRESETS = [
  { key: 'building', name: 'Building / Skyscraper', emoji: '🏢' },
  { key: 'sky', name: 'Blue Sky & Cloud', emoji: '☁️' },
  { key: 'coffee', name: 'Cafe & Coffee Cup', emoji: '☕' },
  { key: 'flower', name: 'Cherry Blossom Branch', emoji: '🌸' },
  { key: 'heart', name: 'Pink Heart Symbol', emoji: '💖' },
  { key: 'book', name: 'Open Notebook', emoji: '📖' },
  { key: 'landmark', name: 'City Landmark', emoji: '🗼' },
  { key: 'cat', name: 'Sleeping Kitten', emoji: '🐾' },
  { key: 'custom', name: 'Custom Upload Photo', emoji: '📸' },
];

export const STICKER_PRESETS = [
  { key: 'boba', name: 'Boba Tea', emoji: '🧋' },
  { key: 'cherry_blossom', name: 'Sakura', emoji: '🌸' },
  { key: 'matryoshka', name: 'Matrioska', emoji: '🪆' },
  { key: 'coffee', name: 'Caffè', emoji: '☕' },
  { key: 'star', name: 'Stella', emoji: '⭐' },
  { key: 'heart_star', name: 'Cuori & Scintille', emoji: '✨' },
  { key: 'cat', name: 'Zampa Gatto', emoji: '🐾' },
  { key: 'ramen', name: 'Ramen', emoji: '🍜' },
  { key: 'bamboo', name: 'Bambù', emoji: '🎋' },
  { key: 'cloud', name: 'Nuvola', emoji: '☁️' },
  { key: 'ribbon', name: 'Fiocco Rosa', emoji: '🎀' },
  { key: 'crown', name: 'Corona', emoji: '👑' },
  { key: 'fire', name: 'Fuoco', emoji: '🔥' },
  { key: 'custom', name: 'Carica Immagine', emoji: '📁' },
];

export const TOP_STICKER_PRESETS = [
  { emoji: '💬', label: 'Balloon' },
  { emoji: '⭐', label: 'Stella' },
  { emoji: '✨', label: 'Scintille' },
  { emoji: '🌸', label: 'Fiore' },
  { emoji: '🎀', label: 'Fiocco' },
  { emoji: '👑', label: 'Corona' },
  { emoji: '🔥', label: 'Fire' },
  { emoji: '💌', label: 'Lettera' },
  { emoji: '🐾', label: 'Zampa' },
  { emoji: '🧋', label: 'Boba' },
  { emoji: '☕', label: 'Caffè' },
  { emoji: '🍃', label: 'Foglia' },
  { emoji: '💖', label: 'Cuore' },
  { emoji: '🎯', label: 'Obiettivo' },
  { emoji: '💡', label: 'Idea' },
  { emoji: '☀️', label: 'Sole' },
  { emoji: '🌙', label: 'Luna' },
];
