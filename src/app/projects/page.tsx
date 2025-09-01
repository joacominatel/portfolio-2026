import { Container } from "@/components/ui/Container";
import ProjectsList from "@/components/projects/ProjectsList";

export const metadata = {
  title: "Projects | Portfolio",
  description: "Selected backend, infrastructure and experimentation projects.",
};

export default function ProjectsPage() {
  // client i18n not needed for static fallback – kept server simple
  return (
    <Container className="py-16 space-y-12">
      <header className="space-y-3 max-w-prose">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="text-sm text-[hsl(var(--color-muted))]">A concise index of experiments, engines and data tooling. Click any card to read the story.</p>
      </header>
  <ProjectsList />
    </Container>
  );
}
