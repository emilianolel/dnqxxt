import React from "react";
import { projects } from "@/content/projects";
import { Container, Section } from "@/components/ui/Layout";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="pt-20">
      <Section>
        <Container>
          <div className="space-y-16">
            <div className="space-y-8">
              <ButtonLink href="/projects" variant="outline" className="px-4 py-1.5 text-xs">
                ← Volver a proyectos
              </ButtonLink>
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  {project.name}
                </h1>
                <p className="text-xl text-muted leading-relaxed max-w-3xl">
                  {project.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full border border-border bg-foreground/[0.03] text-xs font-mono text-muted">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-12">
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">Problema</h2>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    {project.problem}
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">Solución</h2>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    {project.solution}
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">Propósito</h2>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    {project.purpose}
                  </p>
                </section>
              </div>

              <div className="space-y-8">
                <div className="p-6 border border-border rounded-lg bg-foreground/[0.01] space-y-4">
                  <h3 className="font-bold uppercase tracking-widest text-xs text-muted">
                    Arquitectura
                  </h3>
                  <ul className="space-y-4">
                    {project.architecture.map((step, i) => (
                      <li key={i} className="flex gap-4 text-sm text-foreground/70">
                        <span className="font-mono text-accent/50">{String(i + 1).padStart(2, '0')}</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
