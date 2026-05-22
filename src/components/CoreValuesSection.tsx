"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const valuesTranslations = {
  ru: {
    eyebrow: "Our core values",
    titleStart: "Принципы, по которым",
    titleItalic: "мы работаем",
    intro: "Никакой воды и красивых обещаний — только то, что определяет, как мы доводим проекты до результата.",
    values: [
      {
        n: "01",
        title: "Прозрачность",
        desc: "Чёткая смета и сроки до старта. Заказчик в любой момент видит, где находится проект и куда уходят часы.",
      },
      {
        n: "02",
        title: "Инженерная честность",
        desc: "Говорим, что реально решает задачу, а не что выгоднее продать. Иногда лучшее решение — простое.",
      },
      {
        n: "03",
        title: "Передача знаний",
        desc: "Исходный код, документация и обучение остаются у клиента. Вы не зависите от подрядчика после релиза.",
      },
      {
        n: "04",
        title: "Скорость с качеством",
        desc: "Итерации по 1–2 недели с понятным демо. Релизы маленькими порциями, а не «через полгода всё сразу».",
      },
      {
        n: "05",
        title: "Ответственность",
        desc: "Каждый проект ведёт инженер, а не аккаунт-менеджер. Один контакт, который разбирается в задаче.",
      },
      {
        n: "06",
        title: "Долгие отношения",
        desc: "Большинство клиентов остаются с нами на годы. Мы строим под рост, а не под одну задачу.",
      },
    ],
  },
  kk: {
    eyebrow: "Біздің құндылықтарымыз",
    titleStart: "Жұмыс істейтін",
    titleItalic: "ұстанымдарымыз",
    intro: "Артық сөзсіз және әдемі уәделерсіз — тек жобаны нәтижеге жеткізетін нәрсе.",
    values: [
      { n: "01", title: "Ашықтық", desc: "Іске қосылғанға дейін нақты смета мен мерзім. Тапсырыс беруші жобаның қай кезеңде екенін көреді." },
      { n: "02", title: "Инженерлік адалдық", desc: "Сатуға тиімдіні емес, шынымен шешетінін айтамыз. Кейде жақсы шешім — қарапайым." },
      { n: "03", title: "Білімді беру", desc: "Бастапқы код, құжаттама және оқыту клиентте қалады. Релизден кейін мердігерге тәуелді болмайсыз." },
      { n: "04", title: "Сапа мен жылдамдық", desc: "1–2 апталық итерациялар, түсінікті демо. Кіші бөліктермен релиз, «алты ай ішінде барлығы бірден» емес." },
      { n: "05", title: "Жауапкершілік", desc: "Әр жобаны инженер жүргізеді, аккаунт-менеджер емес. Бір байланыс — тапсырманы білетін адам." },
      { n: "06", title: "Ұзақ қатынастар", desc: "Көптеген клиенттер бізбен жылдар бойы қалады. Бір тапсырмаға емес, өсуге құрамыз." },
    ],
  },
  en: {
    eyebrow: "Our core values",
    titleStart: "The principles we",
    titleItalic: "build on",
    intro: "No fluff and no pretty promises — just the things that define how we ship.",
    values: [
      { n: "01", title: "Transparency", desc: "Clear scope and timing before kick-off. The client can see exactly where the project stands at any moment." },
      { n: "02", title: "Engineering honesty", desc: "We say what actually solves the problem, not what's easier to sell. Sometimes the best solution is the simple one." },
      { n: "03", title: "Knowledge handover", desc: "Source code, documentation and training stay with the client. You don't depend on the contractor after launch." },
      { n: "04", title: "Speed with quality", desc: "1–2 week iterations with a clear demo. Small releases, not one big drop in six months." },
      { n: "05", title: "Ownership", desc: "An engineer runs the project, not an account manager. One contact who understands the problem." },
      { n: "06", title: "Long relationships", desc: "Most clients stay with us for years. We build for growth, not for a single task." },
    ],
  },
};

interface CoreValuesSectionProps {
  locale: string;
}

export default function CoreValuesSection({ locale }: CoreValuesSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = valuesTranslations[locale as keyof typeof valuesTranslations] || valuesTranslations.ru;

  return (
    <section id="values" className="ed-section" ref={ref}>
      <div className="ed-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="ed-sec-head"
        >
          <span className="eyebrow">{t.eyebrow}</span>
          <h2>
            {t.titleStart} <em className="not-italic" style={{ fontStyle: "italic", color: "var(--blue)", fontWeight: 500 }}>{t.titleItalic}</em>
          </h2>
          <p>{t.intro}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.values.map((v, i) => (
            <motion.article
              key={v.n}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="ed-service"
            >
              <div className="num">{v.n}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
