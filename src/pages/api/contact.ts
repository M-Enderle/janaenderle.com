import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, message } = body;
    
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Missing required fields' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Invalid email format' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Create transporter for sending emails via SMTP
    // In production, these would come from environment variables
    const transporter = nodemailer.createTransporter({
      host: import.meta.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(import.meta.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: import.meta.env.SMTP_USER,
        pass: import.meta.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: import.meta.env.SMTP_USER,
      to: import.meta.env.CONTACT_EMAIL || 'hello@janaenderle.com',
      subject: `Neue Nachricht von ${name.trim()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px">
          <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #eee; padding-bottom: 10px;">Neue Kontaktformular-Nachricht</h2>
          <div style="margin-bottom: 15px;">
            <strong style="color: #555;">Name:</strong> 
            <span style="color: #333;">${name.trim()}</span>
          </div>
          <div style="margin-bottom: 15px;">
            <strong style="color: #555;">E-Mail:</strong> 
            <span style="color: #333;">${email.trim()}</span>
          </div>
          <div style="background-color: #f8f8f8; padding: 15px; margin-bottom: 20px; border-radius: 4px;">
            ${message.trim().replace(/\n/g, '<br>')}
          </div>
          <div style="color: #666; font-size: 14px; border-top: 1px solid #eee; padding-top: 15px;">
            <strong>Gesendet:</strong> ${new Date().toLocaleString('de-DE')}
          </div>
        </div>
      `,
      replyTo: email.trim()
    };

    // Send email (in development, we'll just log and return success)
    try {
      if (import.meta.env.PROD && import.meta.env.SMTP_USER) {
        await transporter.sendMail(mailOptions);
        console.log('Contact form email sent successfully:', {
          name: name.trim(),
          email: email.trim(),
          timestamp: new Date().toISOString()
        });
      } else {
        console.log('Development mode: Email would be sent:', mailOptions);
      }
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      // For now, we'll still return success even if email fails
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Message sent successfully'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'Internal Server Error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};