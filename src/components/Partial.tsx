import React from "react";
import { Container, Section } from "./ui/Layout";

export const Partial = () => {
  return (
    <Section id="partial" className="bg-foreground/[0.02] overflow-hidden relative border-y border-border/30">
      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center space-y-16">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight">Partial</h2>
            <p className="text-xl text-muted font-medium italic">
              "La geometría de lo incompleto."
            </p>
          </div>

          <div className="space-y-8 max-w-2xl text-foreground/80 leading-relaxed text-lg">
            <p>
              <strong className="text-foreground">Partial</strong> no es una marca, es un recordatorio. El símbolo <span className="font-serif italic text-accent opacity-80 text-2xl">∂</span> representa la derivada parcial: la manera en que entendemos un sistema complejo analizando cómo cambia en una sola dirección. Es una forma de aislar la verdad.
            </p>
            <p>
              Esa misma lógica —la de marcar una frontera entre lo esencial y lo decorativo— es la que aplico al construir software. El minimalismo no es una estética, es una decisión técnica.
            </p>
          </div>

          {/* Visual Anchor: Large ∂ Symbol */}
          <div className="py-8 flex items-center justify-center select-none pointer-events-none">
            <span className="text-[14rem] md:text-[20rem] leading-none font-serif font-light text-foreground text-center opacity-90">
              ∂
            </span>
          </div>

          <div className="space-y-12 max-w-2xl">
            <p className="text-foreground/80 leading-relaxed text-lg italic">
              Forma a través de la estructura. Una propuesta donde el diseño es la consecuencia de la lógica interna, no un barniz externo.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: "Mínimo", value: "0" },
                { label: "Frontera", value: "∂Ω" },
                { label: "Cambio", value: "δ" },
                { label: "Orden", value: "Σ" },
              ].map((p) => (
                <div key={p.label} className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-muted">{p.label}</p>
                  <p className="font-serif text-sm text-foreground/60">{p.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
