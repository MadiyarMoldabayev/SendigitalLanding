"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

interface Person {
  image: string;
  lead?: boolean;
  name: { ru: string; kk: string; en: string };
  role: { ru: string; kk: string; en: string };
  desc: { ru: string; kk: string; en: string };
  ed: { ru: string; kk: string; en: string };
}

const people: Person[] = [
  {
    image: "/team/batima.jpg",
    lead: true,
    name: { ru: "Батима Мукина", kk: "Батима Мұқина", en: "Batima Mukina" },
    role: { ru: "Ген. директор · основатель", kk: "Бас директор · негізін қалаушы", en: "CEO · Founder" },
    desc: {
      ru: "Экономика, бухгалтерский учёт и аудит. Отвечает за стратегию и работу с госсектором.",
      kk: "Экономика, есеп және аудит. Стратегия мен мемлекеттік секторға жауапты.",
      en: "Economics, accounting and audit. Owns strategy and government-sector work.",
    },
    ed: { ru: "MA · Economics  ·  MA · Acc. & Audit", kk: "MA · Экономика  ·  MA · Есеп және аудит", en: "MA · Economics  ·  MA · Acc. & Audit" },
  },
  {
    image: "/team/aslan.jpg",
    name: { ru: "Аслан Сариев", kk: "Аслан Сариев", en: "Aslan Sariev" },
    role: { ru: "Исполнительный директор", kk: "Атқарушы директор", en: "Executive Director" },
    desc: {
      ru: "Финансы НПО, аудит, налоги. Операционное управление и контрактование.",
      kk: "ҮЕҰ қаржысы, аудит, салықтар. Операциялық басқару және келісімшарт жасау.",
      en: "NGO finance, audit, taxation. Operations and contracting.",
    },
    ed: { ru: "+10 лет · НКО сектор", kk: "+10 жыл · ҮЕҰ сектор", en: "+10 years · non-profit sector" },
  },
  {
    image: "/team/madiyar.jpg",
    name: { ru: "Мадияр Молдабаев", kk: "Мадияр Молдабаев", en: "Madiyar Moldabayev" },
    role: { ru: "Технический директор", kk: "Техникалық директор", en: "CTO" },
    desc: {
      ru: "Аналитика данных, fullstack, DevOps, ML. Архитектура и техническое лидерство.",
      kk: "Деректер аналитикасы, fullstack, DevOps, ML. Архитектура және техникалық көшбасшылық.",
      en: "Data analytics, fullstack, DevOps, ML. Architecture and technical leadership.",
    },
    ed: { ru: "+5 лет · IT-внедрения", kk: "+5 жыл · IT-енгізу", en: "+5 years · IT rollouts" },
  },
  {
    image: "/team/adil-zhexenov.jpg",
    name: { ru: "Адиль Жексенов", kk: "Адиль Жексенов", en: "Adil Zhexenov" },
    role: { ru: "Frontend-разработчик", kk: "Frontend әзірлеуші", en: "Frontend Developer" },
    desc: {
      ru: "React, Next.js, TypeScript. Адаптивные интерфейсы и продуктовый фронт.",
      kk: "React, Next.js, TypeScript. Бейімделетін интерфейстер және өнім фронті.",
      en: "React, Next.js, TypeScript. Responsive UIs and product front-end.",
    },
    ed: { ru: "MSc · ECE 2026 · BSc · SE 2024", kk: "MSc · ECE 2026 · BSc · SE 2024", en: "MSc · ECE 2026 · BSc · SE 2024" },
  },
  {
    image: "/team/adilkhan.jpg",
    name: { ru: "Адилхан Алиханов", kk: "Адилхан Алиханов", en: "Adilkhan Alikhanov" },
    role: { ru: "Backend / AI-инженер", kk: "Backend / AI инженері", en: "Backend / AI Engineer" },
    desc: {
      ru: "Промышленные ML-решения, RAG-системы, NLP. Бэкенды под высокую нагрузку.",
      kk: "Өнеркәсіптік ML-шешімдер, RAG жүйелері, NLP. Жоғары жүктемелі бэкендтер.",
      en: "Industrial ML solutions, RAG systems, NLP. High-load backends.",
    },
    ed: { ru: "MSc · Data Science 2026", kk: "MSc · Data Science 2026", en: "MSc · Data Science 2026" },
  },
  {
    image: "/team/ayana.jpg",
    name: { ru: "Аяна Попова", kk: "Аяна Попова", en: "Ayana Popova" },
    role: { ru: "Продуктовый дизайнер", kk: "Өнім дизайнері", en: "Product Designer" },
    desc: {
      ru: "Продуктовый дизайн, проектирование ERP и SaaS. Дизайн-система SEN.",
      kk: "Өнім дизайны, ERP және SaaS жобалау. SEN дизайн жүйесі.",
      en: "Product design, ERP and SaaS design. SEN design system.",
    },
    ed: { ru: "Сертифицированный дизайнер", kk: "Сертификатталған дизайнер", en: "Certified Designer" },
  },
  {
    image: "/team/anel.jpg",
    name: { ru: "Анель Самадулла", kk: "Анель Самадулла", en: "Anel Samadulla" },
    role: { ru: "Разработчик ПО", kk: "БЖ әзірлеушісі", en: "Software Developer" },
    desc: {
      ru: "Фундаментальная информатика. Внутренние тулзы и автоматизация.",
      kk: "Фундаменталды информатика. Ішкі құралдар және автоматтандыру.",
      en: "Computer science fundamentals. Internal tools and automation.",
    },
    ed: { ru: "BSc · Computer Science 2023", kk: "BSc · Computer Science 2023", en: "BSc · Computer Science 2023" },
  },
  {
    image: "/team/talgat.jpg",
    name: { ru: "Талгат Тургынбеков", kk: "Талғат Тұрғынбеков", en: "Talgat Turgynbekov" },
    role: { ru: "Инженер-робототехник", kk: "Робототехника инженері", en: "Robotics Engineer" },
    desc: {
      ru: "Робототехника, автоматизация, встраиваемые системы. Edge и hardware-проекты.",
      kk: "Робототехника, автоматтандыру, ендірілген жүйелер. Edge және hardware жобалары.",
      en: "Robotics, automation, embedded systems. Edge and hardware projects.",
    },
    ed: { ru: "BSc · Robotics 2018", kk: "BSc · Robotics 2018", en: "BSc · Robotics 2018" },
  },
  {
    image: "/team/askhat.jpg",
    name: { ru: "Асхат Ильясов", kk: "Асхат Ильясов", en: "Askhat Iliyasov" },
    role: { ru: "DevOps-инженер", kk: "DevOps инженері", en: "DevOps Engineer" },
    desc: {
      ru: "CI/CD, автоматизация инфраструктуры, облачные платформы. SLA и мониторинг.",
      kk: "CI/CD, инфрақұрылымды автоматтандыру, бұлттық платформалар. SLA және мониторинг.",
      en: "CI/CD, infrastructure automation, cloud platforms. SLA and monitoring.",
    },
    ed: { ru: "Сертифицированный DevOps", kk: "Сертификатталған DevOps", en: "Certified DevOps" },
  },
  {
    image: "/team/adil-sultangazy.jpg",
    name: { ru: "Адиль Султангазы", kk: "Адиль Сұлтанғазы", en: "Adil Sultangazy" },
    role: { ru: "Финансовый аналитик", kk: "Қаржы талдаушысы", en: "Financial Analyst" },
    desc: {
      ru: "Финансовый анализ, бизнес и экономика. Юнит-экономика проектов.",
      kk: "Қаржылық талдау, бизнес және экономика. Жоба юнит-экономикасы.",
      en: "Financial analysis, business and economics. Project unit economics.",
    },
    ed: { ru: "BA · Economics 2022", kk: "BA · Economics 2022", en: "BA · Economics 2022" },
  },
  {
    image: "/team/sandugash.jpg",
    name: { ru: "Сандугаш Бурамбекова", kk: "Сандуғаш Бурамбекова", en: "Sandugash Burambekova" },
    role: { ru: "Разработчик ПО", kk: "БЖ әзірлеушісі", en: "Software Developer" },
    desc: {
      ru: "Веб-технологии, разработка и поддержка корпоративных систем.",
      kk: "Веб-технологиялар, корпоративтік жүйелерді әзірлеу және қолдау.",
      en: "Web technologies, building and supporting corporate systems.",
    },
    ed: { ru: "BSc · Computer Science 2026", kk: "BSc · Computer Science 2026", en: "BSc · Computer Science 2026" },
  },
  {
    image: "/team/ibragim.jpg",
    name: { ru: "Ибрагим Бектурган", kk: "Ибрагим Бектұрған", en: "Ibragim Bekturgan" },
    role: { ru: "Разработчик ПО", kk: "БЖ әзірлеушісі", en: "Software Developer" },
    desc: {
      ru: "Современные практики разработки. Полный стек и облако.",
      kk: "Заманауи әзірлеу тәжірибелері. Толық стек және бұлт.",
      en: "Modern engineering practices. Full stack and cloud.",
    },
    ed: { ru: "BSc · Computer Science 2026", kk: "BSc · Computer Science 2026", en: "BSc · Computer Science 2026" },
  },
  {
    image: "/team/gulmira.jpg",
    name: { ru: "Гульмира Инертбаева", kk: "Гүлмира Инертбаева", en: "Gulmira Inertbaeva" },
    role: { ru: "Бухгалтер", kk: "Бухгалтер", en: "Accountant" },
    desc: {
      ru: "Бухгалтерский учёт и аудит. Финансовая отчётность по проектам.",
      kk: "Есеп және аудит. Жобалар бойынша қаржылық есептілік.",
      en: "Accounting and audit. Project financial reporting.",
    },
    ed: { ru: "BA · Acc. & Audit", kk: "BA · Acc. & Audit", en: "BA · Acc. & Audit" },
  },
];

