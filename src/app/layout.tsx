import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orbii AI | Next-Generation SaaS Infrastructure",
  description: "Automate your workflow with AI-driven insights. The all-in-one platform for modern teams to scale faster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-cyan-400 selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
