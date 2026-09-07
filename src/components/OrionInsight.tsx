"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

interface OrionInsightProps {
  onViewPlan?: () => void;
  className?: string;
}

export const OrionInsight: React.FC<OrionInsightProps> = ({ onViewPlan, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className={`relative rounded-2xl glass-panel-glow border border-cyan-500/30 p-4 sm:p-5 shadow-[0_0_25px_rgba(56,189,248,0.12)] backdrop-blur-xl space-y-3 overflow-hidden ${className}`}
    >
      {/* Top Accent Gradient Bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
            ORION INSIGHT
          </span>
        </div>

        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
        </span>
      </div>

      {/* Main Insight Message */}
      <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
        "Your project deadline is approaching. You have <span className="text-cyan-300 font-bold">3 important tasks</span> remaining."
      </p>

      {/* Action Button */}
      <button
        type="button"
        onClick={onViewPlan}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-200 group transition-colors pt-1 cursor-pointer"
      >
        <span>View Plan</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
};
