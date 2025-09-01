export interface LocalizedText {
  en: string;
  es: string;
}

export interface Project {
  slug: string;
  title: LocalizedText;
  role: string; // keeping role non localized for brevity (could localize if needed)
  stack: string;
  repo: string;
  shortDescription: LocalizedText;
  goal: LocalizedText;
  status?: "developing" | "archived" | "active";
}

export const projects: Project[] = [
  {
    slug: "escaneo-facturas",
    title: {
      en: "Automated Invoice Processing System",
      es: "Sistema Automatizado de Procesamiento de Facturas",
    },
    role: "Full Stack / Backend Focus",
    stack: "Flask · Celery · MariaDB · Redis · OCR · OpenAI · Next.js",
    repo: "https://github.com/joacominatel/escaneo-facturas-scratch",
    shortDescription: {
      en: "OCR + AI extraction pipeline to structure data from scanned invoices.",
      es: "Pipeline OCR + extracción inteligente para estructurar datos de facturas escaneadas.",
    },
    goal: {
      en: "Automate ingestion, normalization and validation of invoices with async processing & real‑time updates.",
      es: "Automatizar ingestión, normalización y validación de facturas con procesamiento asíncrono y updates en tiempo real.",
    },
    status: "active",
  },
  {
    slug: "server-monitoring-go",
    title: {
      en: "Server Metrics Simulation & Monitoring",
      es: "Simulador y Monitoreo de Métricas de Servidor",
    },
    role: "Backend",
    stack: "Go · REST · JSON · CLI",
    repo: "https://github.com/joacominatel/server-monitoring-go",
    shortDescription: {
      en: "Generates realistic multi‑server metrics to test monitoring & alert pipelines.",
      es: "Genera métricas realistas multi‑servidor para probar monitoreo y alertas.",
    },
    goal: {
      en: "Stress and validate alert thresholds & ingestion flows with controllable synthetic load.",
      es: "Estresar y validar umbrales de alertas y flujos de ingesta con carga sintética controlable.",
    },
    status: "active",
  },
  {
    slug: "truco-arg",
    title: {
      en: "Argentinian Truco Engine & Monorepo",
      es: "Monorepo Motor de Truco Argentino",
    },
    role: "Engine / Game Logic",
    stack: "TypeScript · Deterministic FSM · Next.js (planned)",
    repo: "https://github.com/joacominatel/truco-arg",
    shortDescription: {
      en: "Deterministic card game engine (event sourced) – still in early development.",
      es: "Motor determinista de truco (event sourced) – en desarrollo temprano.",
    },
    goal: {
      en: "Provide a replayable, strict rules engine for Truco with seed‑based determinism.",
      es: "Proveer un motor reproducible con reglas estrictas y determinismo por semilla.",
    },
    status: "developing",
  },
  {
    slug: "data-orchestrator",
    title: { en: "Data Orchestrator", es: "Data Orchestrator" },
    role: "Lead",
    stack: "Python · Redis · Workers",
    repo: "#",
    shortDescription: {
      en: "Lightweight job & ETL orchestration.",
      es: "Orquestación ligera de jobs & ETL.",
    },
    goal: {
      en: "Automate resilient data flows.",
      es: "Automatizar flujos de datos resilientes.",
    },
    status: "active",
  },
];

