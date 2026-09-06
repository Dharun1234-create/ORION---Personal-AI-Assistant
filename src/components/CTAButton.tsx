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

  const sizeClasses =
    size === "lg" ? "px-7 py-3.5 text-base font-bold" : "px-5 py-2.5 text-sm font-semibold";

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center gap-2.5 rounded-xl transition-all duration-300 group cursor-pointer ${sizeClasses} ${
        isPrimary
          ? "bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:via-blue-500 hover:to-violet-500 text-white border border-cyan-300/40 shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.55)]"
          : "bg-slate-900/70 hover:bg-cyan-950/50 text-slate-200 hover:text-white border border-white/10 hover:border-cyan-500/40 shadow-lg backdrop-blur-md"
      } ${className}`}
    >
      {!isPrimary && (
        <Sparkles className="w-4 h-4 text-violet-400 opacity-80 group-hover:opacity-100 transition-opacity" />
      )}
      <span className="tracking-wide">{children}</span>
      {isPrimary && icon && (
        <ArrowRight className="w-4 h-4 text-cyan-200 group-hover:translate-x-1.5 transition-transform duration-300" />
      )}
    </motion.button>
  );
};
