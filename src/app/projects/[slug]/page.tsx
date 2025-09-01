import { notFound } from "next/navigation";
import { projects, type Project } from "@/data/projects";
import type { Metadata } from "next";
import ProjectDetailClient from "@/components/projects/ProjectDetailClient";

interface ParamsPromise { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ParamsPromise): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title.en} | Project`,
    description: project.shortDescription.en,
  };
}

export default async function ProjectDetailPage({ params }: ParamsPromise) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug) as Project | undefined;
  if (!project) notFound();
  return <ProjectDetailClient project={project} />;
}
