"use client";

import React from "react";
import { History, MessageSquare } from "lucide-react";

export interface HistorySession {
  id: string;
  title: string;
  time: string;
  group: "TODAY" | "YESTERDAY" | "EARLIER";
  prompt: string;
  response: string;
}

export const defaultHistoryItems: HistorySession[] = [
  {
    id: "h1",
    title: "Project Planning",
    time: "9:42 AM",
    group: "TODAY",
    prompt: "What should I focus on today?",
    response:
      "Based on your current priorities, your project work should come first today.",
  },
  {
    id: "h2",
    title: "Daily Priorities",
    time: "9:50 AM",
    group: "TODAY",
    prompt: "Show my priorities.",
    response:
      "TODAY'S PRIORITIES:\n\n01. Project Development — HIGH\n02. Study — MEDIUM\n03. Personal Tasks — NORMAL",
  },
  {
    id: "h3",
    title: "Reminder Setup",
    time: "10:05 AM",
    group: "TODAY",
    prompt: "Set reminder for Project presentation.",
    response: "✓ Reminder created\n\"Project presentation — Tomorrow at 8:00 AM\"",
  },
];

interface ConversationHistoryProps {
  historyItems?: HistorySession[];
  onSelectSession?: (session: HistorySession) => void;
  activeSessionId?: string;
  className?: string;
}

export const ConversationHistory: React.FC<ConversationHistoryProps> = ({
  historyItems = defaultHistoryItems,
  onSelectSession,
  activeSessionId,
  className = "",
}) => {
  return (
    <div
      className={`rounded-2xl glass-panel p-4 border border-white/10 space-y-3.5 backdrop-blur-xl ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400">
            <History className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-bold text-slate-200 tracking-wider uppercase">
            History
          </span>
        </div>
        <span className="text-[10px] font-mono text-slate-500">Recent Sessions</span>
      </div>

      {/* List grouped */}
      <div className="space-y-3 max-h-52 overflow-y-auto pr-1">
        {["TODAY", "YESTERDAY"].map((group) => {
          const groupSessions = historyItems.filter((s) => s.group === group);
          if (groupSessions.length === 0) return null;

          return (
            <div key={group} className="space-y-1.5">
              <span className="text-[10px] font-mono font-semibold text-cyan-400/80 uppercase tracking-widest block">
                {group}
              </span>
              <div className="space-y-1">
                {groupSessions.map((session) => {
                  const isActive = activeSessionId === session.id;
                  return (
                    <button
                      key={session.id}
                      type="button"
                      onClick={() => onSelectSession && onSelectSession(session)}
                      className={`w-full text-left p-2 rounded-xl transition-all duration-200 flex items-center justify-between group border cursor-pointer ${
                        isActive
                          ? "bg-cyan-950/60 border-cyan-500/40 text-cyan-200"
                          : "bg-slate-950/50 border-slate-800/60 hover:bg-slate-900/80 hover:border-slate-700 text-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0 pr-2">
                        <MessageSquare className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-medium truncate">{session.title}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 flex-shrink-0">
                        {session.time}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
