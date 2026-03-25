import React from "react";
import { experiences } from "@/content/experience";
import { Container, Section, Card } from "./ui/Layout";

export const Experience = () => {
  return (
    <Section id="experience">
      <Container>
        <div className="space-y-12">
          <h2 className="text-3xl font-bold tracking-tight">Experiencia</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{exp.company}</h3>
                  <p className="text-muted font-medium">{exp.role}</p>
                  <p className="text-sm text-muted/60">{exp.period}</p>
                </div>
                
                <div className="space-y-6">
                  <p className="text-foreground/80 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground/70">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tech.map((t) => (
                      <span 
                        key={t} 
                        className="px-2 py-1 rounded border border-border bg-foreground/[0.03] text-[11px] font-mono text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
