import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import TeamSection from "@/components/TeamSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "kk" }, { locale: "en" }];
}

interface PageProps {
  params: { locale: string };
}

export default function LocalePage({ params }: PageProps) {
  const locale = params.locale;

  return (
    <main className="min-h-screen bg-white">
      <Header locale={locale} />
      <HeroSection locale={locale} />
      <ServicesSection locale={locale} />
      <WhyUsSection locale={locale} />
      <TeamSection locale={locale} />
      <ContactFormSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
