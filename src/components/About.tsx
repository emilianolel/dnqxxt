import React from "react";
import { Container, Section } from "./ui/Layout";

export const About = () => {
  return (
    <Section id="about" className="bg-foreground/[0.01]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Identidad</h2>
            <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
              <p>
                No me defino por mi cargo ni por mi oficina. Antes que ingeniero, soy alguien que intenta entender los mecanismos de las cosas. Estudié <strong className="text-foreground">física</strong> porque quería descifrar la estructura del mundo; luego me di cuenta de que el mundo ahora son los datos. No es una contradicción, es un cambio de escala.
              </p>
              <p>
                Para mí, programar es un lenguaje de exploración. Construyo flujos de datos porque el sistema mismo, su orden interno, me atrae más que el resultado vacío. Es una búsqueda de la elegancia en medio de un ruido constante.
              </p>
              <p>
                Esa misma obsesión me acompaña en la <strong className="text-foreground">música</strong>, la <strong className="text-foreground">fotografía</strong> y el <strong className="text-foreground">diseño</strong>. Distintos métodos para hablar de lo mismo: la estructura, el equilibrio y lo que queda cuando quitamos lo innecesario.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted/80">
                Otras Estructuras
              </h3>
              <ul className="space-y-3">
                {[
                  "Ingeniería de datos avanzada",
                  "Física teórica & Simulación",
                  "Matemática aplicada",
                  "Diseño minimalista",
                  "Composición musical & Síntesis",
                  "Fotografía analógica & digital"
                ].map((interest) => (
                  <li key={interest} className="text-sm flex items-center gap-2 text-foreground/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-6 border border-border rounded-lg bg-foreground/[0.02] space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted/60">Criterio</p>
              <p className="text-sm italic text-foreground/70 leading-relaxed">
                "La ingeniería es la extensión de la física a la realidad técnica. Si el diseño falla, la lógica de fondo está rota."
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
