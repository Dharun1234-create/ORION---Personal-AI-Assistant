"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FloatingInsightCard, cardPresets } from "./FloatingInsight";
import { OrionVoiceWave } from "./OrionVoiceWave";
import { OrionStateIndicator, OrionState } from "./OrionStateIndicator";

interface Particle {
  x: number;
  y: number;
  radius: number;
  angle: number;
  speed: number;
  distance: number;
  alpha: number;
  color: string;
}

interface OrbitalRing {
  radiusX: number;
  radiusY: number;
  tilt: number;
  rotation: number;
  speed: number;
  color: string;
}

export interface OrionCoreProps {
  state?: OrionState;
  showFloatingCards?: boolean;
  showWaveform?: boolean;
  showStateLabel?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const OrionCore: React.FC<OrionCoreProps> = ({
  state = "idle",
  showFloatingCards = true,
  showWaveform = false,
  showStateLabel = false,
  size = "md",
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Size mapping for container
  const sizeClasses =
    size === "sm"
      ? "max-w-[320px]"
      : size === "lg"
      ? "max-w-[560px]"
      : "max-w-[500px]";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = 540);
    let height = (canvas.height = 540);

    const handleResize = () => {
      if (containerRef.current && canvas) {
        const rect = containerRef.current.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        const targetSize = Math.min(rect.width, 540);
        canvas.width = targetSize * dpr;
        canvas.height = targetSize * dpr;
        canvas.style.width = `${targetSize}px`;
        canvas.style.height = `${targetSize}px`;
        width = canvas.width;
        height = canvas.height;
        ctx.scale(dpr, dpr);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Orbital Rings Config
    const rings: OrbitalRing[] = [
      {
        radiusX: 190,
        radiusY: 70,
        tilt: Math.PI / 6,
        rotation: 0,
        speed: 0.003,
        color: "rgba(56, 189, 248, 0.4)",
      },
      {
        radiusX: 160,
        radiusY: 60,
        tilt: -Math.PI / 4,
        rotation: Math.PI / 3,
        speed: -0.004,
        color: "rgba(139, 92, 246, 0.45)",
      },
      {
        radiusX: 130,
        radiusY: 45,
        tilt: Math.PI / 3,
        rotation: Math.PI / 2,
        speed: 0.005,
        color: "rgba(37, 99, 235, 0.5)",
      },
      {
        radiusX: 210,
        radiusY: 85,
        tilt: -Math.PI / 8,
        rotation: 1.2,
        speed: 0.002,
        color: "rgba(34, 211, 238, 0.35)",
      },
    ];

    // Atmospheric Floating Particles
    const particleCount = 45;
    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: 0,
      y: 0,
      radius: Math.random() * 1.8 + 0.6,
      angle: Math.random() * Math.PI * 2,
      speed: (Math.random() * 0.005 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
      distance: Math.random() * 170 + 30,
      alpha: Math.random() * 0.7 + 0.3,
      color: Math.random() > 0.4 ? "#38BDF8" : Math.random() > 0.5 ? "#8B5CF6" : "#60A5FA",
    }));

    let pulseTime = 0;
    let wavePulse = 0;
    let scanAngle = 0;

    // Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const displayWidth = width / (window.devicePixelRatio || 1);
      const displayHeight = height / (window.devicePixelRatio || 1);
      const centerX = displayWidth / 2;
      const centerY = displayHeight / 2;

      // State-driven multipliers
      let pulseSpeed = 0.02;
      let ringSpeedMult = 1.0;
      let particleSpeedMult = 1.0;
      let auraAlphaMult = 1.0;
      let coreColor1 = "#FFFFFF";
      let coreColor2 = "#38BDF8";
      let coreColor3 = "#2563EB";

      if (state === "listening") {
        pulseSpeed = 0.06;
        ringSpeedMult = 1.5;
        particleSpeedMult = 2.0;
        auraAlphaMult = 1.6;
        coreColor2 = "#10B981"; // Emerald tone during listening
      } else if (state === "thinking") {
        pulseSpeed = 0.08;
        ringSpeedMult = 3.0;
        particleSpeedMult = 3.0;
        auraAlphaMult = 1.8;
        coreColor2 = "#8B5CF6"; // Violet tone during processing
        coreColor3 = "#7C3AED";
      } else if (state === "responding") {
        pulseSpeed = 0.04;
        ringSpeedMult = 1.8;
        particleSpeedMult = 1.5;
        auraAlphaMult = 1.4;
        coreColor2 = "#38BDF8"; // Electric cyan tone during response
      } else if (state === "success") {
        pulseSpeed = 0.03;
        ringSpeedMult = 1.2;
        coreColor2 = "#F59E0B"; // Gold tone on success
      }

      pulseTime += pulseSpeed;
      scanAngle += 0.03 * ringSpeedMult;
      wavePulse = (wavePulse + 0.04) % 1;

      const pulseScale = 1 + Math.sin(pulseTime) * (state === "listening" ? 0.09 : 0.05);

      // 1. Draw Outer Atmospheric Aura Radial Gradient
      const auraGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        15,
        centerX,
        centerY,
        220 * pulseScale
      );
      auraGradient.addColorStop(0, `rgba(56, 189, 248, ${0.3 * auraAlphaMult})`);
      auraGradient.addColorStop(0.35, `rgba(37, 99, 235, ${0.15 * auraAlphaMult})`);
      auraGradient.addColorStop(0.7, `rgba(139, 92, 246, ${0.08 * auraAlphaMult})`);
      auraGradient.addColorStop(1, "rgba(3, 7, 18, 0)");

