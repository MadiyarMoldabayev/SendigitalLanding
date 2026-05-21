import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProblemsSection from "@/components/ProblemsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ResultsSection from "@/components/ResultsSection";
import WhyUsSection from "@/components/WhyUsSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
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
      <IndustriesSection locale={locale} />
      <ProblemsSection locale={locale} />
      <ServicesSection locale={locale} />
      <ProcessSection locale={locale} />
      <ResultsSection locale={locale} />
      <WhyUsSection locale={locale} />
      <TeamSection locale={locale} />
      <CTASection locale={locale} />
      <ContactFormSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
