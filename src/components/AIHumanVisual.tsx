"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Sparkles, Activity } from "lucide-react";

interface AIHumanVisualProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const AIHumanVisual: React.FC<AIHumanVisualProps> = ({
  className = "",
  size = "lg",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerSizes =
    size === "sm"
      ? "max-w-[320px] h-[380px]"
      : size === "md"
      ? "max-w-[380px] h-[440px]"
      : "max-w-[440px] xl:max-w-[480px] h-[500px] xl:h-[540px]";

  return (
    <div
      className={`relative w-full ${containerSizes} flex items-center justify-center mx-auto group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer Cyan-Blue & Violet Ambient Aura Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-blue-600/25 to-violet-600/35 blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Controlled Warm Orange Intelligence Glow Backdrop */}
      <div className="absolute top-[18%] left-[22%] right-[22%] h-[42%] rounded-full bg-gradient-to-b from-amber-400/30 via-orange-500/20 to-transparent blur-2xl animate-pulse-glow pointer-events-none z-0" />

      {/* Floating Animated Cinematic Container */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          scale: isHovered ? 1.015 : 1,
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
        className="relative z-10 w-full h-full rounded-3xl glass-panel-glow border border-cyan-500/40 overflow-hidden shadow-[0_0_60px_rgba(56,189,248,0.25)] flex flex-col justify-between p-5 sm:p-6"
      >
        {/* Holographic Corner Brackets */}
        <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-cyan-400 opacity-80" />
        <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-cyan-400 opacity-80" />
        <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-cyan-400 opacity-80" />
        <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-cyan-400 opacity-80" />

        {/* Top Header Telemetry Bar */}
        <div className="relative z-20 flex items-center justify-between w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/80 border border-cyan-500/30 text-[10px] font-mono font-semibold tracking-wider text-cyan-300 backdrop-blur-md shadow-lg">
            <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>ORION AI INTELLIGENCE</span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-slate-300">
            <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
            <span>SYSTEM READY</span>
          </div>
        </div>

        {/* Central Image Visual Layer */}
        <div className="relative flex-1 w-full my-3.5 rounded-2xl overflow-hidden bg-slate-950/90 border border-white/10 flex items-center justify-center">
          {/* Cybernetic AI Avatar Image */}
          <img
            src="/orion_ai_avatar.png"
            alt="ORION Cinematic AI Human Robot Visual"
            className="w-full h-full object-cover object-center transform scale-105 group-hover:scale-108 transition-transform duration-700 filter drop-shadow-[0_0_30px_rgba(56,189,248,0.35)]"
          />

          {/* Controlled Warm Orange Brain Glow Layer */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-48 h-32 rounded-full bg-gradient-to-b from-amber-400/30 via-orange-500/20 to-transparent blur-xl pointer-events-none mix-blend-screen" />

          {/* Edge Depth Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/30 pointer-events-none" />

          {/* Digital Animated Scanline Sweep */}
          <motion.div
            animate={{ y: ["-100%", "350%"] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent pointer-events-none"
          />

          {/* Fine Background Grid Matrix Overlay */}
          <div className="absolute inset-0 bg-orion-grid opacity-20 pointer-events-none" />
        </div>

        {/* Bottom Footer Telemetry */}
        <div className="relative z-20 flex items-center justify-between text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-slate-200 font-semibold">AI Operating System</span>
          </div>
          <span className="text-[10px] text-cyan-400 font-mono">v2.0 CINEMATIC</span>
        </div>
      </motion.div>
    </div>
  );
};
