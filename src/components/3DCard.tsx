"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useReducedMotion } from "framer-motion";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card3D({ children, className = "" }: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Optimized spring config
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  // Throttled mouse move handler
  let rafId: number | null = null;
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current || prefersReducedMotion) return;

    if (rafId) {
      cancelAnimationFrame(rafId);
    }

    rafId = requestAnimationFrame(() => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;

      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    });
  }, [x, y, prefersReducedMotion]);

  const handleMouseLeave = useCallback(() => {
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
    x.set(0);
    y.set(0);
    setIsHovered(false);
  }, [x]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      className={`relative ${className}`}
      whileHover={{ scale: 1.01 }} // Reduced from 1.02
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    >
      <div
        style={{
          transform: "translateZ(20px)",
        }}
        className="relative z-10"
      >
        {children}
      </div>
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/15 via-secondary/15 to-accent/15 blur-xl -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.div>
  );
}
