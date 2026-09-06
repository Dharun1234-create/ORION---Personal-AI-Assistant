"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Cpu } from "lucide-react";

interface OrionAvatarVisualProps {
  size?: "sm" | "md" | "lg";
  showBadge?: boolean;
  badgeText?: string;
  className?: string;
}

export const OrionAvatarVisual: React.FC<OrionAvatarVisualProps> = ({
  size = "md",
  showBadge = true,
  badgeText = "AI IDENTITY LAYER",
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Size mapping
  const containerSizes =
    size === "sm"
      ? "max-w-[280px] h-[340px]"
      : size === "lg"
      ? "max-w-[480px] h-[540px]"
      : "max-w-[380px] h-[440px]";

  return (
    <div
      className={`relative w-full ${containerSizes} flex items-center justify-center mx-auto group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer Ambient Glow Aura */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-violet-600/25 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Floating Animated Card Container */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{
          y: {
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          },
          scale: { duration: 0.4 },
        }}
        className="relative w-full h-full rounded-3xl glass-panel-glow border border-cyan-500/30 overflow-hidden shadow-[0_0_50px_rgba(56,189,248,0.15)] flex flex-col justify-between p-5"
      >
        {/* Holographic Corner Brackets */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400 opacity-70" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400 opacity-70" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400 opacity-70" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400 opacity-70" />

        {/* Top Header Badge */}
        {showBadge && (
          <div className="relative z-20 flex items-center justify-between w-full">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-cyan-500/30 text-[10px] font-mono font-semibold tracking-wider text-cyan-300 backdrop-blur-md shadow-lg">
              <Cpu className="w-3 h-3 text-cyan-400 animate-pulse" />
              <span>{badgeText}</span>
            </div>

            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-[10px] font-mono text-slate-400">ACTIVE</span>
            </div>
          </div>
        )}

        {/* Central Image Visual with Scanline Effect */}
        <div className="relative flex-1 w-full my-3 rounded-2xl overflow-hidden bg-slate-950/80 border border-white/5 flex items-center justify-center">
          {/* AI Avatar Image */}
          <img
            src="/orion_ai_avatar.png"
            alt="ORION AI Identity Visual"
            className="w-full h-full object-cover object-center transform scale-105 group-hover:scale-110 transition-transform duration-700 filter drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]"
          />

          {/* Animated Digital Scanline Line Sweep */}
          <motion.div
            animate={{ y: ["-100%", "300%"] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent pointer-events-none"
          />

          {/* Holographic Overlay Grid */}
          <div className="absolute inset-0 bg-orion-grid opacity-20 pointer-events-none" />
        </div>

        {/* Bottom Footer Label */}
        <div className="relative z-20 flex items-center justify-between text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-slate-300 font-semibold">ORION Visual Identity</span>
          </div>
          <span className="text-[10px] text-cyan-400/80 font-mono">v2.0 VISUAL</span>
        </div>
      </motion.div>
    </div>
  );
};
