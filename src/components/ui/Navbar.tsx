import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Container } from "./Layout";

export const Navbar = () => {
  return (
    <nav aria-label="Navegación principal" className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <Container className="h-auto min-h-16 py-4 md:py-0 md:h-16 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link href="/" className="text-xl font-bold tracking-tight whitespace-nowrap">
          {siteConfig.name}
        </Link>
        
        <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2 md:gap-8 text-xs md:text-sm font-medium">
          <Link href="/#projects" className="text-muted hover:text-foreground transition-colors">
            Proyectos
          </Link>
          <Link href="/#experience" className="text-muted hover:text-foreground transition-colors">
            Experiencia
          </Link>
          <Link href="/#interests" className="text-muted hover:text-foreground transition-colors">
            Intereses
          </Link>
          <Link href="/#partial" className="text-muted hover:text-foreground transition-colors">
            Partial
          </Link>
          <Link href="/#thinking" className="text-muted hover:text-foreground transition-colors">
            Pensamiento
          </Link>
          <Link href="/#contact" className="text-muted hover:text-foreground transition-colors">
            Contacto
          </Link>
        </div>
      </Container>
    </nav>
  );
};
