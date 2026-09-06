"use client";

import React from "react";
import { motion } from "framer-motion";
import { OrionCore } from "./OrionCore";
import { OrionConversationDemo } from "./OrionConversationDemo";
import { Calendar, Bell, AlertTriangle, Target, Sparkles } from "lucide-react";

export const OrionExperience: React.FC = () => {
  const cards = [
    {
      id: "plan",
      title: "Tomorrow's Plan",
      icon: <Calendar className="w-4 h-4 text-cyan-400" />,
      badge: "Scheduled",
      badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
      content: (
        <div className="space-y-1.5 mt-2">
          <div className="flex items-center justify-between text-xs text-slate-300 bg-slate-900/60 px-2.5 py-1 rounded-lg border border-slate-800">
            <span className="text-cyan-400 font-mono font-medium">09:00</span>
            <span>Deep Work</span>
          </div>
          <div className="flex items-center justify-between text-xs text-slate-300 bg-slate-900/60 px-2.5 py-1 rounded-lg border border-slate-800">
            <span className="text-slate-400 font-mono">12:30</span>
            <span>Lunch</span>
          </div>
          <div className="flex items-center justify-between text-xs text-slate-300 bg-slate-900/60 px-2.5 py-1 rounded-lg border border-slate-800">
            <span className="text-violet-400 font-mono font-medium">16:00</span>
            <span>Project Review</span>
          </div>
        </div>
      ),
      positionDesktop: "lg:top-4 lg:left-4 xl:left-8",
      delay: 0.1,
    },
    {
      id: "reminder",
      title: "Smart Reminder",
      icon: <Bell className="w-4 h-4 text-emerald-400" />,
      badge: "Context Aware",
      badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      content: (
        <p className="text-xs text-slate-300 mt-2 font-medium leading-relaxed bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
          "Bring your project file tomorrow."
        </p>
      ),
      positionDesktop: "lg:top-4 lg:right-4 xl:right-8",
      delay: 0.2,
    },
    {
      id: "priority",
      title: "Priority Insight",
      icon: <AlertTriangle className="w-4 h-4 text-amber-400" />,
      badge: "Urgent",
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/30",
      content: (
        <p className="text-xs text-slate-300 mt-2 font-medium leading-relaxed bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
          Your project deadline is approaching.
        </p>
      ),
      positionDesktop: "lg:bottom-4 lg:left-4 xl:left-8",
      delay: 0.3,
    },
    {
      id: "focus",
      title: "Daily Focus",
      icon: <Target className="w-4 h-4 text-violet-400" />,
      badge: "Optimized",
      badgeColor: "bg-violet-500/10 text-violet-300 border-violet-500/30",
      content: (
        <div className="mt-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-300 font-medium">3 important things today</span>
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping" />
        </div>
      ),
      positionDesktop: "lg:bottom-4 lg:right-4 xl:right-8",
      delay: 0.4,
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-20 lg:py-32 overflow-hidden border-t border-slate-900/60 z-10"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 via-blue-600/5 to-violet-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-widest uppercase backdrop-blur-md shadow-[0_0_15px_rgba(56,189,248,0.1)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>THE ORION EXPERIENCE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            An AI that understands <span className="text-gradient-cyan">your world.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            ORION connects the things that matter — your plans, priorities, routines, projects and goals — so you can spend less time managing life and more time living it.
          </motion.p>
        </div>

        {/* Visual Composition Container */}
        <div className="relative min-h-[580px] lg:min-h-[620px] flex items-center justify-center">
          {/* Animated Glow Connection SVG Lines (Desktop) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0">
            <defs>
              <linearGradient id="lineGradCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="lineGradViolet" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* Top-Left Connection */}
            <motion.path
              d="M 280 140 Q 420 180 500 280"
              stroke="url(#lineGradCyan)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            {/* Top-Right Connection */}
            <motion.path
              d="M 720 140 Q 580 180 500 280"
              stroke="url(#lineGradCyan)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
            />
            {/* Bottom-Left Connection */}
            <motion.path
              d="M 280 460 Q 420 420 500 280"
              stroke="url(#lineGradViolet)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
            />
            {/* Bottom-Right Connection */}
            <motion.path
              d="M 720 460 Q 580 420 500 280"
              stroke="url(#lineGradViolet)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
            />
          </svg>

          {/* Central ORION Intelligence Core Visual */}
          <div className="relative z-10 w-full max-w-[420px]">
            <OrionCore />
          </div>

          {/* Desktop Surrounding Cards Positioning */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-20">
            {cards.map((card) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: card.delay }}
                className={`absolute ${card.positionDesktop} w-[280px] pointer-events-auto`}
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/40 shadow-2xl backdrop-blur-xl transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                        {card.icon}
                      </div>
                      <h3 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {card.title}
                      </h3>
                    </div>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${card.badgeColor}`}>
                      {card.badge}
                    </span>
                  </div>
                  {card.content}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Clean Stack Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden mt-8">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: card.delay }}
              className="p-4 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/40 shadow-lg backdrop-blur-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                    {card.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white">{card.title}</h3>
                </div>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${card.badgeColor}`}>
                  {card.badge}
                </span>
              </div>
              {card.content}
            </motion.div>
          ))}
        </div>

        {/* Interactive AI Conversation Simulation Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="pt-4"
        >
          <OrionConversationDemo />
        </motion.div>
      </div>
    </section>
  );
};



