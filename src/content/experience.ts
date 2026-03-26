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
    description: "Diseño de flujos de información a gran escala. Intervenir en el caos de la analítica de negocio.",
    achievements: [
      "Optimización de tuberías de datos; de la lentitud a la ejecución en menos de una hora.",
      "Reducción Drástica de errores en métricas fundamentales. Una cuestión de verdad.",
      "Diseño de modelos de datos enfocados en el uso real, no solo en la teoría.",
      "Automatización de procesos mediante Airflow. Menos intervención humana, más precisión.",
      "Trabajo con equipos de ciencia de datos para asegurar el flujo constante de lo necesario.",
    ],
    tech: ["GCP", "BigQuery", "PySpark", "Airflow", "Astronomer", "DBT"],
  },
];

export const impactMetrics = [
  {
    value: "2h → 45m",
    label: "Ejecución",
    description: "Una reducción de tiempo, un aumento de la claridad.",
  },
  {
    value: "<1%",
    label: "Precisión",
    description: "Casi nada de ruido en los datos finales.",
  },
  {
    value: "100%",
    label: "Fluidez",
    description: "Sistemas autónomos, sin rastro manual.",
  },
];
