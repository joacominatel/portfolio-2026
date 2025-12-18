export interface LocalizedText {
  en: string;
  es: string;
}

export interface ProjectHighlight {
  label: LocalizedText;
  colorClass: string;
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
  highlight?: ProjectHighlight;
}

export const projects: Project[] = [
  {
    slug: "pulse",
    title: {
      en: "Pulse",
      es: "Pulse",
    },
    role: "Creator / Backend",
    stack: "Go · Echo · PostgreSQL · Redis · Supabase",
    repo: "https://github.com/joacominatel/pulse",
    shortDescription: {
      en: "Real-time discovery engine surfacing emerging communities based on live momentum signals.",
      es: "Motor de descubrimiento en tiempo real que destaca comunidades emergentes basado en momentum.",
    },
    goal: {
      en: "Detect what's gaining attention right now using rate of change instead of absolute size.",
      es: "Detectar qué está ganando atención ahora mismo usando tasa de cambio en lugar de tamaño absoluto.",
    },
    status: "active",
    tags: ["go", "redis", "postgresql", "system-design", "backend"],
    story: {
      en: `Pulse detects what's gaining attention right now — not what's already popular. It's built around a simple idea: the most interesting communities are often the ones just starting to spike, not the ones that are already large.

Think of it like a seismograph for community activity. When a community suddenly gets more engagement than usual, Pulse notices and ranks it higher.

How it works:
1. Events come in (joins, posts, views)
2. Events are weighted (a "join" has more impact than a "view")
3. Momentum is calculated (sum of weighted events in a sliding time window)
4. Rankings are cached (Redis sorted set for sub-millisecond reads)
5. Feed is served (Communities ordered by current momentum)

Stack: Go + Echo for the API, PostgreSQL for reliable storage, Redis for the leaderboard, and Supabase for Auth.`,
      es: `Pulse detecta qué está ganando atención ahora mismo — no lo que ya es popular. Se basa en una idea simple: las comunidades más interesantes suelen ser las que recién empiezan a despuntar, no las que ya son enormes.

Piénsalo como un sismógrafo de actividad comunitaria. Cuando una comunidad recibe de repente más engagement de lo habitual, Pulse lo nota y la rankea más alto.

Cómo funciona:
1. Llegan eventos (joins, posts, views)
2. Se ponderan los eventos (un "join" impacta más que un "view")
3. Se calcula el momentum (suma de eventos ponderados en una ventana de tiempo deslizante)
4. Se cachean los rankings (Redis sorted set para lecturas sub-milisegundo)
5. Se sirve el feed (Comunidades ordenadas por momentum actual)

Stack: Go + Echo para la API, PostgreSQL para almacenamiento confiable, Redis para el leaderboard y Supabase para Auth.`,
    },
  },
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

Resultado: pipeline que reduce tiempos de validación y crea base para analíticas (latencia, exactitud de campos, tasa de reintentos).`,
    },
  },
  {
    slug: "fastapi-sqlalchemy-template",
    title: {
      en: "FastAPI Async SQLAlchemy Template",
      es: "Plantilla FastAPI Async SQLAlchemy",
    },
    role: "Template Author / Backend Lead",
    stack:
      "FastAPI · Async SQLAlchemy · Alembic · Docker · Postgres · Redis · OpenTelemetry",
    repo: "https://github.com/joacominatel/fastapi_sqlalchemy_template",
    shortDescription: {
      en: "Production-ready FastAPI starter with Docker, async SQLAlchemy and observability wired in.",
      es: "Starter de FastAPI listo para producción con Docker, SQLAlchemy async y observabilidad integrada.",
    },
    goal: {
      en: "Let backend teams ship scalable APIs fast with DDD boundaries, migrations and monitoring out of the box.",
      es: "Permitir que equipos backend lancen APIs escalables con DDD, migraciones y monitoreo listo desde el día uno.",
    },
    status: "active",
    tags: ["fastapi", "sqlalchemy", "ddd", "template", "alembic", "docker"],
    highlight: {
      label: {
        en: "New Template",
        es: "Nueva Plantilla",
      },
      colorClass: "bg-amber-300/70 text-slate-900 border border-amber-400/60",
    },
    story: {
      en: `Reusable foundation for backend teams that want the first sprint done before writing business code. The template spins up with Docker Compose and delivers a FastAPI stack wired through async SQLAlchemy, Alembic migrations, Redis, and Postgres. Logging, metrics, and tracing are turned on by default with Loguru + OpenTelemetry so incidents surface quickly.

Architecture follows Domain-Driven Design: each domain packages models, schemas, repositories, services, and routers. The router loader discovers new domains automatically, so adding features is just scaffolding a folder. Settings auto-detect the environment, inject versioning via Hatch-VCS, and expose app health metadata at /api/health.

Why it matters: teams bootstrap faster, enforce clean boundaries, and get CI-ready workflows (lint, format, coverage) without reinventing the wheel. It is my go-to accelerator when spinning new services or coaching teams on modern Python backends.`,
      es: `Base reutilizable para equipos backend que quieren el primer sprint resuelto antes de escribir negocio. La plantilla se levanta con Docker Compose y entrega un stack FastAPI conectado con SQLAlchemy asíncrono, migraciones Alembic, Redis y Postgres. Logging, métricas y trazas vienen activadas con Loguru + OpenTelemetry para detectar incidentes rápido.

La arquitectura sigue Domain-Driven Design: cada dominio empaqueta modelos, esquemas, repositorios, servicios y routers. El cargador de routers descubre nuevos dominios automáticamente, así que sumar features es crear la carpeta correcta. Las settings autodetectan el entorno, inyectan versionado con Hatch-VCS y exponen metadata de salud en /api/health.

Por qué importa: los equipos arrancan más rápido, mantienen límites claros y obtienen workflows listos para CI (lint, format, coverage) sin reinventar nada. Es mi acelerador favorito al iniciar servicios nuevos o al acompañar equipos en backends modernos con Python.`,
    },
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
    },
  },
];
