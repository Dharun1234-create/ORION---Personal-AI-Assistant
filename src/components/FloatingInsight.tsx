"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Calendar, Clock, Sparkles } from "lucide-react";

export interface FloatingCardData {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  badge?: string;
  badgeColor?: string;
  positionClass: string;
  delay: number;
}

export const cardPresets: FloatingCardData[] = [
  {
    id: "reminder",
    title: "Reminder Set",
    subtitle: "Doctor's appointment tomorrow 10:00 AM",
    icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
    badge: "Active",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    positionClass: "-top-4 left-0 sm:-left-8",
    delay: 0,
  },
  {
    id: "plan",
    title: "Tomorrow's Plan",
    subtitle: "3 priority tasks scheduled & synced",
    icon: <Calendar className="w-4 h-4 text-cyan-400" />,
    badge: "Synced",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    positionClass: "-top-2 -right-2 sm:-right-8",
    delay: 1.5,
  },
  {
    id: "deadline",
    title: "Project Deadline",
    subtitle: "Quarterly AI Synthesis ready for review",
    icon: <Clock className="w-4 h-4 text-violet-400" />,
    badge: "Priority",
    badgeColor: "bg-violet-500/20 text-violet-300 border-violet-500/30",
    positionClass: "-bottom-6 -left-2 sm:-left-6",
    delay: 0.8,
  },
  {
    id: "routine",
    title: "Morning Routine",
    subtitle: "Smart home ambient flow initialized",
    icon: <Sparkles className="w-4 h-4 text-amber-400" />,
    badge: "Automated",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    positionClass: "-bottom-8 -right-2 sm:-right-6",
    delay: 2.2,
  },
];

interface FloatingInsightCardProps {
  card: FloatingCardData;
}

export const FloatingInsightCard: React.FC<FloatingInsightCardProps> = ({ card }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.8, delay: card.delay },
        y: {
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: card.delay,
        },
      }}
      className={`absolute z-20 hidden sm:flex items-center gap-3 p-3.5 px-4 rounded-2xl glass-panel-glow border border-white/10 shadow-2xl backdrop-blur-xl max-w-[240px] pointer-events-auto hover:border-cyan-400/50 hover:scale-105 transition-all duration-300 group ${card.positionClass}`}
    >
      {/* Icon Node */}
      <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/40 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all">
        {card.icon}
      </div>

      {/* Card Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-1 mb-0.5">
          <span className="text-xs font-semibold text-slate-100 truncate group-hover:text-cyan-300 transition-colors">
            {card.title}
          </span>
          {card.badge && (
            <span
              className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full border ${card.badgeColor}`}
            >
              {card.badge}
            </span>
          )}
        </div>
        <p className="text-[11px] text-slate-400 leading-tight truncate">
          {card.subtitle}
        </p>
      </div>
    </motion.div>
  );
};
