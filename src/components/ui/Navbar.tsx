import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Container } from "./ui/Layout";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <Container className="h-16 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight">
          {siteConfig.name}
        </Link>
        
        <div className="flex gap-8 text-sm font-medium">
          <Link href="/projects" className="text-muted hover:text-foreground transition-colors">
            Proyectos
          </Link>
          <Link href="#experience" className="text-muted hover:text-foreground transition-colors">
            Experiencia
          </Link>
          <Link href="/writing" className="text-muted hover:text-foreground transition-colors">
            Pensamiento
          </Link>
          <Link href="#contact" className="text-muted hover:text-foreground transition-colors">
            Contacto
          </Link>
        </div>
      </Container>
    </nav>
  );
};
