"use client";
import React from "react";
import { useI18n } from "@/i18n";
import { cn } from "@/utils/cn";

export const LanguageToggle: React.FC = () => {
  const { locale, setLocale } = useI18n();
  const next = locale === "en" ? "es" : "en";
  return (
    <button
      type="button"
      aria-label="Toggle language"
      aria-pressed={locale === "es"}
      onClick={() => setLocale(next)}
      className={cn(
        "text-sm font-medium rounded-md border border-[hsl(var(--border))] px-3 py-1.5 hover:bg-[hsl(var(--accent)/0.3)] transition-colors focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]",
      )}
    >
      {locale.toUpperCase()}
    </button>
  );
};

export default LanguageToggle;
