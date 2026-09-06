"use client";

import React from "react";
import { motion } from "framer-motion";
import { OrionLogo } from "./OrionLogo";
import { TypingResponse } from "./TypingResponse";
import { User } from "lucide-react";

interface OrionMessageProps {
  role: "user" | "orion";
  content: string;
  isStreaming?: boolean;
  onStreamComplete?: () => void;
  timestamp?: string;
  className?: string;
}

export const OrionMessage: React.FC<OrionMessageProps> = ({
  role,
  content,
  isStreaming = false,
  onStreamComplete,
  timestamp = "Just now",
  className = "",
}) => {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, x: isUser ? 25 : -25, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`flex items-start gap-3 my-3 ${isUser ? "flex-row-reverse" : "flex-row"} ${className}`}
    >
      {/* Avatar Node */}
      <div className="flex-shrink-0">
        {isUser ? (
          <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 shadow-md">
            <User className="w-4 h-4 text-slate-400" />
          </div>
        ) : (
          <div className="relative">
            <OrionLogo size="sm" showWordmark={false} />
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          </div>
        )}
      </div>

      {/* Message Box */}
      <div
        className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 shadow-xl backdrop-blur-xl border ${
          isUser
            ? "bg-slate-900/90 border-slate-800 text-slate-200 rounded-tr-none"
            : "glass-panel-glow border-cyan-500/30 text-white rounded-tl-none shadow-[0_0_25px_rgba(56,189,248,0.12)]"
        }`}
      >
        <div className="flex items-center justify-between gap-3 mb-1 text-[10px] text-slate-400 font-mono">
          <span className="font-semibold text-slate-300">
            {isUser ? "You" : "ORION Intelligence"}
          </span>
          <span>{timestamp}</span>
        </div>

        <div className="text-sm leading-relaxed">
          {isUser ? (
            <p className="text-slate-200">{content}</p>
          ) : isStreaming ? (
            <TypingResponse text={content} onComplete={onStreamComplete} />
          ) : (
            <p className="text-slate-100">{content}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};
