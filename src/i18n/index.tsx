"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { en } from "./locales/en";
import { es } from "./locales/es";

export type Locale = "en" | "es";
const STORAGE_KEY = "locale";

export const dictionaries = { en, es };
export type DictionaryKey = keyof typeof en; // keys shared

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: DictionaryKey) => string;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored === "en" || stored === "es") setLocaleState(stored);
    } catch {}
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {}
  };

  const t = (key: DictionaryKey) => dictionaries[locale][key];

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
