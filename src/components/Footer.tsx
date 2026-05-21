"use client";

import Link from "next/link";

const footerTranslations = {
  ru: {
    description: "Команда инженеров, которая помогает бизнесу, корпорациям и государственному сектору запускать и поддерживать цифровые продукты.",
    navTitle: "Навигация",
    servicesTitle: "Услуги",
    contactsTitle: "Контакты",
    nav: [
      { name: "Главная", href: "#hero" },
      { name: "Услуги", href: "#services" },
      { name: "О нас", href: "#about" },
      { name: "Процесс", href: "#process" },
      { name: "Команда", href: "#team" },
    ],
    services: ["Лицензирование", "Разработка", "Big Data & AI", "Поддержка 24/7", "Облако · DevOps"],
    contacts: ["Астана, Казахстан", "hello@sendigital.kz", "+7 (708) 021-18-48"],
    copyright: "Все права защищены",
    privacy: "Политика конфиденциальности",
    terms: "Публичная оферта",
  },
  kk: {
    description: "Бизнеске, корпорацияларға және мемлекеттік секторға цифрлық өнімдерді іске қосуға және қолдауға көмектесетін инженерлер тобы.",
    navTitle: "Навигация",
    servicesTitle: "Қызметтер",
    contactsTitle: "Байланыс",
    nav: [
      { name: "Басты бет", href: "#hero" },
      { name: "Қызметтер", href: "#services" },
      { name: "Біз туралы", href: "#about" },
      { name: "Процесс", href: "#process" },
      { name: "Команда", href: "#team" },
    ],
    services: ["Лицензиялау", "Әзірлеу", "Big Data & AI", "24/7 қолдау", "Бұлт · DevOps"],
    contacts: ["Астана, Қазақстан", "hello@sendigital.kz", "+7 (708) 021-18-48"],
    copyright: "Барлық құқықтар қорғалған",
    privacy: "Құпиялылық саясаты",
    terms: "Жалпыға бірдей ұсыныс",
  },
  en: {
    description: "A team of engineers helping businesses, corporates and the public sector launch and support digital products.",
    navTitle: "Navigation",
    servicesTitle: "Services",
    contactsTitle: "Contacts",
    nav: [
      { name: "Home", href: "#hero" },
      { name: "Services", href: "#services" },
      { name: "About", href: "#about" },
      { name: "Process", href: "#process" },
      { name: "Team", href: "#team" },
    ],
    services: ["Licensing", "Development", "Big Data & AI", "24/7 Support", "Cloud · DevOps"],
    contacts: ["Astana, Kazakhstan", "hello@sendigital.kz", "+7 (708) 021-18-48"],
    copyright: "All rights reserved",
    privacy: "Privacy Policy",
    terms: "Public Offer",
  },
};

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const year = new Date().getFullYear();
  const t = footerTranslations[locale as keyof typeof footerTranslations] || footerTranslations.ru;

  return (
    <footer className="pt-[72px] pb-8 border-t" style={{ borderColor: "var(--line)" }}>
      <div className="ed-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.7fr_0.9fr] gap-12 pb-12 border-b" style={{ borderColor: "var(--line)" }}>
          <div>
            <Link href={`/${locale}#hero`} className="flex items-center gap-3" aria-label="SEN Digital">
              <span
                className="grid place-items-center"
                style={{ width: 34, height: 34, borderRadius: "50%", background: "var(--ink)", color: "var(--bg)", fontSize: 13, fontWeight: 700 }}
              >
                S
              </span>
              <span style={{ fontSize: 17, fontWeight: 600, letterSpacing: "-0.01em", color: "var(--ink)" }}>
                <b style={{ fontWeight: 600 }}>SEN</b>
                <span className="mx-1" style={{ color: "var(--muted)", fontWeight: 400 }}>·</span>
                <span style={{ fontWeight: 400, color: "var(--ink-2)" }}>Digital</span>
              </span>
            </Link>
            <p className="mt-4 text-muted" style={{ fontSize: 14, lineHeight: 1.6, maxWidth: "38ch" }}>
              {t.description}
            </p>
          </div>

          <div>
            <h6 className="mb-[18px]" style={{ fontSize: 11.5, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", fontWeight: 600 }}>
              {t.navTitle}
            </h6>
            <ul className="list-none flex flex-col gap-2.5">
              {t.nav.map((n) => (
                <li key={n.href}>
                  <a href={`/${locale}${n.href}`} className="text-ink-2 hover:text-blue transition-colors" style={{ fontSize: 14 }}>
                    {n.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="mb-[18px]" style={{ fontSize: 11.5, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", fontWeight: 600 }}>
              {t.servicesTitle}
            </h6>
            <ul className="list-none flex flex-col gap-2.5">
              {t.services.map((s) => (
                <li key={s}>
                  <a href={`/${locale}#services`} className="text-ink-2 hover:text-blue transition-colors" style={{ fontSize: 14 }}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="mb-[18px]" style={{ fontSize: 11.5, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", fontWeight: 600 }}>
              {t.contactsTitle}
            </h6>
            <ul className="list-none flex flex-col gap-2.5">
              {t.contacts.map((c) => (
                <li key={c} style={{ fontSize: 14, color: "var(--ink-2)" }}>
                  {c}
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/77080211848"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-2 hover:text-blue transition-colors"
                  style={{ fontSize: 14 }}
                >
                  WhatsApp · +7 (708) 021-18-48
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-7 flex justify-between items-center flex-wrap gap-3.5" style={{ color: "var(--muted)", fontSize: 13, fontWeight: 500 }}>
          <div>© {year} SEN Digital · {t.copyright}</div>
          <div className="flex gap-6">
            <Link href={`/${locale}/privacy`} className="hover:text-ink transition-colors">{t.privacy}</Link>
            <Link href={`/${locale}/terms`} className="hover:text-ink transition-colors">{t.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
