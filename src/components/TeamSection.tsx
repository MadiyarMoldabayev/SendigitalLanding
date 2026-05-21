"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Card3D from "./3DCard";

interface TeamMember {
  id: number;
  image: string;
  name: { ru: string; kk: string; en: string };
  role: { ru: string; kk: string; en: string };
  expertise: { ru: string; kk: string; en: string };
  experience: { ru: string; kk: string; en: string };
}

// Directors — displayed in a top tier
const directors: TeamMember[] = [
  {
    id: 2,
    image: "/team/aslan.jpg",
    name: { en: "Aslan Sariev", kk: "Аслан Сариев", ru: "Аслан Сариев" },
    role: { en: "Executive Director", kk: "Атқарушы директор", ru: "Исполнительный директор" },
    expertise: { en: "NGO finance, audit, taxation", kk: "ҮЕҰ қаржысы, аудит, салықтар", ru: "Финансы НПО, аудит, налоги" },
    experience: { en: "10+ years of experience in the non-profit sector", kk: "Коммерциялық емес секторда 10 жылдан аса тәжірибе", ru: "+10 лет опыта в некоммерческом секторе" },
  },
  {
    id: 3,
    image: "/team/madiyar.jpg",
    name: { en: "Madiyar Moldabayev", kk: "Мадияр Молдабаев", ru: "Мадияр Молдабаев" },
    role: { en: "Chief Technology Officer", kk: "Техникалық директор", ru: "Технический директор" },
    expertise: { en: "Data analytics, full-stack development, DevOps, machine learning", kk: "Деректер аналитикасы, Fullstack әзірлеу, DevOps, машинамен оқыту", ru: "Аналитика данных, Fullstack разработка, DevOps, машинное обучение" },
    experience: { en: "5+ years of implementing IT solutions", kk: "IT шешімдерін енгізу бойынша 5 жылдан аса тәжірибе", ru: "+5 лет внедрения IT-решений" },
  },
];

