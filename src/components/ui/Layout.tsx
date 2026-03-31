"use client";
import React, { useEffect, useRef, useState } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`max-w-4xl mx-auto px-6 ${className}`}>
      {children}
    </div>
  );
};

export const Section: React.FC<ContainerProps & { id?: string }> = ({ 
  children, 
  className = "", 
  id 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // Trigger when 10% visible
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entries[0].target); // One-shot
      }
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={domRef}
      id={id} 
      className={`py-20 md:py-32 transition-all duration-[1000ms] ease-out 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} 
        ${className}`}
    >
      {children}
    </section>
  );
};

export const Card: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`border-2 border-border bg-background p-6 rounded-none transition-all duration-200 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-6px_6px_0px_var(--color-muted)] hover:border-muted ${className}`}>
      {children}
    </div>
  );
};
