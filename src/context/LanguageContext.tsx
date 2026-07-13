import { createContext, useContext, useState, ReactNode } from 'react';
import { Lang, translations } from '../i18n/translations';

// Use the DA object shape as the interface, but allow any language values
export type Translations = typeof translations.da;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const stored = (): Lang => {
  const v = localStorage.getItem('pluseins-lang');
  if (v === 'da' || v === 'de' || v === 'en') return v;
  return 'da';
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(stored);

  const setLang = (l: Lang) => {
    localStorage.setItem('pluseins-lang', l);
    setLangState(l);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const t = translations[lang] as any as Translations;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
