import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ConsultationEmail } from '../../../components/email/EmailTemplate';

console.log('API Key exists:', !!process.env.RESEND_API_KEY);
console.log('API Key preview:', process.env.RESEND_API_KEY?.substring(0, 5) + '...');

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        console.log('=== Email API Called ===');
        
        if (!process.env.RESEND_API_KEY) {
            console.error('❌ RESEND_API_KEY is missing');
            return NextResponse.json(
                { error: 'Email service not configured - Missing API key' },
                { status: 500 }
            );
        }

        const body = await request.json();
        console.log('📧 Request body:', body);
        
        const { name, email, phone, service } = body;

        if (!name || !email || !phone || !service) {
            console.error('❌ Missing fields:', { name: !!name, email: !!email, phone: !!phone, service: !!service });
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        console.log('📤 Attempting to send email...');
        
        const data = await resend.emails.send({
            from: 'FinovaTaxPro <noreply@finovataxpro.com>',
            to: ['finovataxpro@gmail.com', email],
            subject: `New Consultation Request: ${service}`,
            react: ConsultationEmail({ name, email, phone, service }),
        });

        console.log('📬 Resend response:', data);

        if (data.error) {
            console.error('❌ Resend API error:', data.error);
            return NextResponse.json(
                { error: `Email service error: ${JSON.stringify(data.error)}` },
                { status: 500 }
            );
        }

        console.log('✅ Email sent successfully');
        return NextResponse.json({ 
            message: 'Email sent successfully', 
            id: data.data?.id 
        });

    } catch (error) {
        console.error('❌ Caught error:', error);
        console.error('Error type:', typeof error);
        console.error('Error details:', JSON.stringify(error, null, 2));
        
        const errorMessage = error instanceof Error 
            ? error.message 
            : String(error);
        
        return NextResponse.json(
            { error: `Server error: ${errorMessage}` },
            { status: 500 }
        );
    }
}