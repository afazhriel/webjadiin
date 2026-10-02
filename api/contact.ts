import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const body = req.body as Record<string, unknown> | undefined;
    const name = typeof body?.name === 'string' ? body.name.trim() : '';
    const email = typeof body?.email === 'string' ? body.email.trim() : '';
    const phone = typeof body?.phone === 'string' ? body.phone.trim() : '';
    const subject = typeof body?.subject === 'string' ? body.subject.trim() : '';
    const message = typeof body?.message === 'string' ? body.message.trim() : '';

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

    const resend = new Resend(apiKey);

    const html = \
      <div style=\"font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;\">
        <h2>Hafi Digital — New Contact Request</h2>
        <table style=\"width: 100%; border-collapse: collapse;\">
          <tr>
            <td style=\"padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;\">Name</td>
            <td style=\"padding: 8px; border-bottom: 1px solid #eee;\">\</td>
          </tr>
          <tr>
            <td style=\"padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;\">Email</td>
            <td style=\"padding: 8px; border-bottom: 1px solid #eee;\">\</td>
          </tr>
          <tr>
            <td style=\"padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;\">Phone</td>
            <td style=\"padding: 8px; border-bottom: 1px solid #eee;\">\</td>
          </tr>
          <tr>
            <td style=\"padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;\">Subject/Service</td>
            <td style=\"padding: 8px; border-bottom: 1px solid #eee;\">\</td>
          </tr>
          <tr>
            <td style=\"padding: 8px; font-weight: bold; vertical-align: top;\">Message</td>
            <td style=\"padding: 8px; white-space: pre-wrap;\">\</td>
          </tr>
          <tr>
            <td style=\"padding: 8px; font-weight: bold;\">Time</td>
            <td style=\"padding: 8px;\">\</td>
          </tr>
        </table>
      </div>
    \;

    const text = \Hafi Digital — New Contact Request

Name: \
Email: \
Phone: \
Subject/Service: \
Message: \
Time: \\;

    const { error } = await resend.emails.send({
      from: 'Hafi Digital <halo@hafi.digital>',
      to: ['halo@hafi.digital'],
      replyTo: email,
      subject: 'New Contact Form — Hafi Digital',
      html,
      text,
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
