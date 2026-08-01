import React, { useState } from 'react';
import {
  Type,
  Palette,
  Layout,
  Image as ImageIcon,
  BookOpen,
  Plus,
  Trash2,
  Smile,
  Sparkles,
  Check,
  Bookmark,
  RotateCcw,
} from 'lucide-react';

import { CHINESE_PRESET, KOREAN_PRESET, RUSSIAN_PRESET, SAMPLE_LIBRARY } from '../data/presets';
import { AVATAR_PRESETS, PHOTO_PRESETS, STICKER_PRESETS, TOP_STICKER_PRESETS } from '../data/stickers';
import { THEMES } from '../data/themes';
import { AspectRatioType, CardData, LanguageType, RelatedWord } from '../types';
import { AvatarPreset, StickerIcon } from './IllustrationAssets';
import { AVAILABLE_FONTS } from './FontLoader';

interface EditorPanelProps {
  cardData: CardData;
  onChange: (newData: CardData) => void;
  onReset: () => void;
  savedCards: CardData[];
  onSaveCard: () => void;
  onLoadSavedCard: (saved: CardData) => void;
  onDeleteSavedCard: (id: string) => void;
}

export const EditorPanel: React.FC<EditorPanelProps> = ({
  cardData,
  onChange,
  onReset,
  savedCards,
  onSaveCard,
  onLoadSavedCard,
  onDeleteSavedCard,
}) => {
  const [activeTab, setActiveTab] = useState<'content' | 'style' | 'fonts' | 'media' | 'presets'>('content');

  // Helper for quick updates
  const update = (fields: Partial<CardData>) => {
    onChange({ ...cardData, ...fields });
  };

  // Switch Language & Auto-apply defaults
  const handleLanguageChange = (lang: LanguageType) => {
    if (lang === 'chinese') {
      onChange({ ...CHINESE_PRESET, id: cardData.id });
    } else if (lang === 'korean') {
      onChange({ ...KOREAN_PRESET, id: cardData.id });
    } else if (lang === 'russian') {
      onChange({ ...RUSSIAN_PRESET, id: cardData.id });
    }
  };

  // Add a new related word
  const handleAddRelatedWord = () => {
    const newWord: RelatedWord = {
      id: Date.now().toString(),
      word: 'Word',
      phonetic: 'pinyin',
      meaning: 'meaning',
    };
    update({ relatedWords: [...cardData.relatedWords, newWord] });
  };

  // Remove related word
  const handleRemoveRelatedWord = (id: string) => {
    update({ relatedWords: cardData.relatedWords.filter((w) => w.id !== id) });
  };

  // Update specific related word
  const handleUpdateRelatedWord = (id: string, field: keyof RelatedWord, value: string) => {
    const updated = cardData.relatedWords.map((w) =>
      w.id === id ? { ...w, [field]: value } : w
    );
    update({ relatedWords: updated });
  };

  // File upload for avatar
  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        update({
          avatarUrl: uploadEvent.target?.result as string,
          avatarPreset: 'custom',
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // File upload for photo
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        update({
          photoUrl: uploadEvent.target?.result as string,
          photoPreset: 'custom',
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // File upload for custom sticker
  const handleStickerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        update({
          stickerCustomUrl: uploadEvent.target?.result as string,
          stickerKey: 'custom',
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-pink-200/80 shadow-xl overflow-hidden flex flex-col h-full max-h-[880px]">
      {/* Navigation Tabs Header */}
      <div className="flex border-b border-pink-100 bg-pink-50/50 p-1.5 gap-1 overflow-x-auto text-xs font-bold scrollbar-none">
        <button
          onClick={() => setActiveTab('content')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'content'
              ? 'bg-pink-500 text-white shadow-xs'
              : 'text-slate-600 hover:bg-pink-100'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Contenuto</span>
        </button>

        <button
          onClick={() => setActiveTab('style')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'style'
              ? 'bg-pink-500 text-white shadow-xs'
              : 'text-slate-600 hover:bg-pink-100'
          }`}
        >
          <Palette className="w-3.5 h-3.5" />
          <span>Stili & Colori</span>
        </button>

        <button
          onClick={() => setActiveTab('fonts')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'fonts'
              ? 'bg-pink-500 text-white shadow-xs'
              : 'text-slate-600 hover:bg-pink-100'
          }`}
        >
          <Type className="w-3.5 h-3.5" />
          <span>Font & Formato</span>
        </button>

        <button
          onClick={() => setActiveTab('media')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'media'
              ? 'bg-pink-500 text-white shadow-xs'
              : 'text-slate-600 hover:bg-pink-100'
          }`}
        >
          <ImageIcon className="w-3.5 h-3.5" />
          <span>Adesivi & Foto</span>
        </button>

        <button
          onClick={() => setActiveTab('presets')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'presets'
              ? 'bg-pink-500 text-white shadow-xs'
              : 'text-slate-600 hover:bg-pink-100'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Libreria</span>
        </button>
      </div>

      {/* Tab Body Contents */}
      <div className="p-4 overflow-y-auto space-y-5 flex-1 text-slate-800 text-sm">
        {/* TAB 1: CONTENUTO (CONTENT) */}
        {activeTab === 'content' && (
          <div className="space-y-4">
            {/* Language Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Seleziona Lingua
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleLanguageChange('chinese')}
                  className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 transition-all cursor-pointer ${
                    cardData.language === 'chinese'
                      ? 'border-pink-500 bg-pink-50 text-pink-700 font-extrabold ring-2 ring-pink-200'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  <span className="text-xl">🇨🇳</span>
                  <span className="text-xs">Cinese</span>
                </button>

                <button
                  onClick={() => handleLanguageChange('korean')}
                  className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 transition-all cursor-pointer ${
                    cardData.language === 'korean'
                      ? 'border-pink-500 bg-pink-50 text-pink-700 font-extrabold ring-2 ring-pink-200'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  <span className="text-xl">🇰🇷</span>
                  <span className="text-xs">Coreano</span>
                </button>

                <button
                  onClick={() => handleLanguageChange('russian')}
                  className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 transition-all cursor-pointer ${
                    cardData.language === 'russian'
                      ? 'border-pink-500 bg-pink-50 text-pink-700 font-extrabold ring-2 ring-pink-200'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  <span className="text-xl">🇷🇺</span>
                  <span className="text-xs">Russo</span>
                </button>
              </div>
            </div>

            {/* Header Titles */}
            <div className="space-y-2 p-3 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="text-xs font-extrabold text-pink-600 uppercase tracking-wider block">
                Intestazione & Banner
              </span>
              <div>
                <label className="text-xs text-slate-600 font-medium">Titolo Banner Superiore</label>
                <input
                  type="text"
                  value={cardData.headerTitle}
                  onChange={(e) => update({ headerTitle: e.target.value })}
                  className="w-full mt-1 px-3 py-1.5 border border-slate-300 rounded-lg text-xs font-semibold focus:ring-2 focus:ring-pink-300 outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-slate-600 font-medium">Motto / Sottotitolo</label>
                <input
                  type="text"
                  value={cardData.headerSubtitle}
                  onChange={(e) => update({ headerSubtitle: e.target.value })}
                  className="w-full mt-1 px-3 py-1.5 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-pink-300 outline-none"
                />
              </div>
            </div>

            {/* Main Word Inputs */}
            <div className="space-y-2 p-3 bg-amber-50/80 rounded-xl border border-amber-200">
              <span className="text-xs font-extrabold text-amber-800 uppercase tracking-wider block">
                Parola Principale
              </span>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs text-slate-600 font-medium">Parola / Carattere</label>
                  <input
                    type="text"
                    value={cardData.mainWord}
                    onChange={(e) => update({ mainWord: e.target.value })}
                    className="w-full mt-1 px-3 py-1.5 border border-slate-300 rounded-lg text-sm font-bold focus:ring-2 focus:ring-pink-300 outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-600 font-medium">Pronuncia / Pinyin / IPA</label>
                  <input
                    type="text"
                    value={cardData.phoneticMain}
                    onChange={(e) => update({ phoneticMain: e.target.value })}
                    className="w-full mt-1 px-3 py-1.5 border border-slate-300 rounded-lg text-xs font-semibold text-rose-600 focus:ring-2 focus:ring-pink-300 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-2">
                <div>
                  <label className="text-xs text-slate-600 font-medium">Guida Secondaria (Bopomofo/Hanja)</label>
                  <input
                    type="text"
                    value={cardData.phoneticSecondary || ''}
                    onChange={(e) => update({ phoneticSecondary: e.target.value })}
                    className="w-full mt-1 px-3 py-1.5 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-pink-300 outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-600 font-medium">Livello / Tag (es. HSK 2)</label>
                  <input
                    type="text"
                    value={cardData.wordTag || ''}
                    onChange={(e) => update({ wordTag: e.target.value })}
                    className="w-full mt-1 px-3 py-1.5 border border-slate-300 rounded-lg text-xs font-semibold focus:ring-2 focus:ring-pink-300 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Meaning Section */}
            <div className="space-y-2 p-3 bg-sky-50/80 rounded-xl border border-sky-200">
              <span className="text-xs font-extrabold text-sky-800 uppercase tracking-wider block">
                Significato & Traduzioni
              </span>
              <div>
                <label className="text-xs text-slate-600 font-medium">Traduzione Principale (Inglese / Principale)</label>
                <input
                  type="text"
                  value={cardData.meaningPrimary}
                  onChange={(e) => update({ meaningPrimary: e.target.value })}
                  className="w-full mt-1 px-3 py-1.5 border border-slate-300 rounded-lg text-xs font-medium focus:ring-2 focus:ring-pink-300 outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-slate-600 font-medium">Seconda Traduzione (Italiano / Opzionale)</label>
                <input
                  type="text"
                  value={cardData.meaningSecondary || ''}
                  onChange={(e) => update({ meaningSecondary: e.target.value })}
                  className="w-full mt-1 px-3 py-1.5 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-pink-300 outline-none"
                />
              </div>
            </div>

            {/* Example Sentence Inputs */}
            <div className="space-y-2 p-3 bg-rose-50/80 rounded-xl border border-rose-200">
              <span className="text-xs font-extrabold text-rose-800 uppercase tracking-wider block">
                Frase d'Esempio
              </span>
              <div>
                <label className="text-xs text-slate-600 font-medium">Frase in Lingua Straniera</label>
                <input
                  type="text"
                  value={cardData.sentenceForeign}
                  onChange={(e) => update({ sentenceForeign: e.target.value })}
                  className="w-full mt-1 px-3 py-1.5 border border-slate-300 rounded-lg text-xs font-semibold focus:ring-2 focus:ring-pink-300 outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-slate-600 font-medium">Traslitterazione Frase</label>
                <input
                  type="text"
                  value={cardData.sentencePhonetic}
                  onChange={(e) => update({ sentencePhonetic: e.target.value })}
                  className="w-full mt-1 px-3 py-1.5 border border-slate-300 rounded-lg text-xs text-rose-600 focus:ring-2 focus:ring-pink-300 outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs text-slate-600 font-medium">Traduzione 1 (EN)</label>
                  <input
                    type="text"
                    value={cardData.sentenceTranslation1}
                    onChange={(e) => update({ sentenceTranslation1: e.target.value })}
                    className="w-full mt-1 px-3 py-1.5 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-pink-300 outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-600 font-medium">Traduzione 2 (IT)</label>
                  <input
                    type="text"
                    value={cardData.sentenceTranslation2 || ''}
                    onChange={(e) => update({ sentenceTranslation2: e.target.value })}
                    className="w-full mt-1 px-3 py-1.5 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-pink-300 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Related Words Section */}
            <div className="space-y-2 p-3 bg-purple-50/80 rounded-xl border border-purple-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-purple-800 uppercase tracking-wider">
                  Parole Correlate / Tabella
                </span>
                <button
                  onClick={handleAddRelatedWord}
                  className="px-2 py-1 text-xs font-bold bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3 h-3" /> Aggiungi
                </button>
              </div>

              <div className="space-y-2 mt-2">
                {cardData.relatedWords.map((item, idx) => (
                  <div key={item.id} className="p-2 bg-white rounded-lg border border-purple-100 flex items-center gap-2 text-xs">
                    <span className="font-bold text-purple-400">#{idx + 1}</span>
                    <input
                      type="text"
                      placeholder="Parola"
                      value={item.word}
                      onChange={(e) => handleUpdateRelatedWord(item.id, 'word', e.target.value)}
                      className="w-1/3 px-2 py-1 border rounded text-xs font-bold"
                    />
                    <input
                      type="text"
                      placeholder="Pronuncia"
                      value={item.phonetic}
                      onChange={(e) => handleUpdateRelatedWord(item.id, 'phonetic', e.target.value)}
                      className="w-1/3 px-2 py-1 border rounded text-xs text-rose-600"
                    />
                    <input
                      type="text"
                      placeholder="Significato"
                      value={item.meaning}
                      onChange={(e) => handleUpdateRelatedWord(item.id, 'meaning', e.target.value)}
                      className="w-1/3 px-2 py-1 border rounded text-xs"
                    />
                    <button
                      onClick={() => handleRemoveRelatedWord(item.id)}
                      className="p-1 text-rose-500 hover:bg-rose-50 rounded cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer & Branding */}
            <div className="space-y-2 p-3 bg-emerald-50/80 rounded-xl border border-emerald-200">
              <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider block">
                Tag Piè di Pagina & Branding
              </span>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs text-slate-600 font-medium">Tag Sinistra (es. TAIWAN)</label>
                  <input
                    type="text"
                    value={cardData.footerTagLeft}
                    onChange={(e) => update({ footerTagLeft: e.target.value })}
                    className="w-full mt-1 px-3 py-1.5 border border-slate-300 rounded-lg text-xs font-bold focus:ring-2 focus:ring-pink-300 outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-600 font-medium">Sottotitolo Tag</label>
                  <input
                    type="text"
                    value={cardData.footerTagLeftSub}
                    onChange={(e) => update({ footerTagLeftSub: e.target.value })}
                    className="w-full mt-1 px-3 py-1.5 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-pink-300 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-slate-600 font-medium">Firma Social / Nome Canale</label>
                <input
                  type="text"
                  value={cardData.brandingText}
                  onChange={(e) => update({ brandingText: e.target.value })}
                  className="w-full mt-1 px-3 py-1.5 border border-slate-300 rounded-lg text-xs font-semibold focus:ring-2 focus:ring-pink-300 outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: STILI & COLORI (STYLES & COLORS) */}
        {activeTab === 'style' && (
          <div className="space-y-5">
            {/* Preset Themes Grid */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Temi Grafici Predefiniti
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {THEMES.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => update({ themeId: theme.id })}
                    className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      cardData.themeId === theme.id
                        ? 'border-pink-500 bg-pink-50/80 ring-2 ring-pink-300 font-bold'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{theme.emoji}</span>
                      <span className="text-xs text-slate-800">{theme.name}</span>
                    </div>
                    {cardData.themeId === theme.id && (
                      <Check className="w-4 h-4 text-pink-600" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Color Overrides */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-3">
              <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
                Personalizzazione Avanzata Colori
              </span>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-600 block mb-1">Sfondo Carta</label>
                  <input
                    type="color"
                    value={cardData.customBgColor || '#fce7f3'}
                    onChange={(e) => update({ customBgColor: e.target.value })}
                    className="w-full h-8 rounded border p-0.5 cursor-pointer"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-600 block mb-1">Colore Scheda Interna</label>
                  <input
                    type="color"
                    value={cardData.customCardColor || '#ffffff'}
                    onChange={(e) => update({ customCardColor: e.target.value })}
                    className="w-full h-8 rounded border p-0.5 cursor-pointer"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-600 block mb-1">Colore Accento (Banner)</label>
                  <input
                    type="color"
                    value={cardData.customAccentColor || '#ec4899'}
                    onChange={(e) => update({ customAccentColor: e.target.value })}
                    className="w-full h-8 rounded border p-0.5 cursor-pointer"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-600 block mb-1">Colore Testo</label>
                  <input
                    type="color"
                    value={cardData.customTextColor || '#374151'}
                    onChange={(e) => update({ customTextColor: e.target.value })}
                    className="w-full h-8 rounded border p-0.5 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Padding & Size Sliders */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-3">
              <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
                Dimensioni & Spaziatura
              </span>

              {/* Main Word Size */}
              <div>
                <div className="flex justify-between text-xs font-medium text-slate-600 mb-1">
                  <span>Grandezza Carattere Principale</span>
                  <span>{cardData.mainWordSize}px</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="140"
                  value={cardData.mainWordSize}
                  onChange={(e) => update({ mainWordSize: Number(e.target.value) })}
                  className="w-full accent-pink-500 cursor-pointer"
                />
              </div>

              {/* Small Box Ideograms Size */}
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                  <span>Dimensione Ideogrammi Box Piccoli</span>
                  <span>{cardData.relatedWordFontSize || 22}px</span>
                </div>
                <input
                  type="range"
                  min="16"
                  max="36"
                  value={cardData.relatedWordFontSize || 22}
                  onChange={(e) => update({ relatedWordFontSize: Number(e.target.value) })}
                  className="w-full accent-pink-500 cursor-pointer"
                />
              </div>

              {/* Character Avatar Size */}
              <div>
                <div className="flex justify-between text-xs font-medium text-slate-600 mb-1">
                  <span>Dimensione Personaggio / Avatar</span>
                  <span>{cardData.avatarSize || 76}px</span>
                </div>
                <input
                  type="range"
                  min="48"
                  max="120"
                  value={cardData.avatarSize || 76}
                  onChange={(e) => update({ avatarSize: Number(e.target.value) })}
                  className="w-full accent-pink-500 cursor-pointer"
                />
              </div>

              {/* Photo Illustration Size */}
              <div>
                <div className="flex justify-between text-xs font-medium text-slate-600 mb-1">
                  <span>Dimensione Foto / Illustrazione</span>
                  <span>{cardData.photoSize || 110}px</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="180"
                  value={cardData.photoSize || 110}
                  onChange={(e) => update({ photoSize: Number(e.target.value) })}
                  className="w-full accent-pink-500 cursor-pointer"
                />
              </div>

              {/* Card Padding */}
              <div>
                <div className="flex justify-between text-xs font-medium text-slate-600 mb-1">
                  <span>Spaziatura Bordo (Padding)</span>
                  <span>{cardData.cardPadding}px</span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="36"
                  value={cardData.cardPadding}
                  onChange={(e) => update({ cardPadding: Number(e.target.value) })}
                  className="w-full accent-pink-500 cursor-pointer"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: FONT & FORMATO (FONTS & ASPECT RATIO) */}
        {activeTab === 'fonts' && (
          <div className="space-y-5">
            {/* Aspect Ratio Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Formato Immagine / Aspect Ratio
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { id: '9:16', name: 'Story / Reel (9:16)', ratio: '9:16' },
                  { id: '4:5', name: 'Post Feed (4:5)', ratio: '4:5' },
                  { id: '1:1', name: 'Quadrato (1:1)', ratio: '1:1' },
                  { id: '3:4', name: 'Portrait (3:4)', ratio: '3:4' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => update({ aspectRatio: item.ratio as AspectRatioType })}
                    className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                      cardData.aspectRatio === item.ratio
                        ? 'border-pink-500 bg-pink-50 text-pink-700 font-extrabold ring-2 ring-pink-200'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    <span className="text-xs block">{item.ratio}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Font Selection Dropdowns */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-3">
              <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
                Selezione Tipografia & Font
              </span>

              {/* Language Character Font */}
              <div>
                <label className="text-xs text-slate-600 font-medium block mb-1">
                  Font Parola Principale ({cardData.language.toUpperCase()})
                </label>
                <select
                  value={cardData.fontMain}
                  onChange={(e) => update({ fontMain: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs font-medium bg-white focus:ring-2 focus:ring-pink-300 outline-none"
                >
                  {(cardData.language === 'chinese'
                    ? AVAILABLE_FONTS.chinese
                    : cardData.language === 'korean'
                    ? AVAILABLE_FONTS.korean
                    : AVAILABLE_FONTS.russian
                  ).map((f) => (
                    <option key={f.value} value={f.value}>
                      {f.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Latin & Transliteration Font */}
              <div>
                <label className="text-xs text-slate-600 font-medium block mb-1">
                  Font Traslitterazione & Testo Latino
                </label>
                <select
                  value={cardData.fontLatin}
                  onChange={(e) => update({ fontLatin: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs font-medium bg-white focus:ring-2 focus:ring-pink-300 outline-none"
                >
                  {AVAILABLE_FONTS.latin.map((f) => (
                    <option key={f.value} value={f.value}>
                      {f.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Handwriting Font */}
              <div>
                <label className="text-xs text-slate-600 font-medium block mb-1">
                  Font Scrittura a Mano / Note
                </label>
                <select
                  value={cardData.fontHandwriting}
                  onChange={(e) => update({ fontHandwriting: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs font-medium bg-white focus:ring-2 focus:ring-pink-300 outline-none"
                >
                  <option value="Caveat">Caveat (Cute Handwriting)</option>
                  <option value="Gaegu">Gaegu (Korean Style Cute)</option>
                  <option value="Marck Script">Marck Script (Cursive)</option>
                  <option value="Comic Neue">Comic Neue (Comic)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: ADESIVI & FOTO (MEDIA & EXTRAS) */}
        {activeTab === 'media' && (
          <div className="space-y-5">
            {/* PHOTO / ILLUSTRATION CUSTOMIZER */}
            <div className="p-3.5 bg-gradient-to-br from-pink-50/80 to-amber-50/80 rounded-2xl border border-pink-200/90 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <ImageIcon className="w-4 h-4 text-pink-600" />
                  Foto & Immagine In Scheda
                </span>
                <label className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cardData.showPhoto}
                    onChange={(e) => update({ showPhoto: e.target.checked })}
                    className="accent-pink-500 rounded"
                  />
                  Mostra Foto
                </label>
              </div>

              {cardData.showPhoto && (
                <>
                  {/* Photo File Upload & Direct URL Input */}
                  <div className="space-y-2 bg-white/80 p-2.5 rounded-xl border border-pink-100">
                    <label className="text-xs font-extrabold text-slate-700 block">
                      1. Carica Foto o Incolla Link URL
                    </label>

                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Incolla link URL (https://...)"
                        value={cardData.photoUrl || (cardData.photoPreset?.startsWith('http') ? cardData.photoPreset : '')}
                        onChange={(e) =>
                          update({
                            photoUrl: e.target.value,
                            photoPreset: 'custom',
                          })
                        }
                        className="flex-1 px-2.5 py-1.5 border border-slate-300 rounded-lg text-xs font-medium focus:ring-2 focus:ring-pink-400 outline-none"
                      />
                      {cardData.photoUrl && (
                        <button
                          onClick={() => update({ photoUrl: '', photoPreset: 'building' })}
                          className="px-2 py-1 text-xs text-rose-600 font-bold bg-rose-50 border border-rose-200 rounded-lg hover:bg-rose-100"
                        >
                          Rimuovi
                        </button>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <label className="flex-1 px-3 py-1.5 bg-pink-500 hover:bg-pink-600 text-white text-xs font-bold rounded-lg cursor-pointer text-center transition-colors shadow-2xs">
                        📁 Carica Immagine Dal Computer
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  {/* Photo Shape & Style */}
                  <div className="bg-white/80 p-2.5 rounded-xl border border-pink-100 space-y-2">
                    <span className="text-xs font-extrabold text-slate-700 block">
                      2. Forma e Stile Immagine
                    </span>
                    <div className="grid grid-cols-4 gap-1.5 text-xs font-bold">
                      {[
                        { id: 'rounded', label: 'Arrotondato' },
                        { id: 'circle', label: 'Cerchio' },
                        { id: 'polaroid', label: 'Polaroid' },
                        { id: 'square', label: 'Squadrato' },
                      ].map((s) => (
                        <button
                          key={s.id}
                          onClick={() => update({ photoShape: s.id as any })}
                          className={`p-1.5 rounded-lg border text-center transition-all cursor-pointer ${
                            (cardData.photoShape || 'rounded') === s.id
                              ? 'border-pink-500 bg-pink-100 text-pink-800 font-extrabold'
                              : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                          }`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>

                    {/* Photo Size Slider */}
                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                        <span>Dimensione Foto</span>
                        <span>{cardData.photoSize || 110}px</span>
                      </div>
                      <input
                        type="range"
                        min="60"
                        max="180"
                        value={cardData.photoSize || 110}
                        onChange={(e) => update({ photoSize: Number(e.target.value) })}
                        className="w-full accent-pink-500 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* High Quality Preset Photo Gallery */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-extrabold text-slate-700 block">
                      3. Oppure Scegli Una Foto Ad Alta Definizione:
                    </span>
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        {
                          name: 'Pagoda / Sakura',
                          url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=300&q=80',
                        },
                        {
                          name: 'Tokyo Neon',
                          url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=300&q=80',
                        },
                        {
                          name: 'Lanterne Rosse',
                          url: 'https://images.unsplash.com/photo-1528164344705-475426879e0d?auto=format&fit=crop&w=300&q=80',
                        },
                        {
                          name: 'Tè & Matcha',
                          url: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=300&q=80',
                        },
                        {
                          name: 'Seoul Sunset',
                          url: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=300&q=80',
                        },
                        {
                          name: 'Piazza Rossa',
                          url: 'https://images.unsplash.com/photo-1513326718677-b964603b136d?auto=format&fit=crop&w=300&q=80',
                        },
                        {
                          name: 'Caffè & Libri',
                          url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=300&q=80',
                        },
                        {
                          name: 'Gatto Studio',
                          url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=300&q=80',
                        },
                      ].map((item) => (
                        <button
                          key={item.name}
                          onClick={() => update({ photoUrl: item.url, photoPreset: 'custom' })}
                          className={`relative rounded-xl overflow-hidden border-2 h-16 group transition-all cursor-pointer ${
                            cardData.photoUrl === item.url
                              ? 'border-pink-500 ring-2 ring-pink-300 scale-105'
                              : 'border-white hover:opacity-90'
                          }`}
                        >
                          <img
                            src={item.url}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-end p-1">
                            <span className="text-[9px] font-black text-white leading-tight truncate">
                              {item.name}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* STICKY NOTES / ADESIVI CUSTOMIZER */}
            <div className="p-3.5 bg-amber-50/90 rounded-2xl border border-amber-200/90 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-amber-950 uppercase tracking-wider flex items-center gap-1.5">
                  <Bookmark className="w-4 h-4 text-amber-600" />
                  Post-It & Adesivi Notine
                </span>
                <label className="flex items-center gap-1.5 text-xs text-amber-900 font-bold cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cardData.showStickyNotes}
                    onChange={(e) => update({ showStickyNotes: e.target.checked })}
                    className="accent-amber-600 rounded"
                  />
                  Attiva Note
                </label>
              </div>

              {cardData.showStickyNotes && (
                <div className="space-y-3">
                  {/* Sticky Note Font Size Control */}
                  <div className="bg-white/80 p-2.5 rounded-xl border border-amber-200">
                    <div className="flex justify-between text-xs font-black text-amber-950 mb-1">
                      <span>Grandezza Font Adesivo Post-it</span>
                      <span>{cardData.stickyNote1.fontSize || cardData.stickyNoteFontSize || 16}px</span>
                    </div>
                    <input
                      type="range"
                      min="12"
                      max="26"
                      value={cardData.stickyNote1.fontSize || cardData.stickyNoteFontSize || 16}
                      onChange={(e) => {
                        const newSz = Number(e.target.value);
                        update({
                          stickyNoteFontSize: newSz,
                          stickyNote1: { ...cardData.stickyNote1, fontSize: newSz },
                          stickyNote2: { ...cardData.stickyNote2, fontSize: newSz },
                        });
                      }}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                  </div>

                  {/* Note 1 Input */}
                  <div className="bg-white/80 p-2.5 rounded-xl border border-amber-200 space-y-1.5">
                    <span className="text-xs font-extrabold text-amber-950 block">Post-it Superiore (Mantra / Nota 1)</span>
                    <input
                      type="text"
                      value={cardData.stickyNote1.text}
                      onChange={(e) =>
                        update({
                          stickyNote1: { ...cardData.stickyNote1, text: e.target.value },
                        })
                      }
                      className="w-full px-3 py-1.5 border border-amber-300 rounded-lg text-xs font-bold bg-amber-50/50 text-amber-950 outline-none"
                    />
                  </div>

                  {/* Note 2 Input */}
                  <div className="bg-white/80 p-2.5 rounded-xl border border-amber-200 space-y-1.5">
                    <span className="text-xs font-extrabold text-amber-950 block">Post-it Inferiore (Grammatica / Nota 2)</span>
                    <input
                      type="text"
                      value={cardData.stickyNote2.text}
                      onChange={(e) =>
                        update({
                          stickyNote2: { ...cardData.stickyNote2, text: e.target.value },
                        })
                      }
                      className="w-full px-3 py-1.5 border border-amber-300 rounded-lg text-xs font-bold bg-amber-50/50 text-amber-950 outline-none"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* AVATAR PERSONAGGIO */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
              <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
                Avatar Personaggio
              </span>
              <div className="grid grid-cols-4 gap-2">
                {AVATAR_PRESETS.map((av) => (
                  <button
                    key={av.key}
                    onClick={() =>
                      update({
                        avatarPreset: av.key,
                        avatarUrl: av.key === 'custom' ? cardData.avatarUrl : '',
                      })
                    }
                    className={`p-2 rounded-xl border flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${
                      cardData.avatarPreset === av.key
                        ? 'border-pink-500 bg-pink-100 ring-2 ring-pink-300 scale-105'
                        : 'border-slate-200 hover:bg-white'
                    }`}
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      <AvatarPreset preset={av.key} customUrl={cardData.avatarUrl} className="w-8 h-8" />
                    </div>
                    <span className="text-[10px] text-slate-700 font-bold truncate">{av.name}</span>
                  </button>
                ))}
              </div>

              {/* Custom Avatar Upload */}
              <div className="mt-2 pt-2 border-t border-slate-200 flex items-center justify-between gap-2">
                <label className="flex-1 px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded-lg cursor-pointer text-center transition-colors">
                  👤 Carica Foto Avatar Personalizzata
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* STICKERS IN ALTO (INTESTAZIONE) */}
            <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200/90 space-y-3">
              <span className="text-xs font-extrabold text-amber-950 uppercase tracking-wider block">
                ✨ Stickers In Alto (Header)
              </span>

              {/* Sticker Sinistro (Top Left) */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-700 flex items-center justify-between">
                  <span>Sticker Sinistro (Sinistra):</span>
                  <input
                    type="text"
                    value={cardData.topSticker1 !== undefined ? cardData.topSticker1 : '💬'}
                    onChange={(e) => update({ topSticker1: e.target.value })}
                    className="w-12 text-center text-sm px-1 py-0.5 border border-slate-300 rounded font-bold bg-white"
                    maxLength={3}
                  />
                </label>
                <div className="flex flex-wrap gap-1">
                  {TOP_STICKER_PRESETS.slice(0, 10).map((st) => (
                    <button
                      key={`top1_${st.emoji}`}
                      onClick={() => update({ topSticker1: st.emoji })}
                      className={`w-7 h-7 rounded-lg border text-sm flex items-center justify-center transition-all cursor-pointer ${
                        (cardData.topSticker1 || '💬') === st.emoji
                          ? 'border-pink-500 bg-pink-100 ring-2 ring-pink-300 scale-105'
                          : 'border-slate-200 bg-white hover:bg-slate-100'
                      }`}
                      title={st.label}
                    >
                      {st.emoji}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sticker Destro (Top Right) */}
              <div className="space-y-1.5 pt-1 border-t border-amber-200/60">
                <label className="text-[11px] font-bold text-slate-700 flex items-center justify-between">
                  <span>Sticker Destro (Destra):</span>
                  <input
                    type="text"
                    value={cardData.topSticker2 !== undefined ? cardData.topSticker2 : '⭐'}
                    onChange={(e) => update({ topSticker2: e.target.value })}
                    className="w-12 text-center text-sm px-1 py-0.5 border border-slate-300 rounded font-bold bg-white"
                    maxLength={3}
                  />
                </label>
                <div className="flex flex-wrap gap-1">
                  {TOP_STICKER_PRESETS.slice(1).map((st) => (
                    <button
                      key={`top2_${st.emoji}`}
                      onClick={() => update({ topSticker2: st.emoji })}
                      className={`w-7 h-7 rounded-lg border text-sm flex items-center justify-center transition-all cursor-pointer ${
                        (cardData.topSticker2 || '⭐') === st.emoji
                          ? 'border-pink-500 bg-pink-100 ring-2 ring-pink-300 scale-105'
                          : 'border-slate-200 bg-white hover:bg-slate-100'
                      }`}
                      title={st.label}
                    >
                      {st.emoji}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* STICKER DECORATIVO IN BASSO */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
                  🎨 Sticker Icona In Basso
                </span>
                <span className="text-[10px] text-pink-600 font-bold bg-pink-50 px-2 py-0.5 rounded-full border border-pink-200">
                  {cardData.stickerKey}
                </span>
              </div>

              {/* Sticker Grid with live visual renders */}
              <div className="grid grid-cols-4 gap-2">
                {STICKER_PRESETS.map((st) => (
                  <button
                    key={st.key}
                    onClick={() =>
                      update({
                        stickerKey: st.key,
                        stickerCustomUrl: st.key === 'custom' ? cardData.stickerCustomUrl : '',
                      })
                    }
                    className={`p-2 rounded-xl border flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${
                      cardData.stickerKey === st.key
                        ? 'border-pink-500 bg-pink-100 ring-2 ring-pink-300 scale-105'
                        : 'border-slate-200 bg-white hover:bg-slate-100'
                    }`}
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      <StickerIcon
                        stickerKey={st.key}
                        customUrl={st.key === 'custom' ? cardData.stickerCustomUrl : undefined}
                        className="w-8 h-8"
                      />
                    </div>
                    <span className="text-[10px] text-slate-700 font-bold truncate max-w-full">
                      {st.name}
                    </span>
                  </button>
                ))}
              </div>

              {/* Sticker Size Slider */}
              <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between gap-3">
                <span className="text-xs font-bold text-slate-700 whitespace-nowrap">Dimensione Sticker:</span>
                <input
                  type="range"
                  min="28"
                  max="80"
                  value={cardData.stickerSize || 48}
                  onChange={(e) => update({ stickerSize: Number(e.target.value) })}
                  className="flex-1 accent-pink-500 cursor-pointer"
                />
                <span className="text-xs font-extrabold text-pink-600 w-8 text-right">
                  {cardData.stickerSize || 48}px
                </span>
              </div>

              {/* Custom Sticker Image Upload */}
              <div className="pt-1 flex items-center gap-2">
                <label className="flex-1 px-3 py-1.5 bg-pink-50 hover:bg-pink-100 text-pink-800 border border-pink-200 text-xs font-bold rounded-lg cursor-pointer text-center transition-colors">
                  🖼️ Carica Sticker Personalizzato
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleStickerUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* MOSTRA / NASCONDI SEZIONI */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2 text-xs">
              <span className="font-extrabold text-slate-700 uppercase tracking-wider block mb-1">
                Mostra / Nascondi Sezioni
              </span>
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cardData.showPhoto}
                    onChange={(e) => update({ showPhoto: e.target.checked })}
                    className="accent-pink-500 rounded"
                  />
                  <span>Foto Parola</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cardData.showMeaningSection}
                    onChange={(e) => update({ showMeaningSection: e.target.checked })}
                    className="accent-pink-500 rounded"
                  />
                  <span>Significato</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cardData.showSentenceSection}
                    onChange={(e) => update({ showSentenceSection: e.target.checked })}
                    className="accent-pink-500 rounded"
                  />
                  <span>Frase d'Esempio</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cardData.showRelatedWordsSection}
                    onChange={(e) => update({ showRelatedWordsSection: e.target.checked })}
                    className="accent-pink-500 rounded"
                  />
                  <span>Parole Correlate</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cardData.showStickyNotes}
                    onChange={(e) => update({ showStickyNotes: e.target.checked })}
                    className="accent-pink-500 rounded"
                  />
                  <span>Note Adesive</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cardData.showFooterTags}
                    onChange={(e) => update({ showFooterTags: e.target.checked })}
                    className="accent-pink-500 rounded"
                  />
                  <span>Tag In Basso</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: LIBRERIA & SALVATI (PRESETS & SAVED CARDS) */}
        {activeTab === 'presets' && (
          <div className="space-y-5">
            {/* Quick Vocabulary Preset Buttons */}
            <div>
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                Carica Vocabolario da Libreria
              </span>
              <div className="grid grid-cols-2 gap-2">
                {SAMPLE_LIBRARY.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      update({
                        language: item.lang,
                        ...item.data,
                      });
                    }}
                    className="p-2.5 rounded-xl border border-slate-200 hover:border-pink-300 bg-slate-50 hover:bg-pink-50/50 text-left transition-all cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs">
                          {item.lang === 'chinese' ? '🇨🇳' : item.lang === 'korean' ? '🇰🇷' : '🇷🇺'}
                        </span>
                        <span className="font-extrabold text-sm text-slate-800">{item.word}</span>
                        <span className="text-xs text-rose-600 font-semibold">({item.phonetic})</span>
                      </div>
                      <span className="text-[11px] text-slate-500 block truncate">{item.meaning}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Save Current Card to Local Storage */}
            <div className="p-3 bg-pink-50 rounded-xl border border-pink-200 flex items-center justify-between">
              <div>
                <span className="font-bold text-xs text-pink-900 block">Salva Scheda Corrente</span>
                <span className="text-[11px] text-pink-700">Conserva questa grafica nel tuo browser</span>
              </div>
              <button
                onClick={onSaveCard}
                className="px-3 py-1.5 bg-pink-600 hover:bg-pink-700 text-white rounded-lg text-xs font-bold flex items-center gap-1 shadow-xs cursor-pointer"
              >
                <Bookmark className="w-3.5 h-3.5" /> Salva
              </button>
            </div>

            {/* Saved Cards List */}
            <div>
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                Le Tue Schede Salvate ({savedCards.length})
              </span>
              {savedCards.length === 0 ? (
                <p className="text-xs text-slate-400 italic p-3 text-center border border-dashed rounded-xl">
                  Nessuna scheda salvata finora. Clicca "Salva" in alto per conservare le tue creazioni!
                </p>
              ) : (
                <div className="space-y-2">
                  {savedCards.map((saved) => (
                    <div
                      key={saved.id}
                      className="p-2.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between shadow-2xs hover:border-pink-300"
                    >
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs">
                            {saved.language === 'chinese'
                              ? '🇨🇳'
                              : saved.language === 'korean'
                              ? '🇰🇷'
                              : '🇷🇺'}
                          </span>
                          <span className="font-bold text-sm text-slate-900">{saved.mainWord}</span>
                          <span className="text-xs text-rose-600">({saved.phoneticMain})</span>
                        </div>
                        <span className="text-[10px] text-slate-400 block">{saved.meaningPrimary}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => onLoadSavedCard(saved)}
                          className="px-2.5 py-1 bg-pink-100 hover:bg-pink-200 text-pink-800 rounded-lg text-xs font-bold cursor-pointer"
                        >
                          Carica
                        </button>
                        <button
                          onClick={() => onDeleteSavedCard(saved.id)}
                          className="p-1 text-rose-500 hover:bg-rose-50 rounded cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Reset Defaults */}
            <div className="pt-2 border-t border-slate-200 flex justify-end">
              <button
                onClick={onReset}
                className="px-3 py-1.5 border border-slate-300 hover:bg-slate-100 text-slate-600 rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Ripristina Predefinito
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
