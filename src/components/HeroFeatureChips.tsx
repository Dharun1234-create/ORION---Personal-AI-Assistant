"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalendarRange, Mic, Compass } from "lucide-react";

export const HeroFeatureChips: React.FC = () => {
  const chips = [
    {
      label: "Smart Planning",
      icon: <CalendarRange className="w-3.5 h-3.5 text-cyan-400" />,
      color: "border-cyan-500/30 hover:border-cyan-400/60 text-cyan-200",
    },
    {
      label: "Voice Ready",
      icon: <Mic className="w-3.5 h-3.5 text-blue-400" />,
      color: "border-blue-500/30 hover:border-blue-400/60 text-blue-200",
    },
    {
      label: "Personal Guidance",
      icon: <Compass className="w-3.5 h-3.5 text-violet-400" />,
      color: "border-violet-500/30 hover:border-violet-400/60 text-violet-200",
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3 pt-4">
      {chips.map((chip, idx) => (
        <motion.div
          key={chip.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
          whileHover={{ y: -2, scale: 1.03 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border backdrop-blur-md text-xs font-semibold tracking-wide transition-all duration-300 shadow-md cursor-default ${chip.color}`}
        >
          {chip.icon}
          <span>{chip.label}</span>
        </motion.div>
      ))}
    </div>
  );
};
