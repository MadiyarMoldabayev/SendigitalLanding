"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const processTranslations = {
  ru: {
    eyebrow: "Процесс",
    titleStart: "Прозрачно —",
    titleItalic: "без сюрпризов",
    titleTail: " в смете",
    intro: "Фиксируем объём, сроки и результат до старта. В любой момент видно, где находится проект.",
    steps: [
      { n: "01 · 1–2 недели", title: "Аудит и стратегия", desc: "Изучаем процессы, инфраструктуру и боли. Готовим карту решений и экономику." },
      { n: "02 · 1–3 недели", title: "Дизайн и стек", desc: "Подбираем оптимальный стек, согласуем интеграции, безопасность и лицензии." },
      { n: "03 · 4–8 недель", title: "Внедрение", desc: "Запускаем итерациями, передаём промежуточные результаты, обучаем сотрудников." },
      { n: "04 · постоянно", title: "Поддержка", desc: "SLA, мониторинг, регулярные ретро и квартальный business review." },
    ],
  },
  kk: {
    eyebrow: "Процесс",
    titleStart: "Сметада",
    titleItalic: "тосын сыйсыз",
    titleTail: " — ашық",
    intro: "Көлемді, мерзімді және нәтижені іске қосылғанға дейін бекітеміз. Жобаның қай кезеңде екені кез келген уақытта көрінеді.",
    steps: [
      { n: "01 · 1–2 апта", title: "Аудит және стратегия", desc: "Процестерді, инфрақұрылымды және ауыртпалықтарды зерттейміз. Шешімдер картасын дайындаймыз." },
      { n: "02 · 1–3 апта", title: "Дизайн және стек", desc: "Оңтайлы стекті таңдаймыз, интеграция, қауіпсіздік пен лицензияларды келісеміз." },
      { n: "03 · 4–8 апта", title: "Енгізу", desc: "Итерациялармен жүзеге асырамыз, аралық нәтижелерді береміз, қызметкерлерді оқытамыз." },
      { n: "04 · үздіксіз", title: "Қолдау", desc: "SLA, мониторинг, тұрақты ретро және тоқсандық business review." },
    ],
  },
  en: {
    eyebrow: "Process",
    titleStart: "Transparent —",
    titleItalic: "no surprises",
    titleTail: " in the bill",
    intro: "Scope, timing and outcomes locked before kick-off. You can see exactly where the project stands at any moment.",
    steps: [
      { n: "01 · 1–2 weeks", title: "Audit & strategy", desc: "We study processes, infrastructure and pain points. We map solutions and economics." },
      { n: "02 · 1–3 weeks", title: "Design & stack", desc: "We pick the optimal stack and align on integrations, security and licensing." },
      { n: "03 · 4–8 weeks", title: "Rollout", desc: "We deliver in iterations, hand over intermediate results and train staff." },
      { n: "04 · ongoing", title: "Support", desc: "SLA, monitoring, regular retros and a quarterly business review." },
    ],
  },
};

interface ProcessSectionProps {
  locale: string;
}

export default function ProcessSection({ locale }: ProcessSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = processTranslations[locale as keyof typeof processTranslations] || processTranslations.ru;

  return (
    <section id="process" className="ed-section" ref={ref}>
      <div className="ed-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="ed-sec-head"
        >
          <span className="eyebrow">{t.eyebrow}</span>
          <h2>
            {t.titleStart} <em className="ital-blue not-italic" style={{ fontStyle: "italic" }}>{t.titleItalic}</em>{t.titleTail}
          </h2>
          <p>{t.intro}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-[20px] overflow-hidden border bg-paper"
          style={{ borderColor: "var(--line)" }}
        >
          {t.steps.map((s) => (
            <div key={s.n} className="ed-step">
              <div className="n">{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
