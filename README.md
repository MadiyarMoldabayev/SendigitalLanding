# SENDIGITAL Landing Page

Сайт для SENDIGITAL - Технологические решения под Ваши потребности.

## Описание

Сайт предоставляет информацию об услугах SENDIGITAL: лицензирование ПО, интеграция IT-решений, разработка, техническая поддержка, Big Data, ML и AI.

## Особенности

- **Белый дизайн** - светлая цветовая схема
- **Мультиязычность** - поддержка русского, казахского и английского языков
- **Форма заявки** - с полями: имя, телефон, email, выбор услуги, комментарий, прикрепление файлов
- **Отправка в Email и Telegram** - заявки приходят на email и в Telegram (при настройке)
- **Защита от спама** - honeypot поле для защиты форм
- **Правовые страницы** - Политика конфиденциальности, Публичная оферта, Безопасность

## Структура

- **Hero Section** - главный экран с описанием услуг
- **Services Section** - детальное описание всех услуг
- **WhyUs Section** - почему выбирают нас
- **Team Section** - команда (без Гульсины)
- **ContactForm Section** - форма заявки
- **Footer** - контакты, реквизиты, правовые ссылки

## Настройка переменных окружения в Netlify

1. **SMTP_USER** = `info@sengroup.one`
2. **SMTP_PASSWORD** = `samal1234!`
3. **TELEGRAM_BOT_TOKEN** = (опционально) токен бота Telegram
4. **TELEGRAM_CHAT_ID** = (опционально) ID чата для получения уведомлений

## Деплой

Сайт задеплоен на Netlify:
- **Production URL**: https://sendigital.netlify.app
- **GitHub**: https://github.com/MadiyarMoldabayev/SendigitalLanding

## Разработка

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

## Технологии

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Netlify Functions (для отправки email и Telegram)

