"use client";
import React from "react";
import { useI18n } from "@/i18n";
import { Container } from "@/components/ui/Container";
import Prose from "@/components/ui/Prose";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/data/projects";

interface Props { project: Project }

const ProjectDetailClient: React.FC<Props> = ({ project }) => {
  const { locale, t } = useI18n();
  const statusLabel = project.status === 'developing' ? t('statusDeveloping') : t('statusActive');
  return (
    <Container className="py-16 space-y-10 max-w-prose">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{project.title[locale]}</h1>
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs uppercase tracking-wide text-[hsl(var(--color-muted))]">{project.role}</span>
          <span className="text-xs text-[hsl(var(--color-muted))]">{project.stack}</span>
          {project.status && (
            <span className="text-[10px] px-2 py-0.5 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--accent-2)/0.3)] tracking-wide uppercase">
              {statusLabel}
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-1 pt-1">
          {project.tags.map(tag => <Tag key={tag} label={tag} />)}
        </div>
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-sm font-medium text-[hsl(var(--primary))] hover:underline"
        >
          GitHub ↗
        </a>
      </header>
      <Prose>
        <p className="text-sm text-[hsl(var(--color-muted))]">{project.shortDescription[locale]}</p>
        <hr />
        <p className="whitespace-pre-wrap">{project.story[locale]}</p>
        <h2 className="text-xl mt-10 mb-2 font-semibold tracking-tight">{locale === 'en' ? 'Goal' : 'Objetivo'}</h2>
        <p>{project.goal[locale]}</p>
      </Prose>
      <div>
        <a href="/" className="text-[hsl(var(--primary))] text-sm font-medium hover:underline">← {t('backToProjects')}</a>
      </div>
    </Container>
  );
};

export default ProjectDetailClient;
