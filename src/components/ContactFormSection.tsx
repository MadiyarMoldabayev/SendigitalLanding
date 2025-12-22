"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const contactFormTranslations = {
  ru: {
    badge: "Форма заявки",
    title: "Оставьте заявку",
    subtitle: "Заполните форму, и мы свяжемся с вами в ближайшее время",
    nameLabel: "Имя *",
    namePlaceholder: "Ваше имя",
    phoneLabel: "Телефон *",
    phonePlaceholder: "+7 (___) ___-__-__",
    emailLabel: "Email *",
    emailPlaceholder: "email@company.com",
    serviceLabel: "Выбор услуги *",
    servicePlaceholder: "Выберите услугу",
    commentLabel: "Комментарий",
    commentPlaceholder: "Расскажите о вашем проекте...",
    fileLabel: "Прикрепить файлы",
    fileButton: "Выбрать файлы",
    submitButton: "Отправить заявку",
    submitting: "Отправка...",
    submitError: "Произошла ошибка при отправке. Пожалуйста, попробуйте позже.",
    successTitle: "Спасибо! Ваш запрос принят.",
    successMessage: "Мы свяжемся с вами в ближайшее время.",
    sendAgain: "Отправить ещё",
    services: [
      "Установка и настройка ПО",
      "Интеграция IT-решений",
      "Разработка",
      "Техническая поддержка",
      "Big Data, ML и AI",
      "Другое",
    ],
  },
  kk: {
    badge: "Өтініш формасы",
    title: "Өтініш қалдырыңыз",
    subtitle: "Форманы толтырыңыз, біз сізбен жақын арада байланысамыз",
    nameLabel: "Аты *",
    namePlaceholder: "Атыңыз",
    phoneLabel: "Телефон *",
    phonePlaceholder: "+7 (___) ___-__-__",
    emailLabel: "Email *",
    emailPlaceholder: "email@company.com",
    serviceLabel: "Қызметті таңдау *",
    servicePlaceholder: "Қызметті таңдаңыз",
    commentLabel: "Пікір",
    commentPlaceholder: "Жобаңыз туралы айтыңыз...",
    fileLabel: "Файлдарды тіркеу",
    fileButton: "Файлдарды таңдау",
    submitButton: "Өтініш жіберу",
    submitting: "Жіберілуде...",
    submitError: "Жіберу кезінде қате орын алды. Кейінірек қайталаңыз.",
    successTitle: "Рахмет! Сіздің өтінішіңіз қабылданды.",
    successMessage: "Біз сізбен жақын арада байланысамыз.",
    sendAgain: "Тағы жіберу",
    services: [
      "БЖ орнату және баптау",
      "IT-шешімдерді интеграциялау",
      "Әзірлеу",
      "Техникалық қолдау",
      "Big Data, ML және AI",
      "Басқа",
    ],
  },
  en: {
    badge: "Request Form",
    title: "Submit a Request",
    subtitle: "Fill out the form and we will contact you shortly",
    nameLabel: "Name *",
    namePlaceholder: "Your name",
    phoneLabel: "Phone *",
    phonePlaceholder: "+7 (___) ___-__-__",
    emailLabel: "Email *",
    emailPlaceholder: "email@company.com",
    serviceLabel: "Select Service *",
    servicePlaceholder: "Select a service",
    commentLabel: "Comment",
    commentPlaceholder: "Tell us about your project...",
    fileLabel: "Attach Files",
    fileButton: "Choose Files",
    submitButton: "Submit Request",
    submitting: "Sending...",
    submitError: "An error occurred while sending. Please try again later.",
    successTitle: "Thank you! Your request has been received.",
    successMessage: "We will contact you shortly.",
    sendAgain: "Send Again",
    services: [
      "Software Installation and Setup",
      "IT Solutions Integration",
      "Development",
      "Technical Support",
      "Big Data, ML and AI",
      "Other",
    ],
  },
};

interface ContactFormSectionProps {
  locale: string;
}

export default function ContactFormSection({ locale }: ContactFormSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    comment: "",
    files: [] as File[],
    honeypot: "", // Anti-spam field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const t = contactFormTranslations[locale as keyof typeof contactFormTranslations] || contactFormTranslations.ru;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormState({ ...formState, files: Array.from(e.target.files) });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check - if filled, it's a bot
    if (formState.honeypot) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Convert files to base64 for sending
      const fileData = await Promise.all(
        formState.files.map(async (file) => {
          const base64 = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
          return {
            name: file.name,
            type: file.type,
            size: file.size,
            data: base64,
          };
        })
      );

      const response = await fetch('/.netlify/functions/send-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          phone: formState.phone,
          email: formState.email,
          service: formState.service,
          comment: formState.comment,
          files: fileData,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send request');
      }

      setIsSubmitted(true);
      setFormState({ name: "", phone: "", email: "", service: "", comment: "", files: [], honeypot: "" });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(t.submitError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50 relative" ref={ref}>
      {/* Background effect */}
      <div className="absolute inset-0 mesh-bg opacity-30" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            {t.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass border-2 border-gray-200/50 rounded-3xl p-8 md:p-10"
        >
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t.successTitle}
              </h3>
              <p className="text-gray-600 mb-6">
                {t.successMessage}
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn-secondary text-sm"
              >
                {t.sendAgain}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-300/50 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder={t.namePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-300/50 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder={t.phonePlaceholder}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-300/50 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder={t.emailPlaceholder}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.serviceLabel}
                </label>
                <select
                  required
                  value={formState.service}
                  onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-300/50 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                >
                  <option value="">{t.servicePlaceholder}</option>
                  {t.services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.commentLabel}
                </label>
                <textarea
                  rows={4}
                  value={formState.comment}
                  onChange={(e) => setFormState({ ...formState, comment: e.target.value })}
                  className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-300/50 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  placeholder={t.commentPlaceholder}
                />
              </div>
              {/* Honeypot field - hidden from users */}
              <div className="hidden">
                <label htmlFor="honeypot">Не заполняйте это поле</label>
                <input
                  type="text"
                  id="honeypot"
                  name="honeypot"
                  value={formState.honeypot}
                  onChange={(e) => setFormState({ ...formState, honeypot: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.fileLabel}
                </label>
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-300/50 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90"
                />
                {formState.files.length > 0 && (
                  <p className="mt-2 text-sm text-gray-500">
                    Выбрано файлов: {formState.files.length}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    {t.submitting}
                  </>
                ) : (
                  <>
                    {t.submitButton}
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

