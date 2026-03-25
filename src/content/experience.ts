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
    description: "Proyectos de datos a escala para métricas y analítica de negocio.",
    achievements: [
      "Optimizé pipelines para que corrieran en menos de una hora.",
      "Reduje el error en métricas de negocio de un 15% a casi cero.",
      "Diseñé tablas FACT y modelos de datos pensados para ser usados.",
      "Automaticé flujos con Airflow y Astronomer.",
      "Colaboré con equipos de ciencia de datos para que tuvieran lo que necesitaban.",
    ],
    tech: ["GCP", "BigQuery", "PySpark", "Airflow", "Astronomer", "DBT"],
  },
];

export const impactMetrics = [
  {
    value: "2h → 45m",
    label: "Optimización",
    description: "De 2h a 45m de ejecución.",
  },
  {
    value: "<1%",
    label: "Calidad",
    description: "Menos del 1% de discrepancia en datos.",
  },
  {
    value: "100%",
    label: "Automatización",
    description: "Eliminé tareas manuales en pipelines críticos.",
  },
];
