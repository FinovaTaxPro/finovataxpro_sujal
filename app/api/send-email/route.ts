import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ConsultationEmail } from '../../../components/email/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, service } = body;

        if (!name || !email || !phone || !service) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const data = await resend.emails.send({
            from: 'FinovaTaxPro <onboarding@resend.dev>', // Change to your verified domain later
            to: ['delivered@resend.dev'], // Send to the owner/admin. Change to user's email for testing or production
            subject: `New Consultation Request: ${service}`,
            react: ConsultationEmail({ name, email, phone, service }),
        });

        if (data.error) {
            return NextResponse.json({ error: data.error }, { status: 500 });
        }

        return NextResponse.json({ message: 'Email sent successfully', data });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
