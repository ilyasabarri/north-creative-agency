"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { translations, Locale, Translations } from "./i18n";

interface LangContextType {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
}

const LangContext = createContext<LangContextType>({
  locale: "en",
  t: translations.en,
  toggleLocale: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const toggleLocale = () => setLocale((l) => (l === "en" ? "fr" : "en"));
  return (
    <LangContext.Provider value={{ locale, t: translations[locale], toggleLocale }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
