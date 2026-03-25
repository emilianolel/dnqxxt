import React from "react";

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
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      {children}
    </section>
  );
};

export const Card: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`border border-border bg-background/50 backdrop-blur-sm rounded-lg p-6 hover:border-muted/50 transition-colors ${className}`}>
      {children}
    </div>
  );
};
