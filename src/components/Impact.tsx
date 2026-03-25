import React from "react";
import { impactMetrics } from "@/content/experience";
import { Container, Section } from "./ui/Layout";

export const Impact = () => {
  return (
    <Section id="impact" className="bg-foreground/[0.02] border-y border-border">
      <Container>
        <div className="space-y-12">
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-widest text-muted">
              Impacto Profesional
            </h2>
            <p className="text-2xl md:text-3xl font-medium max-w-2xl">
              Resultados medibles y sistemas diseñados para la escala.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                <p className="text-4xl md:text-5xl font-bold text-foreground">
                  {metric.value}
                </p>
                <div className="space-y-1">
                  <p className="font-semibold text-sm">{metric.label}</p>
                  <p className="text-sm text-muted leading-snug">
                    {metric.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
