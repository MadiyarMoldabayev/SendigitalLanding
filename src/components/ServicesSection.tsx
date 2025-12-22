"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import cn from "classnames";
import Card3D from "./3DCard";

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
          "CRM, төлем және сыртқы сервистермен интеграциялар",
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
        description: "Мы внедряем платформы обработки данных, создаём ML-модели и интегрируем AI для автоматизации, аналитики и повышения эффективности вашего бизнеса.",
        items: [
          "Платформы и инфраструктура Big Data",
          "Машинное обучение (ML)",
          "Искусственный интеллект (AI)",
          "Data Engineering и ETL-процессы",
          "Data Governance и безопасность данных",
          "AI-агенты",
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
        description: "Біз компанияңыздың міндеттеріне сәйкес БЖ-дің толық конфигурациясын қамтамасыз етеміз.",
        categories: [
          "Кеңселік және корпоративтік пакеттер",
          "Әзірлеу құралдары: IDE / Dev Tools",
          "Контейнерлеу және DevOps",
          "Жобаларды басқару жүйелері",
          "CRM / ERP",
          "BI-талдау",
          "Бұлттық серверлер мен қоймалар",
          "Корпоративтік оқыту платформалары",
          "Дизайн және креативтілік үшін БЖ",
          "Корпоративтік коммуникация арналары",
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
        title: "Software Installation and Setup",
        description: "We ensure full software configuration according to your company's needs.",
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
          "Big Data processing platforms and tools",
        ],
      },
      {
        id: 2,
        title: "IT Solutions Integration into Your Business",
        description: "We select, install and configure software solutions according to your needs.",
        stages: [
          "Analysis of needs and current business processes",
          "Selection of optimal IT solution",
          "Procurement and licensing",
          "Implementation, setup and integration",
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
          "CRM, payment and external service integrations",
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

  const toggleService = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-gray-50 relative" ref={ref}>
      {/* Background effect */}
      <div className="absolute inset-0 mesh-bg opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 text-primary text-sm font-medium mb-6"
          >
            {t.badge}
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t.intro}
          </motion.p>
        </motion.div>

        <div className="space-y-4">
          {t.services.map((service, index) => {
            const isExpanded = expandedId === service.id;
            
            return (
              <Card3D key={service.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={cn(
                    "glass border-2 rounded-3xl overflow-hidden transition-all duration-500",
                    isExpanded 
                      ? "border-primary/50 shadow-2xl" 
                      : "border-gray-200/50 shadow-lg hover:shadow-xl"
                  )}
                >
                  {/* Header - Clickable */}
                  <motion.button
                    onClick={() => toggleService(service.id)}
                    className="w-full p-6 md:p-8 text-left flex items-center justify-between gap-4 group relative overflow-hidden"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {/* Gradient background on hover */}
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-r transition-opacity duration-500",
                        colors[index],
                        isExpanded ? "opacity-10" : "opacity-0 group-hover:opacity-5"
                      )}
                    />
                    
                    <div className="relative z-10 flex items-center gap-4 flex-1">
                      <div className={cn(
                        "w-16 h-16 rounded-2xl bg-gradient-to-br p-[2px] shrink-0 transition-all duration-300",
                        colors[index]
                      )}>
                        <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                          <span className={cn(
                            "text-3xl font-bold bg-gradient-to-br bg-clip-text text-transparent transition-all duration-300",
                            colors[index]
                          )}>
                            {service.id}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className={cn(
                          "text-xl md:text-2xl lg:text-3xl font-bold transition-colors duration-300",
                          isExpanded ? "text-primary" : "text-gray-900 group-hover:text-primary"
                        )}>
                          {service.title}
                        </h3>
                        {service.description && !isExpanded && (
                          <p className="text-gray-600 mt-2 text-sm md:text-base line-clamp-2">
                            {service.description}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    {/* Expand/Collapse Icon */}
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10 shrink-0"
                    >
                      <div className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
                        isExpanded 
                          ? "bg-primary text-white" 
                          : "bg-gray-100 text-gray-600 group-hover:bg-primary group-hover:text-white"
                      )}>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </motion.div>
                  </motion.button>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-6 border-t border-gray-200/50">
                          {service.description && (
                            <motion.p
                              initial={{ y: -10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.1 }}
                              className="text-gray-700 leading-relaxed pt-6"
                            >
                              {service.description}
                            </motion.p>
                          )}

                          {service.categories && (
                            <motion.div
                              initial={{ y: -10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.2 }}
                              className="space-y-3"
                            >
                              <p className="text-sm font-semibold text-gray-700">Категории лицензий и решений:</p>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                {service.categories.map((category, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 + i * 0.05 }}
                                    className="flex items-start gap-2 p-3 rounded-xl bg-white/50 border border-gray-200/50 hover:border-primary/50 transition-colors"
                                  >
                                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700 text-sm">{category}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}

                          {service.stages && (
                            <motion.div
                              initial={{ y: -10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.2 }}
                              className="space-y-3"
                            >
                              <p className="text-sm font-semibold text-gray-700">Полный цикл внедрения включает:</p>
                              <div className="space-y-2">
                                {service.stages.map((stage, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 + i * 0.05 }}
                                    className="flex items-start gap-3 p-3 rounded-xl bg-white/50 border border-gray-200/50 hover:border-primary/50 transition-colors"
                                  >
                                    <div className={cn(
                                      "w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-gradient-to-br text-white text-xs font-bold",
                                      colors[index]
                                    )}>
                                      {i + 1}
                                    </div>
                                    <span className="text-gray-700 flex-1">{stage}</span>
                                  </motion.div>
                                ))}
                              </div>
                              {service.note && (
                                <motion.p
                                  initial={{ y: -10, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  transition={{ delay: 0.5 }}
                                  className="mt-4 text-gray-600 italic p-4 rounded-xl bg-primary/5 border border-primary/10"
                                >
                                  {service.note}
                                </motion.p>
                              )}
                            </motion.div>
                          )}

                          {(service.items || service.services) && (
                            <motion.div
                              initial={{ y: -10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.2 }}
                              className="space-y-3"
                            >
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {(service.items || service.services || []).map((item, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 + i * 0.05 }}
                                    className="flex items-start gap-3 p-3 rounded-xl bg-white/50 border border-gray-200/50 hover:border-primary/50 transition-colors"
                                  >
                                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700 text-sm">{item}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Card3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}
