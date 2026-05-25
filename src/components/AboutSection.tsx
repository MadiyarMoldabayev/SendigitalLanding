"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const aboutTranslations = {
  ru: {
    eyebrow: "О нас",
    titleStart: "Команда разработчиков и",
    titleItalic: "аналитиков",
    titleTail: ".",
    p1: "SEN Digital — команда из Астаны: fullstack-разработчики, ML/AI-инженеры, продуктовый дизайнер и финансовые аналитики. У большинства профильное образование в CS, инженерии и экономике.",
    p2: "Берём проект целиком: аудит, дизайн, разработка и передача. Исходный код, документация и все права остаются у клиента.",
    floatLabel: "Офис",
    floatCity: "Астана, Казахстан",
  },
  kk: {
    eyebrow: "Біз туралы",
    titleStart: "Әзірлеушілер мен",
    titleItalic: "талдаушылар",
    titleTail: " тобы.",
    p1: "SEN Digital — Астанадағы топ: fullstack-әзірлеушілер, ML/AI-инженерлер, өнім дизайнері және қаржы талдаушылары. Көпшілігінде CS, инженерия және экономика бойынша білім бар.",
    p2: "Жобаны толық аламыз: аудит, дизайн, әзірлеу және беру. Бастапқы код, құжаттама және барлық құқықтар клиентте қалады.",
    floatLabel: "Кеңсе",
    floatCity: "Астана, Қазақстан",
  },
  en: {
    eyebrow: "About",
    titleStart: "A team of developers and",
    titleItalic: "analysts",
    titleTail: ".",
    p1: "SEN Digital is a team from Astana: fullstack engineers, ML/AI engineers, a product designer and financial analysts. Most hold degrees in CS, engineering and economics.",
    p2: "We take the project end-to-end: audit, design, development and handover. Source code, documentation and all rights stay with the client.",
    floatLabel: "Office",
    floatCity: "Astana, Kazakhstan",
  },
};

interface AboutSectionProps {
  locale: string;
}

export default function AboutSection({ locale }: AboutSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = aboutTranslations[locale as keyof typeof aboutTranslations] || aboutTranslations.ru;

  return (
    <section id="about" className="ed-section" ref={ref}>
      <div className="ed-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[20px] bg-[#222]"
            style={{ aspectRatio: "5 / 4" }}
          >
            <Image
              src="/assets/photo-meeting-wide.jpg"
              alt="SEN Digital team meeting"
              fill
              sizes="(max-width: 1100px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              className="absolute left-6 bottom-6 rounded-xl px-[18px] py-[14px]"
              style={{
                background: "rgba(255,255,255,0.94)",
                backdropFilter: "blur(6px)",
                fontSize: 12.5,
                color: "var(--ink-2)",
                fontWeight: 500,
                letterSpacing: "0.02em",
                border: "1px solid var(--line)",
              }}
            >
              <b className="text-blue mr-1.5" style={{ fontWeight: 600 }}>{t.floatLabel}</b>
              {t.floatCity}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="eyebrow">{t.eyebrow}</span>
            <h2
              className="font-semibold text-ink mt-4"
              style={{ fontSize: "clamp(30px, 3.8vw, 48px)", lineHeight: 1.08, letterSpacing: "-0.022em", textWrap: "balance" }}
            >
              {t.titleStart} <em className="ital-blue not-italic" style={{ fontStyle: "italic" }}>{t.titleItalic}</em>{t.titleTail}
            </h2>
            <p className="mt-5 text-ink-2 max-w-[52ch]" style={{ fontSize: 16, lineHeight: 1.7 }}>{t.p1}</p>
            <p className="mt-3.5 text-ink-2 max-w-[52ch]" style={{ fontSize: 16, lineHeight: 1.7 }}>{t.p2}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
