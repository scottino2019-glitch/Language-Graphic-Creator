import React from 'react';

import { THEMES } from '../data/themes';
import { CardData } from '../types';
import { AvatarPreset, PhotoPreset, StickerIcon } from './IllustrationAssets';

interface CardPreviewProps {
  cardData: CardData;
  cardRef: React.RefObject<HTMLDivElement | null>;
  isExporting?: boolean;
}

export const CardPreview: React.FC<CardPreviewProps> = ({
  cardData,
  cardRef,
  isExporting = false,
}) => {
  const theme = THEMES.find((t) => t.id === cardData.themeId) || THEMES[0];

  const avatarPx = cardData.avatarSize || 76;
  const photoPx = cardData.photoSize || 110;

  // Aspect ratio dimensions logic
  const getAspectDimensions = () => {
    switch (cardData.aspectRatio) {
      case '9:16':
        return 'w-[500px] min-h-[880px]'; // standard story ratio
      case '4:5':
        return 'w-[500px] min-h-[625px]';
      case '1:1':
        return 'w-[500px] min-h-[500px]';
      case '3:4':
        return 'w-[500px] min-h-[666px]';
      default:
        return 'w-[500px] min-h-[880px]';
    }
  };

  // Pattern overlay background
  const getPatternBg = () => {
    if (theme.patternOverlay === 'grid') {
      return {
        backgroundImage: 'radial-gradient(#cbd5e1 1.2px, transparent 1.2px), radial-gradient(#cbd5e1 1.2px, transparent 1.2px)',
        backgroundSize: '24px 24px',
        backgroundPosition: '0 0, 12px 12px',
      };
    }
    if (theme.patternOverlay === 'dots') {
      return {
        backgroundImage: 'radial-gradient(#94a3b8 1.8px, transparent 1.8px)',
        backgroundSize: '20px 20px',
      };
    }
    if (theme.patternOverlay === 'paper') {
      return {
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 23px, #e2e8f0 24px)',
        backgroundSize: '100% 24px',
      };
    }
    return {};
  };

  return (
    <div
      ref={cardRef}
      id="card-preview-export"
      className={`relative select-none ${getAspectDimensions()} transition-all duration-200 overflow-hidden shadow-2xl rounded-2xl flex flex-col justify-between`}
      style={{
        backgroundColor: cardData.customBgColor || theme.bgColor,
        padding: `${cardData.cardPadding}px`,
        fontFamily: cardData.fontLatin || 'Plus Jakarta Sans',
        color: cardData.customTextColor || theme.textColor,
        ...getPatternBg(),
      }}
    >
      {/* Outer Card Wrapper */}
      <div
        className={`w-full h-full flex flex-col justify-between rounded-xl p-4 relative ${theme.cardBorder} bg-white/90 backdrop-blur-xs shadow-md space-y-3`}
        style={{
          backgroundColor: cardData.customCardColor || theme.cardBg,
        }}
      >
        {/* HEADER SECTION - PROMINENT AVATAR & BANNER */}
        <div className="relative border-b border-pink-100/80 pb-3">
          {/* Top Banner & Level Tag */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <div
              className="px-4 py-1.5 rounded-r-full rounded-tl-xl text-white font-bold text-base flex items-center gap-2 shadow-sm"
              style={{
                backgroundColor: cardData.customAccentColor || theme.primaryAccent,
              }}
            >
              <span>{cardData.headerTitle}</span>
            </div>

            {cardData.wordTag && (
              <span
                className="px-3 py-1 text-xs font-black rounded-full border shadow-xs tracking-wide"
                style={{
                  backgroundColor: theme.badgeBg,
                  color: theme.badgeText,
                  borderColor: theme.primaryAccent,
                }}
              >
                {cardData.wordTag}
              </span>
            )}
          </div>

          {/* Large Character Avatar + Motto */}
          <div className="flex items-center justify-between mt-2.5 px-1">
            <div className="flex items-center gap-3">
              <div className="relative group flex-shrink-0">
                <AvatarPreset
                  preset={cardData.avatarPreset}
                  customUrl={cardData.avatarUrl}
                  className="rounded-full shadow-md"
                  style={{ width: `${avatarPx}px`, height: `${avatarPx}px` }}
                />
              </div>

              <div className="flex flex-col gap-1">
                <div
                  className="px-3.5 py-1.5 rounded-2xl text-sm font-bold border border-amber-200/90 bg-amber-50/90 shadow-2xs text-amber-950 inline-block"
                  style={{ fontFamily: cardData.fontHandwriting }}
                >
                  {cardData.headerSubtitle}
                </div>
              </div>
            </div>

            {/* Decorative Icon */}
            <div className="flex items-center gap-1.5 text-2xl opacity-90">
              <span>💬</span>
              <span>⭐</span>
            </div>
          </div>
        </div>

        {/* MAIN WORD SHOWCASE SECTION - PROMINENT & CLEAR */}
        <div className="relative my-1 p-4 bg-amber-50/90 rounded-2xl border border-amber-200 shadow-xs flex items-center justify-between gap-4">
          <div className="flex-1">
            {/* Foreign Character / Word with System Fallbacks & High Contrast */}
            <h1
              className="font-black tracking-tight leading-none text-slate-950 drop-shadow-xs"
              style={{
                fontFamily: `${cardData.fontMain}, 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', 'Noto Sans KR', 'Malgun Gothic', 'Roboto', sans-serif`,
                fontSize: `${cardData.mainWordSize}px`,
                color: cardData.customTextColor || '#0f172a',
              }}
            >
              {cardData.mainWord}
            </h1>

            {/* Phonetic Pronunciation Guide */}
            <div className="flex items-center gap-2.5 mt-2 flex-wrap">
              <span className="text-2xl font-black text-rose-600 tracking-wider">
                {cardData.phoneticMain}
              </span>

              {cardData.showPhoneticSecondary && cardData.phoneticSecondary && (
                <span className="text-xs font-black px-2.5 py-1 rounded-md bg-rose-100 text-rose-900 border border-rose-200/90 shadow-2xs">
                  {cardData.phoneticSecondary}
                </span>
              )}
            </div>
          </div>

          {/* Photo Illustration */}
          {cardData.showPhoto && (
            <div className="flex-shrink-0">
              <PhotoPreset
                preset={cardData.photoPreset || 'building'}
                customUrl={cardData.photoUrl}
                photoShape={cardData.photoShape || 'rounded'}
                photoBorder={cardData.photoBorder !== false}
                style={{ width: `${photoPx}px`, height: `${photoPx}px` }}
              />
            </div>
          )}
        </div>

        {/* MEANING SECTION */}
        {cardData.showMeaningSection && (
          <div className="p-3.5 rounded-xl border border-sky-200 bg-sky-50/90 shadow-2xs relative">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-base">📖</span>
              <span className="text-xs font-black uppercase tracking-wider text-sky-950">
                {cardData.meaningLabel}
              </span>
            </div>
            <p className="text-base font-bold text-slate-950 pl-6 leading-snug">
              {cardData.meaningPrimary}
            </p>
            {cardData.meaningSecondary && (
              <p className="text-xs text-slate-600 font-medium italic pl-6 mt-0.5">
                ({cardData.meaningSecondary})
              </p>
            )}
          </div>
        )}

        {/* EXAMPLE SENTENCE SECTION */}
        {cardData.showSentenceSection && (
          <div className="p-4 rounded-2xl border border-rose-200 bg-rose-50/70 shadow-2xs relative space-y-2">
            {/* Section Tag */}
            <div className="flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full bg-rose-200 text-rose-950 font-black text-xs shadow-2xs">
                <span>⭐</span>
                <span>{cardData.sentenceLabel}</span>
              </div>

              {/* Clean Sticky Note Tag in sentence section */}
              {cardData.showStickyNotes && cardData.stickyNote1.show && (
                <div
                  className="px-3.5 py-1.5 rounded-xl border border-amber-300 text-amber-950 shadow-xs font-black leading-tight"
                  style={{
                    backgroundColor: cardData.stickyNote1.color || '#fef08a',
                    transform: `rotate(${cardData.stickyNote1.rotation}deg)`,
                    fontSize: `${cardData.stickyNote1.fontSize || cardData.stickyNoteFontSize || 15}px`,
                    fontFamily: `${cardData.fontHandwriting}, 'Caveat', cursive, sans-serif`,
                  }}
                >
                  {cardData.stickyNote1.text}
                </div>
              )}
            </div>

            {/* Foreign Sentence */}
            <p
              className="text-xl font-black text-slate-950 tracking-wide leading-snug pt-1"
              style={{
                fontFamily: `${cardData.fontMain}, 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', 'Noto Sans KR', sans-serif`,
              }}
            >
              {cardData.sentenceForeign}
            </p>

            {/* Transliteration */}
            <p className="text-xs font-extrabold text-rose-700">
              {cardData.sentencePhonetic}
            </p>

            {/* Translation 1 */}
            <p className="text-xs font-bold text-sky-950">
              {cardData.sentenceTranslation1}
            </p>

            {/* Translation 2 */}
            {cardData.sentenceTranslation2 && (
              <p className="text-xs text-slate-600 italic">
                ({cardData.sentenceTranslation2})
              </p>
            )}
          </div>
        )}

        {/* RELATED WORDS GRID SECTION */}
        {cardData.showRelatedWordsSection && cardData.relatedWords.length > 0 && (
          <div className="space-y-1.5">
            <div className="text-center">
              <span
                className="inline-block px-4 py-1 rounded-full text-xs font-extrabold text-white shadow-2xs"
                style={{
                  backgroundColor: cardData.customAccentColor || theme.pillBg,
                }}
              >
                {cardData.relatedWordsTitle}
              </span>
            </div>

            <div className={`grid ${cardData.relatedWords.length <= 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-2`}>
              {cardData.relatedWords.slice(0, 6).map((item) => (
                <div
                  key={item.id}
                  className="p-2.5 rounded-xl border border-amber-200/90 bg-white/95 text-center flex flex-col justify-center shadow-2xs hover:border-pink-300 transition-all"
                >
                  {/* Ideogram / Foreign Word in small box: Crisp, Large & Highly Legible */}
                  <span
                    className="font-black text-slate-950 leading-snug block break-words"
                    style={{
                      fontFamily: "'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', 'Noto Sans KR', 'Malgun Gothic', 'Arial', sans-serif",
                      fontSize: `${cardData.relatedWordFontSize || 22}px`,
                    }}
                  >
                    {item.word}
                  </span>
                  <span className="text-xs text-rose-800 font-black block truncate mt-0.5">
                    {item.phonetic}
                  </span>
                  <span className="text-[11px] text-slate-800 font-bold block truncate leading-tight mt-0.5">
                    {item.meaning}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FOOTER SECTION & STICKERS */}
        <div className="pt-2 border-t border-dashed border-pink-200/80 flex items-center justify-between relative">
          {/* Footer Tag */}
          {cardData.showFooterTags && (
            <div className="flex flex-col">
              <div className="px-3.5 py-1 rounded-xl bg-emerald-700 text-white font-extrabold text-xs tracking-wider shadow-xs">
                {cardData.footerTagLeft}
              </div>
              <span className="text-[9px] font-extrabold text-emerald-950 tracking-widest uppercase mt-0.5 text-center">
                {cardData.footerTagLeftSub}
              </span>
            </div>
          )}

          {/* Sticky Note 2 */}
          {cardData.showStickyNotes && cardData.stickyNote2.show && (
            <div
              className="px-3.5 py-1.5 rounded-xl shadow-xs border border-amber-300 text-amber-950 font-black max-w-[180px] text-center"
              style={{
                backgroundColor: cardData.stickyNote2.color || '#fef9c3',
                transform: `rotate(${cardData.stickyNote2.rotation}deg)`,
                fontSize: `${cardData.stickyNote2.fontSize || cardData.stickyNoteFontSize || 15}px`,
                fontFamily: `${cardData.fontHandwriting}, 'Caveat', cursive, sans-serif`,
              }}
            >
              {cardData.stickyNote2.text}
            </div>
          )}

          {/* Sticker Icon */}
          <div className="flex items-center gap-1">
            <StickerIcon stickerKey={cardData.stickerKey} className="w-12 h-12" />
          </div>
        </div>

        {/* BOTTOM BRANDING */}
        <div className="pt-1.5 border-t border-pink-200/60 flex items-center justify-between text-xs font-bold text-pink-700">
          <span style={{ fontFamily: cardData.fontHandwriting }} className="text-base">
            {cardData.brandingText}
          </span>

          {cardData.showSocialIcons && (
            <div className="flex items-center gap-2 text-pink-500 text-sm">
              <span>📷</span>
              <span>▶️</span>
              <span>🎵</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

