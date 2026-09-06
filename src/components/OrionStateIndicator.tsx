"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, Brain, Sparkles, CheckCircle2, Circle } from "lucide-react";

export type OrionState = "idle" | "listening" | "thinking" | "responding" | "success";

interface OrionStateIndicatorProps {
  state: OrionState;
  className?: string;
  showIcon?: boolean;
}

export const OrionStateIndicator: React.FC<OrionStateIndicatorProps> = ({
  state = "idle",
  className = "",
  showIcon = true,
}) => {
  const configMap: Record<
    OrionState,
    { label: string; color: string; dotBg: string; border: string; icon: React.ReactNode }
  > = {
    idle: {
      label: "ORION Ready",
      color: "text-cyan-300",
      dotBg: "bg-cyan-400",
      border: "border-cyan-500/30 bg-cyan-950/40",
      icon: <Sparkles className="w-3.5 h-3.5 text-cyan-400" />,
    },
    listening: {
      label: "Listening...",
      color: "text-emerald-300",
      dotBg: "bg-emerald-400",
      border: "border-emerald-500/40 bg-emerald-950/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]",
      icon: <Mic className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />,
    },
    thinking: {
      label: "Thinking...",
      color: "text-violet-300",
      dotBg: "bg-violet-400",
      border: "border-violet-500/40 bg-violet-950/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]",
      icon: <Brain className="w-3.5 h-3.5 text-violet-400 animate-spin" />,
    },
    responding: {
      label: "ORION is responding...",
      color: "text-sky-300",
      dotBg: "bg-sky-400",
      border: "border-sky-500/40 bg-sky-950/50 shadow-[0_0_15px_rgba(56,189,248,0.2)]",
      icon: <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" />,
    },
    success: {
      label: "Completed",
      color: "text-amber-300",
      dotBg: "bg-amber-400",
      border: "border-amber-500/40 bg-amber-950/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]",
      icon: <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />,
    },
  };

  const current = configMap[state];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={state}
        initial={{ opacity: 0, scale: 0.9, y: -5 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 5 }}
        transition={{ duration: 0.25 }}
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase backdrop-blur-md transition-all ${current.border} ${current.color} ${className}`}
      >
        {/* Pulsing Status Dot */}
        <span className="relative flex h-2 w-2">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${current.dotBg}`}
          />
          <span className={`relative inline-flex rounded-full h-2 w-2 ${current.dotBg}`} />
        </span>

        {showIcon && current.icon}
        <span>{current.label}</span>
      </motion.div>
    </AnimatePresence>
  );
};
