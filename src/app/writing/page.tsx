import React from "react";
import { thinkingTopics } from "@/content/thinking";
import { Container, Section, Card } from "@/components/ui/Layout";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function WritingPage() {
  return (
    <main className="pt-20">
      <Section>
        <Container>
          <div className="space-y-16">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">Pensamiento Técnico</h1>
              <p className="text-xl text-muted max-w-2xl">
                Reflexiones sobre ingeniería de datos, modelado de sistemas y la intersección con la física.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {thinkingTopics.map((topic, index) => (
                <Card key={index} className="flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">{topic.title}</h2>
                    <p className="text-muted leading-relaxed">
                      {topic.summary}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-muted/60">Próximamente</span>
                    <ButtonLink href="#" variant="outline" className="px-4 py-1.5 text-xs opacity-50 cursor-not-allowed">
                      Leer más
                    </ButtonLink>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
