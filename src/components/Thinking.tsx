import React from "react";
import { thinkingTopics } from "@/content/thinking";
import { Container, Section, Card } from "./ui/Layout";

export const Thinking = () => {
  return (
    <Section id="thinking" className="bg-foreground/[0.02]">
      <Container>
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Pensamiento Técnico</h2>
            <p className="text-muted max-w-xl">
              Artículos y notas sobre ingeniería de datos, arquitectura y sistemas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {thinkingTopics.map((topic, index) => (
              <Card key={index} className="flex flex-col justify-between group cursor-pointer">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-foreground transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {topic.summary}
                  </p>
                </div>
                <div className="pt-6 flex items-center gap-2 text-xs font-bold text-muted group-hover:text-foreground transition-colors uppercase tracking-widest">
                  Leer nota <span className="text-lg">→</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
