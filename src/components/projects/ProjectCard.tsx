"use client";
import React from "react";
import Link from "next/link";
import Tag from "@/components/ui/Tag";
import { Project } from "@/data/projects";
import { useI18n } from "@/i18n";

interface Props { project: Project }

export const ProjectCard: React.FC<Props> = ({ project }) => {
  const { locale, t } = useI18n();
  return (
    <li className="rounded-xl border border-[hsl(var(--border))] p-5 bg-[hsl(var(--card))] flex flex-col gap-3">
      <div className="flex flex-wrap gap-2 items-center">
        <Link href={`/projects/${project.slug}`} className="font-medium tracking-tight hover:underline">
          {project.title[locale]}
        </Link>
        {project.status === 'developing' && (
          <span className="text-[10px] px-2 py-0.5 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--accent-2)/0.3)] uppercase">
            {t('statusDeveloping')}
          </span>
        )}
      </div>
      <p className="text-xs text-[hsl(var(--color-muted))]">{project.shortDescription[locale]}</p>
      <div className="flex flex-wrap gap-1">
        {project.tags.slice(0,6).map(tag => <Tag key={tag} label={tag} />)}
      </div>
      <div className="mt-auto flex items-center gap-4 text-[11px] text-[hsl(var(--color-muted))]">
        <span>{project.stack}</span>
        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--primary))] hover:underline ml-auto">GitHub ↗</a>
      </div>
    </li>
  );
};

export default ProjectCard;
