import React from "react";
import { Container, Section } from "./ui/Layout";

export const Partial = () => {
  return (
    <Section id="partial" className="bg-foreground/[0.02] overflow-hidden relative">
      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center space-y-16">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight">Partial</h2>
            <p className="text-xl text-muted font-medium italic">
              "Frontera, estructura y cambio."
            </p>
          </div>

          <div className="space-y-8 max-w-2xl text-foreground/80 leading-relaxed text-lg">
            <p>
              <strong className="text-foreground">Partial</strong> es una exploración conceptual en forma de marca de ropa minimalista. Inspirada en el símbolo matemático <span className="font-serif italic text-accent opacity-80">∂</span> (derivada parcial), la marca representa la idea de analizar un sistema a través de sus cambios en dimensiones específicas.
            </p>
          </div>

          {/* Visual Anchor: Large ∂ Symbol */}
          <div className="py-12 flex items-center justify-center select-none pointer-events-none">
            <span className="text-[16rem] md:text-[24rem] leading-none font-serif font-light text-foreground text-center">
              ∂
            </span>
          </div>

          <div className="space-y-12 max-w-2xl">
            <p className="text-foreground/80 leading-relaxed text-lg italic">
              Aesthetics through formal structure. Una propuesta visual sobria donde el diseño no es decorativo, sino una extensión de la lógica interna de la prenda.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: "Mínimo", value: "0" },
                { label: "Frontera", value: "∂Ω" },
                { label: "Cambio", value: "Δ" },
                { label: "Estructura", value: "Σ" },
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
