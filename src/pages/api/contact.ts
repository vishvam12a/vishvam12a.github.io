import { Resend } from 'resend';

export const prerender = true;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export async function POST({ request }) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }), 
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'vjjoshi2005@gmail.com', // Your email address
      reply_to: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }), 
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send message. Please try again.' }), 
      { status: 500 }
    );
  }
}