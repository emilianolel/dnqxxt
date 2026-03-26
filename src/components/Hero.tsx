import React from "react";
import { siteConfig } from "@/content/site";
import { Container, Section } from "./ui/Layout";
import { ButtonLink } from "./ui/ButtonLink";

export const Hero = () => {
  return (
    <Section className="flex flex-col justify-center min-h-[80vh] pt-32 pb-16">
      <Container>
        <div className="space-y-8 max-w-3xl">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
              {siteConfig.name}
            </h1>
            <p className="text-2xl md:text-3xl text-muted font-medium text-balance leading-tight">
              {siteConfig.title}
            </p>
          </div>
          
          <div className="space-y-6 max-w-2xl">
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 text-balance font-light">
              {siteConfig.subtitle}
            </p>
            
            <p className="text-base md:text-lg text-muted/80 max-w-xl leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-6 pt-8">
            <ButtonLink href={siteConfig.cta.primary.href} className="px-8 py-3 text-base">
              {siteConfig.cta.primary.label}
            </ButtonLink>
            <ButtonLink href={siteConfig.cta.secondary.href} variant="secondary" className="px-8 py-3 text-base">
              {siteConfig.cta.secondary.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
};
