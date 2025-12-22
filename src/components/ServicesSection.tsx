"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import cn from "classnames";

const servicesTranslations = {
  ru: {
    badge: "Наши услуги",
    intro: "Мы предоставляем широкий спектр IT-решений для организаций, государственных структур и бизнеса:",
    services: [
      {
        id: 1,
        title: "Установка и настройка программного обеспечения",
        description: "Мы обеспечиваем полноценную конфигурацию ПО в соответствии с задачами вашей компании.",
        categories: [
          "Офисные и корпоративные пакеты",
          "Инструменты для разработки: IDE / Dev Tools",
          "Контейнеризация и DevOps",
          "Системы управления проектами",
          "CRM / ERP",
          "BI-аналитика",
          "Облачные серверы и хранилища",
          "Платформы для корпоративного обучения",
          "ПО для дизайна и креатива",
          "Каналы корпоративных коммуникаций",
          "Платформы и инструменты обработки больших данных",
        ],
      },
      {
        id: 2,
        title: "Интеграция IT-решений в ваш бизнес",
        description: "Мы подбираем, устанавливаем и настраиваем программные решения под ваши потребности.",
        stages: [
          "Анализ потребностей и текущих бизнес-процессов",
          "Подбор оптимального IT-решения",
          "Закуп и лицензирование",
          "Внедрение, настройка и интеграция",
          "Обучение сотрудников",
          "Сопровождение и поддержка",
        ],
        note: "Каждый проект реализуем с учётом специфики вашей компании.",
      },
      {
        id: 3,
        title: "Разработка",
        items: [
          "Корпоративные сайты",
          "Чат-боты",
          "Лендинги",
          "Интеграции с CRM, платёжными и внешними сервисами",
        ],
      },
      {
        id: 4,
        title: "Техническая поддержка",
        description: "Мы обеспечиваем стабильную работу ваших цифровых систем 24/7.",
        services: [
          "Мониторинг работоспособности",
          "Регулярные обновления",
          "Поддержка веб-ресурсов",
          "Быстрое реагирование на инциденты",
          "Резервное копирование и восстановление",
        ],
      },
      {
        id: 5,
        title: "Big Data, ML и искусственный интеллект",
        description: "Внедряем платформы обработки данных, создаём ML-модели и интегрируем ИИ для автоматизации, аналитики и повышения эффективности вашего бизнеса.",
        items: [
          "Платформы и инфраструктура Big Data",
          "Машинное обучение (ML)",
          "Искусственный интеллект (AI)",
          "Data Engineering и ETL-процессы",
          "Data Governance и безопасность данных",
          "ИИ-агенты",
        ],
      },
    ],
  },
  kk: {
    badge: "Біздің қызметтер",
    intro: "Біз ұйымдар, мемлекеттік құрылымдар және бизнес үшін IT-шешімдердің кең спектрін ұсынамыз:",
    services: [
      {
        id: 1,
        title: "Бағдарламалық жасақтаманы орнату және баптау",
        description: "Біз компанияңыздың міндеттеріне сәйкес бағдарламалық жасақтаманың толық конфигурациясын қамтамасыз етеміз.",
        categories: [
          "Кеңсе және корпоративтік пакеттер",
          "Әзірлеу құралдары: IDE / Dev Tools",
          "Контейнерлеу және DevOps",
          "Жобаларды басқару жүйелері",
          "CRM / ERP",
          "BI-талдау",
          "Бұлттық серверлер мен қоймалар",
          "Корпоративтік оқыту платформалары",
          "Дизайн және креатив үшін БЖ",
          "Корпоративтік коммуникация каналдары",
          "Үлкен деректерді өңдеу платформалары мен құралдары",
        ],
      },
      {
        id: 2,
        title: "IT-шешімдерді бизнесіңізге интеграциялау",
        description: "Біз сіздің қажеттіліктеріңізге сәйкес бағдарламалық шешімдерді таңдаймыз, орнатамыз және баптаймыз.",
        stages: [
          "Қажеттіліктерді және ағымдағы бизнес-процестерді талдау",
          "Оңтайлы IT-шешімді таңдау",
          "Сатып алу және лицензиялау",
          "Енгізу, баптау және интеграциялау",
          "Қызметкерлерді оқыту",
          "Қолдау және қолдау",
        ],
        note: "Әрбір жобаны компанияңыздың ерекшелігін ескере отырып жүзеге асырамыз.",
      },
      {
        id: 3,
        title: "Әзірлеу",
        items: [
          "Корпоративтік сайттар",
          "Чат-боттар",
          "Лендингтер",
          "CRM, төлем және сыртқы сервистермен интеграциялар",
        ],
      },
      {
        id: 4,
        title: "Техникалық қолдау",
        description: "Біз сіздің цифрлық жүйелеріңіздің тұрақты жұмысын 24/7 қамтамасыз етеміз.",
        services: [
          "Жұмысқа қабілеттілікті мониторинг",
          "Тұрақты жаңартулар",
          "Веб-ресурстарды қолдау",
          "Оқиғаларға жылдам реакция",
          "Резервтік көшіру және қалпына келтіру",
        ],
      },
      {
        id: 5,
        title: "Big Data, ML және жасанды интеллект",
        description: "Деректерді өңдеу платформаларын енгіземіз, ML-модельдерін құрамыз және бизнесіңіздің автоматтандыру, талдау және тиімділігін арттыру үшін ЖИ-ді интеграциялаймыз.",
        items: [
          "Big Data платформалары мен инфрақұрылымы",
          "Машиналық оқыту (ML)",
          "Жасанды интеллект (AI)",
          "Data Engineering және ETL-процестер",
          "Data Governance және деректер қауіпсіздігі",
          "ЖИ-агенттер",
        ],
      },
    ],
  },
  en: {
    badge: "Our Services",
    intro: "We provide a wide range of IT solutions for organizations, government structures and businesses:",
    services: [
      {
        id: 1,
        title: "Software Installation and Configuration",
        description: "We provide comprehensive software configuration according to your company's needs.",
        categories: [
          "Office and corporate packages",
          "Development tools: IDE / Dev Tools",
          "Containerization and DevOps",
          "Project management systems",
          "CRM / ERP",
          "BI analytics",
          "Cloud servers and storage",
          "Corporate training platforms",
          "Design and creative software",
          "Corporate communication channels",
          "Big data processing platforms and tools",
        ],
      },
      {
        id: 2,
        title: "Integration of IT Solutions into Your Business",
        description: "We select, install and configure software solutions according to your needs.",
        stages: [
          "Analysis of needs and current business processes",
          "Selection of optimal IT solution",
          "Procurement and licensing",
          "Implementation, configuration and integration",
          "Staff training",
          "Support and maintenance",
        ],
        note: "Each project is implemented taking into account the specifics of your company.",
      },
      {
        id: 3,
        title: "Development",
        items: [
          "Corporate websites",
          "Chatbots",
          "Landing pages",
          "Integrations with CRM, payment and external services",
        ],
      },
      {
        id: 4,
        title: "Technical Support",
        description: "We ensure stable operation of your digital systems 24/7.",
        services: [
          "Performance monitoring",
          "Regular updates",
          "Web resource support",
          "Rapid incident response",
          "Backup and recovery",
        ],
      },
      {
        id: 5,
        title: "Big Data, ML and Artificial Intelligence",
        description: "We implement data processing platforms, create ML models and integrate AI for automation, analytics and improving your business efficiency.",
        items: [
          "Big Data platforms and infrastructure",
          "Machine Learning (ML)",
          "Artificial Intelligence (AI)",
          "Data Engineering and ETL processes",
          "Data Governance and data security",
          "AI agents",
        ],
      },
    ],
  },
};

