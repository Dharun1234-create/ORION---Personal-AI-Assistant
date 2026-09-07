"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OrionCore } from "./OrionCore";
import { OrionStateIndicator, OrionState } from "./OrionStateIndicator";
import { OrionConversation, ChatMessage } from "./OrionConversation";
import { OrionInput } from "./OrionInput";
import { OrionQuickActions, QuickActionType } from "./OrionQuickActions";
import { OrionInsight } from "./OrionInsight";
import { ReminderComposer } from "./ReminderComposer";
import { PriorityPanel } from "./PriorityPanel";
import { MemoryDemo } from "./MemoryDemo";
import { ConversationHistory, HistorySession } from "./ConversationHistory";
import { OrionLogo } from "./OrionLogo";
import { Sparkles, RotateCcw } from "lucide-react";

export const OrionWorkspace: React.FC = () => {
  const [aiState, setAiState] = useState<OrionState>("idle");
  const [activePanel, setActivePanel] = useState<QuickActionType | "plan_details" | null>(null);

  const initialMessages: ChatMessage[] = [
    {
      id: "m-initial-1",
      role: "user",
      content: "What should I focus on today?",
      timestamp: "9:42 AM",
    },
    {
      id: "m-initial-2",
      role: "orion",
      content:
        "Based on your priorities, I recommend focusing on your project deadline first. Let me know if you need help planning your schedule.",
      timestamp: "9:42 AM",
    },
  ];

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [activeHistoryId, setActiveHistoryId] = useState<string>("h1");

  const [historyItemsState, setHistoryItemsState] = useState<HistorySession[]>([
    {
      id: "h1",
      title: "Project Planning",
      time: "9:42 AM",
      group: "TODAY",
      prompt: "What should I focus on today?",
      response:
        "Based on your priorities, I recommend focusing on your project deadline first.",
    },
    {
      id: "h2",
      title: "Daily Priorities",
      time: "9:50 AM",
      group: "TODAY",
      prompt: "Show my priorities.",
      response:
        "TODAY'S PRIORITIES:\n\n01 Project Development — HIGH\n02 Study — MEDIUM\n03 Personal Tasks — NORMAL",
    },
    {
      id: "h3",
      title: "Reminder Setup",
      time: "10:05 AM",
      group: "TODAY",
      prompt: "Set reminder for Project presentation.",
      response: "✓ Reminder created\nProject presentation — Tomorrow at 8:00 AM",
    },
  ]);

  // Helper to add new conversation history dynamically
  const addToHistory = (title: string, promptText: string, responseText: string) => {
    const newSession: HistorySession = {
      id: `h-${Date.now()}`,
      title,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      group: "TODAY",
      prompt: promptText,
      response: responseText,
    };
    setHistoryItemsState((prev) => [newSession, ...prev]);
    setActiveHistoryId(newSession.id);
  };

  // Real AI API Call Function
  const fetchAiBrainResponse = async (
    userText: string,
    allMessages: ChatMessage[]
  ): Promise<string> => {
    try {
      const payloadMessages = allMessages.map((m) => ({
        role: m.role === "user" ? "user" : "assistant",
        content: m.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: payloadMessages }),
      });

      if (!res.ok) {
        throw new Error(`API response status: ${res.status}`);
      }

      const data = await res.json();
      return (
        data.message ||
        "Sorry, I couldn't connect to my AI core right now. Please try again."
      );
    } catch (err) {
      console.error("Failed to connect to ORION Real AI API:", err);
      return "Sorry, I couldn't connect to my AI core right now. Please try again.";
    }
  };

  // Core handler for sending user text (typing, enter key, send button)
  const handleSendMessage = async (userText: string) => {
    if (aiState === "thinking" || aiState === "responding") return;

    const formattedTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      content: userText,
      timestamp: formattedTime,
    };

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setAiState("thinking");

    // Send request to real OpenAI backend route
    const aiResponseText = await fetchAiBrainResponse(userText, updatedMessages);

    setAiState("responding");

    const orionMsg: ChatMessage = {
      id: `o-${Date.now()}`,
      role: "orion",
      content: aiResponseText,
      timestamp: formattedTime,
      isStreaming: true,
    };

    setMessages((prev) => [...prev, orionMsg]);
    addToHistory(
      userText.length > 20 ? `${userText.slice(0, 18)}...` : userText,
      userText,
      aiResponseText
    );
  };

  // Handler for Quick Action chip buttons
  const handleQuickAction = (actionId: QuickActionType) => {
    if (aiState === "thinking" || aiState === "responding") return;

    if (actionId === "plan") {
      setActivePanel(null);
      handleSendMessage("Plan my day.");
    } else if (actionId === "priorities") {
      setActivePanel("priorities");
      handleSendMessage("Show my priorities.");
    } else if (actionId === "reminder") {
      setActivePanel("reminder");
    } else if (actionId === "remember") {
      setActivePanel("remember");
    }
  };

  // Handler for ORION Insight "View Plan →" button click
  const handleViewPlan = () => {
    if (aiState === "thinking" || aiState === "responding") return;
    handleSendMessage("View project plan.");
  };

  const handleStreamComplete = () => {
    setAiState("idle");
  };

  const handleHistorySelect = (session: HistorySession) => {
    setActiveHistoryId(session.id);
    setMessages([
      {
        id: `h-user-${session.id}`,
        role: "user",
        content: session.prompt,
        timestamp: session.time,
      },
      {
        id: `h-orion-${session.id}`,
        role: "orion",
        content: session.response,
        timestamp: session.time,
      },
    ]);
  };

  const handleResetWorkspace = () => {
    setAiState("idle");
    setActivePanel(null);
    setMessages(initialMessages);
  };

  return (
    <section
      id="talk-to-orion"
      className="relative py-20 lg:py-28 overflow-hidden border-t border-slate-900/60 z-10"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-violet-600/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-widest uppercase backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>ORION REAL AI BRAIN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Talk to <span className="text-gradient-orion">ORION</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Personal Intelligence operating system — powered by real AI backend.
            </p>
          </div>

          {/* Reset Workspace Demo Button */}
          <button
            type="button"
            onClick={handleResetWorkspace}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all shadow-md cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
            <span>Reset Workspace</span>
          </button>
        </div>

        {/* Desktop 2-Column & Mobile Stacked Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* =================================================== */}
          {/* LEFT COLUMN: Conversation, Input & Quick Actions   */}
          {/* =================================================== */}
          <div className="lg:col-span-7 space-y-6">
            {/* Conversation Feed Box */}
            <OrionConversation
              messages={messages}
              isThinking={aiState === "thinking"}
              thinkingText="Thinking..."
              onStreamComplete={handleStreamComplete}
            />

            {/* Input Bar Area */}
            <OrionInput
              onSend={handleSendMessage}
              isProcessing={aiState === "thinking" || aiState === "responding"}
              placeholder="Ask ORION anything..."
            />

            {/* Quick Actions Buttons */}
            <OrionQuickActions
              onSelectAction={handleQuickAction}
              activeAction={typeof activePanel === "string" && activePanel !== "plan_details" ? (activePanel as QuickActionType) : null}
              disabled={aiState === "thinking" || aiState === "responding"}
            />

            {/* Interactive Panels (Reminder Composer / Priority / Memory) */}
            <AnimatePresence mode="wait">
              {activePanel === "reminder" && (
                <ReminderComposer
                  key="reminder-panel"
                  onClose={() => setActivePanel(null)}
                  onReminderCreated={(title, time) => {
                    const formattedTime = new Date().toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    });
                    const confirmText = `✓ Reminder created\n"${title} — ${time}"`;
                    setMessages((prev) => [
                      ...prev,
                      {
                        id: `u-rem-${Date.now()}`,
                        role: "user",
                        content: `Set reminder for ${title}`,
                        timestamp: formattedTime,
                      },
                      {
                        id: `o-rem-${Date.now()}`,
                        role: "orion",
                        content: confirmText,
                        timestamp: formattedTime,
                        isStreaming: true,
                      },
                    ]);
                    addToHistory("Reminder Setup", `Set reminder for ${title}`, confirmText);
                  }}
                />
              )}

              {activePanel === "priorities" && (
                <PriorityPanel
                  key="priority-panel"
                  onClose={() => setActivePanel(null)}
                />
              )}

              {activePanel === "remember" && (
                <MemoryDemo
                  key="memory-panel"
                  onClose={() => setActivePanel(null)}
                  onMemoryAdded={(memText) => {
                    const formattedTime = new Date().toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    });
                    const confirmText = `✓ Saved to ORION context\n"Got it. I'll remember that."`;
                    setMessages((prev) => [
                      ...prev,
                      {
                        id: `u-mem-${Date.now()}`,
                        role: "user",
                        content: memText,
                        timestamp: formattedTime,
                      },
                      {
                        id: `o-mem-${Date.now()}`,
                        role: "orion",
                        content: confirmText,
                        timestamp: formattedTime,
                        isStreaming: true,
                      },
                    ]);
                    addToHistory("Memory Context", memText, confirmText);
                  }}
                />
              )}
            </AnimatePresence>
          </div>

          {/* =================================================== */}
          {/* RIGHT COLUMN: ORION Core, AI Status, Insights       */}
          {/* =================================================== */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visual AI Core & Status System */}
            <div className="rounded-3xl glass-panel-glow p-6 border border-cyan-500/30 shadow-[0_0_40px_rgba(56,189,248,0.12)] backdrop-blur-2xl flex flex-col items-center justify-center text-center space-y-4">
              <div className="flex items-center gap-2">
                <OrionLogo size="sm" showWordmark={true} />
              </div>

              {/* Status Pill Badge */}
              <OrionStateIndicator state={aiState} />

              {/* Dynamic Core Sphere Visual */}
              <div className="w-full max-w-[300px] flex items-center justify-center py-2">
                <OrionCore
                  state={aiState}
                  showFloatingCards={false}
                  showWaveform={true}
                  showStateLabel={false}
                  size="sm"
                />
              </div>
            </div>

            {/* Proactive AI Insight Panel */}
            <OrionInsight onViewPlan={handleViewPlan} />

            {/* Conversation History Panel */}
            <ConversationHistory
              historyItems={historyItemsState}
              activeSessionId={activeHistoryId}
              onSelectSession={handleHistorySelect}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
