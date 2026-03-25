export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "AgileThought",
    role: "Data Engineer",
    period: "Mayo 2022 — Presente",
    description: "Trabajo en proyectos de datos a gran escala enfocados en métricas, analítica y soporte a decisiones de negocio.",
    achievements: [
      "Optimización de procesos reduciendo tiempos de 2h a 45m.",
      "Reducción de discrepancias en métricas del 15% a <1%.",
      "Diseño de estructuras analíticas y tablas FACT.",
      "Implementación de orquestación con Airflow (Astronomer).",
      "Colaboración con Data Science para alimentar modelos analíticos.",
    ],
    tech: ["GCP", "BigQuery", "PySpark", "Airflow", "Astronomer", "DBT"],
  },
];

export const impactMetrics = [
  {
    value: "2h → 45m",
    label: "Optimización de procesos",
    description: "Reducción de tiempo mediante consultas optimizadas y ejecución paralela.",
  },
  {
    value: "<1%",
    label: "Discrepancia de datos",
    description: "De 15% a niveles mínimos mediante validación y lógica estricta.",
  },
  {
    value: "100%",
    label: "Automatización",
    description: "Pipelines orquestados con Airflow reduciendo tareas manuales.",
  },
];
