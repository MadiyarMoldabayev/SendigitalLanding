"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const problemsTranslations = {
  ru: {
    badge: "Задачи, которые мы решаем",
    title: "К нам обращаются, когда возникают следующие проблемы",
    problems: [
      {
        title: "Устаревшая IT-инфраструктура",
        description: "Системы тормозят работу, не масштабируются и требуют постоянных «костылей»",
      },
      {
        title: "Ручные и разрозненные процессы",
        description: "Бухгалтерия, кадры, продажи и склад работают в разных таблицах, данные теряются",
      },
      {
        title: "Сложности с лицензированием ПО",
        description: "Покупка, продление и легализация программного обеспечения занимают месяцы",
      },
      {
        title: "Нет прозрачной аналитики",
        description: "Руководство принимает решения «вслепую» — нет BI, дашбордов и единой картины",
      },
      {
        title: "Риски безопасности и потери данных",
        description: "Отсутствуют резервное копирование, мониторинг и контроль доступа",
      },
      {
        title: "Перегрузка внутреннего IT-отдела",
        description: "Команда тонет в рутине и не успевает развивать стратегические задачи",
      },
    ],
  },
  kk: {
    badge: "Шешетін мәселелеріміз",
    title: "Бізге келесі мәселелер туындағанда жүгінеді",
    problems: [
      {
        title: "Ескірген IT-инфрақұрылым",
        description: "Жүйелер жұмысты баяулатады, масштабталмайды және үнемі түзетуді қажет етеді",
      },
      {
        title: "Қолмен орындалатын және бытыраңқы процестер",
        description: "Бухгалтерия, кадрлар, сату және қойма әртүрлі кестелерде, деректер жоғалады",
      },
      {
        title: "БЖ лицензиялаудағы қиындықтар",
        description: "Бағдарламалық жасақтаманы сатып алу, ұзарту және заңдастыру айлап созылады",
      },
      {
        title: "Ашық аналитиканың болмауы",
        description: "Басшылық BI, дашбордсыз шешім қабылдайды — бірыңғай көрініс жоқ",
      },
      {
        title: "Қауіпсіздік және деректер жоғалу қаупі",
        description: "Резервтік көшіру, мониторинг және қол жетімділікті бақылау жоқ",
      },
      {
        title: "Ішкі IT-бөлімнің артық жүктемесі",
        description: "Команда күнделікті жұмысқа батып, стратегиялық міндеттерге үлгермейді",
      },
    ],
  },
  en: {
    badge: "Problems we solve",
    title: "Customers come to us when these problems arise",
    problems: [
      {
        title: "Outdated IT infrastructure",
        description: "Systems slow down work, don't scale and require constant workarounds",
      },
      {
        title: "Manual and disconnected processes",
        description: "Accounting, HR, sales and warehouse work in separate spreadsheets, data is lost",
      },
      {
        title: "Software licensing complexity",
        description: "Buying, renewing and legalising software takes months",
      },
      {
        title: "No transparent analytics",
        description: "Management decides blindly — no BI, dashboards or unified view",
      },
      {
        title: "Security and data loss risks",
        description: "No backups, monitoring or access control in place",
      },
      {
        title: "Overloaded internal IT team",
        description: "The team drowns in routine and has no time for strategic projects",
      },
    ],
  },
};

const icons = [
  // Server / infrastructure
  <svg key="0" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12V7a2 2 0 012-2h10a2 2 0 012 2v5M5 12v5a2 2 0 002 2h10a2 2 0 002-2v-5M5 12h14M8 8h.01M8 16h.01" />
  </svg>,
  // Spreadsheet / disconnected
  <svg key="1" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 7h18M3 12h18M3 17h18M7 3v18M17 3v18" />
  </svg>,
  // License / document
  <svg key="2" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
  // Analytics
  <svg key="3" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19V6m0 13l-3-3m3 3l3-3M15 5v13m0-13l-3 3m3-3l3 3" />
  </svg>,
  // Security
  <svg key="4" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m0 4a9 9 0 100-18 9 9 0 000 18zm0-13a4 4 0 014 4v2H8V8a4 4 0 014-4z" />
  </svg>,
  // Team overload
  <svg key="5" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

interface ProblemsSectionProps {
  locale: string;
}

export default function ProblemsSection({ locale }: ProblemsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = problemsTranslations[locale as keyof typeof problemsTranslations] || problemsTranslations.ru;

  return (
    <section id="problems" className="section-padding surface-dark relative overflow-hidden" ref={ref}>
      <div className="dot-grid absolute inset-0" />
      <div className="aurora w-[700px] h-[700px] rounded-full bg-primary/20 top-[-200px] left-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-16"
        >
          <div className="eyebrow eyebrow-dark mb-6">{t.badge}</div>
          <h2 className="display-sm text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {t.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="card-dark p-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300">
                {icons[index]}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                {problem.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
