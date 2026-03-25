import React from "react";
import { Container, Section } from "./ui/Layout";

export const About = () => {
  return (
    <Section id="about" className="bg-foreground/[0.01]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Sobre mí</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed text-lg">
              <p>
                Soy ingeniero de datos. Me dedico a construir flujos de información, casi siempre en Google Cloud. Me enfoco en que los pipelines sean eficientes y, sobre todo, que los datos lleguen bien a donde tienen que llegar.
              </p>
              <p>
                Antes de esto estudié física. Eso me dejó la costumbre de querer entender cómo funcionan las cosas por dentro antes de tocarlas. No me gusta la complejidad por sí sola; prefiero los sistemas que son precisos y directos.
              </p>
              <p>
                Me muevo entre la ingeniería de datos, el diseño de sistemas y cualquier proyecto técnico que tenga un reto de estructura interesante.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted/80">
                Intereses
              </h3>
              <ul className="space-y-2">
                {[
                  "Física",
                  "Matemáticas",
                  "Arquitectura de datos",
                  "Machine Learning aplicado",
                  "Detección de anomalías",
                  "Diseño minimalista",
                  "Proyectos técnicos"
                ].map((interest) => (
                  <li key={interest} className="text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-6 border border-border rounded-lg bg-foreground/[0.02] space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-muted/60">Filosofía</p>
              <p className="text-sm italic text-foreground/70">
                "Una solución técnica debe ser mantenible y directa. Si no se puede explicar simple, está mal diseñada."
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
