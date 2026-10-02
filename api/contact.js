export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const body = req.body || {};
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
    const subject = typeof body.subject === 'string' ? body.subject.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ message: 'Server configuration error' });
    }

    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    function escapeHtml(str) {
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    const html = '<div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">' +
      '<h2>Hafi Digital - New Contact Request</h2>' +
      '<table style="width: 100%; border-collapse: collapse;">' +
      '<tr><td style="padding: 8px; font-weight: bold;">Name</td><td style="padding: 8px;">' + escapeHtml(name) + '</td></tr>' +
      '<tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;">' + escapeHtml(email) + '</td></tr>' +
      '<tr><td style="padding: 8px; font-weight: bold;">Phone</td><td style="padding: 8px;">' + escapeHtml(phone || '-') + '</td></tr>' +
      '<tr><td style="padding: 8px; font-weight: bold;">Subject/Service</td><td style="padding: 8px;">' + escapeHtml(subject || '-') + '</td></tr>' +
      '<tr><td style="padding: 8px; font-weight: bold; vertical-align: top;">Message</td><td style="padding: 8px; white-space: pre-wrap;">' + escapeHtml(message) + '</td></tr>' +
      '<tr><td style="padding: 8px; font-weight: bold;">Time</td><td style="padding: 8px;">' + new Date().toISOString() + '</td></tr>' +
      '</table>' +
      '</div>';

    const text = 'Hafi Digital - New Contact Request\n\n' +
      'Name: ' + name + '\n' +
      'Email: ' + email + '\n' +
      'Phone: ' + (phone || '-') + '\n' +
      'Subject/Service: ' + (subject || '-') + '\n' +
      'Message: ' + message + '\n' +
      'Time: ' + new Date().toISOString();

    const { error } = await resend.emails.send({
      from: 'Hafi Digital <halo@hafi.digital>',
      to: ['hafidigitalenterprise@gmail.com'],
      replyTo: email,
      subject: 'New Contact Form - Hafi Digital',
      html: html,
      text: text,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ message: 'Failed to send email' });
    }

    return res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.error('Contact API error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
}
