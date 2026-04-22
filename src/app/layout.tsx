import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jhoam Sebastián Muñoz Betancourt - Full Stack Developer",
  description: "Portafolio profesional de Jhoam Sebastián Muñoz Betancourt, Full Stack Developer especializado en React, TypeScript, Next.js, Node.js y arquitecturas cloud. Experiencia en desarrollo de aplicaciones web escalables y optimizadas.",
  keywords: ["full stack developer", "react", "typescript", "tailwindcss", "next.js", "node.js", "portafolio", "jhoam sebastián muñoz betancourt", "developer"],
  authors: [{ name: "Jhoam Sebastián Muñoz Betancourt" }],
  creator: "Jhoam Sebastián Muñoz Betancourt",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://jhoamsebastianmunoz.vercel.app",
    title: "Jhoam Sebastián Muñoz Betancourt - Full Stack Developer",
    description: "Portafolio profesional de Jhoam Sebastián Muñoz Betancourt, Full Stack Developer especializado en React, TypeScript, Next.js y arquitecturas cloud.",
    siteName: "Portafolio - Jhoam Sebastián",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jhoam Sebastián Muñoz Betancourt - Full Stack Developer",
    description: "Portafolio profesional de Jhoam Sebastián Muñoz Betancourt, Full Stack Developer especializado en React, TypeScript, Next.js y arquitecturas cloud.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jhoam Sebastián Muñoz Betancourt",
    "jobTitle": "Full Stack Developer",
    "url": "https://jhoamsebastianmunoz.vercel.app",
    "email": "jhoamsebastian68@gmail.com",
    "telephone": "+57 311 695 7990",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Montenegro",
      "addressRegion": "Quindío",
      "addressCountry": "CO"
    },
    "sameAs": [
      "https://github.com/JhoamSebastianMunoz",
      "https://www.linkedin.com/in/jhoam-sebastian-muñoz-betancourt"
    ],
    "knowsAbout": [
      "React", "TypeScript", "Next.js", "Node.js", "JavaScript", "TailwindCSS",
      "PostgreSQL", "MySQL", "Docker", "Azure", "Full Stack Development"
    ]
  };

  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
