"use client";

import React from "react";
import { Calendar, Bell, AlertTriangle, Bookmark, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export type QuickActionType = "plan" | "reminder" | "priorities" | "remember";

export interface QuickActionItem {
  id: QuickActionType;
  label: string;
  icon: React.ReactNode;
}

interface OrionQuickActionsProps {
  onSelectAction: (actionId: QuickActionType) => void;
  activeAction?: QuickActionType | null;
  disabled?: boolean;
  className?: string;
}

export const quickActionItems: QuickActionItem[] = [
  {
    id: "plan",
    label: "Plan My Day",
    icon: <Calendar className="w-3.5 h-3.5 text-cyan-400" />,
  },
  {
    id: "reminder",
    label: "Set Reminder",
    icon: <Bell className="w-3.5 h-3.5 text-emerald-400" />,
  },
  {
    id: "priorities",
    label: "My Priorities",
    icon: <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />,
  },
  {
    id: "remember",
    label: "Remember This",
    icon: <Bookmark className="w-3.5 h-3.5 text-violet-400" />,
  },
];

export const OrionQuickActions: React.FC<OrionQuickActionsProps> = ({
  onSelectAction,
  activeAction,
  disabled = false,
  className = "",
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium tracking-wide">
        <Sparkles className="w-3 h-3 text-cyan-400" />
        <span>Quick Actions:</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {quickActionItems.map((action) => {
          const isActive = activeAction === action.id;
          return (
            <motion.button
              key={action.id}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              disabled={disabled}
              onClick={() => onSelectAction(action.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-300 border ${
                isActive
                  ? "bg-cyan-950/80 border-cyan-400 text-cyan-200 shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                  : "bg-slate-900/70 border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:bg-slate-800/80 hover:text-white"
              } disabled:opacity-40 disabled:cursor-not-allowed`}
            >
              {action.icon}
              <span>{action.label}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
