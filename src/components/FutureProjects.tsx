import React from "react";
import { Container, Section, Card } from "./ui/Layout";

const futureLines = [
  {
    title: "Detección de anomalías. Lo real.",
    description: "Modelado preventivo que no busca el error, sino el patrón oculto del desorden.",
  },
  {
    title: "Plataformas que se explican a sí mismas.",
    description: "Observabilidad total. Que los datos hablen antes de romperse.",
  },
  {
    title: "Ingeniería + Inteligencia. Sin fisuras.",
    description: "Sistemas donde el código es la infraestructura de la razón.",
  },
];

export const FutureProjects = () => {
  return (
    <Section id="future">
      <Container>
        <div className="space-y-12 text-center">
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">Caminos</h2>
            <p className="text-muted leading-relaxed">
              Me interesa lo que viene después: sistemas proactivos y productos técnicos con una profundidad que no se agote en el uso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {futureLines.map((line, index) => (
              <div key={index} className="space-y-3">
                <h3 className="font-bold text-foreground">
                  {line.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
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
