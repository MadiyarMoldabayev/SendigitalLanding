"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "framer-motion";

export default function CursorEffect() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const prefersReducedMotion = useReducedMotion();

  const springConfig = { damping: 30, stiffness: 400 }; // Optimized
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (prefersReducedMotion) return;

    // Hide cursor on mobile
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    setIsVisible(true);

    let rafId: number | null = null;
    const moveCursor = (e: MouseEvent) => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Use event delegation instead of adding listeners to each element
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);
    window.addEventListener("mousemove", moveCursor);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, [cursorX, cursorY, prefersReducedMotion]);

  if (!isVisible || prefersReducedMotion) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-primary/20 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          scale: isHovering ? 1.8 : 1, // Reduced from 2
          willChange: "transform",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999]"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          willChange: "transform",
        }}
      />
    </>
  );
}
