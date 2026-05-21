"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const resultsTranslations = {
  ru: {
    badge: "Результаты",
    title: "Что получает клиент после работы с Sen Digital",
    subtitle: "Конкретные результаты, а не «индивидуальный подход»",
    results: [
      {
        metric: "до 30%",
        label: "Снижение операционных затрат",
        description: "За счёт автоматизации рутины и оптимизации лицензий",
      },
      {
        metric: "2–3×",
        label: "Ускорение типовых операций",
        description: "Бизнес-процессы переведены в цифру с прозрачной отчётностью",
      },
      {
        metric: "24/7",
        label: "Стабильная работа систем",
        description: "Мониторинг, инциденты по SLA, регулярные обновления и бэкапы",
      },
      {
        metric: "100%",
        label: "Прозрачность по проекту",
        description: "Чек-листы, документация, передача исходного кода и обучение команды",
      },
    ],
    deliverables: {
      title: "В каждом проекте вы получаете:",
      items: [
        "Готовое к работе решение с настройкой под ваши процессы",
        "Полная документация и инструкции для сотрудников",
        "Обучение команды и пакет видеоуроков",
        "SLA на поддержку с фиксированным временем реакции",
        "Передача исходного кода и прав на разработку",
        "Гарантия на выполненные работы до 12 месяцев",
      ],
    },
  },
  kk: {
    badge: "Нәтижелер",
    title: "Sen Digital-мен жұмыс істегеннен кейін клиент не алады",
    subtitle: "«Жеке тәсіл» емес, нақты нәтижелер",
    results: [
      {
        metric: "30%-ға дейін",
        label: "Операциялық шығындарды азайту",
        description: "Күнделікті процестерді автоматтандыру және лицензияларды оңтайландыру есебінен",
      },
      {
        metric: "2–3 есе",
        label: "Типтік операцияларды жылдамдату",
        description: "Бизнес-процестер ашық есеппен цифрға көшірілді",
      },
      {
        metric: "24/7",
        label: "Жүйелердің тұрақты жұмысы",
        description: "Мониторинг, SLA бойынша оқиғалар, тұрақты жаңартулар мен резервтер",
      },
      {
        metric: "100%",
        label: "Жоба бойынша ашықтық",
        description: "Чек-парақтар, құжаттама, бастапқы код пен команданы оқыту",
      },
    ],
    deliverables: {
      title: "Әр жобада сіз аласыз:",
      items: [
        "Сіздің процестеріңізге бапталған дайын шешім",
        "Қызметкерлерге арналған толық құжаттама мен нұсқаулар",
        "Команданы оқыту және бейне сабақтар пакеті",
        "Тіркелген ден қою уақытымен қолдау бойынша SLA",
        "Бастапқы код пен әзірлеу құқықтарын беру",
        "Орындалған жұмыстарға 12 айға дейін кепілдік",
      ],
    },
  },
  en: {
    badge: "Results",
    title: "What the client gets after working with Sen Digital",
    subtitle: "Concrete results, not just an «individual approach»",
    results: [
      {
        metric: "up to 30%",
        label: "Reduction of operational costs",
        description: "Through routine automation and licensing optimisation",
      },
      {
        metric: "2–3×",
        label: "Faster routine operations",
        description: "Business processes digitised with transparent reporting",
      },
      {
        metric: "24/7",
        label: "Stable system operation",
        description: "Monitoring, SLA-bound incident response, regular updates and backups",
      },
      {
        metric: "100%",
        label: "Project transparency",
        description: "Checklists, documentation, source code handover and team training",
      },
    ],
    deliverables: {
      title: "Every project includes:",
      items: [
        "A ready-to-use solution configured for your processes",
        "Full documentation and instructions for employees",
        "Team training and a video tutorial package",
        "Support SLA with a fixed response time",
        "Handover of source code and development rights",
        "Up to 12 months warranty on delivered work",
      ],
    },
  },
};

interface ResultsSectionProps {
  locale: string;
}

export default function ResultsSection({ locale }: ResultsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = resultsTranslations[locale as keyof typeof resultsTranslations] || resultsTranslations.ru;

  return (
    <section id="results" className="section-padding bg-gradient-to-b from-gray-50 to-white relative" ref={ref}>
      <div className="absolute inset-0 mesh-bg opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            {t.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Metrics row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {t.results.map((r, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass border-2 border-accent/20 rounded-2xl p-6 text-center hover:border-accent/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-3">
                {r.metric}
              </div>
              <div className="text-base font-semibold text-gray-900 mb-2">
                {r.label}
              </div>
              <div className="text-sm text-gray-600 leading-relaxed">
                {r.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deliverables block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass border-2 border-primary/20 rounded-3xl p-8 md:p-10"
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            {t.deliverables.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {t.deliverables.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ x: -10, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.07 }}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
