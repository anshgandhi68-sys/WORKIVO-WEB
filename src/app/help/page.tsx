import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Help & Support | Workivo',
  description: 'Get help with your Workivo bookings, payments, and account.',
};

export default function HelpPage() {
  const faqs = [
    { q: 'How do I book a service?', a: 'Browse our services page, select the service you need, choose a convenient date and time, and confirm your booking. A verified professional will be assigned to you.' },
    { q: 'How do I cancel a booking?', a: 'You can cancel a booking from your account dashboard up to 2 hours before the scheduled time for a full refund. See our cancellation policy for details.' },
    { q: 'How are workers verified?', a: 'All workers on Workivo undergo ID verification, background checks, and skill assessments before being approved on the platform.' },
    { q: 'What payment methods are accepted?', a: 'We accept UPI, credit/debit cards, net banking, and popular mobile wallets through our secure Razorpay payment gateway.' },
    { q: 'What if I\'m not satisfied with the service?', a: 'We offer a satisfaction guarantee. If you\'re not happy with the service provided, contact us within 24 hours and we\'ll arrange a re-service or refund.' },
    { q: 'How do I become a Workivo worker?', a: 'Visit our "For Workers" page and fill out the application form. Our team will review your application and get back to you within 3-5 business days.' },
  ];

  return (
    <>
      <Navigation />
      <main style={{ maxWidth: 800, margin: '0 auto', padding: '64px 24px 96px' }}>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--g)', marginBottom: 16 }}>
          Help & Support
        </h1>
        <p style={{ fontSize: 18, marginBottom: 48, opacity: 0.8 }}>
          Find answers to common questions or reach out to our team.
        </p>

        <div style={{
          padding: 28,
          background: 'var(--g)',
          color: '#FBF1EE',
          borderRadius: 20,
          marginBottom: 48,
          textAlign: 'center',
        }}>
          <p style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Need immediate help?</p>
          <p style={{ margin: 0, opacity: 0.85 }}>
            Email us at <a href="mailto:support@workivo.in" style={{ color: 'var(--co)', fontWeight: 700 }}>support@workivo.in</a>
          </p>
        </div>

        <h2 style={{ fontSize: 28, color: 'var(--t)', marginBottom: 24 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {faqs.map((faq, i) => (
            <details
              key={i}
              style={{
                background: 'var(--card)',
                border: '1px solid var(--line)',
                borderRadius: 16,
                padding: '20px 24px',
                cursor: 'pointer',
              }}
            >
              <summary style={{ fontWeight: 700, fontSize: 15, listStyle: 'none' }}>
                {faq.q}
              </summary>
              <p style={{ margin: '12px 0 0', lineHeight: 1.7, opacity: 0.85 }}>{faq.a}</p>
            </details>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
