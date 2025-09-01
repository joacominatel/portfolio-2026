import Hero from "@/components/sections/Hero";
import WhatIBuild from "@/components/sections/WhatIBuild";
import ProjectsTeaser from "@/components/sections/ProjectsTeaser";
import FinalCTA from "@/components/sections/FinalCTA";
import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <Container className="py-16 space-y-24">
      <Hero />
      <WhatIBuild />
      <ProjectsTeaser />
      <FinalCTA />
    </Container>
  );
}

