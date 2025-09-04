export const es = {
  heroTitle: "Backends que salen a producción en días.",
  heroSubtitle:
    "APIs seguras, Postgres y deploys. UTC−3, disponibilidad 30+ h/sem.",
  hireMe: "Contrátame",
  viewCaseStudies: "Ver casos reales",
  viewProjects: "Ver proyectos",
  downloadCV: "Descargar CV",
  socialFooter: "Hecho con Next.js, Tailwind y mate 🧉",
  techBarLabel: "Stack clave",
  whatIBuild: "Lo que construyo",
  projects: "Proyectos",
  skills: "Skills",
  contact: "Contacto",
  aboutMe: "Sobre mí",
  aboutMeDesc: "Backend (Python) – APIs, datos y automatización.",
  restfulApis: "APIs REST bien documentadas",
  restfulDesc: "OpenAPI, versionado y tests.",
  dataAutomation: "Datos & Automatización",
  dataAutomationDesc: "ETL, workers, colas, observabilidad.",
  dataAutomationDetailTitle: "Datos & Automatización",
  dataAutomationDetailIntro:
    "Herramientas y enfoques que disfruto al construir backends con datos y automatización.",
  dataAutomationDetailBody: `Me gusta combinar herramientas pragmáticas con runtimes modernos. Python (FastAPI, workers async) al centro por expresividad, y complemento con Go o Node cuando la concurrencia o el streaming necesitan más control.

Para orquestación y pipelines: colas simples (Redis / SQS) más schedulers livianos superan la sobre‑ingeniería de DAGs en muchos casos. SQL (Postgres / MySQL) como fuente de verdad y Redis o cachés sólo donde la latencia realmente importa.

Observabilidad temprano: logs estructurados, trace ids que viajan entre tareas y métricas simples (latencia p95, profundidad de cola) dan ciclos de feedback rápidos. Prototipo con Docker Compose y luego contenedores en la nube (Azure / AWS) usando plantillas IaC.

Integración con IA: uso LLMs para extraer, validar o resumir—no como caja negra. Guardrails y fallbacks deterministas mantienen estable el flujo.

Mantengo las cosas simples: menos piezas, contratos claros, comportamientos documentados y ejecuciones reproducibles.`,
  aboutMeBody: `Soy Joaquin (Joaco), backend developer enfocado en Python y en el diseño de APIs REST claras, flujos de datos robustos e integración con IA. Disfruto convertir problemas difusos en arquitecturas concisas: servicios pequeños con límites explícitos, performance predecible y buena observabilidad.

Prefiero diseños simples y componibles sobre complejidad de moda: endpoints versionados, contratos tipados, pipelines repetibles, tests útiles. Colaboro en equipo o en proyectos freelance aportando documentación, commits limpios, testing en CI y entrega iterativa.

Si necesitás a alguien para diseñar o reforzar una base backend (APIs, procesamiento de datos, automatización, integración IA) con calidad mantenible, hablemos.`,
  seeMore: "ver más",
  projectTeaserTitle: "Proyectos destacados",
  finalCTAText: "Disponible para freelance y colaboraciones.",
  email: "Email",
  restfulDetailTitle: "Well documented RESTful APIs",
  restfulDetailIntro:
    "Diseño y desarrollo APIs REST claras, confiables y fáciles de evolucionar.",
  restfulDetailBody: `Me gusta trabajar con APIs bien pensadas: recursos definidos con lógica, versionado ordenado y documentación OpenAPI que siempre refleja la realidad del proyecto. La idea es que cualquier persona que consuma la API tenga una experiencia predecible, sin sorpresas.

La calidad la aseguro con pruebas de contrato, integración y carga, cuidando que cada cambio mantenga la estabilidad. Prefiero la simplicidad: menos endpoints pero mejor diseñados, más fáciles de mantener y escalar. Si buscás alguien que te dé una base backend sólida y transparente, podemos trabajar juntos.`,
  backToProjects: "Volver a proyectos",
  tagsLabel: "Tags",
  statusDeveloping: "En desarrollo",
  statusActive: "Activo",
  experienceTitle: "Experiencia",
  present: "Actualidad",
  achievementsLabel: "Logros",
  internalProjectsLabel: "Proyectos internos",
  showMore: "Ver más",
  showLess: "Ver menos",
  caseStudiesTitle: "Casos de estudio",
  problem: "Problema",
  solution: "Solución",
  impact: "Impacto",
  stack: "Stack",
  repoDemo: "Repo / Demo",
};

export type EsKeys = keyof typeof es;
