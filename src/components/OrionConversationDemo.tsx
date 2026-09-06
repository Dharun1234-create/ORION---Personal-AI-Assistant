"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OrionCore } from "./OrionCore";
import { OrionState } from "./OrionStateIndicator";
import { OrionMessage } from "./OrionMessage";
import { OrionVoiceWave } from "./OrionVoiceWave";
import { Mic, Sparkles, RefreshCw, MessageSquare } from "lucide-react";

interface DemoConversation {
  prompt: string;
  response: string;
}

const samplePrompts: DemoConversation[] = [
  {
    prompt: "What are my top priorities for tomorrow?",
    response:
      "Tomorrow you have 3 key priorities: 09:00 Deep Work on AI Architecture, 12:30 Team Alignment, and 16:00 Project Presentation Review.",
  },
  {
    prompt: "Remind me about my project presentation.",
    response:
      "Smart reminder set for tomorrow at 8:00 AM. Context noted: Your presentation starts at 10:00 AM and slides need final review.",
  },
  {
    prompt: "Organize my deep work focus schedule.",
    response:
      "Schedule optimized: 2 hours of uninterrupted focus allocated in the morning when your cognitive energy is highest.",
  },
];

export const OrionConversationDemo: React.FC = () => {
  const [aiState, setAiState] = useState<OrionState>("idle");
  const [currentPrompt, setCurrentPrompt] = useState<string | null>(null);
  const [currentResponse, setCurrentResponse] = useState<string | null>(null);
  const [isStreaming, setIsStreaming] = useState(false);

  const startDemoSequence = (demoItem: DemoConversation) => {
    if (aiState !== "idle" && aiState !== "success") return;

    setCurrentPrompt(demoItem.prompt);
    setCurrentResponse(null);
    setIsStreaming(false);

    // STATE 1: IDLE -> LISTENING
    setAiState("listening");

    // STATE 2: LISTENING -> THINKING after 1.8s
    setTimeout(() => {
      setAiState("thinking");

      // STATE 3: THINKING -> RESPONDING after 1.8s
      setTimeout(() => {
        setAiState("responding");
        setCurrentResponse(demoItem.response);
        setIsStreaming(true);
      }, 1800);
    }, 1800);
  };

  const handleStreamComplete = () => {
    setIsStreaming(false);
    setAiState("success");
  };

  const handleReset = () => {
    setAiState("idle");
    setCurrentPrompt(null);
    setCurrentResponse(null);
    setIsStreaming(false);
  };

  return (
    <div className="relative rounded-3xl glass-panel-glow border border-cyan-500/30 p-6 sm:p-8 lg:p-10 shadow-[0_0_50px_rgba(56,189,248,0.12)] backdrop-blur-2xl">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-cyan-950/60 border border-cyan-500/30">
            <Sparkles className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Interactive ORION Intelligence</h3>
            <p className="text-xs text-slate-400">Click a prompt or talk to ORION to simulate real-time AI states</p>
          </div>
        </div>

        {/* Reset button if active */}
        {(currentPrompt || aiState !== "idle") && (
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
            <span>Reset Demo</span>
          </button>
        )}
      </div>

      {/* Main Grid: Core Visual & Conversation Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Dynamic ORION Core with State Engine */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-4">
          <div className="relative w-full max-w-[340px] flex items-center justify-center">
            <OrionCore
              state={aiState}
              showFloatingCards={false}
              showWaveform={false}
              showStateLabel={true}
              size="sm"
            />
          </div>

          {/* Voice Waveform below Core */}
          <div className="w-full flex justify-center pt-2">
            <OrionVoiceWave
              active={aiState === "listening" || aiState === "responding"}
              size="md"
            />
          </div>
        </div>

        {/* Right: Message Stream & Action Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Sample Prompts Trigger Chips */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Try Asking ORION:
            </span>
            <div className="flex flex-wrap gap-2">
              {samplePrompts.map((item, idx) => (
                <button
                  key={idx}
                  disabled={aiState !== "idle" && aiState !== "success"}
                  onClick={() => startDemoSequence(item)}
                  className={`text-xs text-left px-3.5 py-2 rounded-xl border transition-all duration-300 flex items-center gap-2 ${
                    currentPrompt === item.prompt
                      ? "bg-cyan-950/80 border-cyan-400 text-cyan-200 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                      : "bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/80"
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  <MessageSquare className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span>"{item.prompt}"</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main "Talk to ORION" Simulated Trigger */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={aiState !== "idle" && aiState !== "success"}
            onClick={() => startDemoSequence(samplePrompts[0])}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 p-[1px] shadow-2xl group transition-all disabled:opacity-50"
          >
            <div className="w-full h-full bg-slate-950 rounded-[15px] p-4 flex items-center justify-center gap-3 text-white font-semibold text-sm sm:text-base group-hover:bg-slate-900/90 transition-colors">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform">
                <Mic className="w-4 h-4" />
              </div>
              <span>
                {aiState === "idle"
                  ? "Talk to ORION (Demo Interactive)"
                  : aiState === "listening"
                  ? "Listening to prompt..."
                  : aiState === "thinking"
                  ? "ORION is processing..."
                  : "Response active"}
              </span>
            </div>
          </motion.button>

          {/* Chat Feed Box */}
          <div className="min-h-[160px] rounded-2xl bg-slate-950/80 border border-slate-800 p-4 space-y-3">
            <AnimatePresence mode="wait">
              {currentPrompt ? (
                <div className="space-y-4">
                  {/* User Prompt Message */}
                  <OrionMessage role="user" content={currentPrompt} timestamp="Just now" />

                  {/* ORION Response Message */}
                  {currentResponse && (
                    <OrionMessage
                      role="orion"
                      content={currentResponse}
                      isStreaming={isStreaming}
                      onStreamComplete={handleStreamComplete}
                      timestamp="Just now"
                    />
                  )}
                </div>
              ) : (
                <div className="h-32 flex flex-col items-center justify-center text-center text-slate-500 space-y-2">
                  <Sparkles className="w-6 h-6 text-slate-600" />
                  <p className="text-xs">Click "Talk to ORION" or pick a sample prompt above to start.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
