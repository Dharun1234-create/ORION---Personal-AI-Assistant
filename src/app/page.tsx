"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BackgroundGlow } from "@/components/BackgroundGlow";
import { OrionLogo } from "@/components/OrionLogo";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Immersive Background System */}
      <BackgroundGlow />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Cinematic Hero Section */}
      <main>
        <Hero />
      </main>

      {/* Minimal Footer */}
      <footer className="relative z-10 border-t border-slate-900/80 py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <OrionLogo size="sm" showWordmark={true} />
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Personal AI System</span>
          </div>

          <p className="text-slate-400">
            © {new Date().getFullYear()} ORION. All rights reserved. Phase 1 — Visual Foundation & Hero Experience.
          </p>
        </div>
      </footer>
    </div>
  );
}
