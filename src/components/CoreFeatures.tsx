"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  CalendarRange,
  BellRing,
  Compass,
  Target,
  Smartphone,
  Sparkles,
} from "lucide-react";

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  borderColor: string;
  glowColor: string;
  visual: React.ReactNode;
}

export const CoreFeatures: React.FC = () => {
  const features: FeatureItem[] = [
    {
      id: "memory",
      title: "Personal Memory",
      description:
        "ORION remembers the information, preferences, projects and goals that matter to you.",
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      accentColor: "from-cyan-500/20 to-blue-600/10",
      borderColor: "group-hover:border-cyan-500/50",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]",
      visual: (
        <div className="relative w-full h-24 rounded-xl bg-slate-950/70 border border-slate-800/80 p-3 overflow-hidden flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 200 80">
            {/* Connected Node Graph */}
            <path
              d="M 30 40 L 70 20 L 130 60 L 170 30 M 70 20 L 130 20 M 70 60 L 130 60"
              stroke="rgba(56, 189, 248, 0.3)"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
            <circle cx="30" cy="40" r="5" fill="#38bdf8" />
            <circle cx="70" cy="20" r="6" fill="#60a5fa" />
            <circle cx="130" cy="20" r="4" fill="#8b5cf6" />
            <circle cx="70" cy="60" r="5" fill="#38bdf8" />
            <circle cx="130" cy="60" r="7" fill="#38bdf8" />
            <circle cx="170" cy="30" r="6" fill="#a78bfa" />
            {/* Pulse animation rings */}
            <circle cx="70" cy="20" r="10" fill="none" stroke="#38bdf8" strokeWidth="1" opacity="0.4" className="animate-ping" />
          </svg>
        </div>
      ),
    },
    {
      id: "planning",
      title: "Smart Planning",
      description:
        "Turn goals and deadlines into clear, practical plans without the mental overload.",
      icon: <CalendarRange className="w-6 h-6 text-blue-400" />,
      accentColor: "from-blue-500/20 to-violet-600/10",
      borderColor: "group-hover:border-blue-500/50",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
      visual: (
        <div className="relative w-full h-24 rounded-xl bg-slate-950/70 border border-slate-800/80 p-3 flex flex-col justify-center gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <div className="h-2 flex-1 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full w-4/5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
            </div>
            <span className="text-[10px] text-cyan-300 font-mono">80%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet-400" />
            <div className="h-2 flex-1 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full w-3/5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full" />
            </div>
            <span className="text-[10px] text-violet-300 font-mono">60%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <div className="h-2 flex-1 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full w-full bg-emerald-500 rounded-full" />
            </div>
            <span className="text-[10px] text-emerald-300 font-mono">100%</span>
          </div>
        </div>
      ),
    },
    {
      id: "reminders",
      title: "Intelligent Reminders",
      description:
        "Reminders that understand context, not just time.",
      icon: <BellRing className="w-6 h-6 text-emerald-400" />,
      accentColor: "from-emerald-500/20 to-cyan-600/10",
      borderColor: "group-hover:border-emerald-500/50",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      visual: (
        <div className="relative w-full h-24 rounded-xl bg-slate-950/70 border border-slate-800/80 p-3 flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-[11px] font-semibold text-slate-200 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Location & Time Synced
            </div>
            <p className="text-[10px] text-slate-400">Trigger: Leaving office @ 5:30 PM</p>
          </div>
          <div className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px] font-medium">
            Context Ready
          </div>
        </div>
      ),
    },
    {
      id: "guidance",
      title: "Proactive Guidance",
      description:
        "ORION can surface what needs your attention before you even ask.",
      icon: <Compass className="w-6 h-6 text-amber-400" />,
      accentColor: "from-amber-500/20 to-violet-600/10",
      borderColor: "group-hover:border-amber-500/50",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
      visual: (
        <div className="relative w-full h-24 rounded-xl bg-slate-950/70 border border-slate-800/80 p-3 flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full border border-amber-500/40 flex items-center justify-center bg-amber-500/10">
            <span className="text-amber-400 font-bold text-xs">AI</span>
            <div className="absolute inset-0 rounded-full border border-amber-400 opacity-30 animate-ping" />
          </div>
          <div className="flex-1 space-y-1">
            <span className="text-[11px] font-semibold text-slate-200 block">Proactive Alert</span>
            <span className="text-[10px] text-slate-400 block leading-tight">
              Schedule conflict detected. Resolved automatically.
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "focus",
      title: "Daily Focus",
      description:
        "Know what matters most today and where your attention should go next.",
      icon: <Target className="w-6 h-6 text-violet-400" />,
      accentColor: "from-violet-500/20 to-purple-600/10",
      borderColor: "group-hover:border-violet-500/50",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
      visual: (
        <div className="relative w-full h-24 rounded-xl bg-slate-950/70 border border-slate-800/80 p-3 flex items-center justify-center">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#1e293b"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="url(#purpleGrad)"
                strokeWidth="3"
                strokeDasharray="75, 100"
              />
              <defs>
                <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute text-center">
              <span className="text-[11px] font-bold text-white block leading-none">3 / 3</span>
              <span className="text-[8px] text-slate-400 block">Goals</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "devices",
      title: "Always With You",
      description:
        "Designed to eventually work across your phone, desktop and other devices.",
      icon: <Smartphone className="w-6 h-6 text-sky-400" />,
      accentColor: "from-sky-500/20 to-cyan-600/10",
      borderColor: "group-hover:border-sky-500/50",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]",
      visual: (
        <div className="relative w-full h-24 rounded-xl bg-slate-950/70 border border-slate-800/80 p-3 flex items-center justify-center gap-4">
          {/* Desktop Mock */}
          <div className="w-16 h-12 rounded border border-slate-700 bg-slate-900 flex flex-col items-center justify-center p-1">
            <div className="w-full h-full bg-cyan-950/50 rounded flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
            </div>
          </div>
          {/* Sync Beam */}
          <div className="h-[1px] w-6 bg-gradient-to-r from-cyan-400 to-sky-400 animate-pulse" />
          {/* Mobile Mock */}
          <div className="w-7 h-12 rounded-lg border border-slate-700 bg-slate-900 flex items-center justify-center p-0.5">
            <div className="w-full h-full bg-sky-950/50 rounded flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="features"
      className="relative py-20 lg:py-32 overflow-hidden border-t border-slate-900/60 z-10"
    >
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-widest uppercase backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>CORE INTELLIGENCE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Built to think <span className="text-gradient-orion">beyond commands.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            ORION doesn't just respond. It remembers, plans, organizes and helps you move forward.
          </motion.p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl glass-panel p-6 sm:p-7 border border-white/10 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]"
            >
              {/* Top Accent Gradient on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10 space-y-4">
                {/* Header Icon + Title */}
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 transition-colors shadow-inner"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Visual Mockup */}
              <div className="relative z-10 mt-6 pt-2">
                {feature.visual}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
