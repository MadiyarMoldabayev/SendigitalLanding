import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientsBar from "@/components/ClientsBar";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PhotoBand from "@/components/PhotoBand";
import ProcessSection from "@/components/ProcessSection";
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
    <main className="min-h-screen">
      <Header locale={locale} />
      <HeroSection locale={locale} />
      <ClientsBar locale={locale} />
      <ServicesSection locale={locale} />
      <AboutSection locale={locale} />
      <PhotoBand locale={locale} />
      <ProcessSection locale={locale} />
      <TeamSection locale={locale} />
      <CTASection locale={locale} />
      <ContactFormSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
