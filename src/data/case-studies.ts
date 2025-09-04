export interface LocalizedText {
  en: string;
  es: string;
}

export interface CaseStudy {
  title: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  impact: LocalizedText;
  stack: string;
  repo: string;
}

export const caseStudies: CaseStudy[] = [
  {
    title: {
      en: "Invoice OCR & AI Structuring",
      es: "OCR y estructuración de facturas con IA",
    },
    problem: {
      en: "Finance team spent hours manually entering invoice data.",
      es: "El equipo de finanzas tardaba horas cargando datos de facturas.",
    },
    solution: {
      en: "Service with OCR → OpenAI parsing → DB for actionable records.",
      es: "Servicio con OCR → parseo con OpenAI → BD para datos accionables.",
    },
    impact: {
      en: "Saved many man‑hours daily, handling 20k+ invoices/year under $500 API cost.",
      es: "Ahorra muchas horas/día, procesando 20k+ facturas/año por <USD500 en API.",
    },
    stack: "Redis · Oracle · Docker · Python · Next.js",
    repo: "https://github.com/joacominatel/escaneo-facturas-scratch",
  },
  {
    title: { en: "Go Server Monitoring API", es: "API de monitoreo en Go" },
    problem: {
      en: "Needed real‑time thresholds and alerts for hardware servers.",
      es: "Se necesitaban umbrales y alertas en tiempo real para servidores físicos.",
    },
    solution: {
      en: "Go API that tracks metrics and triggers threshold‑based alerts.",
      es: "API en Go que monitorea métricas y dispara alertas por umbral.",
    },
    impact: {
      en: "Provided live hardware insight and timely notifications.",
      es: "Brindó visibilidad al hardware y alertas oportunas.",
    },
    stack: "Go · HTML/CSS/JS",
    repo: "https://github.com/joacominatel/server-monitoring-go",
  },
  {
    title: { en: "Notion Backup Tracker", es: "Tracker de backups en Notion" },
    problem: {
      en: "Verifying that all daily backups were logged was error‑prone.",
      es: "Verificar que todos los backups diarios quedaran registrados era engorroso.",
    },
    solution: {
      en: "Dynamic Notion table receiving POSTs for each backup plus SMTP notices.",
      es: "Tabla dinámica en Notion que recibe POSTs por backup y envía avisos SMTP.",
    },
    impact: {
      en: "Ensured every backup was tracked and auditable.",
      es: "Aseguró que cada backup quedara registrado y auditable.",
    },
    stack: "JavaScript · Notion API · SMTP",
    repo: "mailto:joacominatel@gmail.com?subject=Notion%20Backup%20Tracker%20demo",
  },
];

export type CaseStudyKeys = keyof (typeof caseStudies)[number];
