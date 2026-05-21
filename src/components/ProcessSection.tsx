"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const processTranslations = {
  ru: {
    eyebrow: "Как мы работаем",
    title: "Прозрачный процесс — без сюрпризов в смете",
    subtitle: "Фиксируем объём, сроки и результат до старта. Заказчик в любой момент видит, где находится проект.",
    steps: [
      {
        n: "01",
        title: "Аудит и стратегия",
        description: "Изучаем процессы, инфраструктуру и боли. Готовим карту решений и оцениваем экономику.",
        outcomes: ["Анализ as-is", "To-be архитектура", "Roadmap внедрения"],
      },
      {
        n: "02",
        title: "Дизайн и подбор стека",
        description: "Подбираем оптимальный стек: 1С, ERP, BI, ML, облако. Согласуем интеграции и безопасность.",
        outcomes: ["Технический дизайн", "Список лицензий", "Согласование с командой"],
      },
      {
        n: "03",
        title: "Внедрение и разработка",
        description: "Запускаем итерациями, передаём промежуточные результаты, обучаем сотрудников.",
        outcomes: ["MVP за 4–8 недель", "Документация", "Передача исходного кода"],
      },
      {
        n: "04",
        title: "Поддержка и развитие",
        description: "SLA, мониторинг и регулярные ретро. Развиваем продукт по бэклогу заказчика.",
        outcomes: ["24/7 поддержка", "Регулярные апдейты", "Quarterly business review"],
      },
    ],
  },
  kk: {
    eyebrow: "Қалай жұмыс істейміз",
    title: "Ашық процесс — сметада тосын сыйсыз",
    subtitle: "Көлемді, мерзімді және нәтижені іске қосылғанға дейін бекітеміз. Тапсырыс беруші жобаның қай кезеңде екенін кез келген уақытта көреді.",
    steps: [
      {
        n: "01",
        title: "Аудит және стратегия",
        description: "Процестерді, инфрақұрылымды және ауыртпалық нүктелерді зерттейміз. Шешімдер картасын дайындаймыз.",
        outcomes: ["As-is талдау", "To-be архитектура", "Енгізу жоспары"],
      },
      {
        n: "02",
        title: "Дизайн және стекті таңдау",
        description: "Оңтайлы стекті таңдаймыз: 1С, ERP, BI, ML, бұлт. Интеграция мен қауіпсіздікті келісеміз.",
        outcomes: ["Техникалық дизайн", "Лицензиялар тізімі", "Командамен келісу"],
      },
      {
        n: "03",
        title: "Енгізу және әзірлеу",
        description: "Итерациялармен жүзеге асырамыз, аралық нәтижелерді береміз, қызметкерлерді оқытамыз.",
        outcomes: ["4–8 аптада MVP", "Құжаттама", "Бастапқы кодты беру"],
      },
      {
        n: "04",
        title: "Қолдау және даму",
        description: "SLA, мониторинг және тұрақты ретро. Өнімді тапсырыс берушінің бэклогі бойынша дамытамыз.",
        outcomes: ["24/7 қолдау", "Тұрақты жаңартулар", "Quarterly business review"],
      },
    ],
  },
  en: {
    eyebrow: "How we work",
    title: "A transparent process — no surprises in the bill",
    subtitle: "Scope, timing and outcomes locked before kick-off. The customer can see exactly where the project stands at any moment.",
    steps: [
      {
        n: "01",
        title: "Audit & strategy",
        description: "We study processes, infrastructure and pain points. We prepare a solution map and project economics.",
        outcomes: ["As-is analysis", "To-be architecture", "Rollout roadmap"],
      },
      {
        n: "02",
        title: "Design & stack selection",
        description: "We pick the optimal stack: 1C, ERP, BI, ML, cloud. We align on integrations and security.",
        outcomes: ["Technical design", "Licence list", "Alignment with your team"],
      },
      {
        n: "03",
        title: "Build & rollout",
        description: "We deliver in iterations, hand over intermediate results and train staff.",
        outcomes: ["MVP in 4–8 weeks", "Documentation", "Source code handover"],
      },
      {
        n: "04",
        title: "Support & growth",
        description: "SLA, monitoring and regular retros. We grow the product against the customer's backlog.",
        outcomes: ["24/7 support", "Regular updates", "Quarterly business review"],
      },
    ],
  },
};

interface ProcessSectionProps {
  locale: string;
}

export default function ProcessSection({ locale }: ProcessSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = processTranslations[locale as keyof typeof processTranslations] || processTranslations.ru;

  return (
    <section id="process" className="section-padding surface-dark-soft relative overflow-hidden" ref={ref}>
      <div className="dot-grid absolute inset-0" />
      <div className="aurora w-[500px] h-[500px] rounded-full bg-secondary/20 top-[10%] right-[-150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="eyebrow eyebrow-dark mb-6">{t.eyebrow}</div>
          <h2 className="display-sm text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line on lg+ */}
          <div className="hidden lg:block absolute top-[88px] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="card-dark p-6 md:p-7 relative"
              >
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="stat-number text-4xl md:text-5xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #60a5fa, #a78bfa)" }}>
                    {step.n}
                  </span>
                  <div className="w-8 h-px bg-white/20 flex-1" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.outcomes.map((o, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                      <svg className="w-3.5 h-3.5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