// Team members — displayed below directors
const teamMembers: TeamMember[] = [
  {
    id: 4,
    image: "/team/adil-zhexenov.jpg",
    name: { en: "Adil Zhexenov", kk: "Адиль Жексенов", ru: "Адиль Жексенов" },
    role: { en: "Frontend Developer", kk: "Frontend әзірлеуші", ru: "Frontend разработчик" },
    expertise: { en: "React, Next.js, TypeScript, Redux Toolkit, responsive interfaces", kk: "React, Next.js, TypeScript, Redux Toolkit, бейімделетін интерфейстер", ru: "React, Next.js, TypeScript, Redux Toolkit, адаптивные интерфейсы" },
    experience: { en: "MSc in ECE 2026, BSc in SE 2024", kk: "ECE магистрі 2026, SE бакалавры 2024", ru: "MSc в ECE 2026, BSc в SE 2024" },
  },
  {
    id: 5,
    image: "/team/adilkhan.jpg",
    name: { en: "Adilkhan Alikhanov", kk: "Адилхан Алиханов", ru: "Адилхан Алиханов" },
    role: { en: "Backend Developer", kk: "Backend әзірлеуші", ru: "Backend разработчик" },
    expertise: { en: "AI engineer with industrial experience in developing ML solutions, RAG systems, and NLP applications", kk: "ML шешімдерін, RAG жүйелерін және NLP жобаларын өнеркәсіптік деңгейде әзірлеу тәжірибесі бар AI-инженер", ru: "AI-инженер с опытом промышленной разработки ML-решений, RAG-систем и NLP" },
    experience: { en: "MSc in Data Science 2026, BSc in Comp. Science 2024", kk: "Data Science магистрі 2026, Информатика бакалавры 2024", ru: "MSc в Data Science 2026, BSc в Comp. Science 2024" },
  },
  {
    id: 6,
    image: "/team/ayana.jpg",
    name: { en: "Ayana Pupova", kk: "Аяна Пупова", ru: "Аяна Пупова" },
    role: { en: "Product Designer", kk: "Өнім дизайнері", ru: "Дизайнер по продукту" },
    expertise: { en: "Product design, ERP and SaaS systems design", kk: "Өнім дизайны, ERP және SaaS жүйелерін жобалау", ru: "Продуктовый дизайн, проектирование ERP, SaaS систем" },
    experience: { en: "Certified Designer", kk: "Сертификатталған дизайнер", ru: "Сертифицированный дизайнер" },
  },
  {
    id: 7,
    image: "/team/anel.jpg",
    name: { en: "Anel Samadulla", kk: "Анель Самадулла", ru: "Анель Самадулла" },
    role: { en: "Software Developer", kk: "Бағдарламалық жасақтама әзірлеушісі", ru: "Разработчик ПО" },
    expertise: { en: "Software development, computer science fundamentals", kk: "Бағдарламалық жасақтама әзірлеу, информатика негіздері", ru: "Разработка ПО, фундаментальная информатика" },
    experience: { en: "BSc in Computer Science 2023", kk: "Информатика бакалавры 2023", ru: "BSc в Computer Science 2023" },
  },
  {
    id: 8,
    image: "/team/adil-sultangazy.jpg",
    name: { en: "Adil Sultangazy", kk: "Адиль Сұлтанғазы", ru: "Адиль Султангазы" },
    role: { en: "Financial Analyst", kk: "Қаржы талдаушысы", ru: "Финансовый аналитик" },
    expertise: { en: "Financial analysis, business and economics", kk: "Қаржылық талдау, бизнес және экономика", ru: "Финансовый анализ, бизнес и экономика" },
    experience: { en: "BA in Economics 2022", kk: "Экономика бакалавры 2022", ru: "BA в Economics 2022" },
  },
  {
    id: 9,
    image: "/team/sandugash.jpg",
    name: { en: "Sandugash Burambekova", kk: "Сандуғаш Бурамбекова", ru: "Сандугаш Бурамбекова" },
    role: { en: "Software Developer", kk: "Бағдарламалық жасақтама әзірлеушісі", ru: "Разработчик ПО" },
    expertise: { en: "Software development, web technologies", kk: "Бағдарламалық жасақтама әзірлеу, веб-технологиялар", ru: "Разработка ПО, веб-технологии" },
    experience: { en: "BSc in Computer Science 2026", kk: "Информатика бакалавры 2026", ru: "BSc в Computer Science 2026" },
  },
  {
    id: 10,
    image: "/team/talgat.jpg",
    name: { en: "Talgat Turgynbekov", kk: "Талғат Тұрғынбеков", ru: "Талгат Тургынбеков" },
    role: { en: "Robotics Engineer", kk: "Робототехника инженері", ru: "Инженер-робототехник" },
    expertise: { en: "Robotics, automation, embedded systems", kk: "Робототехника, автоматтандыру, ендірілген жүйелер", ru: "Робототехника, автоматизация, встраиваемые системы" },
    experience: { en: "BSc in Robotics 2018", kk: "Робототехника бакалавры 2018", ru: "BSc в Robotics 2018" },
  },
  {
    id: 11,
    image: "/team/ibrahim.jpg",
    name: { en: "Ibrahim Bekturgan", kk: "Ибрахим Бектұрған", ru: "Ибрахим Бектурган" },
    role: { en: "Software Developer", kk: "Бағдарламалық жасақтама әзірлеушісі", ru: "Разработчик ПО" },
    expertise: { en: "Software development, modern programming practices", kk: "Бағдарламалық жасақтама әзірлеу, заманауи бағдарламалау тәжірибелері", ru: "Разработка ПО, современные практики программирования" },
    experience: { en: "BSc in Computer Science 2026", kk: "Информатика бакалавры 2026", ru: "BSc в Computer Science 2026" },
  },
  {
    id: 12,
    image: "/team/batima.jpg",
    name: { en: "Batima Mukina", kk: "Батима Мұқина", ru: "Батима Мукина" },
    role: { en: "Financial Specialist", kk: "Қаржы маманы", ru: "Финансовый специалист" },
    expertise: { en: "Economics, accounting and audit", kk: "Экономика, есеп және аудит", ru: "Экономика, бухгалтерский учёт и аудит" },
    experience: { en: "MA in Economics, MA in Acc. & Audit", kk: "Экономика магистрі, Есеп және аудит магистрі", ru: "MA в Economics, MA в Acc. & Audit" },
  },
  {
    id: 13,
    image: "/team/askhat.jpg",
    name: { en: "Askhat Iliyasov", kk: "Асхат Ильясов", ru: "Асхат Ильясов" },
    role: { en: "DevOps Engineer", kk: "DevOps инженері", ru: "DevOps-инженер" },
    expertise: { en: "CI/CD, infrastructure automation, cloud platforms", kk: "CI/CD, инфрақұрылымды автоматтандыру, бұлттық платформалар", ru: "CI/CD, автоматизация инфраструктуры, облачные платформы" },
    experience: { en: "Certified DevOps", kk: "Сертификатталған DevOps маманы", ru: "Сертифицированный DevOps" },
  },
  {
    id: 14,
    image: "/team/gulmira.jpg",
    name: { en: "Gulmira", kk: "Гүлмира", ru: "Гульмира" },
    role: { en: "Accountant", kk: "Бухгалтер", ru: "Бухгалтер" },
    expertise: { en: "Accounting and audit", kk: "Есеп және аудит", ru: "Бухгалтерский учёт и аудит" },
    experience: { en: "BA in Acc. & Audit", kk: "Есеп және аудит бакалавры", ru: "BA в Acc. & Audit" },
  },
];