const sectionTranslations = {
  ru: {
    eyebrow: "Команда",
    titleStart: "13 человек —",
    titleItalic: "одна команда",
    intro: "Финансисты, инженеры, дизайнеры, ML-разработчики и DevOps. Большинство — с профильным MSc / BSc.",
  },
  kk: {
    eyebrow: "Команда",
    titleStart: "13 адам —",
    titleItalic: "бір команда",
    intro: "Қаржыгерлер, инженерлер, дизайнерлер, ML-әзірлеушілер және DevOps. Көпшілігі — мамандандырылған MSc / BSc.",
  },
  en: {
    eyebrow: "Team",
    titleStart: "13 people —",
    titleItalic: "one team",
    intro: "Finance, engineers, designers, ML developers and DevOps. Most hold a relevant MSc / BSc.",
  },
};

interface TeamSectionProps {
  locale: string;
}

export default function TeamSection({ locale }: TeamSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = sectionTranslations[locale as keyof typeof sectionTranslations] || sectionTranslations.ru;

  const getLocal = <T extends { ru: string; kk: string; en: string }>(obj: T) =>
    obj[locale as keyof T] ?? obj.ru;

  return (
    <section id="team" className="ed-section alt" ref={ref}>
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

        {(() => {
          const founder = people.find((p) => p.lead);
          const rest = people.filter((p) => !p.lead);
          return (
            <>
              {founder && (
                <motion.article
                  key={founder.image}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="person lead mb-10 grid grid-cols-1 md:grid-cols-[minmax(0,280px)_1fr]"
                >
                  <div className="photo" style={{ aspectRatio: "1 / 1" }}>
                    <Image
                      src={founder.image}
                      alt={getLocal(founder.name)}
                      fill
                      sizes="(max-width: 768px) 100vw, 280px"
                      className="object-cover"
                    />
                  </div>
                  <div className="body !p-8 md:!p-10 gap-3">
                    <div>
                      <div className="name" style={{ fontSize: 22 }}>{getLocal(founder.name)}</div>
                      <div className="role" style={{ fontSize: 14 }}>{getLocal(founder.role)}</div>
                    </div>
                    <div className="desc" style={{ fontSize: 15, lineHeight: 1.65, maxWidth: "56ch" }}>{getLocal(founder.desc)}</div>
                    <div className="ed">{getLocal(founder.ed)}</div>
                  </div>
                </motion.article>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {rest.map((p, i) => (
                  <motion.article
                    key={p.image}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.04 }}
                    className="person"
                  >
                    <div className="photo">
                      <Image
                        src={p.image}
                        alt={getLocal(p.name)}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="body">
                      <div>
                        <div className="name">{getLocal(p.name)}</div>
                        <div className="role">{getLocal(p.role)}</div>
                      </div>
                      <div className="desc">{getLocal(p.desc)}</div>
                      <div className="ed">{getLocal(p.ed)}</div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </>
          );
        })()}
      </div>
    </section>
  );
}
