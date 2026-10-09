import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service | Workivo',
  description: 'Read the terms and conditions for using Workivo home services platform.',
};

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main style={{ maxWidth: 800, margin: '0 auto', padding: '64px 24px 96px' }}>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--g)', marginBottom: 8 }}>
          Terms of Service
        </h1>
        <p style={{ opacity: 0.6, marginBottom: 48, fontSize: 14 }}>Last updated: October 2026</p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, color: 'var(--t)', marginBottom: 12 }}>1. Acceptance of Terms</h2>
          <p style={{ lineHeight: 1.8 }}>
            By accessing or using Workivo (&quot;the Platform&quot;), you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, color: 'var(--t)', marginBottom: 12 }}>2. Service Description</h2>
          <p style={{ lineHeight: 1.8 }}>
            Workivo is a marketplace connecting customers with independent service professionals. We facilitate bookings and payments but are not responsible for the actual service delivery, which is performed by independent workers.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, color: 'var(--t)', marginBottom: 12 }}>3. User Accounts</h2>
          <p style={{ lineHeight: 1.8 }}>
            You must provide accurate information when creating an account. You are responsible for maintaining the security of your account and for all activity under it. Notify us immediately of any unauthorized use.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, color: 'var(--t)', marginBottom: 12 }}>4. Bookings & Payments</h2>
          <p style={{ lineHeight: 1.8 }}>
            All bookings are confirmed upon successful payment. Prices displayed include applicable taxes. Payment is processed securely through our payment partner Razorpay. Refunds are subject to our cancellation policy.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, color: 'var(--t)', marginBottom: 12 }}>5. User Responsibilities</h2>
          <ul style={{ paddingLeft: 20, listStyle: 'disc', display: 'flex', flexDirection: 'column', gap: 8, lineHeight: 1.8 }}>
            <li>Provide accurate booking information including address and contact details</li>
            <li>Be present at the service location at the scheduled time</li>
            <li>Treat service professionals with respect and dignity</li>
            <li>Do not use the platform for any unlawful purpose</li>
          </ul>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, color: 'var(--t)', marginBottom: 12 }}>6. Limitation of Liability</h2>
          <p style={{ lineHeight: 1.8 }}>
            Workivo acts as a facilitator and is not liable for the quality of services provided by independent professionals. We provide a dispute resolution process and satisfaction guarantee to protect your interests.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: 24, color: 'var(--t)', marginBottom: 12 }}>7. Contact</h2>
          <p style={{ lineHeight: 1.8 }}>
            For questions about these terms, contact us at <a href="mailto:legal@workivo.in" style={{ color: 'var(--co)', fontWeight: 700 }}>legal@workivo.in</a>.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
