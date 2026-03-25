import React from "react";
import { projects } from "@/content/projects";
import { Container, Section } from "@/components/ui/Layout";
import { ProjectCard } from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <main className="pt-20">
      <Section>
        <Container>
          <div className="space-y-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">Proyectos</h1>
              <p className="text-xl text-muted max-w-2xl">
                Una selección de sistemas, pipelines y artefactos técnicos que demuestran criterio de arquitectura y ejecución.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
