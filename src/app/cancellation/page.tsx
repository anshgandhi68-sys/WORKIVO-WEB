import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Cancellation Policy | Workivo',
  description: 'Understand our booking cancellation and refund policies.',
};

export default function CancellationPage() {
  return (
    <>
      <Navigation />
      <main style={{ maxWidth: 800, margin: '0 auto', padding: '64px 24px 96px' }}>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--g)', marginBottom: 8 }}>
          Cancellation & Refund Policy
        </h1>
        <p style={{ opacity: 0.6, marginBottom: 48, fontSize: 14 }}>Last updated: October 2026</p>

        <div style={{
          background: 'var(--g)',
          color: '#FBF1EE',
          borderRadius: 20,
          padding: 28,
          marginBottom: 48,
        }}>
          <p style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>Quick Summary</p>
          <p style={{ margin: 0, opacity: 0.9, lineHeight: 1.7 }}>
            Cancel more than 2 hours before your booking for a full refund. Cancel within 2 hours for a 50% refund. No refund for no-shows.
          </p>
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, color: 'var(--t)', marginBottom: 12 }}>Customer Cancellations</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 16, padding: 24 }}>
              <p style={{ fontWeight: 700, color: 'var(--g)', marginBottom: 4 }}>More than 2 hours before service</p>
              <p style={{ margin: 0, opacity: 0.8 }}>Full refund — credited within 5-7 business days</p>
            </div>
            <div style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 16, padding: 24 }}>
              <p style={{ fontWeight: 700, color: 'var(--t)', marginBottom: 4 }}>Less than 2 hours before service</p>
              <p style={{ margin: 0, opacity: 0.8 }}>50% refund — the remaining amount compensates the assigned worker</p>
            </div>
            <div style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 16, padding: 24 }}>
              <p style={{ fontWeight: 700, color: '#c0392b', marginBottom: 4 }}>No-show / After service time</p>
              <p style={{ margin: 0, opacity: 0.8 }}>No refund — the full amount is paid to the worker</p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, color: 'var(--t)', marginBottom: 12 }}>Worker Cancellations</h2>
          <p style={{ lineHeight: 1.8 }}>
            If a worker cancels your booking, you will receive a full refund and we will attempt to reassign another professional. Repeated cancellations by workers result in platform penalties.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, color: 'var(--t)', marginBottom: 12 }}>How to Cancel</h2>
          <p style={{ lineHeight: 1.8 }}>
            You can cancel your booking from the <a href="/account/bookings" style={{ color: 'var(--co)', fontWeight: 700 }}>My Bookings</a> section in your account dashboard. Select the booking and click &quot;Cancel Booking.&quot;
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: 24, color: 'var(--t)', marginBottom: 12 }}>Questions?</h2>
          <p style={{ lineHeight: 1.8 }}>
            Contact our support team at <a href="mailto:support@workivo.in" style={{ color: 'var(--co)', fontWeight: 700 }}>support@workivo.in</a> for any cancellation or refund-related queries.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
