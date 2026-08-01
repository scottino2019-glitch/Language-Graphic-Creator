import React, { useEffect } from 'react';

const GOOGLE_FONTS_LIST = [
  'Ma+Shan+Zheng',
  'ZCOOL+XiaoWei',
  'ZCOOL+KuaiLe',
  'Long+Cang',
  'Noto+Sans+SC:wght@400;700',
  'Gaegu:wght@400;700',
  'Do+Hyeon',
  'Black+Han+Sans',
  'Cute+Font',
  'Noto+Sans+KR:wght@400;700',
  'Caveat:wght@400;700',
  'Playfair+Display:ital,wght@0,600;1,400',
  'Montserrat:wght@400;600;800',
  'Plus+Jakarta+Sans:wght@400;600;800',
  'Marck+Script',
  'Cormorant+Garamond:wght@600',
  'Comic+Neue:wght@700',
];

export const FontLoader: React.FC = () => {
  useEffect(() => {
    const fontId = 'google-fonts-language-creator';
    if (!document.getElementById(fontId) && !document.querySelector('link[href*="fonts.googleapis.com"]')) {
      const link = document.createElement('link');
      link.id = fontId;
      link.crossOrigin = 'anonymous';
      link.rel = 'stylesheet';
      const fontQuery = GOOGLE_FONTS_LIST.join('&family=');
      link.href = `https://fonts.googleapis.com/css2?family=${fontQuery}&display=swap`;
      document.head.appendChild(link);
    }
  }, []);

  return null;
};

export const AVAILABLE_FONTS = {
  chinese: [
    { name: 'Noto Sans SC (Chiarissimo & Leggibile)', value: 'Noto Sans SC' },
    { name: 'ZCOOL KuaiLe (Cicciotto & Divertente)', value: 'ZCOOL KuaiLe' },
    { name: 'ZCOOL XiaoWei (Elegante)', value: 'ZCOOL XiaoWei' },
    { name: 'Ma Shan Zheng (Calligrafia Cinese)', value: 'Ma Shan Zheng' },
    { name: 'Long Cang (Scrittura a Mano)', value: 'Long Cang' },
  ],
  korean: [
    { name: 'Noto Sans KR (Chiarissimo Sans)', value: 'Noto Sans KR' },
    { name: 'Do Hyeon (Grassetto 한국어)', value: 'Do Hyeon' },
    { name: 'Black Han Sans (Ultra Impatto)', value: 'Black Han Sans' },
    { name: 'Gaegu (Carino Manoscritto)', value: 'Gaegu' },
    { name: 'Cute Font (Arrotondato Kawaii)', value: 'Cute Font' },
  ],
  russian: [
    { name: 'Montserrat (Moderno & Chiarissimo)', value: 'Montserrat' },
    { name: 'Playfair Display (Elegante Serif)', value: 'Playfair Display' },
    { name: 'Caveat (Manoscritto Carino)', value: 'Caveat' },
    { name: 'Cormorant Garamond (Classico)', value: 'Cormorant Garamond' },
    { name: 'Marck Script (Corsivo)', value: 'Marck Script' },
  ],
  latin: [
    { name: 'Plus Jakarta Sans (Modern Clean)', value: 'Plus Jakarta Sans' },
    { name: 'Montserrat (Geometric)', value: 'Montserrat' },
    { name: 'Playfair Display (Serif)', value: 'Playfair Display' },
    { name: 'Caveat (Handwriting)', value: 'Caveat' },
    { name: 'Comic Neue (Comic Rounded)', value: 'Comic Neue' },
  ]
};
