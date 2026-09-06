"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { OrionExperience } from "@/components/OrionExperience";
import { CoreFeatures } from "@/components/CoreFeatures";
import { HowOrionThinks } from "@/components/HowOrionThinks";
import { SmartReminderDemo } from "@/components/SmartReminderDemo";
import { VisionSection } from "@/components/VisionSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { BackgroundGlow } from "@/components/BackgroundGlow";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Immersive Background System */}
      <BackgroundGlow />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Experience & Features Sequence */}
      <main>
        <Hero />
        <OrionExperience />
        <CoreFeatures />
        <HowOrionThinks />
        <SmartReminderDemo />
        <VisionSection />
        <CTASection />
      </main>

      {/* Modular Footer */}
      <Footer />
    </div>
  );
}

