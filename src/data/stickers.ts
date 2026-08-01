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
  { key: 'boba', name: 'Boba Milk Tea', emoji: '🧋' },
  { key: 'cherry_blossom', name: 'Cherry Blossom Flower', emoji: '🌸' },
  { key: 'matryoshka', name: 'Matryoshka Doll', emoji: '🪆' },
  { key: 'coffee', name: 'Takeout Coffee', emoji: '☕' },
  { key: 'star', name: 'Smiling Star', emoji: '⭐' },
  { key: 'heart_star', name: 'Hearts & Sparkles', emoji: '✨' },
  { key: 'cat', name: 'Cat Paw', emoji: '🐾' },
  { key: 'ramen', name: 'Ramen Bowl', emoji: '🍜' },
  { key: 'bamboo', name: 'Bamboo Branch', emoji: '🎋' },
  { key: 'cloud', name: 'Fluffy Cloud', emoji: '☁️' },
];
