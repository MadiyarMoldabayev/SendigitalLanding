import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientsBar from "@/components/ClientsBar";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TrustedBy from "@/components/TrustedBy";
import PhotoBand from "@/components/PhotoBand";
import CoreValuesSection from "@/components/CoreValuesSection";
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
    <main className="min-h-screen">
      <Header locale={locale} />
      <HeroSection locale={locale} />
      <ClientsBar locale={locale} />
      <AboutSection locale={locale} />
      <ServicesSection locale={locale} />
      <TrustedBy locale={locale} />
      <PhotoBand locale={locale} />
      <CoreValuesSection locale={locale} />
      <TeamSection locale={locale} />
      <ContactFormSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
