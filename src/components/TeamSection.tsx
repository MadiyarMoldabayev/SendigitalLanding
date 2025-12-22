"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface TeamMember {
  id: number;
  image: string;
  name: { ru: string; kk: string; en: string };
  role: { ru: string; kk: string; en: string };
  expertise: { ru: string; kk: string; en: string };
  experience: { ru: string; kk: string; en: string };
}

// Team without Gulsina (id 7)
const teamMembers: TeamMember[] = [
  {
    id: 1,
    image: "/team/new-1.png",
    name: { en: "Batima Mukina", kk: "Батима Мукина", ru: "Батима Мукина" },
    role: { en: "Chief Executive Officer", kk: "Бас директор", ru: "Генеральный директор" },
    expertise: { en: "Expert in audit, compliance and corporate law with 20+ years of cross-sectoral experience in public, quasi-public, NGO and business sectors, creating and implementing scalable fintech and AI solutions based on trust", kk: "Аудит, комплаенс және корпоративтік құқық бойынша маман, мемлекеттік, квазимемлекеттік, ҮЕҰ және бизнес секторларында 20+ жылдық сектораралық тәжірибесі бар, сенімге негізделген масштабталатын финтех және AI шешімдерін құрастырады және енгізеді", ru: "Эксперт по аудиту, комплаенсу и корпоративному праву с 20+ лет межсекторного опыта в государственном, квазигоссекторе, НПО и бизнесе, создаю и внедряю масштабируемые финтех и AI-решения, основанные на доверии" },
    experience: { en: "20+ years of cross-sectoral experience", kk: "20+ жылдық сектораралық тәжірибе", ru: "20+ лет межсекторного опыта" },
  },
  {
    id: 2,
    image: "/team/new-2.png",
    name: { en: "Aslan Sariev", kk: "Аслан Сариев", ru: "Аслан Сариев" },
    role: { en: "Chief Operating Officer", kk: "Операциялық директор", ru: "Операционный директор" },
    expertise: { en: "NGO finance, audit, taxation", kk: "ҮЕҰ қаржысы, аудит, салықтар", ru: "Финансы НПО, аудит, налоги" },
    experience: { en: "10+ years of experience in the non-profit sector", kk: "Коммерциялық емес секторда 10 жылдан аса тәжірибе", ru: "+10 лет опыта в некоммерческом секторе" },
  },
  {
    id: 3,
    image: "/team/new-3.png",
    name: { en: "Madiyar Moldabayev", kk: "Мадияр Молдабаев", ru: "Мадияр Молдабаев" },
    role: { en: "Chief Technology Officer", kk: "Техникалық директор", ru: "Технический директор" },
    expertise: { en: "Data analytics, full-stack development, DevOps, machine learning", kk: "Деректер аналитикасы, Fullstack әзірлеу, DevOps, машинамен оқыту", ru: "Аналитика данных, Fullstack разработка, DevOps, машинное обучение" },
    experience: { en: "5+ years of implementing IT solutions", kk: "IT шешімдерін енгізу бойынша 5 жылдан аса тәжірибе", ru: "+5 лет внедрения IT-решений" },
  },
  {
    id: 4,
    image: "/team/new-4.png",
    name: { en: "Adil Zhexenov", kk: "Адиль Жексенов", ru: "Адиль Жексенов" },
    role: { en: "Frontend Developer", kk: "Frontend әзірлеуші", ru: "Frontend разработчик" },
    expertise: { en: "React, Next.js, TypeScript, Redux Toolkit, responsive interfaces", kk: "React, Next.js, TypeScript, Redux Toolkit, бейімделетін интерфейстер", ru: "React, Next.js, TypeScript, Redux Toolkit, адаптивные интерфейсы" },
    experience: { en: "3+ years of web application development experience", kk: "Web-қосымшаларды әзірлеуде 3 жылдан аса тәжірибе", ru: "+3 года разработки web-приложений" },
  },
  {
    id: 5,
    image: "/team/new-5.png",
    name: { en: "Adilkhan Alikhanov", kk: "Адилхан Алиханов", ru: "Адилхан Алиханов" },
    role: { en: "Backend Developer", kk: "Backend әзірлеуші", ru: "Backend разработчик" },
    expertise: { en: "AI engineer with industrial experience in developing ML solutions, RAG systems, and NLP applications", kk: "ML шешімдерін, RAG жүйелерін және NLP жобаларын өнеркәсіптік деңгейде әзірлеу тәжірибесі бар AI-инженер", ru: "AI-инженер с опытом промышленной разработки ML-решений, RAG-систем и NLP" },
    experience: { en: "3+ years of commercial development experience", kk: "Коммерциялық әзірлеуде 3 жылдан аса тәжірибе", ru: "+3 года в коммерческой разработке" },
  },
  {
    id: 6,
    image: "/team/new-6.png",
    name: { en: "Ayana Amanzhol", kk: "Аяна Аманжол", ru: "Аяна Аманжол" },
    role: { en: "Product Designer", kk: "Өнім дизайнері", ru: "Дизайнер по продукту" },
    expertise: { en: "Product design, ERP and SaaS systems design", kk: "Өнім дизайны, ERP және SaaS жүйелерін жобалау", ru: "Продуктовый дизайн, проектирование ERP, SaaS систем" },
    experience: { en: "5+ years of experience in product design", kk: "Өнім дизайнында 5 жылдан аса тәжірибе", ru: "+5 лет в продуктовом дизайне" },
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
    <section id="team" className="section-padding bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-0">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden card-hover"
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
          ))}
        </div>
      </div>
    </section>
  );
}

