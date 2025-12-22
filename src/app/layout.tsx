import "./globals.css";
import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import CursorEffect from "@/components/CursorEffect";

export const metadata: Metadata = {
  title: "SENDIGITAL - Технологические решения под Ваши потребности",
  description:
    "Лицензирование, внедрение, поддержка и цифровая инфраструктура — всё для устойчивой работы ваших систем. SENDIGITAL — ваш надежный партнер в цифровой трансформации.",
  keywords:
    "SENDIGITAL, IT решения, лицензирование ПО, внедрение, разработка, техническая поддержка, Big Data, ML, AI",
  authors: [{ name: "SENDIGITAL" }],
  openGraph: {
    title: "SENDIGITAL - Технологические решения под Ваши потребности",
    description:
      "Лицензирование, внедрение, поддержка и цифровая инфраструктура — всё для устойчивой работы ваших систем",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="antialiased bg-white">
        <SmoothScroll>
          <CursorEffect />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
