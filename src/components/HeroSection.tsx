"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const heroTranslations = {
  ru: {
    eyebrow: "IT-партнёр · Астана",
    tag: "На связи · ответ за",
    tagTime: "48 ч",
    title: "Технологии, которые",
    titleItalic: "работают",
    titleTail: "на ваш бизнес.",
    lead: "SEN Digital — команда инженеров из Астаны. Помогаем бизнесу, корпорациям и государственному сектору ",
    leadStrong: "запускать и поддерживать",
    leadTail: " цифровые продукты: от лицензирования до AI и поддержки 24/7.",
    primary: "Обсудить проект",
    secondary: "Смотреть услуги",
    meta: [
      { v: "5", small: "+", k: "лет на IT-рынке Казахстана" },
      { v: "13", small: "+", k: "инженеров в команде" },
      { v: "24/7", small: "", k: "поддержка по SLA" },
    ],
  },
  kk: {
    eyebrow: "IT-серіктес · Астана",
    tag: "Байланыста · жауап",
    tagTime: "48 сағат",
    title: "Бизнесіңізге",
    titleItalic: "жұмыс істейтін",
    titleTail: "технологиялар.",
    lead: "SEN Digital — Астанадағы инженерлер тобы. Бизнеске, корпорацияларға және мемлекеттік секторға ",
    leadStrong: "цифрлық өнімдерді іске қосуға және қолдауға",
    leadTail: " көмектесеміз: лицензиялаудан AI және 24/7 қолдауға дейін.",
    primary: "Жобаны талқылау",
    secondary: "Қызметтерді көру",
    meta: [
      { v: "5", small: "+", k: "Қазақстан IT нарығындағы жыл" },
      { v: "13", small: "+", k: "командадағы инженерлер" },
      { v: "24/7", small: "", k: "SLA бойынша қолдау" },
    ],
  },
  en: {
    eyebrow: "IT partner · Astana",
    tag: "Online · reply within",
    tagTime: "48 h",
    title: "Technology that",
    titleItalic: "works",
    titleTail: "for your business.",
    lead: "SEN Digital is a team of engineers from Astana. We help businesses, corporates and the public sector ",
    leadStrong: "launch and support",
    leadTail: " digital products: from licensing to AI and 24/7 support.",
    primary: "Discuss a project",
    secondary: "Explore services",
    meta: [
      { v: "5", small: "+", k: "years on the Kazakhstan IT market" },
      { v: "13", small: "+", k: "engineers in the team" },
      { v: "24/7", small: "", k: "support under SLA" },
    ],
  },
};

interface HeroSectionProps {
  locale: string;
}

export default function HeroSection({ locale }: HeroSectionProps) {
  const t = heroTranslations[locale as keyof typeof heroTranslations] || heroTranslations.ru;

  return (
    <header id="hero" className="pt-8 pb-24 md:pb-32 relative">
      <div className="ed-container">
        <div className="hero-stage">
          <Image
            src="/assets/photo-team-portrait.jpg"
            alt="SEN Digital team"
            fill
            priority
            sizes="(max-width: 1240px) 100vw, 1240px"
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
          />
          <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 text-white">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-between items-start gap-6 flex-wrap"
            >
              <span className="eyebrow eyebrow-on-dark">{t.eyebrow}</span>
              <span className="hero-tag">
                <span className="dot" />
                {t.tag} <b>&nbsp;{t.tagTime}</b>
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="max-w-[880px]"
            >
              <h1
                className="text-white font-semibold"
                style={{
                  fontSize: "clamp(40px, 5.8vw, 84px)",
                  lineHeight: 1.02,
                  letterSpacing: "-0.028em",
                  textWrap: "balance",
                  textShadow: "0 2px 30px rgba(0,0,0,.25)",
                }}
              >
                {t.title} <em className="ital-on-dark not-italic" style={{ fontStyle: "italic", color: "#BDD0FF", fontWeight: 500 }}>{t.titleItalic}</em> {t.titleTail}
              </h1>
              <p
                className="mt-6 max-w-[56ch]"
                style={{
                  fontSize: 18,
                  lineHeight: 1.55,
                  color: "rgba(255,255,255,0.88)",
                  fontWeight: 400,
                  textShadow: "0 1px 16px rgba(0,0,0,.3)",
                }}
              >
                {t.lead}<b style={{ fontWeight: 600, color: "#fff" }}>{t.leadStrong}</b>{t.leadTail}
              </p>
              <div className="mt-8 flex flex-wrap gap-3 items-center">
                <a href={`/${locale}#contact`} className="btn-ed on-photo primary">
                  {t.primary}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
                <a href={`/${locale}#services`} className="btn-ed on-photo">
                  {t.secondary}
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 pt-8 border-t"
          style={{ borderColor: "var(--line)", maxWidth: 760 }}
        >
          {t.meta.map((m, i) => (
            <div key={i}>
              <div className="font-semibold text-ink" style={{ fontSize: 36, letterSpacing: "-0.025em", lineHeight: 1 }}>
                {m.v}
                {m.small && <small className="ml-0.5 text-blue" style={{ fontSize: 20, fontWeight: 500 }}>{m.small}</small>}
              </div>
              <div className="mt-2.5 text-muted" style={{ fontSize: 13, lineHeight: 1.5, maxWidth: "24ch" }}>
                {m.k}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </header>
  );
}
