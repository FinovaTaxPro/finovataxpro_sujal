import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
    render,
} from '@react-email/components';
import * as React from 'react';

interface ConsultationEmailProps {
    name: string;
    email: string;
    phone: string;
    service: string;
}

export const ConsultationEmail = ({
    name,
    email,
    phone,
    service,
}: ConsultationEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>New Consultation Request from {name}</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>New Consultation Request</Heading>
                    <Text style={text}>
                        You have received a new consultation request from the FinovaTaxPro website.
                    </Text>
                    <Section style={section}>
                        <Text style={text}>
                            <strong>Name:</strong> {name}
                        </Text>
                        <Text style={text}>
                            <strong>Email:</strong> {email}
                        </Text>
                        <Text style={text}>
                            <strong>Phone:</strong> {phone}
                        </Text>
                        <Text style={text}>
                            <strong>Service Interested In:</strong> {service}
                        </Text>
                    </Section>
                    <Text style={footer}>
                        FinovaTaxPro Automated System
                    </Text>
                </Container>
            </Body>
        </Html>
    );
};

export const renderConsultationEmail = (props: ConsultationEmailProps) => {
    return render(<ConsultationEmail {...props} />);
};


const main = {
    backgroundColor: '#f6f9fc',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '20px 0 48px',
    marginBottom: '64px',
};

const h1 = {
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
    paddingTop: '32px',
    paddingBottom: '16px',
    textAlign: 'center' as const,
};

const text = {
    color: '#333',
    fontSize: '16px',
    lineHeight: '26px',
    padding: '0 20px',
};

const section = {
    padding: '24px',
    border: '1px solid #e6ebf1',
    borderRadius: '4px',
    margin: '20px',
};

const footer = {
    color: '#898989',
    fontSize: '12px',
    lineHeight: '22px',
    marginTop: '12px',
    textAlign: 'center' as const,
};

export default ConsultationEmail;
