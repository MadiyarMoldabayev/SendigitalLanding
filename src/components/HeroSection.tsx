"use client";

import { lazy, Suspense } from "react";
import { motion } from "framer-motion";

// Lazy load particles
const ParticlesBackground = lazy(() => import("./ParticlesBackground"));

const heroTranslations = {
  ru: {
    title: "Технологические решения",
    titleHighlight: "под Ваши потребности",
    subtitle1: "Лицензирование, внедрение, поддержка и цифровая инфраструктура — всё для устойчивой работы ваших систем.",
    subtitle2: "Мы рядом там, где важны качество, точность и надежная реализация.",
    cta: "Получить консультацию",
  },
  kk: {
    title: "Технологиялық шешімдер",
    titleHighlight: "сіздің қажеттіліктеріңізге",
    subtitle1: "Лицензиялау, енгізу, қолдау және цифрлық инфрақұрылым — жүйелеріңіздің тұрақты жұмысы үшін бәрі.",
    subtitle2: "Біз сапа, дәлдік және сенімді орындау маңызды болған жерде тұрмыз.",
    cta: "Кеңес алу",
  },
  en: {
    title: "Technology Solutions",
    titleHighlight: "for Your Needs",
    subtitle1: "Licensing, implementation, support and digital infrastructure — everything for stable operation of your systems.",
    subtitle2: "We are there where quality, accuracy and reliable implementation matter.",
    cta: "Get Consultation",
  },
};

interface HeroSectionProps {
  locale: string;
}

export default function HeroSection({ locale }: HeroSectionProps) {
  const t = heroTranslations[locale as keyof typeof heroTranslations] || heroTranslations.ru;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden mesh-bg"
    >
      {/* Particles background - lazy loaded */}
      <Suspense fallback={null}>
        <ParticlesBackground />
      </Suspense>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Floating orbs - optimized */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[10%] w-96 h-96 bg-primary/10 rounded-full blur-[120px] will-change-transform"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-secondary/10 rounded-full blur-[100px] will-change-transform"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] right-[30%] w-64 h-64 bg-accent/8 rounded-full blur-[80px] will-change-transform"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 xl:px-0 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-8"
        >
          <span className="text-gray-900">{t.title}</span>
          <br />
          <span className="gradient-text">{t.titleHighlight}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto mb-6 leading-relaxed"
        >
          {t.subtitle1}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {t.subtitle2}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href={`/${locale}#contact`} className="btn-primary text-base">
            {t.cta}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-300/50 rounded-full flex justify-center pt-2 backdrop-blur-sm bg-white/50"
        >
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 10] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
