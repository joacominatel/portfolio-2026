export const en = {
  heroTitle: "Backends that reach production in days.",
  heroSubtitle:
    "Secure APIs, Postgres and deploys. UTC−3, 30+ h/week availability.",
  hireMe: "Hire me",
  viewCaseStudies: "See case studies",
  viewProjects: "View projects",
  downloadCV: "Download CV",
  socialFooter: "Built with Next.js, Tailwind and mate 🧉.",
  techBarLabel: "Core stack",
  whatIBuild: "What I build",
  projects: "Projects",
  skills: "Skills",
  contact: "Contact",
  aboutMe: "About me",
  aboutMeDesc: "Backend dev (Python) – APIs, data & smart tooling.",
  restfulApis: "Well documented RESTful APIs",
  restfulDesc: "OpenAPI, versioning & testing.",
  dataAutomation: "Data & Automation",
  dataAutomationDesc: "ETL, workers, queues, observability.",
  dataAutomationDetailTitle: "Data & Automation",
  dataAutomationDetailIntro:
    "Tools and approaches I enjoy when building data-driven and automated backends.",
  dataAutomationDetailBody: `I like mixing pragmatic tooling with modern runtimes. Python stays at the core (FastAPI, async workers) for expressiveness, while I complement with Go or Node when concurrency or streaming patterns demand tighter control.

For data orchestration and pipelines: plain queues (Redis / SQS) plus lightweight schedulers beat over-engineered DAG monsters most of the time. I lean on SQL (Postgres / MySQL / analytical extensions) for truth, and use Redis or in‑memory caches only where latency truly matters.

Observability matters early: structured logs, trace ids that flow across tasks, and small metrics (p95 latency, queue depth) give fast feedback loops. I prototype with Docker Compose, then push to containers on cloud (Azure / AWS) using IaC templates.

AI integration: I like using LLMs to augment extraction, validation or summarization steps—never as an opaque black box. Guardrails + deterministic fallbacks keep pipelines stable.

I keep things simple: fewer moving parts, clear contracts, documented behaviors, reproducible local runs.`,
  aboutMeBody: `Hi, I'm Joaquin (Joaco), a backend developer focused on Python and the craft of clear REST APIs, robust data flows and AI-assisted features. I enjoy turning loosely defined problems into concise architectures: small services with explicit boundaries, predictable performance and solid observability.

I favour simple, composable designs over fashionable complexity—versioned endpoints, typed contracts, repeatable pipelines, meaningful tests. I collaborate with teams or solo on freelance projects, bringing documentation, clean commits, CI testing and iterative delivery.

If you need someone to design or reinforce a backend foundation (APIs, data processing, automation, AI integration) with maintainable quality, let's talk.`,
  seeMore: "see more",
  projectTeaserTitle: "Highlighted projects",
  finalCTAText: "Open for freelance & collaborations.",
  email: "Email",
  restfulDetailTitle: "Well documented RESTful APIs",
  restfulDetailIntro:
    "I design and build REST APIs that are clear, reliable, and easy to evolve.",
  restfulDetailBody: `I like working on APIs that are well thought out: resources with clear logic, consistent versioning, and OpenAPI documentation that always matches the real implementation. The goal is for anyone consuming the API to have a predictable experience, without surprises.

Quality is ensured through contract, integration, and load testing, making sure every change keeps the system stable. I focus on simplicity: fewer endpoints but better designed, easier to maintain and scale. If you’re looking for a solid and transparent backend foundation, let’s work together.`,
  backToProjects: "Back to projects",
  tagsLabel: "Tags",
  statusDeveloping: "Developing",
  statusActive: "Active",
  experienceTitle: "Experience",
  present: "Present",
  achievementsLabel: "Achievements",
  internalProjectsLabel: "Internal projects",
  showMore: "Show more",
  showLess: "Show less",
  caseStudiesTitle: "Case studies",
  problem: "Problem",
  solution: "Solution",
  impact: "Impact",
  stack: "Stack",
  repoDemo: "Repo / Demo",
};

export type EnKeys = keyof typeof en;
