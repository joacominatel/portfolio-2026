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
        <h1
          id="hero-heading"
          className="text-5xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent"
        >
          {t("heroTitle")}
        </h1>
        <p className="text-lg text-[hsl(var(--color-muted))]">
          {t("heroSubtitle")}
        </p>
        <CTAButtons
          primary={{ label: t("hireMe"), href: "/#contact" }}
          secondary={{ label: t("viewCaseStudies"), href: "/#case-studies" }}
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
