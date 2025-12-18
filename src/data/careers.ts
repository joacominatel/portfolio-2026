export type CareerProject = {
  name: { en: string; es: string };
  description: { en: string; es: string };
  technologies: string[];
};

export type CareerEntry = {
  company: string;
  position: { en: string; es: string };
  description: { en: string; es: string };
  technologies: string[];
  start: string; // ISO date
  end?: string | null; // null => present
  achievements?: { en: string[]; es: string[] };
  location?: string | null;
  team?: string | null;
  projects?: CareerProject[] | null;
};

export const careers: CareerEntry[] = [
  {
    company: "Dentsu",
    position: {
      en: "Backend Developer",
      es: "Backend Developer",
    },
    description: {
      es: "Desarrollo y mantenimiento de servicios backend escalables. Diseño de APIs RESTful y optimización de bases de datos. Colaboración con equipos frontend y de producto para entregar soluciones robustas.",
      en: "Development and maintenance of scalable backend services. Design of RESTful APIs and database optimization.",
    },
    technologies: [
      "Go",
      "Python",
      "SQL",
      "Docker",
      "API Design",
      "Git",
    ],
    start: "2024-08-01",
    end: null,
  },
  {
    company: "Dentsu",
    position: {
      en: "Service Operations Analyst",
      es: "Service Operations Analyst",
    },
    description: {
      es: "Actualmente me desempeño en soporte técnico, gestionando y optimizando la infraestructura tecnológica de la empresa. Me encargo del mantenimiento de servidores, control de accesos y soporte a aplicaciones de terceros, además de desarrollar automatizaciones que mejoran la eficiencia operativa. También manejo análisis de datos con Power BI y Excel, administro entornos en Azure y Active Directory, y llevo la gestión de inventarios y usuarios, asegurando así un funcionamiento integral y seguro de los sistemas.",
      en: "I currently work in technical support, managing and optimizing the company's technology infrastructure. I handle server maintenance, access control and third‑party application support, and build automations that improve operational efficiency. I also perform data analysis with Power BI and Excel, manage Azure and Active Directory environments, and oversee inventory and user management to keep systems reliable and secure.",
    },
    technologies: [
      "Support",
      "Server Admin",
      "Access Control",
      "Automation",
      "Power BI",
      "Excel",
      "Azure",
      "Active Directory",
      "Inventory",
    ],
    start: "2023-05-15",
    end: "2024-08-01",
    achievements: {
      es: [
        "Automatización de tareas de gestión y backups",
        "Automatización del data-entry de facturas",
        "Gobernanza y control de recursos Azure",
        "Diseño de flujos de tickets entre equipos",
      ],
      en: [
        "Automation of management and backup tasks",
        "Invoice data-entry automation",
        "Azure resource governance improvements",
        "Ticket workflow design across teams",
      ],
    },
    location: "Buenos Aires, Argentina",
    team: "IT",
    projects: [
      {
        name: { es: "Escaneo de facturas", en: "Invoice scanning" },
        description: {
          es: "Automatización y extracción de datos clave de facturas para múltiples países.",
          en: "Automation & extraction of key invoice fields for multiple countries.",
        },
        technologies: [
          "OpenAI",
          "Next.js",
          "Socket.IO",
          "Docker",
          "Redis",
          "SQL Server",
        ],
      },
      {
        name: {
          es: "Automatización y registro de backups",
          en: "Backup automation & logging",
        },
        description: {
          es: "Registro centralizado de inicios y finales de backups vía API y dashboard móvil.",
          en: "Central API logging start/end of backups with mobile dashboard (Notion).",
        },
        technologies: ["Docker", "Bash", "API", "Notion", "JavaScript"],
      },
      {
        name: { es: "Mapeo de servidores", en: "Server mapping" },
        description: {
          es: "CLI para escanear puertos y clasificar servidores por subred.",
          en: "CLI to scan ports and classify servers by subnet (nmap).",
        },
        technologies: ["Python", "nmap", "Bash", "SQL", "Networking"],
      },
    ],
  },
  {
    company: "Individual",
    position: {
      en: "Software Solutions Developer",
      es: "Software Solutions | Dev",
    },
    description: {
      es: "Diseñé APIs con Flask y Django, desarrollé soluciones personalizadas para clientes y trabajé de forma autónoma en proyectos adaptados a necesidades específicas.",
      en: "Designed APIs with Flask & Django, built tailored solutions, and worked autonomously on client-focused software projects.",
    },
    technologies: [
      "Python",
      "Flask",
      "Django",
      "API",
      "Next.js",
      "PHP",
      "Laravel",
      "SQL",
    ],
    start: "2021-03-01",
    end: null,
    achievements: undefined,
    location: null,
    team: null,
    projects: null,
  },
];

// Ensure newest first by default if consumed directly
careers.sort(
  (a, b) => new Date(b.start).getTime() - new Date(a.start).getTime(),
);

export default careers;
