"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ctaTranslations = {
  ru: {
    eyebrow: "Готовы начать",
    title: "Расскажите о задаче — мы предложим решение за 48 часов",
    subtitle: "Свяжитесь с нами для бесплатной консультации. Поймём задачу, оценим объём, предложим стек и стоимость без воды.",
    primary: "Получить консультацию",
    secondary: "Посмотреть услуги",
    bullets: [
      "Бесплатная первичная оценка",
      "NDA по запросу",
      "Ответ в течение 48 часов",
    ],
  },
  kk: {
    eyebrow: "Бастауға дайын",
    title: "Тапсырмаңызды айтыңыз — 48 сағат ішінде шешім ұсынамыз",
    subtitle: "Тегін кеңес алу үшін бізге хабарласыңыз. Міндетті түсінеміз, көлемді бағалаймыз, стек пен құнды артық сөзсіз ұсынамыз.",
    primary: "Кеңес алу",
    secondary: "Қызметтерді көру",
    bullets: [
      "Тегін бастапқы бағалау",
      "Сұраныс бойынша NDA",
      "48 сағат ішінде жауап",
    ],
  },
  en: {
    eyebrow: "Ready to start",
    title: "Tell us the task — we'll come back with a plan in 48 hours",
    subtitle: "Reach out for a free consultation. We'll grasp the problem, estimate the scope and propose stack and pricing — no fluff.",
    primary: "Get consultation",
    secondary: "Explore services",
    bullets: [
      "Free initial assessment",
      "NDA on request",
      "Reply within 48 hours",
    ],
  },
};

interface CTASectionProps {
  locale: string;
}

export default function CTASection({ locale }: CTASectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = ctaTranslations[locale as keyof typeof ctaTranslations] || ctaTranslations.ru;

  return (
    <section className="py-12 md:py-20 bg-white relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] surface-dark px-6 sm:px-10 md:px-16 py-14 md:py-20"
        >
          <div className="aurora w-[500px] h-[500px] rounded-full bg-primary/30 top-[-150px] right-[-150px]" />
          <div className="aurora w-[400px] h-[400px] rounded-full bg-secondary/30 bottom-[-100px] left-[-100px]" style={{ animationDelay: "5s" }} />
          <div className="dot-grid absolute inset-0 opacity-50" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <div className="eyebrow eyebrow-dark mb-5">{t.eyebrow}</div>
              <h2 className="display-sm text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
                {t.title}
              </h2>
              <p className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            <div className="lg:col-span-2 flex flex-col items-stretch gap-4">
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <a href={`/${locale}#contact`} className="btn-gradient text-center">
                  {t.primary}
                </a>
                <a href={`/${locale}#services`} className="btn-ghost text-center">
                  {t.secondary}
                </a>
              </div>
              <ul className="mt-2 space-y-2 text-sm text-gray-300">
                {t.bullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
