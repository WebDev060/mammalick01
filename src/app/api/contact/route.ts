import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Simple in-memory rate limiting (resets on server restart)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS = 3 // Max 3 requests per minute per IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)
  
  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now })
    return true
  }
  
  if (record.count >= MAX_REQUESTS) {
    return false
  }
  
  record.count++
  return true
}

// Sanitize input to prevent XSS
function sanitizeInput(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .trim()
    .slice(0, 5000) // Limit length
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

// Verify reCAPTCHA token
async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    })

    const data = await response.json()
    // reCAPTCHA v3 returns a score from 0.0 to 1.0
    // 0.5 is a good threshold (adjust as needed)
    return data.success && data.score >= 0.5
  } catch {
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, country, subject, message, inquiryType } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Sanitize all inputs
    const sanitizedName = sanitizeInput(name)
    const sanitizedEmail = sanitizeInput(email)
    const sanitizedCountry = sanitizeInput(country || '')
    const sanitizedSubject = sanitizeInput(subject || '')
    const sanitizedMessage = sanitizeInput(message)
    const sanitizedInquiryType = sanitizeInput(inquiryType || 'general')

    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: sanitizedEmail,
      subject: `[MammaLick Contact] ${sanitizedSubject || 'New Inquiry'} - ${sanitizedInquiryType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(to right, #F0A7AD, #DB7093); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #333; border-bottom: 2px solid #F0A7AD; padding-bottom: 10px;">Contact Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #555;">Name:</td>
                <td style="padding: 10px 0; color: #333;">${sanitizedName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 10px 0; color: #333;"><a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #555;">Country:</td>
                <td style="padding: 10px 0; color: #333;">${sanitizedCountry || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #555;">Inquiry Type:</td>
                <td style="padding: 10px 0; color: #333;">${sanitizedInquiryType}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #555;">Subject:</td>
                <td style="padding: 10px 0; color: #333;">${sanitizedSubject || 'Not specified'}</td>
              </tr>
            </table>
            
            <h2 style="color: #333; border-bottom: 2px solid #F0A7AD; padding-bottom: 10px; margin-top: 30px;">Message</h2>
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #F0A7AD;">
              <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${sanitizedMessage}</p>
            </div>
          </div>
          
          <div style="background: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">This email was sent from MammaLick website contact form</p>
          </div>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}
