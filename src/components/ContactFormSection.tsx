"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const contactTranslations = {
  ru: {
    eyebrow: "Контакты",
    title: "Оставьте заявку — свяжемся в ближайшее время",
    lead: "Поймём задачу, оценим объём, предложим стек и стоимость — без воды. Подпишем NDA до старта обсуждения, если нужно.",
    channels: [
      { v: "+7 (708) 021-18-48", label: "Телефон", href: "tel:+77080211848", kind: "phone" as const },
      { v: "+7 (708) 021-18-48", label: "WhatsApp", href: "https://wa.me/77080211848", kind: "whatsapp" as const },
      { v: "info@sengroup.one", label: "E-mail", href: "mailto:info@sengroup.one", kind: "email" as const },
      { v: "Астана, Казахстан", label: "2GIS", href: "https://2gis.kz/astana/firm/70000001112636040", kind: "map" as const },
    ],
    nameLabel: "Имя *",
    namePlaceholder: "Как к вам обращаться",
    phoneLabel: "Телефон *",
    phonePlaceholder: "+7 (___) ___-__-__",
    emailLabel: "E-mail *",
    emailPlaceholder: "you@company.kz",
    messageLabel: "Сообщение",
    messagePlaceholder: "Коротко опишите задачу, бюджет и сроки. Вернёмся с предложением за 48 часов.",
    submit: "Отправить заявку",
    sending: "Отправка…",
    note: "Отправляя форму, вы соглашаетесь с политикой конфиденциальности.",
    success: "Заявка отправлена",
    successDesc: "Мы свяжемся с вами в ближайшее время.",
    sendMore: "Отправить ещё",
    error: "Произошла ошибка при отправке. Попробуйте позже.",
  },
  kk: {
    eyebrow: "Байланыс",
    title: "Өтінім қалдырыңыз — жақын арада хабарласамыз",
    lead: "Тапсырмаңызды түсінеміз, көлемді бағалаймыз, стек пен құнды артық сөзсіз ұсынамыз. Қажет болса, талқылау басталғанға дейін NDA жасасамыз.",
    channels: [
      { v: "+7 (708) 021-18-48", label: "Телефон", href: "tel:+77080211848", kind: "phone" as const },
      { v: "+7 (708) 021-18-48", label: "WhatsApp", href: "https://wa.me/77080211848", kind: "whatsapp" as const },
      { v: "info@sengroup.one", label: "E-mail", href: "mailto:info@sengroup.one", kind: "email" as const },
      { v: "Астана, Қазақстан", label: "2GIS", href: "https://2gis.kz/astana/firm/70000001112636040", kind: "map" as const },
    ],
    nameLabel: "Аты *",
    namePlaceholder: "Қалай атаймыз",
    phoneLabel: "Телефон *",
    phonePlaceholder: "+7 (___) ___-__-__",
    emailLabel: "E-mail *",
    emailPlaceholder: "you@company.kz",
    messageLabel: "Хабарлама",
    messagePlaceholder: "Тапсырманы, бюджетті және мерзімдерді қысқаша жазыңыз. 48 сағатта ұсыныспен ораламыз.",
    submit: "Өтінім жіберу",
    sending: "Жіберілуде…",
    note: "Форманы жіберу арқылы құпиялылық саясатымен келісесіз.",
    success: "Өтінім жіберілді",
    successDesc: "Жақын арада сізбен байланысамыз.",
    sendMore: "Тағы жіберу",
    error: "Жіберу кезінде қате кетті. Кейінірек қайталап көріңіз.",
  },
  en: {
    eyebrow: "Contact",
    title: "Submit a request — we'll be in touch shortly",
    lead: "We'll grasp the problem, estimate the scope and propose a stack and price — no fluff. NDA on request before any discussion.",
    channels: [
      { v: "+7 (708) 021-18-48", label: "Phone", href: "tel:+77080211848", kind: "phone" as const },
      { v: "+7 (708) 021-18-48", label: "WhatsApp", href: "https://wa.me/77080211848", kind: "whatsapp" as const },
      { v: "info@sengroup.one", label: "E-mail", href: "mailto:info@sengroup.one", kind: "email" as const },
      { v: "Astana, Kazakhstan", label: "2GIS", href: "https://2gis.kz/astana/firm/70000001112636040", kind: "map" as const },
    ],
    nameLabel: "Name *",
    namePlaceholder: "How should we address you",
    phoneLabel: "Phone *",
    phonePlaceholder: "+7 (___) ___-__-__",
    emailLabel: "E-mail *",
    emailPlaceholder: "you@company.kz",
    messageLabel: "Message",
    messagePlaceholder: "Briefly describe the task, budget and timing. We'll come back with a plan within 48 hours.",
    submit: "Send request",
    sending: "Sending…",
    note: "By submitting the form you agree to the privacy policy.",
    success: "Request sent",
    successDesc: "We'll be in touch shortly.",
    sendMore: "Send another",
    error: "Something went wrong. Please try again later.",
  },
};

