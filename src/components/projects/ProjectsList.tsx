"use client";

import type { FC } from "react";

import { projects } from "@/data/projects";

import ProjectCard from "./ProjectCard";

const ProjectsList: FC = () => {
  return (
    <ul className="grid gap-6 sm:grid-cols-2">
      {projects.map((p) => (
        <ProjectCard key={p.slug} project={p} />
      ))}
    </ul>
  );
};

export default ProjectsList;
