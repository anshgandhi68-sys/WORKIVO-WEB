import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Us | Workivo',
  description: 'Learn about Workivo — the home services marketplace connecting customers with skilled workers.',
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main style={{ maxWidth: 800, margin: '0 auto', padding: '64px 24px 96px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <img src="/workivo-logo.svg" alt="Workivo" style={{ height: 48, width: 'auto' }} />
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--g)', margin: 0 }}>
            About Workivo
          </h1>
        </div>
        <p style={{ fontSize: 18, marginBottom: 24, lineHeight: 1.8 }}>
          <strong style={{ color: 'var(--co)' }}>Small task, Big relief.</strong> That&apos;s the promise behind Workivo.
        </p>
        <p style={{ marginBottom: 20, lineHeight: 1.8 }}>
          We built Workivo because we believe everyone deserves access to reliable, affordable home services — without the stress of searching, negotiating, or worrying about quality. Whether you need an electrician, a cook, a cleaner, or a mover, Workivo connects you with verified, skilled professionals in minutes.
        </p>
        <h2 style={{ fontSize: 28, color: 'var(--t)', marginTop: 48, marginBottom: 16 }}>Our Mission</h2>
        <p style={{ marginBottom: 20, lineHeight: 1.8 }}>
          To make everyday household tasks effortless by providing a trusted platform where customers get quality service and workers get fair opportunities.
        </p>
        <h2 style={{ fontSize: 28, color: 'var(--t)', marginTop: 48, marginBottom: 16 }}>For Customers</h2>
        <p style={{ marginBottom: 20, lineHeight: 1.8 }}>
          Browse from 10+ service categories, book instantly, and pay securely. Every worker on our platform is background-verified and trained to deliver consistent quality.
        </p>
        <h2 style={{ fontSize: 28, color: 'var(--t)', marginTop: 48, marginBottom: 16 }}>For Workers</h2>
        <p style={{ marginBottom: 20, lineHeight: 1.8 }}>
          Workivo provides workers with a steady stream of jobs, fair pay, skill development, and the dignity of professional recognition. Join our growing network and build your career on your terms.
        </p>
        <div style={{
          marginTop: 48,
          padding: 32,
          background: 'var(--card)',
          borderRadius: 20,
          border: '1px solid var(--line)',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: 20, fontWeight: 700, color: 'var(--g)', marginBottom: 8 }}>
            Small task, Big relief.
          </p>
          <p style={{ margin: 0, opacity: 0.7 }}>
            Bringing quality home services to every doorstep.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
