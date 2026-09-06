"use client";

import React from "react";
import { motion } from "framer-motion";
import { OrionCore } from "./OrionCore";
import { Sparkles, Eye, Brain, Compass } from "lucide-react";

export const VisionSection: React.FC = () => {
  const principles = [
    {
      title: "Understand",
      description: "Comprehend context, priorities and habits naturally.",
      icon: <Eye className="w-4 h-4 text-cyan-400" />,
    },
    {
      title: "Remember",
      description: "Keep track of goals, preferences and key details.",
      icon: <Brain className="w-4 h-4 text-blue-400" />,
    },
    {
      title: "Guide",
      description: "Proactively suggest smart next steps when needed.",
      icon: <Compass className="w-4 h-4 text-violet-400" />,
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 lg:py-32 overflow-hidden border-t border-slate-900/60 z-10"
    >
      {/* Soft Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-violet-600/10 via-cyan-500/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Vision Text & Principles */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-widest uppercase backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>THE VISION</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              Your life shouldn't need a <span className="text-gradient-violet">control panel.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl"
            >
              ORION is being built as a personal intelligence layer — one that can understand your world, remember what matters, help you plan what comes next and stay out of your way when you don't need it.
            </motion.p>

            {/* 3 Principles Minimal Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {principles.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  className="p-4 rounded-xl glass-panel border border-white/10 hover:border-cyan-500/30 transition-all space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                      {item.icon}
                    </div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Primary ORION Core Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-[440px]"
            >
              <OrionCore size="md" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


