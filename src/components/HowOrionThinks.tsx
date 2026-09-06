"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Eye, Database, ListOrdered, Zap, ArrowRight } from "lucide-react";

interface ThinkingStepData {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
  badge: string;
}

export const HowOrionThinks: React.FC = () => {
  const steps: ThinkingStepData[] = [
    {
      number: "01",
      title: "Understand",
      description: "ORION understands what you're asking and the context around it.",
      icon: <Eye className="w-5 h-5 text-cyan-400" />,
      accent: "from-cyan-500/20 to-blue-500/10",
      badge: "Context Aware",
    },
    {
      number: "02",
      title: "Remember",
      description: "Relevant information from your personal context can be considered.",
      icon: <Database className="w-5 h-5 text-blue-400" />,
      accent: "from-blue-500/20 to-violet-500/10",
      badge: "Memory Retrieval",
    },
    {
      number: "03",
      title: "Plan",
      description: "ORION organizes the next actions and priorities.",
      icon: <ListOrdered className="w-5 h-5 text-violet-400" />,
      accent: "from-violet-500/20 to-purple-500/10",
      badge: "Action Matrix",
    },
    {
      number: "04",
      title: "Act",
      description: "ORION helps you move from intention to execution.",
      icon: <Zap className="w-5 h-5 text-emerald-400" />,
      accent: "from-emerald-500/20 to-cyan-500/10",
      badge: "Execution Ready",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative py-20 lg:py-32 overflow-hidden border-t border-slate-900/60 z-10"
    >
      {/* Ambient background aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-blue-600/5 to-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-widest uppercase backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>HOW ORION THINKS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            From a simple request to a <span className="text-gradient-cyan">smarter next step.</span>
          </motion.h2>
        </div>

        {/* =================================================== */}
        {/* DESKTOP HORIZONTAL PROCESS FLOW                     */}
        {/* =================================================== */}
        <div className="hidden lg:grid grid-cols-4 gap-6 relative">
          {/* Connecting Line along desktop cards */}
          <div className="absolute top-12 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-cyan-500/40 via-blue-500/40 via-violet-500/40 to-emerald-500/40 -z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="relative z-10 group rounded-2xl glass-panel p-6 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Header Node */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="relative w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/40 shadow-xl transition-colors">
                    {step.icon}
                  </div>
                  <span className="font-mono text-2xl font-black text-slate-600 group-hover:text-cyan-400 transition-colors">
                    {step.number}
                  </span>
                </div>

                <div className="inline-block px-2.5 py-0.5 mb-3 rounded-full text-[10px] font-semibold bg-cyan-950/60 border border-cyan-500/20 text-cyan-300">
                  {step.badge}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Step indicator arrow */}
              {index < steps.length - 1 && (
                <div className="absolute -right-3 top-10 transform translate-x-1/2 z-20 hidden xl:flex w-7 h-7 rounded-full bg-slate-900 border border-slate-700 items-center justify-center text-slate-400">
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* =================================================== */}
        {/* MOBILE & TABLET VERTICAL PROCESS FLOW               */}
        {/* =================================================== */}
        <div className="lg:hidden relative space-y-6 max-w-lg mx-auto">
          {/* Vertical Connecting Glow Line */}
          <div className="absolute top-6 bottom-6 left-7 w-[2px] bg-gradient-to-b from-cyan-500/50 via-violet-500/50 to-emerald-500/50 -z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10 flex items-start gap-4 p-5 rounded-2xl glass-panel border border-white/10"
            >
              {/* Step Icon Node */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg">
                {step.icon}
              </div>

              {/* Details */}
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-cyan-400 font-mono tracking-wider">
                    STEP {step.number}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                    {step.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
