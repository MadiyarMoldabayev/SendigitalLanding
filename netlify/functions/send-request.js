const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { name, phone, email, service, comment, files } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !phone || !email || !service) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Get credentials from environment variables
    const smtpUserFull = process.env.SMTP_USER || 'info@sengroup.one';
    const smtpUserOnly = smtpUserFull.split('@')[0];
    const smtpPassword = process.env.SMTP_PASSWORD;
    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;
    let smtpUser = smtpUserFull;

    // Validate credentials
    if (!smtpPassword) {
      console.error('SMTP_PASSWORD is not set');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'SMTP configuration error' }),
      };
    }

    // Try port 465 first (SSL)
    let transporter = nodemailer.createTransport({
      host: 'pkz32.hoster.kz',
      port: 465,
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
      tls: {
        rejectUnauthorized: false,
      },
      debug: false,
      logger: false,
    });

    // Verify connection
    try {
      await transporter.verify();
      console.log('SMTP connection verified on port 465');
    } catch (verifyError) {
      console.log('Port 465 failed, trying port 587 with STARTTLS');
      transporter = nodemailer.createTransport({
        host: 'pkz32.hoster.kz',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: smtpUser,
          pass: smtpPassword,
        },
        tls: {
          rejectUnauthorized: false,
        },
        debug: false,
        logger: false,
      });
      
      try {
        await transporter.verify();
        console.log('SMTP connection verified on port 587');
      } catch (verifyError2) {
        console.error('Port 587 failed, trying with username only:', verifyError2.message);
        transporter = nodemailer.createTransport({
          host: 'pkz32.hoster.kz',
          port: 587,
          secure: false,
          requireTLS: true,
          auth: {
            user: smtpUserOnly,
            pass: smtpPassword,
          },
          tls: {
            rejectUnauthorized: false,
          },
        });
        
        try {
          await transporter.verify();
          console.log('SMTP connection verified on port 587 with username only');
        } catch (verifyError3) {
          console.error('All connection attempts failed:', verifyError3.message);
          throw verifyError3;
        }
      }
    }

    // Prepare email content
    const emailSubject = `Новая заявка с сайта SENDIGITAL от ${name}`;
    const emailHtml = `
      <h2>Новая заявка с формы обратной связи SENDIGITAL</h2>
      <p><strong>Имя:</strong> ${name}</p>
      <p><strong>Телефон:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Услуга:</strong> ${service}</p>
      ${comment ? `<p><strong>Комментарий:</strong></p><p>${comment.replace(/\n/g, '<br>')}</p>` : ''}
      ${files && files.length > 0 ? `<p><strong>Прикреплено файлов:</strong> ${files.length}</p>` : ''}
    `;
    const emailText = `
Новая заявка с формы обратной связи SENDIGITAL

Имя: ${name}
Телефон: ${phone}
Email: ${email}
Услуга: ${service}
${comment ? `Комментарий:\n${comment}` : ''}
${files && files.length > 0 ? `Прикреплено файлов: ${files.length}` : ''}
    `;

    // Send email
    const mailOptions = {
      from: 'info@sengroup.one',
      to: 'info@sengroup.one',
      subject: emailSubject,
      html: emailHtml,
      text: emailText,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    // Send to Telegram if configured
    if (telegramBotToken && telegramChatId) {
      try {
        const telegramMessage = `🔔 *Новая заявка с сайта SENDIGITAL*

👤 *Имя:* ${name}
📞 *Телефон:* ${phone}
📧 *Email:* ${email}
🎯 *Услуга:* ${service}
${comment ? `💬 *Комментарий:*\n${comment}` : ''}
${files && files.length > 0 ? `📎 *Файлов:* ${files.length}` : ''}`;

        const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
        const telegramResponse = await fetch(telegramUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: telegramMessage,
            parse_mode: 'Markdown',
          }),
        });

        if (!telegramResponse.ok) {
          console.error('Telegram send failed:', await telegramResponse.text());
        } else {
          console.log('Telegram message sent successfully');
        }
      } catch (telegramError) {
        console.error('Error sending to Telegram:', telegramError);
        // Don't fail the request if Telegram fails
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Request sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending request:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send request', details: error.message }),
    };
  }
};

