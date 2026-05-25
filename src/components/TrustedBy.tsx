"use client";

import Image from "next/image";

const trustedTranslations = {
  ru: { label: "Нам доверяют" },
  kk: { label: "Бізге сенеді" },
  en: { label: "Trusted by" },
};

const partners = [
  { name: "AstanaHub", href: "https://astanahub.com", src: "/partners/astanahub.svg", height: 28 },
  { name: "Yandex Cloud", href: "https://yandex.cloud", src: "/partners/yandex-cloud.svg", height: 28 },
  { name: "SIGEX", href: "https://sigex.kz", src: "/partners/sigex.png", height: 32 },
  { name: "Servercore", href: "https://servercore.com", src: "/partners/servercore.svg", height: 24 },
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
          className="text-center mb-8"
          style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 500 }}
        >
          {t.label}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 sm:gap-x-12 md:gap-x-20">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={p.name}
              className="partner-logo"
            >
              <Image
                src={p.src}
                alt={p.name}
                width={160}
                height={p.height}
                style={{ height: p.height, width: "auto", objectFit: "contain" }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
