import React from 'react';

// Avatars
export const AvatarPreset: React.FC<{
  preset: string;
  customUrl?: string;
  className?: string;
  style?: React.CSSProperties;
}> = ({ preset, customUrl, className = 'w-16 h-16', style }) => {
  if (preset === 'custom' && customUrl) {
    return (
      <img
        src={customUrl}
        alt="Avatar"
        className={`${className} object-cover rounded-full border-2 border-white shadow-md`}
        style={style}
        referrerPolicy="no-referrer"
      />
    );
  }

  switch (preset) {
    case 'girl_1':
      return (
        <svg viewBox="0 0 100 100" className={`${className} drop-shadow-md`} style={style}>
          <circle cx="50" cy="50" r="46" fill="#fbcfe8" stroke="#f472b6" strokeWidth="3" />
          {/* Hair back */}
          <path d="M 20 45 Q 15 80 30 88 M 80 45 Q 85 80 70 88" stroke="#451a03" strokeWidth="12" strokeLinecap="round" />
          {/* Face */}
          <circle cx="50" cy="52" r="28" fill="#fde047" opacity="0.2" />
          <circle cx="50" cy="50" r="26" fill="#fef3c7" />
          {/* Eyes */}
          <ellipse cx="40" cy="48" rx="3.5" ry="5" fill="#1f2937" />
          <ellipse cx="60" cy="48" rx="3.5" ry="5" fill="#1f2937" />
          <circle cx="41.5" cy="46" r="1.5" fill="#ffffff" />
          <circle cx="61.5" cy="46" r="1.5" fill="#ffffff" />
          {/* Blush */}
          <ellipse cx="36" cy="55" rx="5" ry="2.5" fill="#f472b6" opacity="0.6" />
          <ellipse cx="64" cy="55" rx="5" ry="2.5" fill="#f472b6" opacity="0.6" />
          {/* Mouth */}
          <path d="M 45 57 Q 50 63 55 57" fill="#ef4444" stroke="#dc2626" strokeWidth="1" />
          {/* Bangs */}
          <path d="M 24 45 Q 50 25 76 45 Q 50 38 24 45 Z" fill="#451a03" />
          {/* Hair bow */}
          <path d="M 68 28 Q 78 20 78 32 Z M 68 28 Q 78 36 78 24 Z" fill="#ec4899" />
          <circle cx="68" cy="28" r="3" fill="#f43f5e" />
        </svg>
      );
    case 'girl_2':
      return (
        <svg viewBox="0 0 100 100" className={`${className} drop-shadow-md`}>
          <circle cx="50" cy="50" r="46" fill="#ddd6fe" stroke="#a78bfa" strokeWidth="3" />
          <circle cx="50" cy="50" r="26" fill="#fde68a" />
          {/* Short bob hair */}
          <path d="M 22 55 C 20 25 80 25 78 55 C 75 60 72 40 50 40 C 28 40 25 60 22 55 Z" fill="#312e81" />
          <ellipse cx="41" cy="50" rx="3" ry="4" fill="#1e1b4b" />
          <ellipse cx="59" cy="50" rx="3" ry="4" fill="#1e1b4b" />
          <path d="M 46 56 Q 50 60 54 56" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="37" cy="54" rx="4" ry="2" fill="#f472b6" opacity="0.7" />
          <ellipse cx="63" cy="54" rx="4" ry="2" fill="#f472b6" opacity="0.7" />
          {/* Beret hat */}
          <path d="M 28 35 Q 50 12 76 30 Q 50 24 28 35 Z" fill="#7c3aed" />
          <circle cx="52" cy="18" r="3" fill="#a855f7" />
        </svg>
      );
    case 'panda':
      return (
        <svg viewBox="0 0 100 100" className={`${className} drop-shadow-md`}>
          <circle cx="50" cy="50" r="46" fill="#a7f3d0" stroke="#34d399" strokeWidth="3" />
          {/* Ears */}
          <circle cx="28" cy="28" r="12" fill="#1f2937" />
          <circle cx="72" cy="28" r="12" fill="#1f2937" />
          {/* Head */}
          <circle cx="50" cy="54" r="28" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" />
          {/* Eye patches */}
          <ellipse cx="38" cy="50" rx="7" ry="9" fill="#1f2937" transform="rotate(-15 38 50)" />
          <ellipse cx="62" cy="50" rx="7" ry="9" fill="#1f2937" transform="rotate(15 62 50)" />
          {/* Eyes */}
          <circle cx="39" cy="49" r="2.5" fill="#ffffff" />
          <circle cx="61" cy="49" r="2.5" fill="#ffffff" />
          {/* Nose & Mouth */}
          <ellipse cx="50" cy="58" rx="4" ry="3" fill="#1f2937" />
          <path d="M 46 63 Q 50 67 54 63" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
          {/* Pink cheek */}
          <circle cx="30" cy="58" r="3.5" fill="#f472b6" opacity="0.5" />
          <circle cx="70" cy="58" r="3.5" fill="#f472b6" opacity="0.5" />
        </svg>
      );
    case 'cat':
      return (
        <svg viewBox="0 0 100 100" className={`${className} drop-shadow-md`}>
          <circle cx="50" cy="50" r="46" fill="#fef08a" stroke="#facc15" strokeWidth="3" />
          {/* Ears */}
          <polygon points="25,25 20,50 42,38" fill="#fb923c" />
          <polygon points="75,25 80,50 58,38" fill="#fb923c" />
          <polygon points="27,30 23,46 39,38" fill="#fbcfe8" />
          <polygon points="73,30 77,46 61,38" fill="#fbcfe8" />
          {/* Head */}
          <circle cx="50" cy="54" r="26" fill="#ffedd5" />
          {/* Eyes */}
          <ellipse cx="40" cy="50" rx="3" ry="5" fill="#1e293b" />
          <ellipse cx="60" cy="50" rx="3" ry="5" fill="#1e293b" />
          <circle cx="41" cy="48" r="1.2" fill="#ffffff" />
          <circle cx="61" cy="48" r="1.2" fill="#ffffff" />
          {/* Nose & Whiskers */}
          <polygon points="48,55 52,55 50,58" fill="#f43f5e" />
          <path d="M 46 60 Q 50 64 54 60" fill="none" stroke="#1e293b" strokeWidth="1.5" />
          <line x1="22" y1="52" x2="33" y2="54" stroke="#9a3412" strokeWidth="1.5" />
          <line x1="22" y1="58" x2="33" y2="57" stroke="#9a3412" strokeWidth="1.5" />
          <line x1="78" y1="52" x2="67" y2="54" stroke="#9a3412" strokeWidth="1.5" />
          <line x1="78" y1="58" x2="67" y2="57" stroke="#9a3412" strokeWidth="1.5" />
        </svg>
      );
    case 'shiba':
      return (
        <svg viewBox="0 0 100 100" className={`${className} drop-shadow-md`}>
          <circle cx="50" cy="50" r="46" fill="#fed7aa" stroke="#fb923c" strokeWidth="3" />
          {/* Ears */}
          <polygon points="25,20 22,46 42,35" fill="#ea580c" />
          <polygon points="75,20 78,46 58,35" fill="#ea580c" />
          {/* Head */}
          <circle cx="50" cy="54" r="28" fill="#f97316" />
          {/* White muzzle */}
          <path d="M 30 58 Q 50 38 70 58 Q 50 78 30 58 Z" fill="#ffffff" />
          {/* Eyes */}
          <circle cx="38" cy="48" r="3.5" fill="#1c1917" />
          <circle cx="62" cy="48" r="3.5" fill="#1c1917" />
          {/* Eyebrow spots */}
          <ellipse cx="38" cy="41" rx="3" ry="2" fill="#ffffff" />
          <ellipse cx="62" cy="41" rx="3" ry="2" fill="#ffffff" />
          {/* Nose */}
          <ellipse cx="50" cy="54" rx="4" ry="3" fill="#1c1917" />
          <path d="M 46 60 Q 50 65 54 60" fill="none" stroke="#1c1917" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 100 100" className={`${className} drop-shadow-md`}>
          <circle cx="50" cy="50" r="46" fill="#fbcfe8" stroke="#f472b6" strokeWidth="3" />
          <circle cx="50" cy="40" r="18" fill="#fde047" />
          <path d="M 25 80 Q 50 55 75 80 Z" fill="#ec4899" />
        </svg>
      );
  }
};

