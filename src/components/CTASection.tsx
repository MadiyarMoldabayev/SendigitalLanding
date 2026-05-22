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
      { v: "+7 (708) 021-18-48", label: "Звонок", href: "tel:+77080211848", kind: "phone" as const },
      { v: "+7 (708) 021-18-48", label: "WhatsApp", href: "https://wa.me/77080211848", kind: "whatsapp" as const },
      { v: "info@sengroup.one", label: "E-mail", href: "mailto:info@sengroup.one", kind: "email" as const },
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
      { v: "+7 (708) 021-18-48", label: "Қоңырау", href: "tel:+77080211848", kind: "phone" as const },
      { v: "+7 (708) 021-18-48", label: "WhatsApp", href: "https://wa.me/77080211848", kind: "whatsapp" as const },
      { v: "info@sengroup.one", label: "E-mail", href: "mailto:info@sengroup.one", kind: "email" as const },
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
      { v: "+7 (708) 021-18-48", label: "Call", href: "tel:+77080211848", kind: "phone" as const },
      { v: "+7 (708) 021-18-48", label: "WhatsApp", href: "https://wa.me/77080211848", kind: "whatsapp" as const },
      { v: "info@sengroup.one", label: "E-mail", href: "mailto:info@sengroup.one", kind: "email" as const },
    ],
  },
};

function ContactIcon({ kind }: { kind: "phone" | "whatsapp" | "email" }) {
  if (kind === "whatsapp") {
    return (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    );
  }
  if (kind === "phone") {
    return (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5.5C3 4.12 4.12 3 5.5 3h1.4c.55 0 1.04.36 1.2.88l1.2 3.6a1.25 1.25 0 01-.43 1.4l-1.3 1a13 13 0 005.55 5.55l1-1.3a1.25 1.25 0 011.4-.43l3.6 1.2c.52.16.88.65.88 1.2v1.4c0 1.38-1.12 2.5-2.5 2.5C10.6 20 4 13.4 4 5.5z" />
      </svg>
    );
  }
  return (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

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
                  key={c.label}
                  href={c.href}
                  target={c.kind === "whatsapp" ? "_blank" : undefined}
                  rel={c.kind === "whatsapp" ? "noopener noreferrer" : undefined}
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
                  <span className="flex items-center gap-3">
                    <span
                      className="flex items-center justify-center rounded-full"
                      style={{
                        width: 32,
                        height: 32,
                        background: c.kind === "whatsapp" ? "#22A06B" : "rgba(255,255,255,0.08)",
                        color: c.kind === "whatsapp" ? "#fff" : "rgba(255,255,255,0.85)",
                      }}
                    >
                      <ContactIcon kind={c.kind} />
                    </span>
                    <b style={{ fontWeight: 600 }}>{c.v}</b>
                  </span>
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
