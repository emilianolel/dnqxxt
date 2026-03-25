import React from "react";
import { Project } from "@/content/projects";
import { Container, Section, Card } from "./ui/Layout";
import { ButtonLink } from "./ui/ButtonLink";

export const SideProjects = ({ projects }: { projects: Project[] }) => {
  const activeProjects = projects.filter((p) => p.status === "active");

  if (activeProjects.length === 0) return null;

  return (
    <Section id="side-projects" className="bg-foreground/[0.01] border-b border-border">
      <Container>
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Proyectos Activos</h2>
            <p className="text-muted max-w-xl text-balance">
              Desarrollos en curso enfocado en experimentación técnica y sistemas complejos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activeProjects.map((project) => (
              <Card key={project.slug} className="flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-wider">
                      En Desarrollo
                    </span>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {project.summary}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted/60">Tecnologías clave</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span key={tech} className="text-[11px] font-mono text-muted">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <ButtonLink 
                    href={`/projects/${project.slug}`} 
                    variant="outline" 
                    className="w-full text-xs py-2"
                  >
                    Ver detalles técnicos
                  </ButtonLink>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
