"use client";
import React from "react";
import Section from "@/components/ui/Section";
import { useI18n } from "@/i18n";

const FinalCTA: React.FC = () => {
  const { t, locale } = useI18n();
  return (
    <Section id="contact" title={locale === "en" ? "Contact" : "Contacto"}>
      <p className="text-sm text-[hsl(var(--color-muted))] max-w-prose">{t("finalCTAText")}</p>
      <div className="flex gap-5 pt-2">
        <a href="mailto:dev@example.com" className="text-[hsl(var(--primary))] text-sm font-medium hover:underline">
          {t("email")}
        </a>
        <a href="https://github.com/placeholder" className="text-[hsl(var(--primary))] text-sm font-medium hover:underline">
          GitHub
        </a>
        <a href="https://linkedin.com/in/placeholder" className="text-[hsl(var(--primary))] text-sm font-medium hover:underline">
          LinkedIn
        </a>
      </div>
    </Section>
  );
};

export default FinalCTA;
