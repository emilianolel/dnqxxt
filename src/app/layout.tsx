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
  metadataBase: new URL("https://dnqxxt.xyz"),
  openGraph: {
    title: "Emiliano Herrera | Data Engineer & Physicist",
    description: "Portafolio personal de Emiliano Herrera. Ingeniería de datos, física y diseño de sistemas.",
    url: "https://dnqxxt.xyz",
    siteName: "Emiliano Herrera Portfolio",
    locale: "es_MX",
    type: "profile",
    images: [{ url: "/og-image.jpeg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emiliano Herrera | Data Engineer & Physicist",
    description: "Portafolio personal de Emiliano Herrera. Ingeniería de datos, física y diseño de sistemas.",
    creator: "@emilianolel",
    images: ["/og-image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const StructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Emiliano Herrera",
    jobTitle: "Data Engineer & Physicist",
    url: "https://dnqxxt.xyz",
    sameAs: [
      "https://github.com/emilianolel",
      "https://www.linkedin.com/in/emilianolel/"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

const SpatialMetadata = () => (
  <div className="fixed bottom-4 left-4 z-50 pointer-events-none hidden sm:block opacity-60">
    <p className="text-[10px] uppercase font-bold tracking-[0.2em] font-mono text-muted">
      SYS.OP // CDMX // UTC-6 // V.0.1.0
    </p>
  </div>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`scroll-smooth ${mono.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="min-h-screen antialiased selection:bg-accent selection:text-white bg-background text-foreground font-mono">
        <Navbar />
        <div className="animate-system-boot">
          {children}
        </div>
        <SpatialMetadata />
      </body>
    </html>
  );
}
