"use client";
import Badge from "@/components/ui/Badge";
import CTAButtons from "@/components/ui/CTAButtons";
import Section from "@/components/ui/Section";
import { useI18n } from "@/i18n";

const Hero = () => {
  const { t, locale } = useI18n();
  const badges = [
    "python",
    "flask",
    "c",
    "redis",
    "docker",
    "azure",
    "postgres",
    "mysql",
    "oracle",
    "linux",
    "graphql",
    "golang",
  ];
  return (
    <Section aria-labelledby="hero-heading">
      <div className="space-y-4 max-w-prose">
        <h1 id="hero-heading" className="text-4xl font-semibold tracking-tight">
          {t("heroTitle")}
        </h1>
        <p className="text-lg text-[hsl(var(--color-muted))]">
          {t("heroSubtitle")}
        </p>
        <CTAButtons
          primary={{ label: t("viewProjects"), href: "/projects" }}
          secondary={{ label: t("downloadCV"), href: "/cv.pdf" }}
        />
      </div>
      <section
        className="flex flex-wrap gap-2 pt-4"
        aria-label={locale === "en" ? "Core technologies" : "Tecnologías clave"}
      >
        {badges.map((b) => (
          <Badge key={b}>{b}</Badge>
        ))}
      </section>
    </Section>
  );
};

export default Hero;
