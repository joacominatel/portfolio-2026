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
  tags: string[];
  story: LocalizedText; // longer narrative
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
    tags: ["ocr", "ai", "flask", "celery", "redis", "openapi"],
    story: {
  en: `This project started after repeatedly seeing small teams waste hours manually re-typing invoice data. The idea: treat invoices like streaming events—ingest, extract, validate, confirm.

I chose a decoupled architecture: Flask API handles fast request/response; Celery workers perform OCR (Tesseract) and structured field extraction using OpenAI; Redis acts as broker + ephemeral cache; MariaDB stores canonical invoice states and transitions. WebSockets broadcast status changes so users get immediate feedback.

The challenge was balancing determinism (for auditing) with probabilistic extraction (LLM). The solution: store raw OCR, model prompts, and extracted fields with version markers so improvements never silently mutate historical data. OpenAPI-first design kept clients stable while internals evolved.

Result: a pipeline that shortens validation loops and creates a foundation for analytics (processing latency, field accuracy, retry rates).`,
  es: `Este proyecto nació tras ver equipos pequeños perder horas tipeando datos de facturas. La idea: tratar las facturas como eventos—ingestar, extraer, validar, confirmar.

Arquitectura desacoplada: API Flask para requests rápidos; workers Celery para OCR (Tesseract) y extracción estructurada con OpenAI; Redis como broker + caché efímero; MariaDB como fuente canónica de estados. WebSockets emiten cambios para feedback inmediato.

El reto: equilibrar determinismo (auditoría) con extracción probabilística (LLM). Solución: guardar OCR crudo, prompts y campos extraídos con versiones para que mejoras no muten datos históricos. Diseño OpenAPI-first mantuvo clientes estables mientras la interna evolucionaba.

Resultado: pipeline que reduce tiempos de validación y crea base para analíticas (latencia, exactitud de campos, tasa de reintentos).`
    }
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
    tags: ["go", "metrics", "simulator", "alerts"],
    story: {
  en: `I needed a way to validate alert logic without spinning real servers or faking one metric at a time. This simulator produces correlated CPU, memory, disk, network and process signals across multiple virtual hosts.

Core: a Go loop that emits JSON metric frames to a REST API at configurable intervals. A stress mode selectively drives a chosen metric (e.g. cpu>95%) to test threshold creation & notification jitter. Automatic threshold provisioning helps experiment quickly.

Outcome: faster feedback for dashboard & alert tuning plus a reproducible load profile to compare ingestion pipeline optimizations.`,
  es: `Necesitaba validar lógica de alertas sin levantar servidores reales ni falsificar métricas aisladas. El simulador genera señales correlacionadas (CPU, memoria, disco, red, procesos) en varios hosts virtuales.

Núcleo: un loop en Go que emite frames JSON a una API REST con intervalos configurables. Un modo de estrés fuerza una métrica (ej. cpu>95%) para probar umbrales y jitter de notificaciones. La creación automática de umbrales acelera la experimentación.

Resultado: feedback más rápido para ajustar dashboards y alertas, más un perfil de carga reproducible para comparar optimizaciones de ingesta.`
    }
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
    tags: ["game-engine", "deterministic", "fsm", "typescript"],
    story: {
  en: `Origin: curiosity about modeling complex bidding + trick-taking flow with full determinism. Design goals: pure engine (no IO), event-sourced state rebuild, reproducible shuffles via seed, and masking per player view.

Early focus: correctness invariants (card hierarchy, turn rotation, scoring) and expressive finite state machines for calls (truco / envido / flor chain). Next steps: persistence layer + spectator view.

Still evolving — tracking clarity over feature breadth.`,
  es: `Origen: curiosidad por modelar flujo de cantos + bazas con determinismo total. Objetivos: motor puro (sin IO), reconstrucción event-sourced, repartos reproducibles por semilla y masking de vista por jugador.

Enfoque inicial: invariantes de corrección (jerarquía, rotación, puntaje) y FSM expresivas para cantos (truco / envido / flor). Próximo: persistencia + vista espectador.

Sigue en evolución — priorizando claridad sobre amplitud de features.`
    }
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
    tags: ["etl", "workers", "queues"],
    story: {
  en: "Placeholder project: intended to showcase composable task graphs, retries and idempotent sinks.",
  es: "Proyecto placeholder: pensado para mostrar grafos de tareas componibles, reintentos e idempotencia en sinks.",
    }
  },
];

