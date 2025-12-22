import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "kk" }, { locale: "en" }];
}

const securityContent = {
  ru: {
    title: "Безопасность",
    sections: [
      {
        title: "1. Защита данных",
        text: "SENDIGITAL применяет современные методы защиты персональных данных и обеспечивает их конфиденциальность в соответствии с требованиями законодательства.",
      },
      {
        title: "2. SSL-шифрование",
        text: "Все данные передаются по защищенному SSL-соединению, что гарантирует их безопасность при передаче.",
      },
      {
        title: "3. Защита от спама",
        text: "Мы используем современные методы защиты форм от спама и автоматических атак.",
      },
    ],
  },
  kk: {
    title: "Қауіпсіздік",
    sections: [
      {
        title: "1. Деректерді қорғау",
        text: "SENDIGITAL заңнама талаптарына сәйкес жеке деректерді қорғаудың заманауи әдістерін қолданады және олардың құпиялылығын қамтамасыз етеді.",
      },
      {
        title: "2. SSL-шифрлау",
        text: "Барлық деректер қорғалған SSL-байланыс арқылы беріледі, бұл олардың берілу кезіндегі қауіпсіздігін кепілдейді.",
      },
      {
        title: "3. Спамнан қорғау",
        text: "Біз формаларды спамнан және автоматты шабуылдардан қорғаудың заманауи әдістерін қолданамыз.",
      },
    ],
  },
  en: {
    title: "Security",
    sections: [
      {
        title: "1. Data Protection",
        text: "SENDIGITAL applies modern methods of protecting personal data and ensures their confidentiality in accordance with legal requirements.",
      },
      {
        title: "2. SSL Encryption",
        text: "All data is transmitted over a secure SSL connection, which guarantees their security during transmission.",
      },
      {
        title: "3. Spam Protection",
        text: "We use modern methods to protect forms from spam and automated attacks.",
      },
    ],
  },
};

interface PageProps {
  params: { locale: string };
}

export default function SecurityPage({ params }: PageProps) {
  const locale = params.locale;
  const t = securityContent[locale as keyof typeof securityContent] || securityContent.ru;

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
