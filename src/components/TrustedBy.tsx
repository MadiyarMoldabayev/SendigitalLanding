"use client";

const trustedTranslations = {
  ru: { label: "Нам доверяют" },
  kk: { label: "Бізге сенеді" },
  en: { label: "Trusted by" },
};

const partners = [
  { name: "AstanaHub", href: "https://astanahub.com" },
  { name: "Yandex Cloud", href: "https://cloud.yandex.kz" },
  { name: "SIGEX", href: "https://sigex.kz" },
  { name: "Servercore", href: "https://servercore.com" },
];

interface TrustedByProps {
  locale: string;
}

export default function TrustedBy({ locale }: TrustedByProps) {
  const t = trustedTranslations[locale as keyof typeof trustedTranslations] || trustedTranslations.ru;
  return (
    <section className="py-14 border-t border-b" style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}>
      <div className="ed-container">
        <div
          className="text-center mb-7"
          style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 500 }}
        >
          {t.label}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 md:gap-x-16">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-100"
              style={{
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: "-0.015em",
                color: "var(--ink)",
                opacity: 0.5,
                fontVariantLigatures: "common-ligatures",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
            >
              {p.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
