import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return [
    { slug: 'electrician' },
    { slug: 'plumbing' },
    { slug: 'home-cleaning' },
    { slug: 'appliance-repair' },
    { slug: 'painting' },
    { slug: 'carpentry' },
    { slug: 'ac-repair' },
    { slug: 'pest-control' },
  ];
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const formattedTitle = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <>
      <Navigation />
      
      <main style={{ padding: '80px 0', minHeight: '60vh' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Link href="/services" style={{ color: 'var(--tx)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px', fontWeight: 700 }}>
            ← Back to Services
          </Link>
          
          <div style={{ background: 'var(--card)', padding: '48px', borderRadius: '26px', boxShadow: '0 9px 0 #1d4a43, 0 26px 30px rgba(0, 0, 0, 0.05)' }}>
            <h1 style={{ color: 'var(--g)', fontSize: '36px', marginBottom: '16px' }}>{formattedTitle}</h1>
            
            <div style={{ background: 'rgba(233, 132, 125, 0.1)', border: '1px solid var(--co)', color: 'var(--t)', padding: '16px', borderRadius: '12px', marginBottom: '32px', fontSize: '14px' }}>
              <strong>Development Demo:</strong> This is a dynamic route placeholder. Backend service configurations are not yet connected.
            </div>

            <h2 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--tx)' }}>About this service</h2>
            <p style={{ opacity: 0.8, marginBottom: '24px', lineHeight: 1.6 }}>
              Professional {formattedTitle.toLowerCase()} services to keep your home in perfect condition. 
              Our experienced partners bring all necessary equipment and supplies.
            </p>

            <h3 style={{ fontSize: '18px', marginBottom: '12px', color: 'var(--t)' }}>What's Included:</h3>
            <ul style={{ paddingLeft: '24px', marginBottom: '32px', opacity: 0.8, lineHeight: 1.6 }}>
              <li>Comprehensive assessment and consultation</li>
              <li>Professional execution of requested tasks</li>
              <li>Post-service cleanup and inspection</li>
              <li>Satisfaction guarantee</li>
            </ul>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '2px solid var(--line)', paddingTop: '32px', marginTop: '32px' }}>
              <div>
                <div style={{ fontSize: '14px', opacity: 0.8 }}>Starting from</div>
                <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--g)' }}>₹--</div>
              </div>
              <Link href="/book" className="btn">Book Now</Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
