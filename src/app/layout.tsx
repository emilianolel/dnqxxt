import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { IBM_Plex_Mono } from "next/font/google";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emiliano Herrera | Data Engineer & Physicist",
  description: "Portafolio personal de Emiliano Herrera. Ingeniería de datos, física y diseño de sistemas.",
  keywords: ["Data Engineer", "Physicist", "GCP", "BigQuery", "Spark", "Tailwind", "Next.js"],
  authors: [{ name: "Emiliano Herrera" }],
  openGraph: {
    title: "Emiliano Herrera | Data Engineer & Physicist",
    description: "Portafolio personal de Emiliano Herrera. Ingeniería de datos, física y diseño de sistemas.",
    url: "https://dnqxxt.xyz", // Adjust if actual domain is known
    siteName: "Emiliano Herrera Portfolio",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emiliano Herrera | Data Engineer & Physicist",
    description: "Portafolio personal de Emiliano Herrera. Ingeniería de datos, física y diseño de sistemas.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`scroll-smooth h-full ${mono.variable}`}>
      <body className="min-h-full antialiased selection:bg-accent selection:text-white bg-background text-foreground font-mono">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
