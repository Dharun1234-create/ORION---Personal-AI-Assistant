"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, X } from "lucide-react";

export interface PriorityItem {
  id: string;
  num: string;
  title: string;
  level: "HIGH" | "MEDIUM" | "NORMAL";
  color: string;
  badgeBg: string;
  dotColor: string;
}

const prioritiesData: PriorityItem[] = [
  {
    id: "p1",
    num: "01",
    title: "Project Development",
    level: "HIGH",
    color: "text-amber-300",
    badgeBg: "bg-amber-500/10 border-amber-500/30 text-amber-300",
    dotColor: "bg-amber-400",
  },
  {
    id: "p2",
    num: "02",
    title: "Study",
    level: "MEDIUM",
    color: "text-cyan-300",
    badgeBg: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300",
    dotColor: "bg-cyan-400",
  },
  {
    id: "p3",
    num: "03",
    title: "Personal Tasks",
    level: "NORMAL",
    color: "text-slate-300",
    badgeBg: "bg-slate-800 border-slate-700 text-slate-400",
    dotColor: "bg-slate-400",
  },
];

interface PriorityPanelProps {
  onClose?: () => void;
  className?: string;
}

export const PriorityPanel: React.FC<PriorityPanelProps> = ({
  onClose,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 15 }}
      className={`rounded-2xl glass-panel-glow border border-amber-500/30 p-5 shadow-[0_0_30px_rgba(245,158,11,0.12)] backdrop-blur-xl space-y-4 relative overflow-hidden ${className}`}
    >
      {/* Top Title Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-amber-950/60 border border-amber-500/30 text-amber-400">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
            TODAY'S PRIORITIES
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded-full border border-slate-800">
            3 Active
          </span>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Close priorities panel"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Priority Cards List */}
      <div className="space-y-2.5">
        {prioritiesData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-amber-500/40 transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-amber-400 transition-colors">
                {item.num}
              </span>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${item.dotColor}`} />
                <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                  {item.title}
                </span>
              </div>
            </div>

            <span className={`text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${item.badgeBg}`}>
              {item.level}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
