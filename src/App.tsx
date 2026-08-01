import React, { useRef, useState, useEffect } from 'react';
import { toPng, toJpeg } from 'html-to-image';
import confetti from 'canvas-confetti';
import {
  Download,
  Copy,
  Sparkles,
  RotateCcw,
  Languages,
  Check,
  Eye,
  Share2,
} from 'lucide-react';

import { CHINESE_PRESET, KOREAN_PRESET, RUSSIAN_PRESET } from './data/presets';
import { CardData, LanguageType } from './types';
import { CardPreview } from './components/CardPreview';
import { EditorPanel } from './components/EditorPanel';
import { FontLoader } from './components/FontLoader';

export default function App() {
  const [cardData, setCardData] = useState<CardData>(CHINESE_PRESET);
  const [isExporting, setIsExporting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [savedCards, setSavedCards] = useState<CardData[]>([]);
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Load saved cards from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('language_cards_saved');
      if (stored) {
        setSavedCards(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to parse saved cards from localStorage', e);
    }
  }, []);

  // Save card to localStorage
  const handleSaveCard = () => {
    const updated = [
      cardData,
      ...savedCards.filter((c) => c.id !== cardData.id),
    ];
    setSavedCards(updated);
    localStorage.setItem('language_cards_saved', JSON.stringify(updated));
    confetti({ particleCount: 40, spread: 50, origin: { y: 0.7 } });
  };

  // Delete saved card
  const handleDeleteSavedCard = (id: string) => {
    const updated = savedCards.filter((c) => c.id !== id);
    setSavedCards(updated);
    localStorage.setItem('language_cards_saved', JSON.stringify(updated));
  };

  // Reset to current language default
  const handleReset = () => {
    if (cardData.language === 'chinese') setCardData(CHINESE_PRESET);
    else if (cardData.language === 'korean') setCardData(KOREAN_PRESET);
    else if (cardData.language === 'russian') setCardData(RUSSIAN_PRESET);
  };

  // Export card as PNG
  const handleDownloadPNG = async () => {
    if (!cardRef.current) return;
    try {
      setIsExporting(true);
      let dataUrl: string;
      try {
        dataUrl = await toPng(cardRef.current, {
          pixelRatio: 2,
          cacheBust: true,
          skipFonts: true,
          fontEmbedCSS: '',
        });
      } catch (e) {
        console.warn('Initial toPng failed, retrying without cacheBust:', e);
        dataUrl = await toPng(cardRef.current, {
          pixelRatio: 1.5,
          skipFonts: true,
          fontEmbedCSS: '',
        });
      }
      const link = document.createElement('a');
      link.download = `${cardData.language}_${cardData.mainWord}_flashcard.png`;
      link.href = dataUrl;
      link.click();

      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    } catch (err) {
      console.error('Failed to export PNG:', err);
    } finally {
      setIsExporting(false);
    }
  };

  // Export card as JPG
  const handleDownloadJPG = async () => {
    if (!cardRef.current) return;
    try {
      setIsExporting(true);
      let dataUrl: string;
      try {
        dataUrl = await toJpeg(cardRef.current, {
          quality: 0.95,
          pixelRatio: 2,
          skipFonts: true,
          fontEmbedCSS: '',
        });
      } catch (e) {
        console.warn('Initial toJpeg failed, retrying fallback:', e);
        dataUrl = await toJpeg(cardRef.current, {
          quality: 0.9,
          pixelRatio: 1.5,
          skipFonts: true,
          fontEmbedCSS: '',
        });
      }
      const link = document.createElement('a');
      link.download = `${cardData.language}_${cardData.mainWord}_flashcard.jpg`;
      link.href = dataUrl;
      link.click();

      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    } catch (err) {
      console.error('Failed to export JPG:', err);
    } finally {
      setIsExporting(false);
    }
  };

  // Copy Image to Clipboard
  const handleCopyToClipboard = async () => {
    if (!cardRef.current) return;
    try {
      setIsExporting(true);
      const dataUrl = await toPng(cardRef.current, {
        pixelRatio: 2,
        skipFonts: true,
        fontEmbedCSS: '',
      });
      const response = await fetch(dataUrl);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ [blob.type]: blob }),
      ]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-amber-100 text-slate-800 flex flex-col font-sans">
      <FontLoader />

      {/* TOP HEADER BRAND BAR */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-pink-200/80 px-4 py-3 shadow-2xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-400 text-white flex items-center justify-center shadow-md font-black text-xl">
              🌸
            </div>
            <div>
              <h1 className="font-extrabold text-base sm:text-lg text-slate-900 leading-tight">
                Language Graphic Creator
              </h1>
              <p className="text-xs text-slate-500 hidden sm:block">
                Crea immagini e flashcard personalizzate per Cinese, Coreano e Russo
              </p>
            </div>
          </div>

          {/* Quick Language Toggle & Export buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyToClipboard}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300/80 rounded-xl font-bold text-xs shadow-2xs transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Copiato!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copia Immagine</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownloadPNG}
              disabled={isExporting}
              className="flex items-center gap-2 px-4 py-2 bg-pink-600 hover:bg-pink-700 active:scale-95 text-white rounded-xl font-extrabold text-xs shadow-md transition-all cursor-pointer disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              <span>{isExporting ? 'Esportazione...' : 'Scarica HD PNG'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER (2 COLUMNS: EDITOR LEFT, LIVE PREVIEW RIGHT) */}
      <main className="max-w-7xl mx-auto w-full p-4 sm:p-6 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: CUSTOMIZATION CONTROLS PANEL */}
        <div className="lg:col-span-6 xl:col-span-6 w-full">
          <EditorPanel
            cardData={cardData}
            onChange={setCardData}
            onReset={handleReset}
            savedCards={savedCards}
            onSaveCard={handleSaveCard}
            onLoadSavedCard={setCardData}
            onDeleteSavedCard={handleDeleteSavedCard}
          />
        </div>

        {/* RIGHT COLUMN: LIVE CANVAS PREVIEW & EXPORT ACTIONS */}
        <div className="lg:col-span-6 xl:col-span-6 w-full flex flex-col items-center justify-center space-y-4 lg:sticky lg:top-20">
          <div className="w-full bg-white/60 backdrop-blur-md p-3 rounded-2xl border border-pink-200/80 shadow-xs flex items-center justify-between text-xs font-bold text-slate-700">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-pink-600" />
              <span>Anteprima in Tempo Reale</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700 font-extrabold text-[10px] uppercase tracking-wider">
              {cardData.aspectRatio} Formato
            </span>
          </div>

          {/* Interactive Card Canvas Wrapper */}
          <div className="w-full flex items-center justify-center p-2 sm:p-4 bg-slate-900/5 backdrop-blur-2xs rounded-2xl border border-dashed border-pink-300/80 overflow-x-auto min-h-[500px]">
            <CardPreview
              cardData={cardData}
              cardRef={cardRef}
              isExporting={isExporting}
            />
          </div>

          {/* Bottom Export Bar */}
          <div className="w-full grid grid-cols-3 gap-2">
            <button
              onClick={handleDownloadPNG}
              disabled={isExporting}
              className="py-2.5 px-3 bg-pink-600 hover:bg-pink-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PNG (Alta Qualità)</span>
            </button>

            <button
              onClick={handleDownloadJPG}
              disabled={isExporting}
              className="py-2.5 px-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5" />
              <span>JPG (Compresso)</span>
            </button>

            <button
              onClick={handleCopyToClipboard}
              className="py-2.5 px-3 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copiato!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copia negli Appunti</span>
                </>
              )}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
