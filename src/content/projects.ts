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
    summary: "Un visualizador 3D de agujeros negros que usa Spark para los cálculos pesados de física.",
    problem: "Hacer que la física de la relatividad se vea bien y en tiempo real es difícil de procesar.",
    solution: "Implementación de un integrador RK4 sobre Dataproc (Spark), almacenamiento en BigQuery y renderizado en tiempo real con React Three Fiber.",
    architecture: [
      "Simulación: PySpark / Dataproc",
      "Data Warehouse: BigQuery",
      "API: FastAPI",
      "Frontend: React Three Fiber (R3F)",
    ],
    stack: ["GCP", "Dataproc", "BigQuery", "FastAPI", "React", "Three.js"],
    purpose: "Exploración de física teórica y visualización de datos masivos.",
    featured: true,
    status: "active",
  },
  {
    slug: "mexico-crime-platform",
    name: "IDM — Plataforma de Incidencia Delictiva",
    summary: "Un tablero que muestra estadísticas de crimen en México. Se actualiza solo cada mes.",
    problem: "Los datos públicos de seguridad suelen ser difíciles de leer y bajar. Quise hacerlos accesibles.",
    solution: "Arquitectura contenerizada en Docker con pipelines de ingesta en Python/Bash y una interfaz reactiva con georreferenciación dinámica.",
    architecture: [
      "Ingesta: Python Crawler (Cron)",
      "Procesamiento: Pandas / Bash scripting",
      "Servidor: Nginx",
      "Frontend: React / Vite",
    ],
    stack: ["Docker", "Python", "Pandas", "React", "Nginx", "Shell Scripting"],
    purpose: "Transparencia y análisis de datos abiertos gubernamentales.",
    featured: true,
    status: "active",
  },
  {
    slug: "criminal-stats-mexico",
    name: "Criminal Stats Dashboard for Mexico (Legacy)",
    summary: "Arquitectura de datos end-to-end original para estadísticas delictivas.",
    problem: "Diseñar un flujo completo sobre GCP.",
    solution: "Pipeline automatizado con Spark, BigQuery y DBT.",
    architecture: [
      "Fuentes: SESNSP e INEGI",
      "Procesamiento: Spark en Dataproc",
      "Modelado: DBT",
      "Visualización: Looker Studio",
    ],
    stack: ["GCP", "Airflow", "Spark", "BigQuery", "DBT"],
    purpose: "Demostrar criterio de arquitectura de datos.",
    featured: false,
    status: "completed",
  },
  {
    slug: "hacker-crank",
    name: "Hacker – Crank",
    summary: "Detección de patrones anómalos en el uso de computadoras.",
    problem: "Identificar riesgos de ciberseguridad mediante comportamiento operacional.",
    solution: "Sistema de detección de anomalías preventivas.",
    architecture: [
      "Feature Engineering temporal",
      "Detección de anomalías",
      "Integración DE + ML",
    ],
    stack: ["Python", "Machine Learning", "Feature Engineering"],
    purpose: "Análisis de comportamiento operacional preventivo.",
    featured: true,
    status: "completed",
  },
  {
    slug: "minimal-gcp-infra",
    name: "Infraestructura mínima en GCP",
    summary: "Repositorio Terraform para desplegar arquitecturas de datos reusables.",
    problem: "Fricción inicial en configuración de cloud.",
    solution: "Infraestructura como código (IaC) modular.",
    architecture: [
      "Terraform Modules",
      "GCP Provisioning",
    ],
    stack: ["Terraform", "GCP", "IaC"],
    purpose: "Acelerar entornos experimentales.",
    featured: true,
    status: "completed",
  },
];
