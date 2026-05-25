"use client";

import Image from "next/image";
import { motion } from "framer-motion";


const heroTranslations = {
  ru: {
    title: "Технологии, которые",
    titleItalic: "работают",
    titleTail: "на ваш бизнес.",
    lead: "SEN Digital — команда разработчиков и аналитиков из Астаны. Помогаем бизнесу, корпорациям и государственному сектору ",
    leadStrong: "запускать",
    leadTail: " цифровые продукты: от лицензирования до AI.",
    primary: "Обсудить проект",
    secondary: "Смотреть услуги",
  },
  kk: {
    title: "Бизнесіңізге",
    titleItalic: "жұмыс істейтін",
    titleTail: "технологиялар.",
    lead: "SEN Digital — Астанадағы әзірлеушілер мен талдаушылар тобы. Бизнеске, корпорацияларға және мемлекеттік секторға ",
    leadStrong: "цифрлық өнімдерді іске қосуға",
    leadTail: " көмектесеміз: лицензиялаудан AI-ге дейін.",
    primary: "Жобаны талқылау",
    secondary: "Қызметтерді көру",
  },
  en: {
    title: "Technology that",
    titleItalic: "works",
    titleTail: "for your business.",
    lead: "SEN Digital is a team of developers and analysts from Astana. We help businesses, corporates and the public sector ",
    leadStrong: "launch",
    leadTail: " digital products: from licensing to AI.",
    primary: "Discuss a project",
    secondary: "Explore services",
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
          <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 text-white">
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
                {t.title} <em className="not-italic" style={{ fontStyle: "italic", color: "#BDD0FF", fontWeight: 500 }}>{t.titleItalic}</em> {t.titleTail}
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
      </div>
    </header>
  );
}
