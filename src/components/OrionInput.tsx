"use client";

import React, { useState } from "react";
import { Send, Mic, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface OrionInputProps {
  onSend: (message: string) => void;
  isProcessing?: boolean;
  placeholder?: string;
  className?: string;
}

export const OrionInput: React.FC<OrionInputProps> = ({
  onSend,
  isProcessing = false,
  placeholder = "Ask ORION anything...",
  className = "",
}) => {
  const [value, setValue] = useState("");
  const [showMicTooltip, setShowMicTooltip] = useState(false);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed || isProcessing) return;
    
    onSend(trimmed);
    setValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleMicClick = () => {
    setShowMicTooltip(true);
    setTimeout(() => setShowMicTooltip(false), 2500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative w-full group ${className}`}
    >
      {/* Visual Mic Feedback Tooltip */}
      {showMicTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-cyan-950/90 border border-cyan-500/40 text-cyan-300 text-[11px] font-medium shadow-lg backdrop-blur-md flex items-center gap-1.5 z-20"
        >
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span>Microphone demo active — Type or select a quick action below</span>
        </motion.div>
      )}

      {/* Input Outer Glass Glow Container */}
      <div className="relative rounded-2xl bg-slate-950/80 border border-cyan-500/30 p-1.5 transition-all duration-300 focus-within:border-cyan-400 focus-within:shadow-[0_0_25px_rgba(56,189,248,0.2)]">
        <div className="flex items-center gap-2 px-3 py-1">
          {/* Main Input Textfield */}
          <input
            type="text"
            value={value}
            disabled={isProcessing}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={isProcessing ? "ORION is processing..." : placeholder}
            className="w-full bg-transparent text-slate-100 placeholder:text-slate-500 text-sm font-normal focus:outline-none disabled:opacity-50"
          />

          {/* Visual Demo Microphone Button */}
          <button
            type="button"
            onClick={handleMicClick}
            disabled={isProcessing}
            title="Voice input demo"
            className="p-2 rounded-xl text-slate-400 hover:text-cyan-300 hover:bg-cyan-950/50 transition-colors disabled:opacity-40"
          >
            <Mic className="w-4 h-4 text-cyan-400" />
          </button>

          {/* Send Button */}
          <button
            type="submit"
            disabled={!value.trim() || isProcessing}
            className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-[0_0_12px_rgba(56,189,248,0.3)] flex items-center justify-center flex-shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </form>
  );
};
