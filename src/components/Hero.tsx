import React from "react";
import { siteConfig } from "@/content/site";
import { Container, Section } from "./ui/Layout";
import { ButtonLink } from "./ui/ButtonLink";

export const Hero = () => {
  return (
    <Section className="flex flex-col justify-center min-h-[70vh]">
      <Container>
        <div className="space-y-6 max-w-2xl">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {siteConfig.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted font-medium">
              {siteConfig.title}
            </p>
          </div>
          
          <p className="text-lg md:text-xl leading-relaxed text-foreground/80 text-balance">
            {siteConfig.subtitle}
          </p>
          
          <p className="text-sm md:text-base text-muted max-w-xl">
            {siteConfig.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <ButtonLink href={siteConfig.cta.primary.href}>
              {siteConfig.cta.primary.label}
            </ButtonLink>
            <ButtonLink href={siteConfig.cta.secondary.href} variant="secondary">
              {siteConfig.cta.secondary.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
};
