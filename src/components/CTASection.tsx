"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ctaTranslations = {
  ru: {
    eyebrow: "Готовы начать",
    titleStart: "Расскажите задачу — мы",
    titleItalic: "предложим решение",
    titleTail: " за 48 часов.",
    lead: "Бесплатная первичная оценка. NDA по запросу. Работаем по всему Казахстану и СНГ.",
    primary: "Обсудить проект",
    secondary: "Смотреть услуги",
    contacts: [
      { v: "+7 (708) 021-18-48", label: "Звонок", href: "tel:+77080211848" },
      { v: "hello@sendigital.kz", label: "E-mail", href: "mailto:hello@sendigital.kz" },
    ],
  },
  kk: {
    eyebrow: "Бастауға дайын",
    titleStart: "Тапсырманы айтыңыз — біз",
    titleItalic: "шешім ұсынамыз",
    titleTail: " 48 сағатта.",
    lead: "Тегін бастапқы бағалау. Сұраныс бойынша NDA. Қазақстан мен ТМД бойынша жұмыс істейміз.",
    primary: "Жобаны талқылау",
    secondary: "Қызметтерді көру",
    contacts: [
      { v: "+7 (708) 021-18-48", label: "Қоңырау", href: "tel:+77080211848" },
      { v: "hello@sendigital.kz", label: "E-mail", href: "mailto:hello@sendigital.kz" },
    ],
  },
  en: {
    eyebrow: "Ready to start",
    titleStart: "Tell us the task — we'll come back with",
    titleItalic: "a plan",
    titleTail: " in 48 hours.",
    lead: "Free initial assessment. NDA on request. We work across Kazakhstan and the CIS.",
    primary: "Discuss a project",
    secondary: "Explore services",
    contacts: [
      { v: "+7 (708) 021-18-48", label: "Call", href: "tel:+77080211848" },
      { v: "hello@sendigital.kz", label: "E-mail", href: "mailto:hello@sendigital.kz" },
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
    <section className="ed-section">
      <div className="ed-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="cta-card"
          ref={ref}
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 items-center">
            <div>
              <span className="eyebrow eyebrow-on-dark">{t.eyebrow}</span>
              <h2
                className="text-white font-semibold mt-4"
                style={{ fontSize: "clamp(34px, 4vw, 54px)", lineHeight: 1.06, letterSpacing: "-0.024em", textWrap: "balance" }}
              >
                {t.titleStart} <em className="not-italic" style={{ fontStyle: "italic", color: "#BDD0FF", fontWeight: 500 }}>{t.titleItalic}</em>{t.titleTail}
              </h2>
              <p className="mt-5 max-w-[46ch]" style={{ fontSize: 16, color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}>
                {t.lead}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
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
            </div>
            <div className="flex flex-col gap-3">
              {t.contacts.map((c) => (
                <a
                  key={c.v}
                  href={c.href}
                  className="flex justify-between items-center px-5 py-4 rounded-[14px] transition-all"
                  style={{
                    border: "1px solid rgba(255,255,255,0.14)",
                    fontSize: 14.5,
                    color: "#fff",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
                  }}
                >
                  <b style={{ fontWeight: 600 }}>{c.v}</b>
                  <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500 }}>
                    {c.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
