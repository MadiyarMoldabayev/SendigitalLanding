"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Card3D from "./3DCard";

const whyUsTranslations = {
  ru: {
    badge: "Почему выбирают нас",
    title: "Почему выбирают нас",
    items: [
      "Экспертиза в широком спектре IT-решений",
      "Индивидуальный подход к каждому проекту",
      "Опыт работы с госорганами и нацкомпаниями",
      "Официальные партнёры мировых IT-платформ",
      "Реализуем цифровую трансформацию «под ключ»",
      "Строгие стандарты безопасности и защиты данных",
    ],
  },
  kk: {
    badge: "Неге бізді таңдайды",
    title: "Неге бізді таңдайды",
    items: [
      "IT-шешімдердің кең спектріндегі эксперттік",
      "Әрбір жобаға жеке тәсіл",
      "Мемлекеттік органдар мен ұлттық компаниялармен жұмыс тәжірибесі",
      "Әлемдік IT-платформалардың ресми серіктестері",
      "Цифрлық трансформацияны «кілтке дейін» жүзеге асырамыз",
      "Қауіпсіздік пен деректерді қорғау бойынша қатаң стандарттар",
    ],
  },
  en: {
    badge: "Why Choose Us",
    title: "Why Choose Us",
    items: [
      "Expertise in a wide range of IT solutions",
      "Individual approach to each project",
      "Experience working with government agencies and national companies",
      "Official partners of world IT platforms",
      "We implement digital transformation 'turnkey'",
      "Strict standards of security and data protection",
    ],
  },
};

const icons = [
  <svg key="0" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
  <svg key="1" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
  <svg key="2" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>,
  <svg key="3" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  <svg key="4" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>,
  <svg key="5" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>,
];

const colors = [
  "from-primary to-blue-600",
  "from-secondary to-purple-600",
  "from-accent to-green-600",
  "from-orange-500 to-amber-600",
  "from-pink-500 to-rose-600",
  "from-cyan-500 to-teal-600",
];

interface WhyUsSectionProps {
  locale: string;
}

export default function WhyUsSection({ locale }: WhyUsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = whyUsTranslations[locale as keyof typeof whyUsTranslations] || whyUsTranslations.ru;

  return (
    <section id="whyus" className="section-padding bg-gray-50 relative" ref={ref}>
      {/* Background effect */}
      <div className="absolute inset-0 mesh-bg opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            {t.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item, index) => (
            <Card3D key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass border-2 border-gray-200/50 rounded-3xl p-6 card-hover relative overflow-hidden group"
              >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${colors[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors[index]} p-[1px] mb-4 relative z-10`}>
                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center text-primary">
                  {icons[index]}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors relative z-10">
                {item}
              </h3>
              
              {/* Bottom gradient line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              </motion.div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}

