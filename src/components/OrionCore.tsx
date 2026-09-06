"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FloatingInsightCard, cardPresets } from "./FloatingInsight";

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
  dashArray?: number[];
}

export const OrionCore: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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
        const size = Math.min(rect.width, 540);
        canvas.width = size * dpr;
        canvas.height = size * dpr;
        canvas.style.width = `${size}px`;
        canvas.style.height = `${size}px`;
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

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const displayWidth = width / (window.devicePixelRatio || 1);
      const displayHeight = height / (window.devicePixelRatio || 1);
      const centerX = displayWidth / 2;
      const centerY = displayHeight / 2;

      pulseTime += 0.02;
      const pulseScale = 1 + Math.sin(pulseTime) * 0.05;

      // 1. Draw Outer Atmospheric Aura Radial Gradient
      const auraGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        15,
        centerX,
        centerY,
        220 * pulseScale
      );
      auraGradient.addColorStop(0, "rgba(56, 189, 248, 0.3)");
      auraGradient.addColorStop(0.35, "rgba(37, 99, 235, 0.15)");
      auraGradient.addColorStop(0.7, "rgba(139, 92, 246, 0.08)");
      auraGradient.addColorStop(1, "rgba(3, 7, 18, 0)");

      ctx.fillStyle = auraGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 230 * pulseScale, 0, Math.PI * 2);
      ctx.fill();

      // 2. Draw Translucent Orbital Rings
      rings.forEach((ring) => {
        ring.rotation += ring.speed;

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

        // Draw small orbital node dots on the ring
        const dotAngle = ring.rotation * 2;
        const dotX = Math.cos(dotAngle) * ring.radiusX;
        const dotY = Math.sin(dotAngle) * ring.radiusY;

        ctx.beginPath();
        ctx.arc(dotX, dotY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.shadowColor = "#38BDF8";
        ctx.shadowBlur = 12;
        ctx.fill();

        ctx.restore();
      });

      // 3. Draw Orbiting Particles
      particles.forEach((p) => {
        p.angle += p.speed;
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

      // 4. Inner Glowing Intelligence Spherical Core
      const coreRadius = 55 * pulseScale;

      // Core Back Light
      const coreGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        coreRadius
      );
      coreGradient.addColorStop(0, "#FFFFFF");
      coreGradient.addColorStop(0.25, "#38BDF8");
      coreGradient.addColorStop(0.65, "#2563EB");
      coreGradient.addColorStop(0.9, "#7C3AED");
      coreGradient.addColorStop(1, "rgba(15, 23, 42, 0.8)");

      ctx.beginPath();
      ctx.arc(centerX, centerY, coreRadius, 0, Math.PI * 2);
      ctx.fillStyle = coreGradient;
      ctx.shadowColor = "#38BDF8";
      ctx.shadowBlur = 45;
      ctx.fill();

      // Inner Core Highlights & Geometric Energy Lattice
      ctx.beginPath();
      ctx.arc(centerX, centerY, coreRadius * 0.4, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
      ctx.shadowColor = "#FFFFFF";
      ctx.shadowBlur = 20;
      ctx.fill();

      // Core energy ring line
      ctx.beginPath();
      ctx.arc(centerX, centerY, coreRadius * 0.75, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
      ctx.lineWidth = 1;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      className="relative w-full max-w-[500px] aspect-square flex items-center justify-center mx-auto pointer-events-auto"
    >
      {/* Background Radial Light Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-violet-600/25 blur-3xl animate-pulse-glow" />

      {/* Parallax Container */}
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
          className="relative z-10 w-full h-full max-w-[500px] max-h-[500px] pointer-events-none drop-shadow-[0_0_50px_rgba(56,189,248,0.3)]"
        />

        {/* Floating Intelligence Micro Cards */}
        {cardPresets.map((card) => (
          <FloatingInsightCard key={card.id} card={card} />
        ))}
      </motion.div>
    </div>
  );
};
