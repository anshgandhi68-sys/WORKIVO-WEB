import React, { Suspense } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getServiceById } from '@/lib/api';

export function generateStaticParams() {
  return [
    { slug: 'electrician' },
    { slug: 'home-cooking' },
    { slug: 'barber-at-home' },
    { slug: 'nails-and-beauty' },
    { slug: 'furniture-repair' },
    { slug: 'plumbing' },
    { slug: 'home-cleaning' },
    { slug: 'ac-repair' },
    { slug: 'packers-and-movers' },
    { slug: 'laundry' },
  ];
}

const serviceImages: Record<string, string> = {
  electrician: '/images/services/electrician.jpg',
  'home-cooking': '/images/services/chef.jpg',
  'barber-at-home': '/images/services/barber.jpg',
  'nails-and-beauty': '/images/services/beauty.jpg',
  'furniture-repair': '/images/services/carpenter.jpg',
  plumbing: '/images/services/plumbing.jpg',
  'home-cleaning': '/images/services/cleaning.jpg',
  'ac-repair': '/images/services/ac.jpg',
  'packers-and-movers': '/images/services/movers.jpg',
  laundry: '/images/services/laundry.jpg',
};

const serviceInclusions: Record<string, string[]> = {
  laundry: [
    'Doorstep pickup and fabric condition audit',
    'Anti-bacterial sanitization wash & deep stain lifting',
    'Steam pressing with zero-wrinkle finish',
    'Eco-friendly protective packing & prompt 24-48h delivery',
  ],
  electrician: [
    'Comprehensive safety & circuit load diagnostics',
    'MCB panel check, wire joint safety & grounding check',
    'Professional grade switch, socket or fixture installations',
    'Post-work surge verification with 30-day warranty',
  ],
  plumbing: [
    'Precision leak detection and water pressure testing',
    'High-grade sealing and faucet/pipeline fitting replacement',
    'Drainage unblocking and waste trap sanitization',
    'Water-tight durability testing before sign-off',
  ],
  'home-cooking': [
    'Customized meal planning tailored to your family taste and diet',
    'Hygienic vegetable chopping and meal preparation',
    'Fresh hot cooking for up to 4 dishes per session',
    'Stove, countertop, and cookware cleanup afterwards',
  ],
  'barber-at-home': [
    'Personal styling consultation and hair texture check',
    'Single-use disposable cape and UV sterilized trimmer set',
    'Precision haircut, beard shaping & razor edging',
    'Cool mist cleanup and soothing aftershave finish',
  ],
  'nails-and-beauty': [
    'Soothing botanical soak, cuticle nourishment & scrub',
    'Massage relaxation, nail shaping and professional polish',
    'Dermatologically tested organic products only',
    'Single-use sterilized kit for maximum home hygiene',
  ],
  'furniture-repair': [
    'Structural wobble assessment and joint alignment',
    'Solid dowel reinforcement, screw tightening and leveling',
    'Drawer runner lubrication and cupboard hinge alignment',
    'Surface scratch touch-up and load stability check',
  ],
  'home-cleaning': [
    'Intensive kitchen chimney, hob and tile degreasing',
    'Bathroom descaling, fixture shining and grout cleaning',
    'High-power fabric vacuuming and dry cleaning',
    'Full-floor mechanized buffing and anti-microbial spray',
  ],
  'ac-repair': [
    'High-pressure indoor coil jet wash and filter treatment',
    'Refrigerant gas pressure check and thermal efficiency audit',
    'Outdoor unit fan, condenser wash & electrical contact check',
    'Cooling temperature thermometer verification with 90-day warranty',
  ],
  'packers-and-movers': [
    'Multi-layer bubble wrap, foam and edge guard packing',
    'Systematic heavy furniture rigging, strapping and loading',
    'Transit coverage and dedicated GPS-tracked vehicle transport',
    'Room-by-room unloading and primary furniture arrangement',
  ],
};

const defaultInclusions = [
  'Comprehensive assessment and consultation',
  'Professional execution by certified cooperative partners',
  'Post-service cleanup and quality inspection',
  '100% satisfaction guarantee with peer escrow protection',
];

