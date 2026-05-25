"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const servicesTranslations = {
  ru: {
    eyebrow: "Услуги",
    titleStart: "Закрываем весь",
    titleItalic: "цифровой цикл",
    intro: "От лицензирования и настройки ПО до Big Data, ML и AI-агентов. Один партнёр — без подрядчиков и накруток.",
    services: [
      { n: "01", title: "Установка и настройка ПО", desc: "Полноценная конфигурация программного обеспечения под задачи вашей компании. Лицензирование напрямую от правообладателей — без посредников." },
      { n: "02", title: "Интеграция IT-решений", desc: "Подбираем и настраиваем системы под ваши процессы. Связываем CRM, ERP, BI и внешние сервисы в единый контур." },
      { n: "03", title: "Разработка", desc: "Корпоративные продукты с передачей исходного кода и гарантией до 12 месяцев. От MVP за 4–8 недель до SaaS-платформ." },
      { n: "04", title: "Техническая поддержка", desc: "Стабильная работа цифровых систем 24/7. Мониторинг, инциденты по SLA, регулярные обновления, бэкапы и прозрачные отчёты." },
      { n: "05", title: "Big Data, ML и AI", desc: "Платформы обработки данных, ML-модели и AI-агенты для автоматизации, аналитики и повышения эффективности бизнеса." },
      { n: "06", title: "Облако и DevOps", desc: "Облачные архитектуры, CI/CD, мониторинг и disaster recovery. SLA, который выполняется — а не «по возможности»." },
    ],
  },
  kk: {
    eyebrow: "Қызметтер",
    titleStart: "Бүкіл",
    titleItalic: "цифрлық циклді",
    intro: "БЖ лицензиялаудан Big Data, ML және AI-агенттерге дейін. Бір серіктес — қосалқы мердігерсіз және үстемесіз.",
    services: [
      { n: "01", title: "БЖ орнату және баптау", desc: "Компанияңыздың міндеттеріне сәйкес бағдарламалық жасақтаманы толық конфигурациялау. Делдалсыз тікелей лицензиялау." },
      { n: "02", title: "IT-шешімдерді интеграциялау", desc: "Жүйелерді процестеріңізге бейімдейміз және баптаймыз. CRM, ERP, BI және сыртқы сервистерді бір контурға жалғаймыз." },
      { n: "03", title: "Әзірлеу", desc: "Бастапқы код берілетін және 12 айға кепілдікпен корпоративтік өнімдер. 4–8 аптадағы MVP-ден SaaS-платформаларға дейін." },
      { n: "04", title: "Техникалық қолдау", desc: "Цифрлық жүйелердің 24/7 тұрақты жұмысы. SLA, мониторинг, тұрақты жаңартулар, резервтік көшіру және ашық есептер." },
      { n: "05", title: "Big Data, ML және AI", desc: "Деректерді өңдеу платформалары, ML-модельдер және AI-агенттер бизнесті автоматтандыруға, аналитикаға және тиімділікке арналған." },
      { n: "06", title: "Бұлт және DevOps", desc: "Бұлтты архитектура, CI/CD, мониторинг және disaster recovery. Шынайы орындалатын SLA — «мүмкіндігінше» емес." },
    ],
  },
  en: {
    eyebrow: "Services",
    titleStart: "We cover the entire",
    titleItalic: "digital cycle",
    intro: "From software licensing and setup to Big Data, ML and AI agents. One partner — no subcontractors, no markups.",
    services: [
      { n: "01", title: "Software installation & setup", desc: "Full configuration of software for your company's tasks. Licensing directly from rights holders — without middlemen." },
      { n: "02", title: "IT solutions integration", desc: "We pick and configure systems to your processes. We connect CRM, ERP, BI and external services into a single loop." },
      { n: "03", title: "Development", desc: "Corporate products with source code handover and up to 12 months warranty. From MVP in 4–8 weeks to SaaS platforms." },
      { n: "04", title: "Technical support", desc: "Stable operation of digital systems 24/7. Monitoring, SLA-bound incidents, regular updates, backups and transparent reports." },
      { n: "05", title: "Big Data, ML & AI", desc: "Data processing platforms, ML models and AI agents for automation, analytics and business efficiency." },
      { n: "06", title: "Cloud & DevOps", desc: "Cloud architectures, CI/CD, monitoring and disaster recovery. SLA that's actually met — not «when possible»." },
    ],
  },
};

function ServiceIcon({ index }: { index: number }) {
  const props = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (index) {
    case 0:
      return (
        <svg {...props}>
          <path d="M12 3v11" />
          <path d="M7 10l5 5 5-5" />
          <rect x="3.5" y="17" width="17" height="3.5" rx="1" />
        </svg>
      );
    case 1:
      return (
        <svg {...props}>
          <circle cx="5.5" cy="6" r="2.2" />
          <circle cx="18.5" cy="6" r="2.2" />
          <circle cx="5.5" cy="18" r="2.2" />
          <circle cx="18.5" cy="18" r="2.2" />
          <path d="M7.7 6h8.6M7.7 18h8.6M5.5 8.2v7.6M18.5 8.2v7.6" />
        </svg>
      );
    case 2:
      return (
        <svg {...props}>
          <path d="M9 8l-4 4 4 4" />
          <path d="M15 8l4 4-4 4" />
          <path d="M13 5l-2 14" />
        </svg>
      );
    case 3:
      return (
        <svg {...props}>
          <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case 4:
      return (
        <svg {...props}>
          <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z" />
          <path d="M18.5 14l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z" />
        </svg>
      );
    case 5:
      return (
        <svg {...props}>
          <path d="M6.5 17.5A4.5 4.5 0 015.5 8.6a5.5 5.5 0 0110.7-1.4 4 4 0 011.3 8.3" />
          <path d="M6.5 17.5h11" />
          <path d="M9 21l2-2 2 2 2-2" />
        </svg>
      );
    default:
      return null;
  }
}

interface ServicesSectionProps {
  locale: string;
}

export default function ServicesSection({ locale }: ServicesSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = servicesTranslations[locale as keyof typeof servicesTranslations] || servicesTranslations.ru;

  const layout = [
    "md:col-span-7 svc-featured",
    "md:col-span-5",
    "md:col-span-4",
    "md:col-span-4",
    "md:col-span-4",
    "md:col-span-12 svc-wide",
  ];

  return (
    <section id="services" className="ed-section alt" ref={ref}>
      <div className="ed-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="ed-sec-head"
        >
          <span className="eyebrow">{t.eyebrow}</span>
          <h2>
            {t.titleStart} <em className="ital-blue not-italic" style={{ fontStyle: "italic" }}>{t.titleItalic}</em>
          </h2>
          <p>{t.intro}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {t.services.map((s, i) => (
            <motion.article
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`svc-card ${layout[i]}`}
            >
              <span className="svc-watermark" aria-hidden>{s.n}</span>
              <div className="svc-icon">
                <ServiceIcon index={i} />
              </div>
              <div className="svc-body">
                <div className="svc-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
