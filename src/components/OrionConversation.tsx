"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OrionMessage } from "./OrionMessage";
import { Sparkles, Brain, Loader2 } from "lucide-react";

export interface ChatMessage {
  id: string;
  role: "user" | "orion";
  content: string;
  timestamp?: string;
  isStreaming?: boolean;
}

interface OrionConversationProps {
  messages: ChatMessage[];
  isThinking?: boolean;
  thinkingText?: string;
  onStreamComplete?: () => void;
  className?: string;
}

export const OrionConversation: React.FC<OrionConversationProps> = ({
  messages,
  isThinking = false,
  thinkingText = "ORION is processing...",
  onStreamComplete,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, isThinking]);

  return (
    <div
      ref={containerRef}
      className={`min-h-[300px] max-h-[460px] overflow-y-auto rounded-2xl bg-slate-950/80 border border-slate-800/80 p-4 sm:p-6 space-y-4 shadow-inner backdrop-blur-xl ${className}`}
    >
      <AnimatePresence mode="popLayout">
        {messages.length > 0 ? (
          messages.map((msg, idx) => (
            <OrionMessage
              key={msg.id || idx}
              role={msg.role}
              content={msg.content}
              isStreaming={msg.isStreaming}
              onStreamComplete={onStreamComplete}
              timestamp={msg.timestamp || "Just now"}
            />
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-64 flex flex-col items-center justify-center text-center space-y-3 text-slate-500"
          >
            <div className="p-3 rounded-2xl bg-cyan-950/40 border border-cyan-500/20 text-cyan-400">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-300">ORION AI Workspace</p>
              <p className="text-xs text-slate-500 max-w-xs">
                Ask anything or select a Quick Action below to interact with ORION.
              </p>
            </div>
          </motion.div>
        )}

        {/* Thinking / Processing State Indicator */}
        {isThinking && (
          <motion.div
            key="thinking-indicator"
            initial={{ opacity: 0, x: -20, y: 5 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-violet-950/40 border border-violet-500/30 text-violet-300 w-fit max-w-[85%] shadow-[0_0_20px_rgba(139,92,246,0.15)]"
          >
            <div className="relative">
              <Brain className="w-4 h-4 text-violet-400 animate-spin" />
            </div>
            <span className="text-xs font-semibold tracking-wide animate-pulse">
              {thinkingText}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
