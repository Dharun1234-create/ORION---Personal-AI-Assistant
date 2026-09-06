"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingResponseProps {
  text: string;
  speed?: number; // ms per character chunk
  onComplete?: () => void;
  className?: string;
}

export const TypingResponse: React.FC<TypingResponseProps> = ({
  text,
  speed = 22,
  onComplete,
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setDisplayedText("");
    setIsTyping(true);

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        // Stream in chunks of 1 to 3 chars for realistic AI streaming feel
        const chunkSize = Math.min(Math.floor(Math.random() * 2) + 1, text.length - currentIndex);
        currentIndex += chunkSize;
        setDisplayedText(text.slice(0, currentIndex));
      } else {
        clearInterval(interval);
        setIsTyping(false);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return (
    <span className={`inline relative font-normal leading-relaxed text-slate-200 ${className}`}>
      {displayedText}
      {isTyping && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block w-1.5 h-4 ml-1 bg-cyan-400 rounded-sm shadow-[0_0_8px_#38bdf8] align-middle"
        />
      )}
    </span>
  );
};
