"use client";
import React from "react";
import { useI18n } from "@/i18n";
import CTAButtons from "@/components/ui/CTAButtons";
import Badge from "@/components/ui/Badge";

const Hero: React.FC = () => {
  const { t, locale } = useI18n();
  const badges = ["Python", "FastAPI / Flask", "Node/Nest", "Postgres", "Redis", "Prisma", "Docker", "AWS", "OpenAI"];
  return (
    <section className="space-y-6" aria-labelledby="hero-heading">
      <div className="space-y-4 max-w-prose">
        <h1 id="hero-heading" className="text-4xl font-semibold tracking-tight">
          {t("heroTitle")}
        </h1>
        <p className="text-lg text-[hsl(var(--color-muted))]">{t("heroSubtitle")}</p>
        <CTAButtons primary={{ label: t("viewProjects"), href: "#projects" }} secondary={{ label: t("downloadCV"), href: "/cv.pdf" }} />
      </div>
      <div className="flex flex-wrap gap-2 pt-4" aria-label={locale === "en" ? "Core technologies" : "Tecnologías clave"}>
        {badges.map((b) => (
          <Badge key={b}>{b}</Badge>
        ))}
      </div>
    </section>
  );
};

export default Hero;
