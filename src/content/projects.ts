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
    summary: "Visualización 3D del espacio-tiempo. Un intento de ver lo invisible usando Spark para resolver las ecuaciones de Einstein en tiempo real.",
    problem: "Quería saber si el código era capaz de manejar la deformación geodésica sin sucumbir al ruido visual. Una obsesión técnica.",
    solution: "Un integrador RK4 sobre Dataproc y renderizado en React Three Fiber. Es la intersección de la física y la ingeniería, donde todo tiene que encajar.",
    architecture: [
      "Física: Integrador RK4 en PySpark",
      "Infra: Google Dataproc / BigQuery",
      "Frontend: React Three Fiber (R3F)",
    ],
    stack: ["GCP", "Dataproc", "BigQuery", "FastAPI", "React", "Three.js"],
    purpose: "Explorar los límites de la computación numérica. Una búsqueda de estructura.",
    featured: true,
    status: "active",
  },
  {
    slug: "mexico-crime-platform",
    name: "IDM — Plataforma de Incidencia Delictiva",
    summary: "Hacer legibles las estadísticas del crimen en México. Mapas que antes eran ruido burocrático.",
    problem: "Los datos públicos suelen ser inescrutables. Quise construir una herramienta para mirarlos con claridad.",
    solution: "Pipeline de ingesta en Python y un tablero reactivo. Convirtiendo el caos en información útil, o al menos en algo que se pueda leer.",
    architecture: [
      "Ingesta: Python Crawler modular",
      "Modelado: PostgreSQL / Pandas",
      "Despliegue: Docker & Nginx",
    ],
    stack: ["Docker", "Python", "Pandas", "React", "Geospatial Data"],
    purpose: "Reducir la entropía informativa. Un compromiso con la realidad de los datos.",
    featured: true,
    status: "active",
  },
  {
    slug: "criminal-stats-mexico",
    name: "Criminal Stats Dashboard for Mexico (Legacy)",
    summary: "Replanteamiento de un flujo de Big Data. Un campo de entrenamiento técnico.",
    problem: "Necesitaba dominar el stack moderno de extremo a extremo. Sin atajos.",
    solution: "Arquitectura automatizada usando Spark, BigQuery y DBT. Donde el modelado semántico se vuelve fundamental.",
    architecture: [
      "Orquestación: Airflow",
      "Procesamiento: Spark / Scala",
      "Modelado: DBT (Data Build Tool)",
    ],
    stack: ["GCP", "Airflow", "Spark", "BigQuery", "DBT"],
    purpose: "Entender la gobernanza y el flujo de los datos a gran escala.",
    featured: false,
    status: "completed",
  },
  {
    slug: "hacker-crank",
    name: "Hacker – Crank",
    summary: "Detección de anomalías en el uso de computadoras. Comportamiento y tiempo.",
    problem: "¿Podemos predecir un fallo por cómo se mueve el sistema bajo estrés? Una pregunta sobre la previsibilidad.",
    solution: "Modelo ligero de detección de anomalías integrando Feature Engineering en el pipeline. Una reducción de ruido operacional.",
    architecture: [
      "Ingeniería: Series temporales",
      "Filtros: Análisis de outliers",
    ],
    stack: ["Python", "Machine Learning", "Data Engineering"],
    purpose: "Entender la estructura de los sistemas socio-técnicos.",
    featured: true,
    status: "completed",
  },
  {
    slug: "minimal-gcp-infra",
    name: "Infraestructura Mínima en GCP",
    summary: "Módulos de Terraform para desplegar infraestructuras reusables. Automatización de la duda.",
    problem: "La configuración manual es fuente de error. Quise codificar las mejores prácticas para no repetirme.",
    solution: "Scripts modulares de IaC que automatizan redes y seguridad. Porque la infraestructura tiene que ser sólida y silenciosa.",
    architecture: [
      "IaC: Terraform Modules",
      "Cloud: GCP Networking & IAM",
    ],
    stack: ["Terraform", "GCP", "Security as Code"],
    purpose: "Eliminar la fricción técnica para concentrarse en lo importante.",
    featured: true,
    status: "completed",
  },
];
