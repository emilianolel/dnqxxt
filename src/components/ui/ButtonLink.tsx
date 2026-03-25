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
  const baseStyles = "inline-flex items-center justify-center px-6 py-2 rounded-full text-sm font-medium transition-all duration-200";
  
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