const sectionTranslations = {
  ru: {
    title: "Наша команда",
    description: "Профессионалы, которые создают технологические решения",
  },
  kk: {
    title: "Біздің команда",
    description: "Технологиялық шешімдерді құратын мамандар",
  },
  en: {
    title: "Our Team",
    description: "Professionals who create technology solutions",
  },
};

interface TeamSectionProps {
  locale: string;
}

export default function TeamSection({ locale }: TeamSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = sectionTranslations[locale as keyof typeof sectionTranslations] || sectionTranslations.ru;

  const getLocalized = (obj: { ru: string; kk: string; en: string }) => {
    return obj[locale as keyof typeof obj] || obj.ru;
  };

  return (
    <section id="team" className="section-padding bg-white relative" ref={ref}>
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
            {t.title}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            {t.description}
          </p>
        </motion.div>

        {/* Directors — top tier */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 mb-12">
          {directors.map((member, index) => (
            <div key={member.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
              <Card3D>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group glass border-2 border-primary/30 rounded-3xl overflow-hidden card-hover"
                >
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <Image
                    src={member.image}
                    alt={getLocalized(member.name)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {getLocalized(member.name)}
                  </h3>
                  <p className="text-primary font-semibold mb-3">
                    {getLocalized(member.role)}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {getLocalized(member.expertise)}
                  </p>
                  <p className="text-accent text-xs font-medium">
                    {getLocalized(member.experience)}
                  </p>
                </div>
                </motion.div>
              </Card3D>
            </div>
          ))}
        </div>

        {/* Connecting line */}
        <div className="hidden lg:flex justify-center mb-12">
          <div className="w-px h-8 bg-gradient-to-b from-primary/40 to-gray-300" />
        </div>

        {/* Team members — lower tier */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card3D key={member.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group glass border-2 border-gray-200/50 rounded-3xl overflow-hidden card-hover"
              >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <Image
                  src={member.image}
                  alt={getLocalized(member.name)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {getLocalized(member.name)}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {getLocalized(member.role)}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {getLocalized(member.expertise)}
                </p>
                <p className="text-accent text-xs font-medium">
                  {getLocalized(member.experience)}
                </p>
              </div>
              </motion.div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}

