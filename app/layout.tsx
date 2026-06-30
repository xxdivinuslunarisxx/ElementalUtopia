import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elementalutopia.com"),
  title: {
    default: "Elemental Utopia",
    template: "%s | Elemental Utopia"
  },
  description:
    "Elemental Utopia is a UK specialty coffee brand focused on science-based brewing, extraction, and expressive flavour.",
  keywords: [
    "Elemental Utopia",
    "specialty coffee",
    "coffee science",
    "espresso",
    "coffee extraction",
    "UK specialty coffee",
    "London coffee"
  ],
  authors: [{ name: "Elemental Utopia" }],
  openGraph: {
    title: "Elemental Utopia",
    description: "Specialty coffee driven by science and flavour exploration.",
    url: "https://elementalutopia.com",
    siteName: "Elemental Utopia",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070706" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" }
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
