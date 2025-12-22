import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "kk" }, { locale: "en" }];
}

const termsContent = {
  ru: {
    title: "Публичная оферта",
    sections: [
      {
        title: "1. Предмет оферты",
        text: "Настоящая публичная оферта является официальным предложением SENDIGITAL заключить договор на оказание услуг на указанных ниже условиях.",
      },
      {
        title: "2. Условия оказания услуг",
        text: "Услуги предоставляются в соответствии с условиями, согласованными сторонами в рамках конкретного проекта.",
      },
      {
        title: "3. Порядок оплаты",
        text: "Оплата услуг производится в порядке и на условиях, указанных в договоре или счете.",
      },
    ],
  },
  kk: {
    title: "Жалпыға бірдей ұсыныс",
    sections: [
      {
        title: "1. Ұсыныс пәні",
        text: "Бұл жалпыға бірдей ұсыныс SENDIGITAL-дің төменде көрсетілген шарттар бойынша қызметтерді көрсету бойынша келісімшарт жасасуға ресми ұсынысы болып табылады.",
      },
      {
        title: "2. Қызметтерді көрсету шарттары",
        text: "Қызметтер нақты жоба аясында тараптар келіскен шарттарға сәйкес көрсетіледі.",
      },
      {
        title: "3. Төлем тәртібі",
        text: "Қызметтерді төлеу келісімшартта немесе шотта көрсетілген тәртіпте және шарттарда жүзеге асырылады.",
      },
    ],
  },
  en: {
    title: "Public Offer",
    sections: [
      {
        title: "1. Subject of the Offer",
        text: "This public offer is an official proposal by SENDIGITAL to conclude an agreement for the provision of services under the conditions specified below.",
      },
      {
        title: "2. Terms of Service Provision",
        text: "Services are provided in accordance with the conditions agreed by the parties within the framework of a specific project.",
      },
      {
        title: "3. Payment Procedure",
        text: "Payment for services is made in the manner and under the conditions specified in the contract or invoice.",
      },
    ],
  },
};

interface PageProps {
  params: { locale: string };
}

export default function TermsPage({ params }: PageProps) {
  const locale = params.locale;
  const t = termsContent[locale as keyof typeof termsContent] || termsContent.ru;

  return (
    <main className="min-h-screen bg-white">
      <Header locale={locale} />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 xl:px-0">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{t.title}</h1>
          <div className="prose prose-lg max-w-none text-gray-700">
            {t.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <p className="mb-4">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer locale={locale} />
    </main>
  );
}
