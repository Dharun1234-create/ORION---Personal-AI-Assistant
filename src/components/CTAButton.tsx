"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  onClick?: () => void;
  icon?: boolean;
  className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  variant = "primary",
  size = "lg",
  onClick,
  icon = true,
  className = "",
}) => {
  const isPrimary = variant === "primary";

  const sizeClasses = size === "lg" ? "px-7 py-3.5 text-base font-semibold" : "px-5 py-2.5 text-sm font-medium";

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-xl transition-all duration-300 group overflow-hidden ${sizeClasses} ${className}`}
    >
      {isPrimary ? (
        <>
          {/* Outer glow aura on hover */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 rounded-xl blur-md opacity-60 group-hover:opacity-100 transition duration-500 group-hover:blur-lg" />

          {/* Shimmer line animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

          {/* Button Base */}
          <div className="relative w-full h-full flex items-center justify-center gap-2.5 bg-slate-950/90 hover:bg-slate-900/90 text-white rounded-[11px] border border-cyan-400/40 shadow-xl backdrop-blur-md">
            <span>{children}</span>
            {icon && (
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
            )}
          </div>
        </>
      ) : (
        <>
          {/* Secondary Glass Outline */}
          <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-cyan-500/40 transition-colors duration-300" />
          
          <div className="relative w-full h-full flex items-center justify-center gap-2.5 bg-slate-900/40 group-hover:bg-cyan-950/30 text-slate-200 group-hover:text-white rounded-xl backdrop-blur-lg transition-all duration-300">
            <Sparkles className="w-4 h-4 text-violet-400 opacity-70 group-hover:opacity-100 transition-opacity" />
            <span>{children}</span>
          </div>
        </>
      )}
    </motion.button>
  );
};
