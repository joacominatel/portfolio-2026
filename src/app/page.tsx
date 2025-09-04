import CaseStudies from "@/components/sections/CaseStudies";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import FinalCTA from "@/components/sections/FinalCTA";
import Hero from "@/components/sections/Hero";
import ProjectsTeaser from "@/components/sections/ProjectsTeaser";
import WhatIBuild from "@/components/sections/WhatIBuild";
import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <Container className="py-16 space-y-24">
      <Hero />
      <WhatIBuild />
      <ExperienceTimeline />
      <ProjectsTeaser />
      <CaseStudies />
      <FinalCTA />
    </Container>
  );
}
