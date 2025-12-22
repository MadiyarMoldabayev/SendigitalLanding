import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "kk" }, { locale: "en" }];
}

const privacyContent = {
  ru: {
    title: "Политика конфиденциальности",
    sections: [
      {
        title: "1. Общие положения",
        text: "Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта SENDIGITAL.",
      },
      {
        title: "2. Сбор информации",
        text: "Мы собираем информацию, которую вы предоставляете при заполнении форм на сайте, включая имя, телефон, email и другую информацию.",
      },
      {
        title: "3. Использование информации",
        text: "Собранная информация используется для связи с вами, обработки заявок и предоставления услуг.",
      },
      {
        title: "4. Защита данных",
        text: "Мы применяем современные методы защиты данных и обеспечиваем их конфиденциальность.",
      },
    ],
  },
  kk: {
    title: "Құпиялылық саясаты",
    sections: [
      {
        title: "1. Жалпы ережелер",
        text: "Бұл Құпиялылық саясаты SENDIGITAL сайтының пайдаланушыларының жеке деректерін өңдеу және қорғау тәртібін анықтайды.",
      },
      {
        title: "2. Ақпарат жинау",
        text: "Біз сайттағы формаларды толтыру кезінде сіз берген ақпаратты жинаймыз, соның ішінде аты, телефон, email және басқа ақпараттар.",
      },
      {
        title: "3. Ақпаратты пайдалану",
        text: "Жиналған ақпарат сізбен байланысу, өтініштерді өңдеу және қызметтерді көрсету үшін пайдаланылады.",
      },
      {
        title: "4. Деректерді қорғау",
        text: "Біз деректерді қорғаудың заманауи әдістерін қолданамыз және олардың құпиялылығын қамтамасыз етеміз.",
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    sections: [
      {
        title: "1. General Provisions",
        text: "This Privacy Policy defines the procedure for processing and protecting personal data of SENDIGITAL website users.",
      },
      {
        title: "2. Information Collection",
        text: "We collect information that you provide when filling out forms on the site, including name, phone, email and other information.",
      },
      {
        title: "3. Use of Information",
        text: "The collected information is used to contact you, process requests and provide services.",
      },
      {
        title: "4. Data Protection",
        text: "We use modern data protection methods and ensure their confidentiality.",
      },
    ],
  },
};

interface PageProps {
  params: { locale: string };
}

export default function PrivacyPage({ params }: PageProps) {
  const locale = params.locale;
  const t = privacyContent[locale as keyof typeof privacyContent] || privacyContent.ru;

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