function ChannelIcon({ kind }: { kind: "phone" | "whatsapp" | "email" | "office" | "map" }) {
  if (kind === "whatsapp") {
    return (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M3.5 20.5l1.34-4a8.5 8.5 0 113.16 3.16L3.5 20.5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M9 9.2c0-.66.54-1.2 1.2-1.2h.5c.27 0 .51.18.6.43l.55 1.65a.65.65 0 01-.18.7l-.55.5a6.5 6.5 0 003.6 3.6l.5-.55a.65.65 0 01.7-.18l1.65.55c.25.09.43.33.43.6v.5c0 .66-.54 1.2-1.2 1.2A7.8 7.8 0 019 9.2z"
        />
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
  if (kind === "office" || kind === "map") {
    return (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 21s7-7.5 7-12a7 7 0 10-14 0c0 4.5 7 12 7 12z" />
      </svg>
    );
  }
  return (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

interface ContactFormSectionProps {
  locale: string;
}

export default function ContactFormSection({ locale }: ContactFormSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = contactTranslations[locale as keyof typeof contactTranslations] || contactTranslations.ru;

  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", honeypot: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return;
    setSubmitting(true);
    try {
      const response = await fetch("/.netlify/functions/send-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          service: "Общий запрос",
          comment: form.message,
          files: [],
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed");
      setSubmitted(true);
      setForm({ name: "", phone: "", email: "", message: "", honeypot: "" });
    } catch (err) {
      console.error(err);
      alert(t.error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="ed-section" ref={ref}>
      <div className="ed-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-14 items-start"
        >
          <div>
            <span className="eyebrow">{t.eyebrow}</span>
            <h3 className="font-semibold text-ink mt-4" style={{ fontSize: 32, letterSpacing: "-0.018em", lineHeight: 1.1 }}>
              {t.title}
            </h3>
            <p className="mt-5 text-ink-2 max-w-[38ch]" style={{ fontSize: 15, lineHeight: 1.65 }}>
              {t.lead}
            </p>
            <div className="mt-8 flex flex-col">
              {t.channels.map((c, i) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.kind === "whatsapp" || c.kind === "map" ? "_blank" : undefined}
                  rel={c.kind === "whatsapp" || c.kind === "map" ? "noopener noreferrer" : undefined}
                  className="flex justify-between items-center py-[18px] transition-colors"
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    borderTop: "1px solid var(--line)",
                    borderBottom: i === t.channels.length - 1 ? "1px solid var(--line)" : undefined,
                    color: "var(--ink)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blue)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink)")}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className="flex items-center justify-center rounded-full"
                      style={{
                        width: 34,
                        height: 34,
                        background: "var(--blue-tint)",
                        color: "var(--blue)",
                      }}
                    >
                      <ChannelIcon kind={c.kind} />
                    </span>
                    <b style={{ fontWeight: 600 }}>{c.v}</b>
                  </span>
                  <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", fontWeight: 600 }}>
                    {c.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="ok"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="bg-paper rounded-[20px] border p-10 text-center"
                style={{ borderColor: "var(--line)" }}
              >
                <div
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-5"
                  style={{ background: "#22A06B" }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-ink font-semibold" style={{ fontSize: 22 }}>{t.success}</div>
                <p className="mt-2 text-ink-2" style={{ fontSize: 15 }}>{t.successDesc}</p>
                <button onClick={() => setSubmitted(false)} className="btn-ed ghost mt-6">
                  {t.sendMore}
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="ed-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Honeypot */}
                <div className="hidden">
                  <input
                    type="text"
                    name="honeypot"
                    value={form.honeypot}
                    onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <label className="full">
                  {t.nameLabel}
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t.namePlaceholder}
                  />
                </label>
                <label>
                  {t.phoneLabel}
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder={t.phonePlaceholder}
                  />
                </label>
                <label>
                  {t.emailLabel}
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t.emailPlaceholder}
                  />
                </label>
                <label className="full">
                  {t.messageLabel}
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={t.messagePlaceholder}
                  />
                </label>

                <div className="submit">
                  <small>{t.note}</small>
                  <button type="submit" disabled={submitting} className="btn-ed primary disabled:opacity-60">
                    {submitting ? t.sending : t.submit}
                    {!submitting && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
