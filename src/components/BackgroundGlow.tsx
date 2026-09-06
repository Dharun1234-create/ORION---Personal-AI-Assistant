"use client";

import React from "react";
import { motion } from "framer-motion";

export const BackgroundGlow: React.FC = () => {
  // Pre-configured micro particles
  const particles = [
    { top: "15%", left: "20%", delay: 0, duration: 8 },
    { top: "25%", left: "80%", delay: 2, duration: 10 },
    { top: "50%", left: "45%", delay: 1, duration: 7 },
    { top: "70%", left: "15%", delay: 3, duration: 9 },
    { top: "85%", left: "75%", delay: 0.5, duration: 11 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030712]">
      {/* 1. Subtle Fine Grid Matrix */}
      <div className="absolute inset-0 bg-orion-grid opacity-30" />

      {/* 2. Top-Left Blue Atmospheric Light Spot */}
      <div className="absolute -top-[20%] -left-[10%] w-[65vw] h-[65vw] max-w-[850px] max-h-[850px] rounded-full bg-gradient-to-br from-cyan-600/15 via-blue-700/10 to-transparent blur-[130px] animate-pulse-glow" />

      {/* 3. Right-Center Purple Atmospheric Glow */}
      <div className="absolute top-[15%] -right-[15%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-bl from-violet-600/15 via-indigo-800/10 to-transparent blur-[140px]" />

      {/* 4. Center Bottom Deep Oceanic Fill */}
      <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[50vw] max-w-[900px] rounded-full bg-gradient-to-t from-blue-950/25 via-cyan-950/15 to-transparent blur-[130px]" />

      {/* 5. Thin Curved Orbit Trace Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
        <ellipse cx="50%" cy="30%" rx="600" ry="220" fill="none" stroke="rgba(56, 189, 248, 0.15)" strokeWidth="1" strokeDasharray="6 6" />
        <ellipse cx="50%" cy="75%" rx="700" ry="260" fill="none" stroke="rgba(139, 92, 246, 0.15)" strokeWidth="1" strokeDasharray="8 8" />
      </svg>

      {/* 6. Floating Micro Ambient Light Particles */}
      {particles.map((p, idx) => (
        <motion.div
          key={idx}
          style={{ top: p.top, left: p.left }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: p.delay,
          }}
          className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/80 shadow-[0_0_10px_#38bdf8]"
        />
      ))}
    </div>
  );
};
