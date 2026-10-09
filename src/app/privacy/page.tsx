import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Workivo',
  description: 'Learn how Workivo collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main style={{ maxWidth: 800, margin: '0 auto', padding: '64px 24px 96px' }}>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--g)', marginBottom: 8 }}>
          Privacy Policy
        </h1>
        <p style={{ opacity: 0.6, marginBottom: 48, fontSize: 14 }}>Last updated: October 2026</p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, color: 'var(--t)', marginBottom: 12 }}>1. Information We Collect</h2>
          <p style={{ lineHeight: 1.8, marginBottom: 12 }}>
            We collect information you provide when you create an account, book a service, or contact us. This includes your name, email address, phone number, physical address, and payment information.
          </p>
          <p style={{ lineHeight: 1.8 }}>
            We also automatically collect usage data such as your device type, browser, IP address, and how you interact with our platform to improve our services.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, color: 'var(--t)', marginBottom: 12 }}>2. How We Use Your Information</h2>
          <ul style={{ paddingLeft: 20, listStyle: 'disc', display: 'flex', flexDirection: 'column', gap: 8, lineHeight: 1.8 }}>
            <li>To process and manage your bookings</li>
            <li>To connect you with qualified service professionals</li>
            <li>To process payments securely through our payment partners</li>
            <li>To send booking confirmations, reminders, and service updates</li>
            <li>To improve our platform and develop new features</li>
            <li>To respond to your inquiries and provide customer support</li>
          </ul>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, color: 'var(--t)', marginBottom: 12 }}>3. Data Sharing</h2>
          <p style={{ lineHeight: 1.8 }}>
            We share your name, contact details, and service address with workers assigned to your bookings so they can provide the requested service. We do not sell your personal data to third parties. Payment processing is handled by Razorpay under their own privacy terms.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, color: 'var(--t)', marginBottom: 12 }}>4. Data Security</h2>
          <p style={{ lineHeight: 1.8 }}>
            We implement industry-standard security measures to protect your data, including encryption in transit and at rest. However, no system is 100% secure, and we encourage you to use strong passwords and keep your account credentials confidential.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, color: 'var(--t)', marginBottom: 12 }}>5. Your Rights</h2>
          <p style={{ lineHeight: 1.8 }}>
            You may access, update, or delete your personal data by visiting your account settings. You can also contact us at <a href="mailto:privacy@workivo.in" style={{ color: 'var(--co)', fontWeight: 700 }}>privacy@workivo.in</a> with any privacy-related requests.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: 24, color: 'var(--t)', marginBottom: 12 }}>6. Contact Us</h2>
          <p style={{ lineHeight: 1.8 }}>
            If you have questions about this Privacy Policy, please email us at <a href="mailto:privacy@workivo.in" style={{ color: 'var(--co)', fontWeight: 700 }}>privacy@workivo.in</a>.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
