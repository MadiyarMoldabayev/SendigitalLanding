"use client";

const photoBandTranslations = {
  ru: {
    quoteStart: "Каждый проект ведёт",
    quoteItalic: "инженер",
    quoteTail: " — не аккаунт-менеджер.",
    metaBrand: "SEN Digital",
    metaPlace: "Офис · Астана",
    metaYear: "2026",
  },
  kk: {
    quoteStart: "Әр жобаны",
    quoteItalic: "инженер",
    quoteTail: " жүргізеді — аккаунт-менеджер емес.",
    metaBrand: "SEN Digital",
    metaPlace: "Кеңсе · Астана",
    metaYear: "2026",
  },
  en: {
    quoteStart: "Every project is run by an",
    quoteItalic: "engineer",
    quoteTail: " — not an account manager.",
    metaBrand: "SEN Digital",
    metaPlace: "Office · Astana",
    metaYear: "2026",
  },
};

interface PhotoBandProps {
  locale: string;
}

export default function PhotoBand({ locale }: PhotoBandProps) {
  const t = photoBandTranslations[locale as keyof typeof photoBandTranslations] || photoBandTranslations.ru;
  return (
    <div className="photo-band">
      <div
        className="img"
        style={{ backgroundImage: "url('/assets/photo-collaboration.jpg')", backgroundPosition: "center 35%" }}
      />
      <div className="cap">
        <div className="ed-container flex items-end justify-between gap-8 flex-wrap">
          <div
            className="text-white max-w-[24ch]"
            style={{ fontSize: "clamp(26px, 3.2vw, 40px)", lineHeight: 1.18, letterSpacing: "-0.018em", fontWeight: 500, textWrap: "balance" }}
          >
            {t.quoteStart} <em className="not-italic" style={{ fontStyle: "italic", color: "#BDD0FF", fontWeight: 400 }}>{t.quoteItalic}</em>{t.quoteTail}
          </div>
          <div
            className="text-right"
            style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", lineHeight: 1.7, opacity: 0.9, fontWeight: 500, flex: "0 0 200px" }}
          >
            <b className="block text-white" style={{ fontWeight: 600 }}>{t.metaBrand}</b>
            {t.metaPlace}<br />
            {t.metaYear}
          </div>
        </div>
      </div>
    </div>
  );
}
