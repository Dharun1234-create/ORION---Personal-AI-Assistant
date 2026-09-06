"use client";

import React from "react";
import { motion } from "framer-motion";

interface OrionVoiceWaveProps {
  active?: boolean;
  barCount?: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const OrionVoiceWave: React.FC<OrionVoiceWaveProps> = ({
  active = true,
  barCount = 16,
  className = "",
  size = "md",
}) => {
  const bars = Array.from({ length: barCount });

  const heightMultiplier = size === "lg" ? 48 : size === "sm" ? 24 : 36;
  const barWidth = size === "lg" ? "w-1.5" : size === "sm" ? "w-1" : "w-1.25";
  const gap = size === "lg" ? "gap-1.5" : "gap-1";

  return (
    <div
      className={`flex items-center justify-center ${gap} h-${size === "lg" ? 14 : size === "sm" ? 8 : 10} px-3 py-1.5 rounded-full bg-slate-950/60 border border-cyan-500/20 backdrop-blur-md shadow-[0_0_20px_rgba(56,189,248,0.1)] ${className}`}
    >
      {bars.map((_, index) => {
        // Pseudo-random height targets for natural voice frequency wave look
        const baseHeight = active ? Math.sin(index * 0.8) * 0.4 + 0.6 : 0.15;
        const targetHeights = active
          ? [
              baseHeight * 0.3 * heightMultiplier,
              baseHeight * 1.0 * heightMultiplier,
              baseHeight * 0.5 * heightMultiplier,
              baseHeight * 0.9 * heightMultiplier,
              baseHeight * 0.2 * heightMultiplier,
            ]
          : [4];

        return (
          <motion.div
            key={index}
            className={`${barWidth} rounded-full bg-gradient-to-t from-cyan-500 via-blue-500 to-violet-500 shadow-[0_0_8px_rgba(56,189,248,0.4)]`}
            animate={
              active
                ? {
                    height: targetHeights,
                    opacity: [0.6, 1, 0.7, 1, 0.6],
                  }
                : {
                    height: 4,
                    opacity: 0.3,
                  }
            }
            transition={
              active
                ? {
                    duration: 0.8 + (index % 5) * 0.15,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: (index % 4) * 0.08,
                  }
                : {
                    duration: 0.3,
                  }
            }
          />
        );
      })}
    </div>
  );
};
