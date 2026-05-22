"use client";

import { useState, useEffect } from "react";
import cn from "classnames";
import Link from "next/link";

const navLinks = {
  ru: [
    { name: "О нас", href: "#about" },
    { name: "Услуги", href: "#services" },
    { name: "Команда", href: "#team" },
    { name: "Контакты", href: "#contact" },
  ],
  kk: [
    { name: "Біз туралы", href: "#about" },
    { name: "Қызметтер", href: "#services" },
    { name: "Команда", href: "#team" },
    { name: "Байланыс", href: "#contact" },
  ],
  en: [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ],
};

const headerTranslations = {
  ru: { cta: "Обсудить проект" },
  kk: { cta: "Жобаны талқылау" },
  en: { cta: "Discuss a project" },
};

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = headerTranslations[locale as keyof typeof headerTranslations] || headerTranslations.ru;
  const currentNavLinks = navLinks[locale as keyof typeof navLinks] || navLinks.ru;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const langs: { code: string; label: string }[] = [
    { code: "ru", label: "RU" },
    { code: "kk", label: "KZ" },
    { code: "en", label: "EN" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        background: "rgba(244,239,228,0.86)",
        backdropFilter: "saturate(160%) blur(12px)",
        WebkitBackdropFilter: "saturate(160%) blur(12px)",
        borderColor: "var(--line)",
      }}
    >
      <div className="ed-container flex items-center justify-between gap-6" style={{ height: 72 }}>
        <Link href={`/${locale}#hero`} className="flex items-center gap-3" aria-label="SEN Digital">
          <span
            className="grid place-items-center"
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: "var(--ink)",
              color: "var(--bg)",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            S
          </span>
          <span style={{ fontSize: 17, fontWeight: 600, letterSpacing: "-0.01em", color: "var(--ink)" }}>
            <b style={{ fontWeight: 600 }}>SEN</b>
            <span className="mx-1" style={{ color: "var(--muted)", fontWeight: 400 }}>·</span>
            <span style={{ fontWeight: 400, color: "var(--ink-2)" }}>Digital</span>
          </span>
        </Link>

        <ul className="hidden lg:flex gap-8 list-none">
          {currentNavLinks.map((link) => (
            <li key={link.name}>
              <a
                href={`/${locale}${link.href}`}
                className="text-sm font-medium transition-colors"
                style={{ color: "var(--ink-2)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blue)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-2)")}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex" style={{ fontSize: 12, fontWeight: 500, color: "var(--muted)" }}>
            {langs.map((l) => (
              <Link
                key={l.code}
                href={`/${l.code}`}
                className="px-2.5 py-1 rounded-md transition-colors"
                style={
                  l.code === locale
                    ? { color: "var(--ink)", background: "rgba(21,24,30,0.06)", letterSpacing: "0.04em" }
                    : { letterSpacing: "0.04em" }
                }
              >
                {l.label}
              </Link>
            ))}
          </div>
          <a href={`/${locale}#contact`} className="btn-ed primary">
            {t.cta}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
          aria-label="Menu"
        >
          <span
            className={cn("w-6 h-0.5 transition-all duration-300", menuOpen && "rotate-45 translate-y-2")}
            style={{ background: "var(--ink)" }}
          />
          <span
            className={cn("w-6 h-0.5 transition-all duration-300", menuOpen && "opacity-0")}
            style={{ background: "var(--ink)" }}
          />
          <span
            className={cn("w-6 h-0.5 transition-all duration-300", menuOpen && "-rotate-45 -translate-y-2")}
            style={{ background: "var(--ink)" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t" style={{ borderColor: "var(--line)", background: "var(--bg)" }}>
          <div className="ed-container py-6 flex flex-col gap-4">
            {currentNavLinks.map((link) => (
              <a
                key={link.name}
                href={`/${locale}${link.href}`}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium py-2"
                style={{ color: "var(--ink-2)" }}
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              {langs.map((l) => (
                <Link
                  key={l.code}
                  href={`/${l.code}`}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-1.5 rounded-md text-xs font-medium"
                  style={
                    l.code === locale
                      ? { color: "var(--ink)", background: "rgba(21,24,30,0.06)" }
                      : { color: "var(--muted)" }
                  }
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <a href={`/${locale}#contact`} onClick={() => setMenuOpen(false)} className="btn-ed primary text-center mt-2">
              {t.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
