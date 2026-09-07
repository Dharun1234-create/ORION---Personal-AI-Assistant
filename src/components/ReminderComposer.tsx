"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, CheckCircle2, X, Plus } from "lucide-react";

interface ReminderComposerProps {
  onReminderCreated?: (title: string, time: string) => void;
  onClose?: () => void;
  className?: string;
}

export const ReminderComposer: React.FC<ReminderComposerProps> = ({
  onReminderCreated,
  onClose,
  className = "",
}) => {
  const [task, setTask] = useState("Project presentation");
  const [time, setTime] = useState("Tomorrow • 8:00 AM");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.trim()) return;
    setIsSuccess(true);
    if (onReminderCreated) {
      onReminderCreated(task, time);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 15 }}
      className={`rounded-2xl glass-panel-glow border border-emerald-500/30 p-5 shadow-[0_0_30px_rgba(16,185,129,0.15)] backdrop-blur-xl relative overflow-hidden ${className}`}
    >
      {/* Background Subtle Emerald Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
            <Bell className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
            Set Reminder
          </span>
        </div>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Close reminder composer"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <form onSubmit={handleCreate} className="space-y-4">
            {/* Task Prompt Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300 block">
                What should I remind you about?
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  placeholder="Project presentation"
                  className="w-full bg-slate-950/80 border border-slate-800 focus:border-emerald-500/50 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Time Select Options */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300 block">When?</label>
              <div className="flex flex-wrap gap-2">
                {[
                  "Tomorrow • 8:00 AM",
                  "Today • 5:00 PM",
                  "In 2 Hours",
                  "Next Monday",
                ].map((tOption) => (
                  <button
                    key={tOption}
                    type="button"
                    onClick={() => setTime(tOption)}
                    className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                      time === tOption
                        ? "bg-emerald-950/80 border-emerald-400 text-emerald-200 font-semibold"
                        : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                    }`}
                  >
                    {tOption}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Action */}
            <button
              type="submit"
              disabled={!task.trim()}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold text-xs sm:text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>Create Reminder</span>
            </button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="py-4 text-center space-y-3"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.3)] animate-pulse">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                ✓ Reminder created
              </span>
              <p className="text-sm font-semibold text-white">
                "{task} — {time}"
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 pt-1">
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-slate-400 hover:text-cyan-300 underline underline-offset-4 transition-colors"
              >
                Set another
              </button>
              {onClose && (
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs text-slate-400 hover:text-white underline underline-offset-4 transition-colors"
                >
                  Close
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
