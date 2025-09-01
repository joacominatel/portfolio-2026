export interface Project {
  slug: string;
  title: string;
  role: string;
  stack: string;
  repo: string;
  shortDescription: string;
  goal: string;
}

// Initial project list; extend as needed.
export const projects: Project[] = [
  {
    slug: "escaneo-facturas",
    title: "Sistema Automatizado de Procesamiento de Facturas",
    role: "Full Stack / Backend Focus",
    stack: "Flask · Celery · MariaDB · Redis · OCR · OpenAI · Next.js",
    repo: "https://github.com/joacominatel/escaneo-facturas-scratch",
    shortDescription: "Pipeline OCR + extracción inteligente para estructurar datos de facturas escaneadas.",
    goal: "Automatizar la ingestión, normalización y validación de facturas con procesamiento asíncrono y actualizaciones en tiempo real.",
  },
  {
    slug: "project-alpha",
    title: "Project Alpha",
    role: "Backend",
    stack: "FastAPI · Postgres",
    repo: "#",
    shortDescription: "Placeholder showcase of a service API.",
    goal: "Demostrar convenciones limpias en servicios REST.",
  },
  {
    slug: "data-orchestrator",
    title: "Data Orchestrator",
    role: "Lead",
    stack: "Python · Redis · Workers",
    repo: "#",
    shortDescription: "Job orchestration + ETL lightweight.",
    goal: "Automatizar flujos de datos con resiliencia.",
  },
];
