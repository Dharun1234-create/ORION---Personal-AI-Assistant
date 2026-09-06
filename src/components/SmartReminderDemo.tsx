"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OrionLogo } from "./OrionLogo";
import { CTAButton } from "./CTAButton";
import { Sparkles, Clock, AlertCircle, FileText, CheckCircle2, RefreshCw } from "lucide-react";

export const SmartReminderDemo: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);
  const [viewingPlan, setViewingPlan] = useState(false);

  const handleReset = () => {
    setDismissed(false);
    setViewingPlan(false);
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden border-t border-slate-900/60 z-10">
      {/* Background Soft Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[500px] bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-widest uppercase backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>INTELLIGENT REMINDERS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Reminders with <span className="text-gradient-cyan">context.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            Instead of simply telling you when something happens, ORION can understand why it matters.
          </motion.p>
        </div>

        {/* Interactive Mockup Container */}
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!dismissed ? (
              <motion.div
                key="reminder-card"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative rounded-3xl glass-panel-glow p-6 sm:p-8 border border-cyan-500/30 shadow-[0_0_50px_rgba(56,189,248,0.15)] backdrop-blur-2xl space-y-6"
              >
                {/* Header Row */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <OrionLogo size="sm" showWordmark={true} />
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-mono">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Tomorrow • 8:00 AM</span>
                  </div>
                </div>

                {/* Main Notification Body */}
                <div className="space-y-3">
                  <span className="text-xs uppercase font-semibold tracking-wider text-cyan-400 block">
                    SMART NOTIFICATION
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    "Don't forget your project presentation."
                  </h3>
                </div>

                {/* Context Insight Box */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="rounded-2xl bg-slate-950/80 border border-cyan-500/20 p-4 sm:p-5 space-y-3 relative overflow-hidden"
                >
                  {/* Subtle top indicator bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

                  <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300">
                    <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Context Insight</span>
                  </div>

                  <p className="text-sm text-slate-300 font-normal leading-relaxed">
                    "Presentation starts at 10:00 AM. Your project file is still marked as incomplete."
                  </p>

                  {viewingPlan && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-2 text-xs text-cyan-300 border-t border-slate-800 space-y-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Recommended action: Review slide deck before 9:00 AM.</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <FileText className="w-3.5 h-3.5 text-slate-500" />
                        <span>File: Q3_Project_Overview_Draft.pdf</span>
                      </div>
                    </motion.div>
                  )}
                </motion.div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <CTAButton
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto"
                    onClick={() => setViewingPlan(!viewingPlan)}
                  >
                    {viewingPlan ? "Hide Plan Details" : "View Plan"}
                  </CTAButton>

                  <CTAButton
                    variant="secondary"
                    size="md"
                    className="w-full sm:w-auto"
                    onClick={() => setDismissed(true)}
                  >
                    Dismiss
                  </CTAButton>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="dismissed-state"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="rounded-3xl glass-panel p-8 text-center space-y-4 border border-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Reminder Dismissed</h3>
                <p className="text-sm text-slate-400">
                  Demo reminder has been dismissed. You can reset to view it again.
                </p>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-semibold hover:border-cyan-500/40 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Reset Demo Notification</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
