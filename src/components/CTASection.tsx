"use client";

import React from "react";
import { motion } from "framer-motion";
import { CTAButton } from "./CTAButton";
import { Sparkles } from "lucide-react";

export const CTASection: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden border-t border-slate-900/60 z-10">
      {/* Background Central Pulse Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[480px] bg-gradient-to-r from-cyan-500/15 via-blue-600/15 to-violet-600/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl glass-panel-glow border border-cyan-500/30 p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-[0_0_60px_rgba(56,189,248,0.15)]">
          {/* Subtle grid background overlay */}
          <div className="absolute inset-0 bg-orion-grid opacity-30 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/40 text-cyan-300 text-xs font-semibold tracking-widest uppercase backdrop-blur-md shadow-lg"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>SMARTER SECOND BRAIN</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              Ready to meet your <br className="hidden sm:inline" />
              <span className="text-gradient-orion">smarter second brain?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto"
            >
              ORION is built to help you think clearer, plan better and move forward.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <CTAButton
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => {
                  const el = document.getElementById("experience");
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
                  const el = document.getElementById("features");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore ORION
              </CTAButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


