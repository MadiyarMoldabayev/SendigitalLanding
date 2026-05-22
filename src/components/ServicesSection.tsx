"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const servicesTranslations = {
  ru: {
    eyebrow: "Услуги",
    titleStart: "Закрываем весь",
    titleItalic: "цифровой цикл",
    intro: "От лицензирования и настройки ПО до Big Data, ML и AI-агентов. Один партнёр — без подрядчиков и накруток.",
    more: "Подробнее",
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
    more: "Толығырақ",
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
    more: "Learn more",
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

interface ServicesSectionProps {
  locale: string;
}

export default function ServicesSection({ locale }: ServicesSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = servicesTranslations[locale as keyof typeof servicesTranslations] || servicesTranslations.ru;

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.services.map((s, i) => (
            <motion.article
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="ed-service"
            >
              <div className="num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
