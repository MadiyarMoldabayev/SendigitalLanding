"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const industriesTranslations = {
  ru: {
    eyebrow: "Для кого",
    title: "Мы помогаем там, где IT — это конкурентное преимущество",
    subtitle: "Sen Digital одинаково глубоко работает с растущим бизнесом, крупными корпорациями и государственными компаниями. Подход, документация и юридическая база — под каждый сегмент.",
    segments: [
      {
        tag: "Бизнес",
        accent: "#60a5fa",
        accentBg: "rgba(96, 165, 250, 0.10)",
        accentBorder: "rgba(96, 165, 250, 0.35)",
        title: "Быстро запускаемся, считаем юнит-экономику",
        description: "Помогаем SMB и mid-market компаниям ускорить рост без раздутого IT-штата. Закрываем лицензии, автоматизацию и сайт под ключ.",
        cases: [
          "MVP, лендинги, корпоративные сайты",
          "Автоматизация продаж, CRM и интеграций",
          "Лицензирование ПО без переплат",
          "Подключение BI-аналитики и дашбордов",
        ],
      },
      {
        tag: "Корпорации",
        accent: "#a78bfa",
        accentBg: "rgba(167, 139, 250, 0.10)",
        accentBorder: "rgba(167, 139, 250, 0.35)",
        title: "ERP, Big Data и сложные интеграции",
        description: "Работаем с предприятиями со сложной структурой: производство, ритейл, финансы. Внедряем ERP, Data Engineering и ML-решения.",
        cases: [
          "Внедрение и поддержка 1С / ERP",
          "Big Data платформы и хранилища данных",
          "ML-модели и AI-агенты в бизнес-процессах",
          "Кибербезопасность и Data Governance",
        ],
      },
      {
        tag: "Госсектор",
        accent: "#34d399",
        accentBg: "rgba(52, 211, 153, 0.10)",
        accentBorder: "rgba(52, 211, 153, 0.35)",
        title: "Соответствие, документооборот, закупки",
        description: "Знаем требования к госзакупкам, форматы документации и стандарты безопасности нацкомпаний.",
        cases: [
          "Лицензированное ПО и легализация",
          "Электронный документооборот и интеграции",
          "Отчётность по требованиям регулятора",
          "Защита данных и контроль доступа",
        ],
      },
    ],
  },
  kk: {
    eyebrow: "Кімге арналған",
    title: "IT бәсекелік артықшылыққа айналатын жерде көмектесеміз",
    subtitle: "Sen Digital өсіп келе жатқан бизнеспен, ірі корпорациялармен және мемлекеттік компаниялармен бірдей терең жұмыс істейді. Әр сегментке арналған тәсіл, құжаттама және құқықтық база.",
    segments: [
      {
        tag: "Бизнес",
        accent: "#60a5fa",
        accentBg: "rgba(96, 165, 250, 0.10)",
        accentBorder: "rgba(96, 165, 250, 0.35)",
        title: "Жылдам стартап, юнит-экономиканы есептейміз",
        description: "SMB және mid-market компанияларға артық IT-штатсыз өсуге көмектесеміз. Лицензиялар, автоматтандыру және сайт — кілтке дейін.",
        cases: [
          "MVP, лендингтер, корпоративтік сайттар",
          "Сату, CRM және интеграцияларды автоматтандыру",
          "Артық төлемсіз БЖ лицензиялау",
          "BI-аналитика мен дашбордтарды қосу",
        ],
      },
      {
        tag: "Корпорациялар",
        accent: "#a78bfa",
        accentBg: "rgba(167, 139, 250, 0.10)",
        accentBorder: "rgba(167, 139, 250, 0.35)",
        title: "ERP, Big Data және күрделі интеграциялар",
        description: "Күрделі құрылымы бар кәсіпорындармен жұмыс істейміз: өндіріс, ритейл, қаржы. ERP, Data Engineering және ML-шешімдерді енгіземіз.",
        cases: [
          "1С / ERP енгізу және қолдау",
          "Big Data платформалары мен деректер қоймалары",
          "Бизнес-процестердегі ML-модельдер мен AI-агенттер",
          "Кибер қауіпсіздік және Data Governance",
        ],
      },
      {
        tag: "Мемлекеттік сектор",
        accent: "#34d399",
        accentBg: "rgba(52, 211, 153, 0.10)",
        accentBorder: "rgba(52, 211, 153, 0.35)",
        title: "Сәйкестік, құжат айналымы, сатып алу",
        description: "Мемлекеттік сатып алу талаптарын, құжаттама форматтарын және ұлттық компаниялардың қауіпсіздік стандарттарын білеміз.",
        cases: [
          "Лицензияланған БЖ және заңдастыру",
          "Электронды құжат айналымы мен интеграциялар",
          "Реттеуші талаптары бойынша есептілік",
          "Деректерді қорғау және қол жетімділікті бақылау",
        ],
      },
    ],
  },
  en: {
    eyebrow: "Who we serve",
    title: "We help where IT becomes a competitive edge",
    subtitle: "Sen Digital works at depth with growing businesses, large corporates and government-owned companies — with an approach, paperwork and legal base tailored to each segment.",
    segments: [
      {
        tag: "Business",
        accent: "#60a5fa",
        accentBg: "rgba(96, 165, 250, 0.10)",
        accentBorder: "rgba(96, 165, 250, 0.35)",
        title: "Launch fast, watch unit economics",
        description: "We help SMB and mid-market companies grow without bloating IT headcount. Licensing, automation and websites delivered turnkey.",
        cases: [
          "MVPs, landing pages, corporate websites",
          "Sales, CRM and integration automation",
          "Software licensing without markups",
          "BI analytics and dashboards",
        ],
      },
      {
        tag: "Corporates",
        accent: "#a78bfa",
        accentBg: "rgba(167, 139, 250, 0.10)",
        accentBorder: "rgba(167, 139, 250, 0.35)",
        title: "ERP, Big Data and complex integrations",
        description: "We work with enterprises that have complex structures: manufacturing, retail, finance. We deliver ERP, Data Engineering and ML solutions.",
        cases: [
          "1C / ERP rollout and support",
          "Big Data platforms and warehouses",
          "ML models and AI agents inside business processes",
          "Cyber security and Data Governance",
        ],
      },
      {
        tag: "Public sector",
        accent: "#34d399",
        accentBg: "rgba(52, 211, 153, 0.10)",
        accentBorder: "rgba(52, 211, 153, 0.35)",
        title: "Compliance, document flow, procurement",
        description: "We know the requirements of public procurement, documentation formats and the security standards used by national companies.",
        cases: [
          "Licensed software and legalisation",
          "Electronic document flow and integrations",
          "Regulator-grade reporting",
          "Data protection and access control",
        ],
      },
    ],
  },
};

interface IndustriesSectionProps {
  locale: string;
}

export default function IndustriesSection({ locale }: IndustriesSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = industriesTranslations[locale as keyof typeof industriesTranslations] || industriesTranslations.ru;

  return (
    <section id="industries" className="section-padding bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 mesh-bg opacity-40" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-16"
        >
          <div className="eyebrow mb-6">{t.eyebrow}</div>
          <h2 className="display-sm text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.segments.map((seg, index) => (
            <motion.div
              key={seg.tag}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-bordered p-7 md:p-8 group"
              style={{ borderTopWidth: 4, borderTopColor: seg.accent }}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
                style={{ background: seg.accentBg, color: seg.accent, border: `1px solid ${seg.accentBorder}` }}
              >
                {seg.tag}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                {seg.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {seg.description}
              </p>
              <ul className="space-y-2.5">
                {seg.cases.map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                      style={{ background: seg.accent }}
                    />
                    <span className="leading-snug">{c}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
