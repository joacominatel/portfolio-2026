"use client";
import Link from "next/link";
import type { FC } from "react";

import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";
import { projects } from "@/data/projects";
import { useI18n } from "@/i18n";

const ProjectsTeaser: FC = () => {
  const { t } = useI18n();
  const { locale } = useI18n();
  const list = projects.slice(0, 3); // teaser subset (later: smarter selection)
  return (
    <Section id="projects" title={t("projectTeaserTitle")}>
      <ul className="space-y-4">
        {list.map((p) => (
          <li
            key={p.slug}
            className="rounded-lg border border-[hsl(var(--border))] p-4 flex flex-col gap-1 bg-[hsl(var(--card))]"
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              {p.highlight && (
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide ${p.highlight.colorClass}`}
                >
                  {p.highlight.label[locale]}
                </span>
              )}
              <a
                href={`/projects/${p.slug}`}
                className="font-medium hover:underline"
              >
                {p.title[locale]}
              </a>
              <span className="text-xs uppercase tracking-wide text-[hsl(var(--color-muted))]">
                {p.role}
              </span>
              <span className="text-xs text-[hsl(var(--color-muted))]">
                {p.stack}
              </span>
              {p.status === "developing" && (
                <span className="text-[10px] px-2 py-0.5 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--accent-2)/0.3)] tracking-wide uppercase">
                  {locale === "en" ? "Developing" : "En desarrollo"}
                </span>
              )}
              <a
                href={p.repo}
                className="ml-auto text-sm font-medium text-[hsl(var(--primary))] hover:underline"
                aria-label={`GitHub: ${p.title}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub →
              </a>
            </div>
            <p className="text-xs text-[hsl(var(--color-muted))]">
              {p.shortDescription[locale]}
            </p>
            <div className="flex flex-wrap gap-1 pt-1">
              {p.tags.slice(0, 5).map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </li>
        ))}
      </ul>
      <div className="pt-4">
        <Link
          href="/projects"
          className="text-sm font-medium text-[hsl(var(--primary))] hover:underline"
        >
          {locale === "en" ? "View all projects" : "Ver todos los proyectos"} →
        </Link>
      </div>
    </Section>
  );
};

export default ProjectsTeaser;