async function ServiceDetailContent({ paramsPromise }: { paramsPromise: Promise<{ slug: string }> }) {
  const { slug } = await paramsPromise;
  const dbService = await getServiceById(slug);

  const formattedTitle = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const title = dbService?.title || formattedTitle;
  const category = dbService?.category || 'Home Services';
  const description =
    dbService?.description ||
    `Professional ${title.toLowerCase()} delivered to your home by verified Workivo cooperative partners.`;
  const price = dbService?.price ? `₹${dbService.price}` : '₹299';
  const priceUnit = dbService?.price_unit || '/ visit';
  const duration = dbService?.estimated_duration || '1-2 hrs estimated';
  const badgeText = dbService?.badge_text || 'Cooperative Verified';
  const imageSrc = serviceImages[slug] || '/images/services/cleaning.jpg';
  const inclusions = serviceInclusions[slug] || defaultInclusions;

  return (
    <main style={{ padding: '60px 0 100px', minHeight: '70vh' }}>
      <div className="container" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px' }}>
        <Link
          href="/services"
          style={{
            color: 'var(--tx)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '28px',
            fontWeight: 700,
            fontSize: '15px',
            opacity: 0.85,
            transition: 'opacity 0.2s',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to All Services
        </Link>

        <div
          style={{
            background: 'var(--card)',
            borderRadius: '28px',
            overflow: 'hidden',
            border: '1.5px solid var(--line)',
            boxShadow: '0 12px 0 #1d4a43, 0 30px 40px rgba(0, 0, 0, 0.06)',
          }}
        >
          {/* Hero Image Banner */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '280px',
              overflow: 'hidden',
              background: '#0e342f',
            }}
          >
            <img
              src={imageSrc}
              alt={title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.9,
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(14, 52, 47, 0.85) 0%, transparent 60%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '32px',
                right: '32px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    background: 'rgba(255, 255, 255, 0.92)',
                    color: 'var(--t)',
                    fontSize: '12px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    marginBottom: '8px',
                  }}
                >
                  {category}
                </span>
                <h1
                  style={{
                    color: '#ffffff',
                    fontSize: 'clamp(28px, 4vw, 40px)',
                    margin: 0,
                    fontWeight: 800,
                    textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                  }}
                >
                  {title}
                </h1>
              </div>

              <div
                style={{
                  background: 'rgba(1, 101, 91, 0.85)',
                  backdropFilter: 'blur(10px)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  fontSize: '13px',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>⏱</span>
                <span>{duration}</span>
              </div>
            </div>
          </div>

          {/* Content Body */}
          <div style={{ padding: '36px 36px 40px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '28px',
                paddingBottom: '20px',
                borderBottom: '1.5px solid var(--line)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    background: 'var(--c)',
                    color: 'var(--g)',
                    border: '1px solid var(--line)',
                    fontWeight: 700,
                    fontSize: '13px',
                    padding: '5px 14px',
                    borderRadius: '8px',
                  }}
                >
                  ★ {badgeText}
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    color: 'var(--tx)',
                    opacity: 0.75,
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#2ecc71',
                      display: 'inline-block',
                    }}
                  />
                  Live Supabase Verified
                </span>
              </div>
            </div>

            <h2 style={{ fontSize: '20px', marginBottom: '12px', color: 'var(--g)', fontWeight: 700 }}>
              About this service
            </h2>
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: 'var(--tx)',
                opacity: 0.85,
                marginBottom: '32px',
              }}
            >
              {description}
            </p>

            <h3 style={{ fontSize: '18px', marginBottom: '16px', color: 'var(--t)', fontWeight: 700 }}>
              What&apos;s Included:
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '14px',
                marginBottom: '40px',
              }}
            >
              {inclusions.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '12px 16px',
                    background: 'var(--c)',
                    borderRadius: '12px',
                    border: '1px solid var(--line)',
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--co)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0, marginTop: '2px' }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ fontSize: '14px', lineHeight: 1.5, color: 'var(--tx)', opacity: 0.9 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '2px solid var(--line)',
                paddingTop: '28px',
                marginTop: '10px',
                flexWrap: 'wrap',
                gap: '20px',
              }}
            >
              <div>
                <div style={{ fontSize: '13px', opacity: 0.7, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Transparent Cooperative Rate
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '4px' }}>
                  <span style={{ fontSize: '34px', fontWeight: 800, color: 'var(--g)' }}>{price}</span>
                  <span style={{ fontSize: '14px', opacity: 0.7, fontWeight: 600 }}>{priceUnit}</span>
                </div>
              </div>

              <Link
                href={`/book?service=${encodeURIComponent(title)}`}
                className="btn"
                style={{
                  padding: '16px 36px',
                  fontSize: '16px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  borderRadius: '14px',
                }}
              >
                Book Now →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <>
      <Navigation />
      <Suspense
        fallback={
          <main style={{ padding: '80px 0', minHeight: '60vh' }}>
            <div className="container" style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center', opacity: 0.8 }}>
              Loading service details from Supabase...
            </div>
          </main>
        }
      >
        <ServiceDetailContent paramsPromise={params} />
      </Suspense>
      <Footer />
    </>
  );
}
