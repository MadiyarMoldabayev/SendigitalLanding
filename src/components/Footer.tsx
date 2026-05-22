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
      { name: "Команда", href: "#team" },
    ],
    services: ["Лицензирование", "Разработка", "Big Data & AI", "Поддержка 24/7", "Облако · DevOps"],
    contacts: ["Астана, Казахстан", "info@sengroup.one", "+7 (708) 021-18-48"],
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
      { name: "Команда", href: "#team" },
    ],
    services: ["Лицензиялау", "Әзірлеу", "Big Data & AI", "24/7 қолдау", "Бұлт · DevOps"],
    contacts: ["Астана, Қазақстан", "info@sengroup.one", "+7 (708) 021-18-48"],
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
    contacts: ["Astana, Kazakhstan", "info@sengroup.one", "+7 (708) 021-18-48"],
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
                  className="inline-flex items-center gap-2.5 text-ink-2 hover:text-blue transition-colors"
                  style={{ fontSize: 14 }}
                  aria-label="WhatsApp"
                >
                  <span
                    className="flex items-center justify-center rounded-full"
                    style={{ width: 28, height: 28, background: "#22A06B", color: "#fff" }}
                  >
                    <svg className="w-[14px] h-[14px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </span>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://2gis.kz/astana/firm/70000001112636040"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-ink-2 hover:text-blue transition-colors"
                  style={{ fontSize: 14 }}
                  aria-label="2GIS"
                >
                  <span
                    className="flex items-center justify-center rounded-full"
                    style={{ width: 28, height: 28, background: "var(--blue-tint)", color: "var(--blue)" }}
                  >
                    <svg className="w-[14px] h-[14px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 21s7-7.5 7-12a7 7 0 10-14 0c0 4.5 7 12 7 12z" />
                    </svg>
                  </span>
                  2GIS · Астана
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
