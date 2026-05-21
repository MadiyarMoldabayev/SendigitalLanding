"use client";

const clientsTranslations = {
  ru: {
    label: "Работаем с бизнесом, корпорациями и госсектором",
    names: ["Госсектор", "Нацхолдинги", "Банки · финтех", "Ритейл", "Логистика", "EdTech", "Производство"],
  },
  kk: {
    label: "Бизнес, корпорациялар және мемлекеттік сектормен жұмыс істейміз",
    names: ["Мемсектор", "Ұлттық холдингтер", "Банктер · финтех", "Ритейл", "Логистика", "EdTech", "Өндіріс"],
  },
  en: {
    label: "We work with business, corporates and the public sector",
    names: ["Public sector", "National holdings", "Banks · fintech", "Retail", "Logistics", "EdTech", "Manufacturing"],
  },
};

interface ClientsBarProps {
  locale: string;
}

export default function ClientsBar({ locale }: ClientsBarProps) {
  const t = clientsTranslations[locale as keyof typeof clientsTranslations] || clientsTranslations.ru;
  return (
    <section className="py-14 border-t border-b" style={{ borderColor: "var(--line)" }}>
      <div className="ed-container">
        <div
          className="text-center mb-7"
          style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 500 }}
        >
          {t.label}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {t.names.map((name, i) => (
            <span key={i} className="flex items-center gap-12">
              <span style={{ fontSize: 17, color: "var(--ink-2)", fontWeight: 500, letterSpacing: "-0.005em", opacity: 0.7 }}>
                {name}
              </span>
              {i < t.names.length - 1 && (
                <span
                  className="hidden sm:inline-block"
                  style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--muted-2)" }}
                />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
