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
            <h2 className="text-3xl font-bold tracking-tight">Intereses & Abstracción</h2>
            
            <div className="space-y-4 text-foreground/80 leading-relaxed text-lg">
              <p>
                Para mí, la matemática no es solo para calcular cosas, es el lenguaje de la estructura. La física me enseñó que los sistemas complejos —desde el espacio-tiempo hasta un flujo de datos— se pueden entender si se modelan bien.
              </p>
              <p>
                No veo los pipelines como pedazos sueltos de código, sino como un sistema con reglas de consistencia. Si el diseño es bueno, la optimización viene sola.
              </p>
            </div>
          </div>

          <div className="py-8 border-y border-border/50 bg-foreground/[0.01] flex flex-col items-center justify-center space-y-4">
            <div 
              className="text-lg md:text-2xl text-foreground/90 overflow-x-auto max-w-full px-4"
              dangerouslySetInnerHTML={{ __html: renderedEquation }} 
            />
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted/60 font-medium">
              Ecuaciones de campo de Einstein
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-muted leading-relaxed max-w-3xl">
            <p>
              Me gustan los problemas donde la lógica abstracta se toca con la ejecución técnica. No busco que las cosas se vean impresionantes, busco que tengan sentido.
            </p>
            <p>
              Mi objetivo es reducir la entropía en los ecosistemas de datos, transformando el ruido crudo en algo que sirva para decidir.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
