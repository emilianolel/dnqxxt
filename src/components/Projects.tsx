import React from "react";
import { Project } from "@/content/projects";
import { Container, Section, Card } from "./ui/Layout";
import { ButtonLink } from "./ui/ButtonLink";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="flex flex-col h-full space-y-4">
      <div className="space-y-2">
        <h3 className="text-xl font-bold">{project.name}</h3>
        <p className="text-sm text-muted line-clamp-2">{project.summary}</p>
      </div>

      <div className="space-y-3 flex-grow">
        <div className="space-y-1">
          <p className="text-[10px] font-bold uppercase tracking-wider text-muted/60">El Problema</p>
          <p className="text-xs text-foreground/80">{project.problem}</p>
        </div>
        
        <div className="space-y-1">
          <p className="text-[10px] font-bold uppercase tracking-wider text-muted/60">La Solución</p>
          <p className="text-xs text-foreground/80">{project.solution}</p>
        </div>
      </div>

      <div className="pt-4 border-t border-border flex justify-between items-center">
        <div className="flex flex-wrap gap-1">
          {project.stack.slice(0, 3).map((s) => (
            <span key={s} className="px-1.5 py-0.5 rounded bg-foreground/[0.05] text-[10px] font-mono whitespace-nowrap">
              {s}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="text-[10px] text-muted self-center">+{project.stack.length - 3}</span>
          )}
        </div>
        <ButtonLink href={`/projects/${project.slug}`} variant="outline" className="px-3 py-1 text-[11px]">
          Detalles
        </ButtonLink>
      </div>
    </Card>
  );
};

export const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <Section id="projects">
      <Container>
        <div className="space-y-12">
          <div className="flex justify-between items-end">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Proyectos</h2>
              <p className="text-muted">Artefactos técnicos y arquitectura de sistemas.</p>
            </div>
            <ButtonLink href="/projects" variant="secondary" className="px-4 py-1.5">
              Ver todos
            </ButtonLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
