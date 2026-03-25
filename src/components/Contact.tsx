import React from "react";
import { siteConfig } from "@/content/site";
import { Container, Section, Card } from "./ui/Layout";
import { ButtonLink } from "./ui/ButtonLink";

export const Contact = () => {
  return (
    <Section id="contact" className="border-t border-border">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Contacto</h2>
            <p className="text-xl text-muted">
              ¿Tienes un problema de datos que quieras resolver? Hablemos.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <ButtonLink href={`mailto:${siteConfig.email}`} variant="primary" className="px-8 h-12">
              Email
            </ButtonLink>
            <ButtonLink href={siteConfig.linkedin} variant="outline" className="px-8 h-12">
              LinkedIn
            </ButtonLink>
            <ButtonLink href={siteConfig.github} variant="outline" className="px-8 h-12">
              GitHub
            </ButtonLink>
          </div>

          <p className="text-sm text-muted/60 pt-12">
            © {new Date().getFullYear()} {siteConfig.name}. Construido con precisión técnica.
          </p>
        </div>
      </Container>
    </Section>
  );
};
