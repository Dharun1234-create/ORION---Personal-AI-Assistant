"use client";

import React from "react";
import { motion } from "framer-motion";

interface OrionLogoProps {
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  className?: string;
}

export const OrionLogo: React.FC<OrionLogoProps> = ({
  size = "md",
  showWordmark = true,
  className = "",
}) => {
  const sizeMap = {
    sm: { icon: 28, text: "text-lg", dot: 6 },
    md: { icon: 36, text: "text-xl", dot: 8 },
    lg: { icon: 48, text: "text-2xl", dot: 10 },
  };

  const { icon, text } = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 cursor-pointer group ${className}`}>
      {/* AI Core Logo Emblem */}
      <div className="relative flex items-center justify-center">
        {/* Ambient Backlight Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/40 via-blue-500/30 to-violet-500/40 blur-md group-hover:blur-lg group-hover:scale-125 transition-all duration-500 opacity-80" />

        <svg
          width={icon}
          height={icon}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 transform group-hover:rotate-45 transition-transform duration-700 ease-out"
        >
          {/* Outer Orbital Ring */}
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke="url(#logoOuterGradient)"
            strokeWidth="1.5"
            strokeDasharray="4 2 8 2"
            className="opacity-70 group-hover:opacity-100 transition-opacity"
          />

          {/* Middle Ring */}
          <circle
            cx="20"
            cy="20"
            r="12"
            stroke="url(#logoInnerGradient)"
            strokeWidth="1.2"
            strokeDasharray="6 3"
            className="opacity-80"
          />

          {/* Inner Glowing Node */}
          <circle cx="20" cy="20" r="5" fill="url(#coreGradient)" />

          {/* Central Bright Core Dot */}
          <circle cx="20" cy="20" r="2.5" fill="#FFFFFF" />

          {/* Orbiting Tiny Satellites */}
          <circle cx="20" cy="4" r="1.5" fill="#38BDF8" />
          <circle cx="34" cy="24" r="1" fill="#8B5CF6" />

          {/* SVG Gradients */}
          <defs>
            <linearGradient id="logoOuterGradient" x1="0" y1="0" x2="40" y2="40">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="logoInnerGradient" x1="40" y1="0" x2="0" y2="40">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
            <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="70%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Wordmark */}
      {showWordmark && (
        <div className="flex flex-col tracking-wider">
          <span className={`font-bold tracking-widest text-slate-100 ${text} flex items-center gap-1`}>
            ORION
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          </span>
        </div>
      )}
    </div>
  );
};
