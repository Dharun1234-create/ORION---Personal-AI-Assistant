"use client";

import React from "react";

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030712]">
      {/* 1. Subtle Fine Grid Matrix */}
      <div className="absolute inset-0 bg-orion-grid opacity-40" />

      {/* 2. Top-Left Blue Atmospheric Light Spot */}
      <div className="absolute -top-[20%] -left-[10%] w-[65vw] h-[65vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-br from-cyan-600/15 via-blue-700/10 to-transparent blur-[120px]" />

      {/* 3. Right-Center Purple Atmospheric Glow */}
      <div className="absolute top-[15%] -right-[15%] w-[60vw] h-[60vw] max-w-[750px] max-h-[750px] rounded-full bg-gradient-to-bl from-violet-600/15 via-indigo-800/10 to-transparent blur-[140px]" />

      {/* 4. Center Bottom Deep Oceanic Fill */}
      <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[50vw] max-w-[900px] rounded-full bg-gradient-to-t from-blue-950/20 via-cyan-950/10 to-transparent blur-[130px]" />

      {/* 5. Vignette & Radial Contrast Overlay */}
      <div className="absolute inset-0 bg-radial-vignette opacity-80" />
    </div>
  );
};
