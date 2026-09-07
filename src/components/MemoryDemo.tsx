"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bookmark, Sparkles, CheckCircle2, Send, X } from "lucide-react";

interface ContextMemory {
  id: string;
  text: string;
  timestamp: string;
}

const defaultMemories: ContextMemory[] = [
  {
    id: "m1",
    text: "Remember that my project presentation is next week.",
    timestamp: "Just added",
  },
  {
    id: "m2",
    text: "Prefers morning focus slots for deep engineering work.",
    timestamp: "Yesterday",
  },
];

interface MemoryDemoProps {
  onMemoryAdded?: (memory: string) => void;
  onClose?: () => void;
  className?: string;
}

export const MemoryDemo: React.FC<MemoryDemoProps> = ({
  onMemoryAdded,
  onClose,
  className = "",
}) => {
  const [inputVal, setInputVal] = useState(
    "Remember that my project presentation is next week."
  );
  const [memories, setMemories] = useState<ContextMemory[]>(defaultMemories);
  const [showResponse, setShowResponse] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);

  const handleSaveMemory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const newMemText = inputVal.trim();
    const newEntry: ContextMemory = {
      id: Date.now().toString(),
      text: newMemText,
      timestamp: "Just now",
    };

    setMemories((prev) => [newEntry, ...prev]);
    setLastSaved(newMemText);
    setShowResponse(true);

    if (onMemoryAdded) {
      onMemoryAdded(newMemText);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 15 }}
      className={`rounded-2xl glass-panel-glow border border-violet-500/30 p-5 shadow-[0_0_30px_rgba(139,92,246,0.15)] backdrop-blur-xl space-y-4 relative overflow-hidden ${className}`}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-violet-950/60 border border-violet-500/30 text-violet-400">
            <Bookmark className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-violet-300">
            Remember This
          </span>
        </div>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Close memory composer"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Input Composer Form */}
      <form onSubmit={handleSaveMemory} className="space-y-2.5">
        <label className="text-xs font-medium text-slate-300 block">
          What should I remember?
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Remember that my project presentation is next week."
            className="w-full bg-slate-950/80 border border-slate-800 focus:border-violet-500/50 rounded-xl px-3.5 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none transition-all"
          />
          <button
            type="submit"
            disabled={!inputVal.trim()}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-xs hover:opacity-95 transition-all disabled:opacity-40 flex items-center gap-1.5 flex-shrink-0 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Remember</span>
          </button>
        </div>
      </form>

      {/* ORION Simulated Response Feedback */}
      <AnimatePresence>
        {showResponse && lastSaved && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -5 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            className="p-3 rounded-xl bg-violet-950/50 border border-violet-500/40 text-xs text-violet-200 flex items-start gap-2.5"
          >
            <Sparkles className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block text-emerald-400">
                ✓ Saved to ORION context
              </span>
              <p className="text-slate-300 italic">
                "Got it. I'll remember that."
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Personal Context Entries */}
      <div className="space-y-2 pt-1">
        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
          Active Context Items ({memories.length}):
        </span>
        <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
          {memories.map((mem) => (
            <div
              key={mem.id}
              className="flex items-center justify-between text-xs bg-slate-950/70 p-2.5 rounded-xl border border-slate-800 text-slate-300"
            >
              <div className="flex items-center gap-2 min-w-0 pr-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span className="truncate">{mem.text}</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500 flex-shrink-0">
                {mem.timestamp}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
