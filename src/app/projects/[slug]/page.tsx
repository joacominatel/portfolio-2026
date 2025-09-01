import { notFound } from "next/navigation";
import { projects, type Project } from "@/data/projects";
import type { Metadata } from "next";
import ProjectDetailClient from "@/components/projects/ProjectDetailClient";

interface PageProps { params: { slug: string } }

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title.en} | Project`,
    description: project.shortDescription.en,
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projects.find(p => p.slug === params.slug) as Project | undefined;
  if (!project) notFound();
  return <ProjectDetailClient project={project} />;
}
