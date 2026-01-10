import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orbii AI | Next-Generation SaaS Infrastructure",
  description: "Automate your workflow with AI-driven insights. The all-in-one platform for modern teams to scale faster.",
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ModernBackground from "@/components/layout/ModernBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-cyan-400 selection:text-black bg-background text-foreground`}>
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
