"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";

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
    commentLabel: "Сообщение",
    commentPlaceholder: "Расскажите о вашем проекте или задайте вопрос...",
    submitButton: "Отправить заявку",
    submitting: "Отправка...",
    submitError: "Произошла ошибка при отправке. Пожалуйста, попробуйте позже.",
    successTitle: "Спасибо! Ваш запрос принят.",
    successMessage: "Мы свяжемся с вами в ближайшее время.",
    sendAgain: "Отправить ещё",
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
    commentLabel: "Хабарлама",
    commentPlaceholder: "Жобаңыз туралы айтыңыз немесе сұрақ қойыңыз...",
    submitButton: "Өтініш жіберу",
    submitting: "Жіберілуде...",
    submitError: "Жіберу кезінде қате орын алды. Кейінірек қайталаңыз.",
    successTitle: "Рахмет! Сіздің өтінішіңіз қабылданды.",
    successMessage: "Біз сізбен жақын арада байланысамыз.",
    sendAgain: "Тағы жіберу",
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
    commentLabel: "Message",
    commentPlaceholder: "Tell us about your project or ask a question...",
    submitButton: "Submit Request",
    submitting: "Sending...",
    submitError: "An error occurred while sending. Please try again later.",
    successTitle: "Thank you! Your request has been received.",
    successMessage: "We will contact you shortly.",
    sendAgain: "Send Again",
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
    comment: "",
    honeypot: "", // Anti-spam field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const t = contactFormTranslations[locale as keyof typeof contactFormTranslations] || contactFormTranslations.ru;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check - if filled, it's a bot
    if (formState.honeypot) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      const response = await fetch('/.netlify/functions/send-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          phone: formState.phone,
          email: formState.email,
          service: "Общий запрос",
          comment: formState.comment,
          files: [],
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send request');
      }

      setIsSubmitted(true);
      setFormState({ name: "", phone: "", email: "", comment: "", honeypot: "" });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(t.submitError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-gray-50 to-white relative" ref={ref}>
      {/* Background effect */}
      <div className="absolute inset-0 mesh-bg opacity-30" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 text-primary text-sm font-medium mb-6"
          >
            {t.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            {t.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass border-2 border-gray-200/50 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10 rounded-full blur-3xl -z-10" />

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t.successTitle}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t.successMessage}
                </p>
                <MagneticButton
                  onClick={() => setIsSubmitted(false)}
                  className="btn-secondary text-sm"
                >
                  {t.sendAgain}
                </MagneticButton>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-5 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                      placeholder={t.namePlaceholder}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-5 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                      placeholder={t.phonePlaceholder}
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-5 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                    placeholder={t.emailPlaceholder}
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.commentLabel}
                  </label>
                  <textarea
                    rows={5}
                    value={formState.comment}
                    onChange={(e) => setFormState({ ...formState, comment: e.target.value })}
                    className="w-full px-5 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none"
                    placeholder={t.commentPlaceholder}
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <MagneticButton
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-3 py-5 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin w-6 h-6"
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
                          className="w-6 h-6"
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
                  </MagneticButton>
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
