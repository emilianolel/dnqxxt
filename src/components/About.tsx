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
                No me defino solo por mi puesto de trabajo. Antes que ingeniero, soy una persona impulsada por la curiosidad de entender cómo están hechas las cosas. Mi formación original es en <strong className="text-foreground">física</strong>, lo cual moldeó mi forma de ver el mundo: busco la elegancia en la simplicidad y el rigor en la ejecución.
              </p>
              <p>
                Para mí, programar no es solo una obligación laboral; es una forma de pensamiento. Construyo proyectos propios porque es el lenguaje que uso para explorar ideas, desde el modelado matemático hasta el diseño de sistemas de datos en la nube.
              </p>
              <p>
                Esa misma búsqueda de estructura la llevo a mis otros intereses: la <strong className="text-foreground">música</strong>, la <strong className="text-foreground">fotografía</strong> y el <strong className="text-foreground">diseño</strong>. Al final, todo trata de lo mismo: encontrar equilibrio, forma y equilibrio en medio del ruido.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted/80">
                Líneas de Interés
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
                "La ingeniería es la continuación de la física por otros medios. Si el diseño no es simple y estético, probablemente la lógica interna tenga fallas."
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
