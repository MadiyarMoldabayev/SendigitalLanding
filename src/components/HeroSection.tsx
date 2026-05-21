"use client";

import { motion } from "framer-motion";

const heroTranslations = {
  ru: {
    chip: "IT-партнёр для бизнеса, корпораций и госсектора",
    title: "Цифровая трансформация",
    titleHighlight: "под ваши задачи",
    subtitle: "Снимаем с заказчика все вопросы по технологиям — от лицензирования и внедрения 1С/ERP до ML-моделей и поддержки 24/7. Помогаем бизнесу, корпорациям и государственным компаниям расти на инфраструктуре, которая просто работает.",
    primaryCta: "Получить консультацию",
    secondaryCta: "Смотреть услуги",
    stats: [
      { value: "5+", label: "лет на рынке IT" },
      { value: "13+", label: "сертифицированных специалистов" },
      { value: "24/7", label: "поддержка систем" },
      { value: "100%", label: "передача исходного кода" },
    ],
    segments: ["Бизнес", "Корпорации", "Госсектор"],
    marquee: ["1С", "ERP", "BI", "Machine Learning", "DevOps", "Big Data", "AI-агенты", "Cloud", "Cyber Security", "Data Engineering"],
  },
  kk: {
    chip: "Бизнес, корпорациялар және мемлекеттік сектордың IT-серіктесі",
    title: "Цифрлық трансформация",
    titleHighlight: "сіздің міндеттеріңізге",
    subtitle: "Тапсырыс берушіден технология бойынша барлық мәселелерді шешеміз — лицензиялаудан 1С/ERP енгізуге, ML-модельдерге және 24/7 қолдауға дейін. Бизнес, корпорациялар және мемлекеттік компаниялар үшін тек жұмыс істейтін инфрақұрылым.",
    primaryCta: "Кеңес алу",
    secondaryCta: "Қызметтерді көру",
    stats: [
      { value: "5+", label: "IT нарығындағы жыл" },
      { value: "13+", label: "сертификатталған маман" },
      { value: "24/7", label: "жүйелерді қолдау" },
      { value: "100%", label: "бастапқы кодты беру" },
    ],
    segments: ["Бизнес", "Корпорациялар", "Мемлекеттік сектор"],
    marquee: ["1С", "ERP", "BI", "Machine Learning", "DevOps", "Big Data", "AI-агенттер", "Cloud", "Кибер қауіпсіздік", "Data Engineering"],
  },
  en: {
    chip: "IT partner for business, corporates and the public sector",
    title: "Digital transformation",
    titleHighlight: "built around your tasks",
    subtitle: "We take all technology worries off our clients — from software licensing and 1C/ERP rollout to ML models and 24/7 support. Helping businesses, corporates and government-owned companies grow on infrastructure that just works.",
    primaryCta: "Get consultation",
    secondaryCta: "Explore services",
    stats: [
      { value: "5+", label: "years on the IT market" },
      { value: "13+", label: "certified specialists" },
      { value: "24/7", label: "system support" },
      { value: "100%", label: "source code handover" },
    ],
    segments: ["Business", "Corporates", "Public sector"],
    marquee: ["1C", "ERP", "BI", "Machine Learning", "DevOps", "Big Data", "AI agents", "Cloud", "Cyber Security", "Data Engineering"],
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
      className="relative surface-dark overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    >
      {/* Aurora ribbons */}
      <div className="aurora w-[600px] h-[600px] rounded-full bg-primary/30 top-[-200px] left-[-200px]" />
      <div className="aurora w-[700px] h-[700px] rounded-full bg-secondary/30 top-[200px] right-[-250px]" style={{ animationDelay: "4s" }} />
      <div className="aurora w-[500px] h-[500px] rounded-full bg-accent/20 bottom-[-200px] left-[30%]" style={{ animationDelay: "8s" }} />

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      {/* Soft top fade */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 xl:px-0">
        {/* Top chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <span className="chip">
            <span className="chip-dot" />
            {t.chip}
          </span>
        </motion.div>

        {/* Massive headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="display text-center text-white text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] xl:text-[8.5rem] font-bold mb-8"
        >
          {t.title}
          <br />
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(120deg, #60a5fa 0%, #a78bfa 40%, #34d399 100%)" }}>
            {t.titleHighlight}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {t.subtitle}
        </motion.p>

        {/* Segment chips — emphasize business + corporates alongside gov */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
        >
          {t.segments.map((s, i) => (
            <span
              key={s}
              className="chip"
              style={{
                background: i === 0 ? "rgba(96, 165, 250, 0.12)" : i === 1 ? "rgba(167, 139, 250, 0.12)" : "rgba(52, 211, 153, 0.12)",
                borderColor: i === 0 ? "rgba(96, 165, 250, 0.35)" : i === 1 ? "rgba(167, 139, 250, 0.35)" : "rgba(52, 211, 153, 0.35)",
                color: i === 0 ? "#bfdbfe" : i === 1 ? "#ddd6fe" : "#a7f3d0",
              }}
            >
              {s}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a href={`/${locale}#contact`} className="btn-gradient">
            {t.primaryCta}
          </a>
          <a href={`/${locale}#services`} className="btn-ghost inline-flex items-center gap-2">
            {t.secondaryCta}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-3xl overflow-hidden bg-white/10 border border-white/10 mb-12"
        >
          {t.stats.map((s, i) => (
            <div key={i} className="bg-[#070b1c] px-6 py-6 sm:py-8 text-center">
              <div className="stat-number text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #60a5fa, #a78bfa)" }}>
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-2 leading-snug">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee of stack/industry tags */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative z-10 overflow-hidden mt-4"
        style={{ maskImage: "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)" }}
      >
        <div className="marquee">
          {[...t.marquee, ...t.marquee].map((m, i) => (
            <span
              key={i}
              className="shrink-0 mx-3 px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-gray-300 text-sm whitespace-nowrap"
            >
              {m}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 10] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
