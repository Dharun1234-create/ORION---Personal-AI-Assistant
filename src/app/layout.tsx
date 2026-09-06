import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fontJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "ORION — Personal AI Companion & Intelligence System",
  description: "Remember what matters. Plan what comes next. Meet ORION, your smarter second brain.",
  keywords: ["AI Assistant", "Personal AI", "ORION", "Second Brain", "Productivity AI"],
  authors: [{ name: "ORION AI" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${fontJakarta.className} antialiased bg-[#030712] text-slate-100 min-h-screen relative selection:bg-cyan-500/30 selection:text-cyan-200`}>
        {children}
      </body>
    </html>
  );
}
