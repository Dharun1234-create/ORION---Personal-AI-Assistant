"use client";

import React from "react";
import { Brain, Calendar, Mic, Sparkles } from "lucide-react";

interface ValueItem {
  icon: React.ReactNode;
  label: string;
}

export const ValueIndicator: React.FC = () => {
  const items: ValueItem[] = [
    {
      icon: <Brain className="w-4 h-4 text-cyan-400" />,
      label: "AI Memory",
    },
    {
      icon: <Calendar className="w-4 h-4 text-blue-400" />,
      label: "Smart Planning",
    },
    {
      icon: <Mic className="w-4 h-4 text-violet-400" />,
      label: "Voice Ready",
    },
    {
      icon: <Sparkles className="w-4 h-4 text-sky-400" />,
      label: "Personal Guidance",
    },
  ];

  return (
    <div className="pt-6 border-t border-slate-800/60 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-400 font-medium">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 transition-colors"
        >
          {item.icon}
          <span className="text-slate-300 tracking-wide">{item.label}</span>
        </div>
      ))}
    </div>
  );
};
