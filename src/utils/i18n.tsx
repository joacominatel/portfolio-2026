"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type Locale = "en" | "es";

const STORAGE_KEY = "locale";

export const strings = {
  en: {
    heroTitle: "Backend developer. Clear APIs, reliable data.",
    heroSubtitle: "Python, REST, databases and a touch of AI.",
    viewProjects: "View projects",
    downloadCV: "Download CV",
    socialFooter: "Built with Next.js, Tailwind and too much coffee.",
    techBarLabel: "Core stack",
    whatIBuild: "What I build",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    deterministicEngine: "Deterministic Game Engine",
    deterministicDesc: "FSM focus, reproducibility & logs.",
    restfulApis: "Well documented RESTful APIs",
    restfulDesc: "OpenAPI, versioning & testing.",
    dataAutomation: "Data & Automation",
    dataAutomationDesc: "ETL, workers, queues, observability.",
    seeMore: "see more",
    projectTeaserTitle: "Highlighted projects",
    finalCTAText: "Open for freelance & collaborations.",
    email: "Email",
  },
  es: {
    heroTitle: "Backend developer. APIs claras, datos confiables.",
    heroSubtitle: "Python, REST, bases de datos y un toque de IA.",
    viewProjects: "Ver proyectos",
    downloadCV: "Descargar CV",
    socialFooter: "Hecho con Next.js, Tailwind y tereré.",
    techBarLabel: "Stack clave",
    whatIBuild: "Lo que construyo",
    projects: "Proyectos",
    skills: "Skills",
    contact: "Contacto",
    deterministicEngine: "Motor de juego determinista",
    deterministicDesc: "Enfoque FSM, reproducibilidad y logs.",
    restfulApis: "APIs REST bien documentadas",
    restfulDesc: "OpenAPI, versionado y tests.",
    dataAutomation: "Datos & Automatización",
    dataAutomationDesc: "ETL, workers, colas, observabilidad.",
    seeMore: "ver más",
    projectTeaserTitle: "Proyectos destacados",
    finalCTAText: "Disponible para freelance y colaboraciones.",
    email: "Email",
  },
};

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: keyof typeof strings["en"]) => string;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

  const t: I18nContextValue["t"] = (key) => strings[locale][key];

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>;
};

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
