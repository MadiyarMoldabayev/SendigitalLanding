"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

const navLinks = {
  ru: [
    { name: "Главная", href: "#hero" },
    { name: "Услуги", href: "#services" },
    { name: "Почему мы", href: "#whyus" },
    { name: "Команда", href: "#team" },
    { name: "Контакты", href: "#contact" },
  ],
  kk: [
    { name: "Басты бет", href: "#hero" },
    { name: "Қызметтер", href: "#services" },
    { name: "Неге біз", href: "#whyus" },
    { name: "Команда", href: "#team" },
    { name: "Байланыс", href: "#contact" },
  ],
  en: [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#whyus" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ],
};

const headerTranslations = {
  ru: {
    contactUs: "Получить консультацию",
  },
  kk: {
    contactUs: "Кеңес алу",
  },
  en: {
    contactUs: "Get Consultation",
  },
};

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = headerTranslations[locale as keyof typeof headerTranslations] || headerTranslations.ru;
  const currentNavLinks = navLinks[locale as keyof typeof navLinks] || navLinks.ru;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLocalizedPath = (targetLocale: string) => {
    return `/${targetLocale}`;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-white py-5"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 xl:px-0 flex justify-between items-center">
        <Link href={`/${locale}#hero`} className="flex items-center group">
          <Image
            src="/logo.png"
            alt="SENDIGITAL"
            width={180}
            height={50}
            className="h-10 w-auto group-hover:opacity-80 transition-all duration-300"
            priority
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-10">
          {currentNavLinks.map((link) => (
            <li key={link.name}>
              <a
                href={`/${locale}${link.href}`}
                className="text-gray-700 hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <div className="relative group">
            <button className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors duration-300 text-sm font-medium px-3 py-2 rounded-lg border border-gray-200 hover:border-primary">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 0112 15.5c1.748 0 3.413-.32 4.926-.904M10 20h4m-4 0a2 2 0 01-2-2v-1a2 2 0 012-2h4a2 2 0 012 2v1a2 2 0 01-2 2m-3-11H9M12 10V3" />
              </svg>
              {locale.toUpperCase()}
            </button>
            <div className="absolute right-0 top-full mt-2 w-24 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
              <Link href={getLocalizedPath('ru')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">RU</Link>
              <Link href={getLocalizedPath('kk')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">KZ</Link>
              <Link href={getLocalizedPath('en')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">EN</Link>
            </div>
          </div>
          <a href={`/${locale}#contact`} className="btn-primary text-sm">
            {t.contactUs}
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
          aria-label="Menu"
        >
          <span
            className={cn(
              "w-6 h-0.5 bg-gray-700 transition-all duration-300",
              menuOpen && "rotate-45 translate-y-2"
            )}
          />
          <span
            className={cn(
              "w-6 h-0.5 bg-gray-700 transition-all duration-300",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "w-6 h-0.5 bg-gray-700 transition-all duration-300",
              menuOpen && "-rotate-45 -translate-y-2"
            )}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden bg-white border-t border-gray-200 shadow-lg"
      >
        <div className="p-6 flex flex-col gap-4">
          {currentNavLinks.map((link) => (
            <a
              key={link.name}
              href={`/${locale}${link.href}`}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-primary transition-colors duration-300 text-lg font-medium py-2"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-4">
            <Link href={getLocalizedPath('ru')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">RU</Link>
            <Link href={getLocalizedPath('kk')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">KZ</Link>
            <Link href={getLocalizedPath('en')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">EN</Link>
          </div>
          <a href={`/${locale}#contact`} className="btn-primary text-center mt-4">
            {t.contactUs}
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}

