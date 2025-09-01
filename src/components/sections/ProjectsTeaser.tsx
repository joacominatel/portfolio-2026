"use client";
import React from "react";
import Section from "@/components/ui/Section";
import { useI18n } from "@/i18n";
import { projects } from "@/data/projects";

const ProjectsTeaser: React.FC = () => {
  const { t } = useI18n();
  const list = projects.slice(0, 3); // teaser subset
  return (
    <Section id="projects" title={t("projectTeaserTitle")}>      
      <ul className="space-y-4">
        {list.map((p) => (
          <li key={p.slug} className="rounded-lg border border-[hsl(var(--border))] p-4 flex flex-col gap-1 bg-[hsl(var(--card))]">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="font-medium">{p.title}</span>
              <span className="text-xs uppercase tracking-wide text-[hsl(var(--color-muted))]">{p.role}</span>
              <span className="text-xs text-[hsl(var(--color-muted))]">{p.stack}</span>
              <a href={p.repo} className="ml-auto text-sm font-medium text-[hsl(var(--primary))] hover:underline" aria-label={`GitHub: ${p.title}`} target="_blank" rel="noopener noreferrer">
                GitHub →
              </a>
            </div>
            <p className="text-xs text-[hsl(var(--color-muted))]">{p.shortDescription}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default ProjectsTeaser;
