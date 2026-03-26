import React from "react";
import katex from "katex";
import { Container, Section } from "./ui/Layout";

export const Interests = () => {
  const equation = "G_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\frac{8\\pi G}{c^4} T_{\\mu\\nu}";
  const renderedEquation = katex.renderToString(equation, {
    throwOnError: false,
    displayMode: true,
  });

  return (
    <Section id="interests">
      <Container>
        <div className="space-y-12">
          <div className="space-y-6 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">Curiosidad & Estructura</h2>
            
            <div className="space-y-4 text-foreground/80 leading-relaxed text-lg">
              <p>
                Para mí, la matemática no es una herramienta de cálculo, es el lenguaje de la estructura subyacente de la realidad. Aprendí que los sistemas complejos pueden describirse con reglas simples si se encuentra el nivel de abstracción correcto.
              </p>
              <p>
                Esa misma fascinación me lleva a otros lenguajes: la música, donde la armonía es matemática pura; el diseño, donde la forma sigue a la función; y la fotografía, que es el estudio de la luz y la composición. Mis intereses no son piezas sueltas; son diferentes formas de hablar de lo mismo: <strong className="text-foreground">forma, equilibrio y estructura</strong>.
              </p>
            </div>
          </div>

          <div className="py-12 border-y border-border/50 bg-foreground/[0.01] flex flex-col items-center justify-center space-y-6">
            <div 
              className="text-lg md:text-3xl text-foreground/90 overflow-x-auto max-w-full px-4"
              dangerouslySetInnerHTML={{ __html: renderedEquation }} 
            />
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted/60 font-medium">
              Ecuaciones de campo de Einstein: La geometría del mundo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm text-foreground/60 leading-relaxed max-w-4xl">
            <p>
              Me interesan los problemas donde la lógica abstracta se encuentra con la ejecución técnica. No busco lo impresionante por ser complejo, busco lo que tiene sentido por ser esencial.
            </p>
            <p>
              Mi práctica profesional y personal consiste en reducir la entropía: transformar el ruido en señales claras, ya sea en un sistema de datos distribuido o en una composición visual.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
