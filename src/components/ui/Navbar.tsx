"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Container } from "./Layout";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Threshold mínimo para evitar flickering
      if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false); // Ocultar al bajar
      } else {
        setIsVisible(true);  // Mostrar al subir
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      aria-label="Navegación principal" 
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Container className="h-auto min-h-16 py-4 md:py-0 md:h-16 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link href="/" className="text-xl font-bold tracking-tight whitespace-nowrap group">
          <span className="text-accent group-hover:animate-pulse">./</span>{siteConfig.name}
        </Link>
        
        <div className="flex overflow-x-auto w-full md:w-auto md:justify-end gap-6 text-xs md:text-sm font-medium hide-scrollbar pb-2 md:pb-0 px-2 md:px-0">
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
