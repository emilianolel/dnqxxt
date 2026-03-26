export interface Project {
  slug: string;
  name: string;
  summary: string;
  problem: string;
  solution: string;
  architecture: string[];
  stack: string[];
  purpose: string;
  featured: boolean;
  status: "active" | "completed";
}

export const projects: Project[] = [
  {
    slug: "black-hole-visualizer",
    name: "Schwarzschild Black Hole Visualizer",
    summary: "Visualización 3D del espacio-tiempo usando Spark para integrar las ecuaciones de Einstein en tiempo real.",
    problem: "Quería entender si el procesamiento distribuido (Spark) era capaz de manejar la deformación geodésica sin sacrificar performance visual.",
    solution: "Implementé un integrador RK4 sobre Dataproc, persistencia en BigQuery y renderizado en React Three Fiber. Es la unión exacta de mi formación en física e ingeniería.",
    architecture: [
      "Física: Integrador RK4 en PySpark",
      "Infra: Google Dataproc / BigQuery",
      "Frontend: React Three Fiber (R3F)",
    ],
    stack: ["GCP", "Dataproc", "BigQuery", "FastAPI", "React", "Three.js"],
    purpose: "Explorar los límites entre el cálculo numérico pesado y la arquitectura de datos moderna.",
    featured: true,
    status: "active",
  },
  {
    slug: "mexico-crime-platform",
    name: "IDM — Plataforma de Incidencia Delictiva",
    summary: "Infraestructura de datos abierta para democratizar el acceso a estadísticas de seguridad en México.",
    problem: "Los datos públicos suelen estar atrapados en formatos ilegibles. Quise construir una herramienta para convertirlos en información útil.",
    solution: "Pipeline de ingesta en Python, almacenamiento estructurado y un tablero reactivo que permite ver patrones geográficos que antes estaban ocultos.",
    architecture: [
      "Ingesta: Python Crawler modular",
      "Modelado: PostgreSQL / Pandas",
      "Despliegue: Docker & Nginx",
    ],
    stack: ["Docker", "Python", "Pandas", "React", "Geospatial Data"],
    purpose: "Reducir la entropía informativa de los datos gubernamentales.",
    featured: true,
    status: "active",
  },
  {
    slug: "criminal-stats-mexico",
    name: "Criminal Stats Dashboard for Mexico (Legacy)",
    summary: "Replanteamiento completo de un flujo de Big Data para análisis histórico.",
    problem: "Necesitaba un campo de pruebas para dominar el stack moderno de datos de extremo a extremo.",
    solution: "Arquitectura automatizada usando Spark para carga pesada, BigQuery para el almacén y DBT para el modelado semántico.",
    architecture: [
      "Orquestación: Airflow",
      "Procesamiento: Spark / Scala",
      "Modelado: DBT (Data Build Tool)",
    ],
    stack: ["GCP", "Airflow", "Spark", "BigQuery", "DBT"],
    purpose: "Lograr un criterio sólido sobre gobernanza y modelado de datos.",
    featured: false,
    status: "completed",
  },
  {
    slug: "hacker-crank",
    name: "Hacker – Crank",
    summary: "Detección de anomalías operacionales basada en comportamiento temporal.",
    problem: "¿Podemos predecir un fallo de seguridad por cómo se comporta el sistema bajo estrés?",
    solution: "Desarrollo de un modelo ligero de detección de anomalías integrando Feature Engineering directamente en el pipeline de datos.",
    architecture: [
      "Ingeniería: Series temporales",
      "Filtros: Análisis de outliers",
    ],
    stack: ["Python", "Machine Learning", "Data Engineering"],
    purpose: "Entender la predictibilidad en sistemas socio-técnicos.",
    featured: true,
    status: "completed",
  },
  {
    slug: "minimal-gcp-infra",
    name: "Infraestructura Mínima en GCP",
    summary: "Módulos de Terraform para desplegar entornos de datos robustos en segundos.",
    problem: "Me cansé de configurar manualmente la nube. Quise codificar las mejores prácticas en un lenguaje portable.",
    solution: "Scripts modulares de IaC que automatizan la provisión de redes, buckets y buckets de BigQuery con foco en seguridad.",
    architecture: [
      "IaC: Terraform Modules",
      "Cloud: GCP Networking & IAM",
    ],
    stack: ["Terraform", "GCP", "Security as Code"],
    purpose: "Optimizar el tiempo de desarrollo eliminando la fricción de la infraestructura.",
    featured: true,
    status: "completed",
  },
];
