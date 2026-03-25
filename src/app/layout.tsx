import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: "Emiliano Herrera | Data Engineer & Physicist",
  description: "Personal website of Emiliano Herrera, specialized in Data Engineering and Systems thinking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth h-full">
      <body className="min-h-full antialiased selection:bg-accent selection:text-white bg-background text-foreground">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
