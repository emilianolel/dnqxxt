import React from "react";
import { Container, Section, Card } from "./ui/Layout";

const futureLines = [
  {
    title: "Sistemas de detección de anomalías con enfoque práctico",
    description: "Modelado preventivo basado en comportamiento temporal.",
  },
  {
    title: "Plataformas de datos autoexplicables",
    description: "Enfoque en observabilidad y linaje semántico.",
  },
  {
    title: "Data Engineering + AI/ML Integration",
    description: "Sistemas donde la ingeniería es la base de la inteligencia.",
  },
];

export const FutureProjects = () => {
  return (
    <Section id="future">
      <Container>
        <div className="space-y-12 text-center">
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">Futuros Proyectos</h2>
            <p className="text-muted">
              Mi interés se centra en evolucionar hacia sistemas proactivos y productos técnicos con profundidad conceptual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {futureLines.map((line, index) => (
              <div key={index} className="space-y-3">
                <h3 className="font-bold text-foreground">
                  {line.title}
                </h3>
                <p className="text-sm text-muted">
                  {line.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
