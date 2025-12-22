"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useReducedMotion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function MagneticButton({ children, className = "", href, onClick, type, disabled }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Optimized spring config
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]); // Reduced
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]); // Reduced

  // Throttled mouse move handler
  let rafId: number | null = null;
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current || disabled || prefersReducedMotion) return;

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
  }, [x, y, disabled, prefersReducedMotion]);

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

  const Component = href ? motion.a : motion.button;

  if (prefersReducedMotion) {
    const BaseComponent = href ? "a" : "button";
    return (
      <BaseComponent
        ref={ref as any}
        href={href}
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={className}
      >
        {children}
      </BaseComponent>
    );
  }

  return (
    <Component
      ref={ref as any}
      href={href}
      onClick={onClick}
      type={type}
      disabled={disabled}
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
      whileHover={disabled ? {} : { scale: 1.03 }} // Reduced from 1.05
      whileTap={disabled ? {} : { scale: 0.97 }} // Reduced from 0.95
    >
      <span
        style={{
          transform: "translateZ(20px)",
        }}
        className="relative z-10 block"
      >
        {children}
      </span>
      {isHovered && !disabled && (
        <motion.div
          className="absolute inset-0 rounded-full bg-primary/15 blur-xl -z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.1 }} // Reduced
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </Component>
  );
}