const colors = [
  "from-primary to-blue-600",
  "from-secondary to-purple-600",
  "from-accent to-green-600",
  "from-orange-500 to-amber-600",
  "from-pink-500 to-rose-600",
];

interface ServicesSectionProps {
  locale: string;
}

export default function ServicesSection({ locale }: ServicesSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const t = servicesTranslations[locale as keyof typeof servicesTranslations] || servicesTranslations.ru;

  return (
    <section id="services" className="section-padding bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            {t.badge}
          </span>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t.intro}
          </p>
        </motion.div>

        <div className="space-y-6">
          {t.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 card-hover"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[index]} flex items-center justify-center text-white font-bold text-lg shrink-0`}>
                      {service.id}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  
                  {service.description && (
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                  )}

                  {service.categories && (
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-gray-700 mb-3">Категории лицензий и решений:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {service.categories.map((category, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700 text-sm">{category}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.stages && (
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-gray-700 mb-3">Полный цикл внедрения включает:</p>
                      <ul className="space-y-2">
                        {service.stages.map((stage, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{stage}</span>
                          </li>
                        ))}
                      </ul>
                      {service.note && (
                        <p className="mt-4 text-gray-600 italic">{service.note}</p>
                      )}
                    </div>
                  )}

                  {service.items && (
                    <div className="mt-4">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {service.services && (
                    <div className="mt-4">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.services.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

