"use client";

import React from "react";
import { motion } from "framer-motion";
import { OrionCore } from "./OrionCore";
import { CTAButton } from "./CTAButton";
import { ValueIndicator } from "./ValueIndicator";
import { Sparkles, Shield, Cpu } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 min-h-[90vh] flex items-center justify-center overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* =================================================== */}
        {/* DESKTOP LAYOUT (2 Columns)                         */}
        {/* =================================================== */}
        <div className="hidden lg:grid grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text & CTA */}
          <div className="col-span-7 space-y-8 pr-4">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-[0_0_15px_rgba(56,189,248,0.15)]"
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
                  Your Smarter Second Brain.
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
              <CTAButton variant="primary" size="lg">
                Get Started
              </CTAButton>
              <CTAButton variant="secondary" size="lg">
                Explore ORION
              </CTAButton>
            </motion.div>

            {/* Value Indicators Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-2"
            >
              <ValueIndicator />
            </motion.div>
          </div>

          {/* Right Column: AI Visual Core */}
          <div className="col-span-5 flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="w-full"
            >
              <OrionCore />
            </motion.div>
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
              Meet{" "}
              <span className="text-gradient-orion">ORION</span>.
              <br />
              <span className="text-slate-200 font-bold text-3xl sm:text-4xl block mt-1">
                Your Smarter Second Brain.
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

          {/* 4. ORION AI Visual Core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full py-2"
          >
            <OrionCore />
          </motion.div>

          {/* 5. CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full px-4"
          >
            <CTAButton variant="primary" size="lg" className="w-full sm:w-auto">
              Get Started
            </CTAButton>
            <CTAButton variant="secondary" size="lg" className="w-full sm:w-auto">
              Explore ORION
            </CTAButton>
          </motion.div>

          {/* 6. Small Value Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full pt-4 justify-center flex"
          >
            <ValueIndicator />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