// Photo / Main Illustration Asset
export const PhotoPreset: React.FC<{
  preset: string;
  customUrl?: string;
  className?: string;
  style?: React.CSSProperties;
  photoShape?: 'rounded' | 'circle' | 'square' | 'polaroid';
  photoBorder?: boolean;
}> = ({
  preset,
  customUrl,
  className = 'w-28 h-28',
  style,
  photoShape = 'rounded',
  photoBorder = true,
}) => {
  const imageUrl = customUrl || (preset && (preset.startsWith('http') || preset.startsWith('data:')) ? preset : null);

  const getShapeClass = () => {
    switch (photoShape) {
      case 'circle':
        return 'rounded-full';
      case 'square':
        return 'rounded-none';
      case 'polaroid':
        return 'rounded-md p-1.5 bg-white pb-5 shadow-md';
      case 'rounded':
      default:
        return 'rounded-2xl';
    }
  };

  const borderStyle = photoBorder ? 'border-2 border-white/90 shadow-md' : '';

  if (imageUrl) {
    return (
      <div className={`overflow-hidden flex-shrink-0 ${getShapeClass()} ${borderStyle}`} style={style}>
        <img
          src={imageUrl}
          alt="Illustration Photo"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  switch (preset) {
    case 'building':
      return (
        <div className={`${className} bg-gradient-to-t from-sky-200 to-indigo-100 ${getShapeClass()} p-2 ${borderStyle} flex items-center justify-center overflow-hidden relative`} style={style}>
          <svg viewBox="0 0 100 120" className="w-full h-full">
            <rect width="100" height="120" fill="#e0f2fe" rx="8" />
            <circle cx="20" cy="20" r="12" fill="#fef08a" opacity="0.8" />
            <path d="M 60 25 Q 70 18 80 25 Q 88 32 80 38 Q 60 40 60 25 Z" fill="#ffffff" opacity="0.9" />
            <rect x="25" y="30" width="50" height="85" fill="#475569" rx="2" />
            <rect x="28" y="26" width="44" height="6" fill="#334155" />
            {[40, 52, 64, 76, 88, 100].map((y) => (
              <g key={y}>
                <rect x="32" y={y} width="8" height="7" fill="#fef08a" rx="1" />
                <rect x="46" y={y} width="8" height="7" fill="#fef08a" rx="1" />
                <rect x="60" y={y} width="8" height="7" fill="#fef08a" rx="1" />
              </g>
            ))}
            <line x1="25" y1="60" x2="75" y2="60" stroke="#94a3b8" strokeWidth="2" />
          </svg>
        </div>
      );
    case 'sky':
      return (
        <div className={`${className} bg-gradient-to-b from-sky-400 via-sky-200 to-indigo-100 ${getShapeClass()} p-2 ${borderStyle} flex items-center justify-center relative`} style={style}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="75" cy="25" r="14" fill="#fef08a" />
            <path d="M 15 50 Q 25 35 45 42 Q 60 30 75 45 Q 85 55 70 65 Q 15 70 15 50 Z" fill="#ffffff" />
            <path d="M 45 65 Q 55 52 70 58 Q 80 50 90 60 Q 95 72 80 78 Q 40 82 45 65 Z" fill="#ffffff" opacity="0.8" />
            <path d="M 20 25 Q 25 20 30 25 Q 35 20 40 25" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      );
    case 'coffee':
      return (
        <div className={`${className} bg-gradient-to-br from-amber-100 to-orange-200 ${getShapeClass()} p-2 ${borderStyle} flex items-center justify-center relative`} style={style}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M 40 25 Q 35 15 42 8" fill="none" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 50 25 Q 55 15 48 8" fill="none" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 60 25 Q 55 15 62 8" fill="none" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="25" y="32" width="50" height="52" fill="#fffbeb" rx="6" stroke="#b45309" strokeWidth="3" />
            <path d="M 30 38 L 70 38 L 65 78 L 35 78 Z" fill="#78350f" />
            <path d="M 75 42 C 90 42 90 68 75 68" fill="none" stroke="#b45309" strokeWidth="4" strokeLinecap="round" />
            <path d="M 50 52 C 45 45 35 52 50 62 C 65 52 55 45 50 52 Z" fill="#f43f5e" />
          </svg>
        </div>
      );
    case 'flower':
      return (
        <div className={`${className} bg-gradient-to-br from-pink-100 to-rose-200 ${getShapeClass()} p-2 ${borderStyle} flex items-center justify-center relative`} style={style}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M 10 90 Q 50 60 85 20" fill="none" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
            <circle cx="35" cy="70" r="10" fill="#fbcfe8" />
            <circle cx="35" cy="70" r="4" fill="#f43f5e" />
            <circle cx="60" cy="45" r="12" fill="#fbcfe8" />
            <circle cx="60" cy="45" r="5" fill="#f43f5e" />
            <circle cx="80" cy="25" r="9" fill="#fbcfe8" />
            <circle cx="80" cy="25" r="3.5" fill="#f43f5e" />
          </svg>
        </div>
      );
    case 'heart':
      return (
        <div className={`${className} bg-gradient-to-br from-rose-100 to-pink-200 ${getShapeClass()} p-2 ${borderStyle} flex items-center justify-center relative`} style={style}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M 50 25 C 30 5 5 30 50 85 C 95 30 70 5 50 25 Z" fill="#ec4899" stroke="#be185d" strokeWidth="3" />
            <path d="M 32 30 C 25 22 18 32 30 48" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
          </svg>
        </div>
      );
    case 'landmark':
      return (
        <div className={`${className} bg-gradient-to-t from-teal-200 to-sky-100 ${getShapeClass()} p-2 ${borderStyle} flex items-center justify-center relative`} style={style}>
          <svg viewBox="0 0 100 120" className="w-full h-full">
            <path d="M 48 10 L 52 10 L 52 30 L 48 30 Z" fill="#0d9488" />
            <path d="M 30 40 L 70 40 L 60 30 L 40 30 Z" fill="#0f766e" />
            <rect x="42" y="40" width="16" height="25" fill="#115e59" />
            <path d="M 22 70 L 78 70 L 68 65 L 32 65 Z" fill="#0f766e" />
            <rect x="36" y="70" width="28" height="35" fill="#134e4a" />
            <rect x="42" y="76" width="6" height="12" fill="#fef08a" />
            <rect x="52" y="76" width="6" height="12" fill="#fef08a" />
          </svg>
        </div>
      );
    default:
      return (
        <div className={`${className} bg-gradient-to-br from-pink-100 to-purple-100 ${getShapeClass()} p-2 ${borderStyle} flex items-center justify-center`} style={style}>
          <span className="text-3xl">🌸</span>
        </div>
      );
  }
};

// Sticker Icon Renderer
export const StickerIcon: React.FC<{ stickerKey: string; className?: string }> = ({
  stickerKey,
  className = 'w-10 h-10',
}) => {
  switch (stickerKey) {
    case 'boba':
      return (
        <svg viewBox="0 0 100 100" className={`${className} drop-shadow-md`}>
          {/* Straw */}
          <line x1="50" y1="5" x2="35" y2="35" stroke="#ec4899" strokeWidth="8" strokeLinecap="round" />
          {/* Cup */}
          <path d="M 25 30 L 75 30 L 68 85 C 67 92 33 92 32 85 Z" fill="#fbcfe8" stroke="#db2777" strokeWidth="3" />
          {/* Tea liquid */}
          <path d="M 27 42 L 73 42 L 67 84 Q 50 88 33 84 Z" fill="#f59e0b" opacity="0.8" />
          {/* Boba pearls */}
          <circle cx="40" cy="72" r="4.5" fill="#374151" />
          <circle cx="52" cy="75" r="4.5" fill="#374151" />
          <circle cx="60" cy="68" r="4.5" fill="#374151" />
          <circle cx="45" cy="80" r="4.5" fill="#374151" />
          <circle cx="58" cy="80" r="4.5" fill="#374151" />
        </svg>
      );
    case 'matryoshka':
      return (
        <svg viewBox="0 0 100 100" className={`${className} drop-shadow-md`}>
          {/* Outer body */}
          <path d="M 50 10 C 32 10 32 38 25 55 C 20 72 28 92 50 92 C 72 92 80 72 75 55 C 68 38 68 10 50 10 Z" fill="#ef4444" stroke="#991b1b" strokeWidth="3" />
          {/* Face circle */}
          <circle cx="50" cy="32" r="16" fill="#fef3c7" />
          {/* Hair & Scarf */}
          <path d="M 36 28 Q 50 18 64 28 Q 50 20 36 28 Z" fill="#f59e0b" />
          <circle cx="44" cy="30" r="1.5" fill="#1f2937" />
          <circle cx="56" cy="30" r="1.5" fill="#1f2937" />
          <path d="M 47 36 Q 50 39 53 36" fill="none" stroke="#dc2626" strokeWidth="1.5" />
          {/* Belly Apron Floral */}
          <circle cx="50" cy="68" r="15" fill="#fef08a" />
          <circle cx="50" cy="68" r="6" fill="#ec4899" />
        </svg>
      );
    case 'cherry_blossom':
      return (
        <svg viewBox="0 0 100 100" className={`${className} drop-shadow-md`}>
          <path d="M 50 10 C 40 25 25 20 20 35 C 15 50 30 55 35 70 C 40 85 60 85 65 70 C 70 55 85 50 80 35 C 75 20 60 25 50 10 Z" fill="#fbcfe8" stroke="#f472b6" strokeWidth="2" />
          <circle cx="50" cy="50" r="10" fill="#f43f5e" />
        </svg>
      );
    case 'star':
      return (
        <svg viewBox="0 0 100 100" className={`${className} drop-shadow-md`}>
          <polygon points="50,5 63,35 95,38 71,60 78,92 50,75 22,92 29,60 5,38 37,35" fill="#fde047" stroke="#eab308" strokeWidth="3" />
          <circle cx="42" cy="45" r="2.5" fill="#1f2937" />
          <circle cx="58" cy="45" r="2.5" fill="#1f2937" />
          <path d="M 45 52 Q 50 56 55 52" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <div className="text-2xl">✨</div>
      );
  }
};
