"use client";

import React from "react";
import { motion } from "framer-motion";
import { AIHumanVisual } from "./AIHumanVisual";
import { CTAButton } from "./CTAButton";
import { HeroFeatureChips } from "./HeroFeatureChips";
import { HUDCard, hudPresets } from "./HUDCard";
import { Cpu } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 lg:pb-32 min-h-[92vh] flex items-center justify-center overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* =================================================== */}
        {/* DESKTOP LAYOUT (True 2-Column Grid: Left & Right)   */}
        {/* =================================================== */}
        <div className="hidden lg:grid grid-cols-2 gap-8 lg:gap-12 items-center w-full min-h-[580px] lg:min-h-[620px]">
          {/* LEFT COLUMN: HeroContent (Text, CTA & Feature Chips) */}
          <div className="space-y-8 pr-2 xl:pr-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-[0_0_15px_rgba(56,189,248,0.15)] self-start"
            >
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>YOUR PERSONAL AI COMPANION</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
                Meet{" "}
                <span className="text-gradient-orion relative inline-block">
                  ORION
                  <span className="absolute bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 rounded-full opacity-80" />
                </span>
                .<br />
                <span className="text-slate-200 font-bold text-4xl lg:text-5xl xl:text-6xl block mt-2">
                  A Smarter Second Brain.
                </span>
              </h1>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl"
            >
              Remember what matters. Plan what comes next. Get things done with an AI that understands your world.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <CTAButton
                variant="primary"
                size="lg"
                onClick={() => {
                  const el = document.getElementById("talk-to-orion");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Started
              </CTAButton>
              <CTAButton
                variant="secondary"
                size="lg"
                onClick={() => {
                  const el = document.getElementById("talk-to-orion");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore ORION
              </CTAButton>
            </motion.div>

            {/* Hero Feature Chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <HeroFeatureChips />
            </motion.div>
          </div>

          {/* RIGHT COLUMN: HeroVisual (Primary AI Image + 4 Orbital HUD Cards) */}
          <div className="relative flex items-center justify-center w-full h-full min-h-[520px] lg:min-h-[580px] my-auto">
            {/* Orbital Visual Wrapper Container */}
            <div className="relative w-full max-w-[400px] xl:max-w-[440px] flex items-center justify-center my-auto">
              {/* Primary Cinematic AI Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="w-full relative z-10"
              >
                <AIHumanVisual size="lg" />
              </motion.div>

              {/* Floating Holographic HUD Panels orbiting cleanly outside Visual */}
              {hudPresets.map((hud) => (
                <HUDCard key={hud.id} data={hud} />
              ))}
            </div>
          </div>
        </div>

        {/* =================================================== */}
        {/* MOBILE & TABLET LAYOUT (Strict Vertical Sequence)  */}
        {/* =================================================== */}
        <div className="flex lg:hidden flex-col items-center text-center space-y-8 max-w-xl mx-auto">
          {/* 1. Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md"
          >
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>YOUR PERSONAL AI COMPANION</span>
          </motion.div>

          {/* 2. Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Meet <span className="text-gradient-orion">ORION</span>.<br />
              <span className="text-slate-200 font-bold text-3xl sm:text-4xl block mt-1">
                A Smarter Second Brain.
              </span>
            </h1>
          </motion.div>

          {/* 3. Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed px-2"
          >
            Remember what matters. Plan what comes next. Get things done with an AI that understands your world.
          </motion.p>

          {/* 4. CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full px-4"
          >
            <CTAButton
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => {
                const el = document.getElementById("talk-to-orion");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started
            </CTAButton>
            <CTAButton
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => {
                const el = document.getElementById("talk-to-orion");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore ORION
            </CTAButton>
          </motion.div>

          {/* 5. Feature Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full justify-center flex"
          >
            <HeroFeatureChips />
          </motion.div>

          {/* 6. ORION AI Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full py-2"
          >
            <AIHumanVisual size="sm" />
          </motion.div>

          {/* 7. Mobile HUD Cards (Vertical Sequence below AI Visual - ZERO overlap) */}
          <div className="w-full max-w-sm px-4 pt-2 flex flex-col gap-3">
            {hudPresets.map((hud) => (
              <div
                key={hud.id}
                className="w-full flex items-center justify-between gap-3 p-3 px-4 rounded-xl bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md shadow-lg"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center">
                    {hud.icon}
                  </div>
                  <div className="min-w-0 text-left">
                    <div className="text-xs font-bold text-white tracking-wider">
                      {hud.title}
                    </div>
                    <div className="text-[10px] text-slate-300 truncate">
                      {hud.subtitle}
                    </div>
                  </div>
                </div>
                {hud.badge && (
                  <span
                    className={`flex-shrink-0 text-[9px] font-mono px-2 py-0.5 rounded-full border ${
                      hud.badgeColor || "bg-cyan-950/80 border-cyan-500/30 text-cyan-300"
                    }`}
                  >
                    {hud.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
