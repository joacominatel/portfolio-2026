"use client";
import { Container } from "../components/Container";
import { Badge } from "../components/Badge";
import { Card } from "../components/Card";
import { CTAButtons } from "../components/CTAButtons";
import { Section } from "../components/Section";
import { useI18n } from "../utils/i18n";

export default function Home() {
  const { t, locale } = useI18n();
  const badges = ["Python", "FastAPI / Flask", "Node/Nest", "Postgres", "Redis", "Prisma", "Docker", "AWS", "OpenAI"];
  const projects = [
    { title: "Project Alpha", role: "Backend", stack: "FastAPI · Postgres", url: "#" },
    { title: "Data Orchestrator", role: "Lead", stack: "Python · Redis · Workers", url: "#" },
    { title: "Messaging Layer", role: "Contributor", stack: "Node · AWS", url: "#" },
  ];
  return (
    <Container className="py-16 space-y-24">
      {/* Hero */}
      <section className="space-y-6" aria-labelledby="hero-heading">
        <div className="space-y-4 max-w-prose">
          <h1 id="hero-heading" className="text-4xl font-semibold tracking-tight">
            {t("heroTitle")}
          </h1>
          <p className="text-lg text-[hsl(var(--color-muted))]">{t("heroSubtitle")}</p>
          <CTAButtons
            primary={{ label: t("viewProjects"), href: "#projects" }}
            secondary={{ label: t("downloadCV"), href: "/cv.pdf" }}
          />
        </div>
        <div className="flex flex-wrap gap-2 pt-4" aria-label={locale === "en" ? "Core technologies" : "Tecnologías clave"}>
          {badges.map((b) => (
            <Badge key={b}>{b}</Badge>
          ))}
        </div>
      </section>

      {/* What I build */}
      <Section id="skills" title={t("whatIBuild")}> 
        <div className="grid gap-5 sm:grid-cols-3">
          <Card title={t("deterministicEngine")} description={t("deterministicDesc") } />
          <Card title={t("restfulApis")} description={t("restfulDesc") } />
          <Card title={t("dataAutomation")} description={t("dataAutomationDesc") } />
        </div>
      </Section>

      {/* Projects teaser */}
      <Section id="projects" title={t("projectTeaserTitle")}> 
        <ul className="space-y-4">
          {projects.map((p) => (
            <li key={p.title} className="rounded-lg border border-[hsl(var(--border))] p-4 flex flex-col gap-1 bg-[hsl(var(--card))]">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="font-medium">{p.title}</span>
                <span className="text-xs uppercase tracking-wide text-[hsl(var(--color-muted))]">{p.role}</span>
                <span className="text-xs text-[hsl(var(--color-muted))]">{p.stack}</span>
                <a
                  href={p.url}
                  className="ml-auto text-sm font-medium text-[hsl(var(--primary))] hover:underline"
                  aria-label={`GitHub: ${p.title}`}
                >
                  GitHub →
                </a>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Final CTA */}
      <Section id="contact" title={locale === "en" ? "Contact" : "Contacto"}>
        <p className="text-sm text-[hsl(var(--color-muted))] max-w-prose">{t("finalCTAText")}</p>
        <div className="flex gap-5 pt-2">
          <a
            href="mailto:dev@example.com"
            className="text-[hsl(var(--primary))] text-sm font-medium hover:underline"
          >
            {t("email")}
          </a>
          <a
            href="https://github.com/placeholder"
            className="text-[hsl(var(--primary))] text-sm font-medium hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/placeholder"
            className="text-[hsl(var(--primary))] text-sm font-medium hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </Section>
    </Container>
  );
}