      ctx.fillStyle = auraGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 230 * pulseScale, 0, Math.PI * 2);
      ctx.fill();

      // 2. Soundwave Concentric Rings (when LISTENING)
      if (state === "listening") {
        for (let i = 0; i < 3; i++) {
          const rProgress = (wavePulse + i * 0.33) % 1;
          const waveRadius = 70 + rProgress * 130;
          const waveAlpha = (1 - rProgress) * 0.45;

          ctx.beginPath();
          ctx.arc(centerX, centerY, waveRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(16, 185, 129, ${waveAlpha})`;
          ctx.lineWidth = 1.5;
          ctx.shadowColor = "#10B981";
          ctx.shadowBlur = 12;
          ctx.stroke();
        }
      }

      // 3. Scanning Beam Light (when THINKING)
      if (state === "thinking") {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(scanAngle);
        const scanGrad = ctx.createConicGradient(0, 0, 0);
        scanGrad.addColorStop(0, "rgba(139, 92, 246, 0.4)");
        scanGrad.addColorStop(0.15, "rgba(56, 189, 248, 0.15)");
        scanGrad.addColorStop(0.3, "rgba(3, 7, 18, 0)");
        scanGrad.addColorStop(1, "rgba(3, 7, 18, 0)");

        ctx.fillStyle = scanGrad;
        ctx.beginPath();
        ctx.arc(0, 0, 200, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 4. Draw Translucent Orbital Rings
      rings.forEach((ring) => {
        ring.rotation += ring.speed * ringSpeedMult;

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(ring.tilt);
        ctx.rotate(ring.rotation);

        ctx.beginPath();
        ctx.ellipse(0, 0, ring.radiusX, ring.radiusY, 0, 0, Math.PI * 2);
        ctx.strokeStyle = ring.color;
        ctx.lineWidth = 1.2;
        ctx.shadowColor = ring.color;
        ctx.shadowBlur = 10;
        ctx.stroke();

        // Orbital Node Dots
        const dotAngle = ring.rotation * 2;
        const dotX = Math.cos(dotAngle) * ring.radiusX;
        const dotY = Math.sin(dotAngle) * ring.radiusY;

        ctx.beginPath();
        ctx.arc(dotX, dotY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.shadowColor = coreColor2;
        ctx.shadowBlur = 12;
        ctx.fill();

        ctx.restore();
      });

      // 5. Draw Orbiting Particles
      particles.forEach((p) => {
        p.angle += p.speed * particleSpeedMult;
        const pX = centerX + Math.cos(p.angle) * p.distance;
        const pY = centerY + Math.sin(p.angle) * (p.distance * 0.45);

        ctx.beginPath();
        ctx.arc(pX, pY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * (0.7 + Math.sin(p.angle * 3) * 0.3);
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      // 6. Inner Intelligence Core Sphere
      const coreRadius = 55 * pulseScale;

      const coreGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        coreRadius
      );
      coreGradient.addColorStop(0, coreColor1);
      coreGradient.addColorStop(0.25, coreColor2);
      coreGradient.addColorStop(0.65, coreColor3);
      coreGradient.addColorStop(0.9, "#7C3AED");
      coreGradient.addColorStop(1, "rgba(15, 23, 42, 0.8)");

      ctx.beginPath();
      ctx.arc(centerX, centerY, coreRadius, 0, Math.PI * 2);
      ctx.fillStyle = coreGradient;
      ctx.shadowColor = coreColor2;
      ctx.shadowBlur = state === "thinking" || state === "listening" ? 60 : 45;
      ctx.fill();

      // Core Highlight Sphere
      ctx.beginPath();
      ctx.arc(centerX, centerY, coreRadius * 0.4, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
      ctx.shadowColor = "#FFFFFF";
      ctx.shadowBlur = 25;
      ctx.fill();

      // Energy Ring Line
      ctx.beginPath();
      ctx.arc(centerX, centerY, coreRadius * 0.75, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
      ctx.lineWidth = 1;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [state]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full ${sizeClasses} aspect-square flex flex-col items-center justify-center mx-auto pointer-events-auto ${className}`}
    >
      {/* Optional Top State Indicator Label */}
      {showStateLabel && (
        <div className="absolute top-2 z-30">
          <OrionStateIndicator state={state} />
        </div>
      )}

      {/* Background Radial Light Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-violet-600/25 blur-3xl animate-pulse-glow" />

      {/* Parallax Canvas Container */}
      <motion.div
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          rotateX: -mousePos.y * 0.5,
          rotateY: mousePos.x * 0.5,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* HTML5 Canvas Rendering Core & Rings */}
        <canvas
          ref={canvasRef}
          className="relative z-10 w-full h-full pointer-events-none drop-shadow-[0_0_50px_rgba(56,189,248,0.3)]"
        />

        {/* Floating Intelligence Micro Cards (if enabled) */}
        {showFloatingCards &&
          cardPresets.map((card) => <FloatingInsightCard key={card.id} card={card} />)}
      </motion.div>

      {/* Optional Bottom Voice Waveform */}
      {showWaveform && (
        <div className="absolute -bottom-4 z-30">
          <OrionVoiceWave active={state === "listening" || state === "responding"} size="md" />
        </div>
      )}
    </div>
  );
};
