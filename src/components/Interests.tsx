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
            <h2 className="text-3xl font-bold tracking-tight">Geometría & Observación</h2>
            
            <div className="space-y-4 text-foreground/80 leading-relaxed text-lg">
              <p>
                La matemática no es un cálculo, es un mapa de lo que no podemos ver a simple vista. Aprendí que los sistemas complejos —un flujo de datos, el movimiento de una galaxia— se rigen por reglas de una simplicidad casi aterradora si se encuentra la abstracción correcta.
              </p>
              <p>
                Esa misma estructura me lleva a otros sitios: la música, donde el sonido es geometría pura; el diseño, donde la forma intenta no estorbar; y la fotografía, que es atrapar la luz antes de que se pierda. No son intereses aislados; son diferentes lenguajes para hablar de la misma obsesión: <strong className="text-foreground">el equilibrio y la forma</strong>.
              </p>
            </div>
          </div>

          <div className="py-12 border-y border-border/50 bg-foreground/[0.01] flex flex-col items-center justify-center space-y-6">
            <div 
              className="text-lg md:text-3xl text-foreground/90 overflow-x-auto max-w-full px-4"
              dangerouslySetInnerHTML={{ __html: renderedEquation }} 
            />
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted/60 font-medium text-center">
              Ecuaciones de campo de Einstein: El orden secreto del mundo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm text-foreground/60 leading-relaxed max-w-4xl">
            <p>
              Me interesan los problemas donde la lógica más pura choca con la ejecución técnica. No busco lo complejo, busco lo esencial. Lo que queda después de limpiar el ruido.
            </p>
            <p>
              Tanto en un pipeline como en una imagen, mi trabajo es reducir la entropía. Transformar el caos en una señal que alguien, en algún lugar, pueda entender.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
