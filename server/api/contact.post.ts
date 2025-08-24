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

    // For now, we'll just log the form submission
    // In a real application, you would send an email here
    console.log('Contact form submission:', {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString()
    })

    // TODO: Implement actual email sending
    // This could be done with services like:
    // - Nodemailer with SMTP
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // etc.

    // For now, we'll simulate email sending
    await new Promise(resolve => setTimeout(resolve, 1000))

    return {
      success: true,
      message: 'Message sent successfully'
    }
    
  } catch (error) {
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