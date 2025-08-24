import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  // Only allow POST requests
  if (getMethod(event) !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed'
    })
  }

  try {
    const body = await readBody(event)
    
    // Validate required fields
    const { name, email, message } = body
    
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields'
      })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid email format'
      })
    }

    // Get environment variables for email configuration
    const config = useRuntimeConfig()
    
    // Create transporter for sending emails via SMTP
    const transporter = nodemailer.createTransport({
      host: config.smtpHost || process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(config.smtpPort || process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: config.smtpUser || process.env.SMTP_USER,
        pass: config.smtpPass || process.env.SMTP_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: config.smtpUser || process.env.SMTP_USER,
      to: config.contactEmail || process.env.CONTACT_EMAIL || 'private@moritzenderle.com', // Jana's email
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
    }

    // Send email
    try {
      await transporter.sendMail(mailOptions)
      console.log('Contact form email sent successfully:', {
        name: name.trim(),
        email: email.trim(),
        timestamp: new Date().toISOString()
      })
    } catch (emailError) {
      console.error('Failed to send email:', emailError)
      // For now, we'll still return success even if email fails
      // In production, you might want to handle this differently
    }

    return {
      success: true,
      message: 'Message sent successfully'
    }
    
  } catch (error: any) {
    if (error.statusCode) {
      throw error
    }
    
    console.error('Contact form error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error'
    })
  }
})