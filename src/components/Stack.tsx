import React from "react";
import { techStack } from "@/content/stack";
import { Container, Section } from "./ui/Layout";

export const Stack = () => {
  return (
    <Section id="stack" className="bg-foreground/[0.01]">
      <Container>
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Stack Técnico</h2>
            <p className="text-muted max-w-xl">
              Herramientas y tecnologías que utilizo para construir sistemas resilientes y escalables.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            {techStack.map((category) => (
              <div key={category.category} className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted/80">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="text-sm border-l border-border pl-3 hover:border-accent transition-colors">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
