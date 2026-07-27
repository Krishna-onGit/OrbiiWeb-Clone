import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ModernBackground from "@/components/layout/ModernBackground";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Insurely | Intelligent Insurance Platform",
  description:
    "AI-powered insurance technology for modern risk management. Compare plans, calculate premiums and get covered in under a minute.",
};

export const viewport: Viewport = {
  themeColor: "#080E0C",
  width: "device-width",
  initialScale: 1,
};

/**
 * Marks the document as JS-capable before first paint, so `.reveal` elements
 * are only hidden when there is actually a script around to reveal them again.
 */
const JS_FLAG = `document.documentElement.classList.add('js')`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // No `scroll-smooth` class here: CSS smooth scrolling fights ScrollTrigger's
    // scrubbed tweens, and with every in-page link inert there is nothing left
    // for it to smooth anyway.
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://prod.spline.design" crossOrigin="" />
        <script dangerouslySetInnerHTML={{ __html: JS_FLAG }} />
      </head>
      <body className={`${inter.className} antialiased selection:bg-brand selection:text-black bg-background text-foreground`}>
        <ModernBackground />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
