"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Brain, Target, Clock } from "lucide-react";

export interface HUDData {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  badge?: string;
  badgeColor?: string;
  positionClass: string;
  delay: number;
}

export const hudPresets: HUDData[] = [
  {
    id: "analyze",
    title: "ANALYZE",
    subtitle: "Finding insights...",
    icon: <Search className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />,
    badge: "ACTIVE",
    badgeColor: "bg-cyan-950/80 border-cyan-500/30 text-cyan-300",
    positionClass: "-top-10 xl:-top-12 left-2 xl:left-4",
    delay: 0.2,
  },
  {
    id: "understand",
    title: "UNDERSTAND",
    subtitle: "Your goals • habits • world",
    icon: <Brain className="w-3.5 h-3.5 text-blue-400" />,
    badge: "SYNCED",
    badgeColor: "bg-blue-950/80 border-blue-500/30 text-blue-300",
    positionClass: "top-[40%] -left-28 lg:-left-32 xl:-left-36 -translate-y-1/2",
    delay: 0.4,
  },
  {
    id: "plan",
    title: "PLAN",
    subtitle: "Focus • Organize • Achieve",
    icon: <Target className="w-3.5 h-3.5 text-violet-400" />,
    badge: "READY",
    badgeColor: "bg-violet-950/80 border-violet-500/30 text-violet-300",
    positionClass: "top-[40%] -right-24 lg:-right-28 xl:-right-32 -translate-y-1/2",
    delay: 0.8,
  },
  {
    id: "deadline",
    title: "PROJECT DEADLINE",
    subtitle: "Quarterly AI Synthesis ready",
    icon: <Clock className="w-3.5 h-3.5 text-amber-400" />,
    badge: "PRIORITY",
    badgeColor: "bg-amber-950/80 border-amber-500/30 text-amber-300",
    positionClass: "-bottom-10 xl:-bottom-12 left-1/2 -translate-x-1/2",
    delay: 0.6,
  },
];

interface HUDCardProps {
  data: HUDData;
  className?: string;
}

export const HUDCard: React.FC<HUDCardProps> = ({ data, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: [0, -4, 0] }}
      transition={{
        opacity: { duration: 0.7, delay: data.delay },
        scale: { duration: 0.7, delay: data.delay },
        y: {
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: data.delay,
        },
      }}
      className={`absolute z-30 hidden lg:flex items-center gap-3 p-3 px-4 rounded-2xl glass-panel-glow border border-cyan-500/30 shadow-2xl backdrop-blur-xl w-[200px] xl:w-[220px] pointer-events-auto hover:border-cyan-400/60 hover:scale-105 transition-all duration-300 group ${data.positionClass} ${className}`}
    >
      <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/50 shadow-inner">
        {data.icon}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-1 mb-0.5">
          <span className="text-[11px] font-bold text-white group-hover:text-cyan-300 transition-colors tracking-wider">
            {data.title}
          </span>
          {data.badge && (
            <span
              className={`text-[8px] font-mono px-1.5 py-0.5 rounded-full border ${
                data.badgeColor || "bg-cyan-950/80 border-cyan-500/30 text-cyan-300"
              }`}
            >
              {data.badge}
            </span>
          )}
        </div>
        <p className="text-[10px] text-slate-300 leading-tight truncate font-normal">
          {data.subtitle}
        </p>
      </div>
    </motion.div>
  );
};
