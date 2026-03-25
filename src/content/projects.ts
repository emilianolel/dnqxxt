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
}

export const projects: Project[] = [
  {
    slug: "criminal-stats-mexico",
    name: "Criminal Stats Dashboard for Mexico",
    summary: "Arquitectura de datos end-to-end para procesar y visualizar estadísticas delictivas usando fuentes públicas.",
    problem: "Necesidad de diseñar un flujo completo que muestre cómo estructurar una solución moderna de ingeniería de datos sobre GCP.",
    solution: "Pipeline automatizado con ingesta a GCS, procesamiento Spark en Dataproc y modelado en BigQuery con DBT.",
    architecture: [
      "Fuentes: SESNSP e INEGI",
      "Ingesta: Cloud Storage (GCS)",
      "Procesamiento: Spark en Dataproc",
      "Almacenamiento: BigQuery",
      "Modelado: DBT",
      "Visualización: Looker Studio",
      "Orquestación: Airflow",
    ],
    stack: ["GCP", "Airflow", "Spark", "BigQuery", "DBT", "Terraform", "Docker"],
    purpose: "Demostrar criterio de arquitectura, automatización y separación de capas.",
    featured: true,
  },
  {
    slug: "hacker-crank",
    name: "Hacker – Crank",
    summary: "Detección de patrones anómalos en el uso de computadoras para identificar riesgos de ciberseguridad.",
    problem: "Construir una base para analizar comportamiento operacional y detectar señales tempranas de riesgo sin invadir la privacidad.",
    solution: "Sistema que observa eventos, extrae patrones temporales y detecta desviaciones preventivas.",
    architecture: [
      "Observabilidad de eventos del sistema",
      "Feature Engineering temporal",
      "Detección de anomalías",
      "Integración DE + ML",
    ],
    stack: ["Python", "Machine Learning", "Anomaly Detection", "Feature Engineering"],
    purpose: "Análisis de comportamiento operacional preventivo.",
    featured: true,
  },
  {
    slug: "minimal-gcp-infra",
    name: "Infraestructura mínima y didáctica en GCP",
    summary: "Repositorio Terraform para desplegar arquitecturas de datos sencillas y reusables.",
    problem: "Fricción inicial y configuración manual repetitiva en pruebas de pipelines pequeños.",
    solution: "Infraestructura como código (IaC) para acelerar entornos experimentales.",
    architecture: [
      "Terraform Modules",
      "GCP Project setup",
      "GCS & BigQuery provisioning",
    ],
    stack: ["Terraform", "GCP", "IaC"],
    purpose: "Reducir fricción y servir como entorno didáctico.",
    featured: true,
  },
];
