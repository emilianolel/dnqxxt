import Link from "next/link";
import React from "react";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({ 
  href, 
  children, 
  variant = "primary", 
  className = "" 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-none hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-4px_4px_0px_var(--color-accent)]";
  
  const variants = {
    primary: "bg-foreground text-background hover:opacity-90",
    secondary: "bg-muted/10 text-foreground hover:bg-muted/20 border border-border",
    outline: "border border-border hover:border-foreground/50 text-foreground",
  };

  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
};
