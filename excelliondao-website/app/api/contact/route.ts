import { NextRequest, NextResponse } from 'next/server';

// Contact form submission handler
// In production, integrate with email service like Resend, SendGrid, or Mailgun

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the submission (in production, send email)
    console.log('Contact form submission:', {
      name: data.name,
      email: data.email,
      company: data.company,
      subject: data.subject,
      message: data.message,
      timestamp: new Date().toISOString(),
    });

    // In production, integrate with email service:
    // 
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@excelliondao.com',
    //   to: 'connect@excelliondao.com',
    //   subject: `Contact Form: ${data.subject}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${data.name}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
    //     <p><strong>Subject:</strong> ${data.subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${data.message}</p>
    //   `,
    // });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! We will get back to you within 24 hours.',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    );
  }
}

