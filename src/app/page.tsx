'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import styles from './page.module.css';

const services = [
  { 
    num: '01', 
    title: 'Electrician', 
    desc: 'Switches, wiring and fittings sorted safely, right in your home by verified electricians.', 
    icon: '⚡', 
    color: '#f59e0b',
    img: '/images/services/electrician.jpg',
    rating: '4.9 (1.2k+ reviews)'
  },
  { 
    num: '02', 
    title: 'Home Cooking', 
    desc: 'A professional cook in your kitchen, for delicious everyday meals to special family gatherings.', 
    icon: '🍳', 
    color: '#ef4444',
    img: '/images/services/chef.jpg',
    rating: '4.9 (850+ reviews)'
  },
  { 
    num: '03', 
    title: 'Barber at Home', 
    desc: 'Fresh haircuts and grooming in comfort without leaving your home or waiting in salon queues.', 
    icon: '✂️', 
    color: '#8b5cf6',
    img: '/images/services/barber.jpg',
    rating: '4.8 (2.1k+ reviews)'
  },
  { 
    num: '04', 
    title: 'Nails & Beauty', 
    desc: 'Relaxing manicure, pedicure, and beauty care performed at home by certified specialists.', 
    icon: '💅', 
    color: '#ec4899',
    img: '/images/services/beauty.jpg',
    rating: '4.9 (1.5k+ reviews)'
  },
  { 
    num: '05', 
    title: 'Furniture Repair', 
    desc: 'Wobbly chairs, custom fitting, and wooden furniture assembly fixed by experienced carpenters.', 
    icon: '🪑', 
    color: '#f97316',
    img: '/images/services/carpenter.jpg',
    rating: '4.8 (940+ reviews)'
  },
  { 
    num: '06', 
    title: 'Plumbing', 
    desc: 'Leaks, taps, pipe replacements and drain blockages resolved cleanly and efficiently.', 
    icon: '🔧', 
    color: '#06b6d4',
    img: '/images/services/plumbing.jpg',
    rating: '4.9 (1.8k+ reviews)'
  },
  { 
    num: '07', 
    title: 'Home Cleaning', 
    desc: 'Deep kitchen cleaning, dish washing, bathroom sanitization and full home refresh.', 
    icon: '🧹', 
    color: '#10b981',
    img: '/images/services/cleaning.jpg',
    rating: '4.9 (3.4k+ reviews)'
  },
  { 
    num: '08', 
    title: 'AC Service', 
    desc: 'Air conditioner filter cleaning, gas refill, and cooling system maintenance.', 
    icon: '❄️', 
    color: '#3b82f6',
    img: '/images/services/ac.jpg',
    rating: '4.8 (1.6k+ reviews)'
  },
  { 
    num: '09', 
    title: 'Packers & Movers', 
    desc: 'Careful packing, safe loading, and hassle-free household shifting by professional teams.', 
    icon: '📦', 
    color: '#f59e0b',
    img: '/images/services/movers.jpg',
    rating: '4.9 (780+ reviews)'
  },
  { 
    num: '10', 
    title: 'Laundry', 
    desc: 'Washing, steam pressing and fabric care delivered fresh back to your doorstep.', 
    icon: '👕', 
    color: '#6366f1',
    img: '/images/services/laundry.jpg',
    rating: '4.8 (1.1k+ reviews)'
  },
];

const howItWorks = [
  { step: '1', title: 'Browse Services', desc: 'Choose from 10+ home service categories tailored to your needs.' },
  { step: '2', title: 'Book Instantly', desc: 'Pick your date, time, and address. Confirm in under 60 seconds.' },
  { step: '3', title: 'Pro Arrives', desc: 'A verified, background-checked professional comes to you.' },
  { step: '4', title: 'Pay Securely', desc: 'Pay online via UPI, card, or wallet. 100% satisfaction guaranteed.' },
];

const stats = [
  { value: '10,000+', label: 'Happy Customers' },
  { value: '500+', label: 'Verified Pros' },
  { value: '15+', label: 'Cities Covered' },
  { value: '4.8★', label: 'Average Rating' },
];

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const articlesRef = useRef<(HTMLElement | null)[]>([]);

  const scrollToService = (index: number) => {
    const target = articlesRef.current[index];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  useEffect(() => {
    let tick = false;
    const sync = () => {
      const mid = window.innerHeight / 2;
      let best = 0;
      let bd = 1e9;

      articlesRef.current.forEach((a, k) => {
        if (!a) return;
        const r = a.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - mid);
        if (d < bd) { bd = d; best = k; }
      });

      // Special lock for 10th service (Laundry) so it stays fully visible & active at the end of scroll
      const lastIndex = articlesRef.current.length - 1;
      const lastEl = articlesRef.current[lastIndex];
      if (lastEl) {
        const lastRect = lastEl.getBoundingClientRect();
        if (lastRect.top <= mid + 60) {
          best = lastIndex;
        }
      }

      setActiveStep(best);
    };
    const frame = () => {
      if (tick) return;
      tick = true;
      requestAnimationFrame(() => { sync(); tick = false; });
    };
    window.addEventListener('scroll', frame, { passive: true });
    window.addEventListener('resize', frame);
    frame();
    return () => {
      window.removeEventListener('scroll', frame);
      window.removeEventListener('resize', frame);
    };
  }, []);

  return (
    <>
      <Navigation />
      <main>
        {/* ── HERO ── */}
        <header className={styles.hero}>
          <h1>Your home needs a hand.<br />We&apos;ve got you.</h1>
          <p>Trusted pros for the things you don&apos;t have time for. Book an electrician, a cook, a barber or movers — and they come to you.</p>
          <div className={styles.heroRow}>
            <Link href="/book" className="btn">Book a service</Link>
            <Link href="/workers" className="btn o">Work with us</Link>
          </div>
          <div className={styles.heroStats}>
            {stats.map((s, i) => (
              <div key={i} className={styles.heroStat}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </header>

        {/* ── SCROLLING SERVICES WITH WORKIVO PRO PHOTOS ── */}
        <section className={styles.story} id="story">
          {/* Sticky visual panel */}
          <div className={styles.stage} aria-hidden="true">
            <div className={styles.deck}>
              {services.map((svc, i) => (
                <div
                  key={i}
                  className={`${styles.card3d} ${i === activeStep ? styles.card3dOn : ''}`}
                  style={{ '--accent': svc.color } as React.CSSProperties}
                >
                  <div className={styles.cardImageContainer}>
                    <img src={svc.img} alt={svc.title} className={styles.cardImg} />
                    <div className={styles.cardBadgeFloating}>
                      <span>{svc.icon}</span>
                      <span>Verified Workivo Pro</span>
                    </div>
                    <div className={styles.cardNumOverlay}>{svc.num}</div>
                  </div>
                  <div className={styles.cardBody}>
                    <div>
                      <h3>{svc.title}</h3>
                      <p>{svc.desc}</p>
                    </div>
                    <div className={styles.cardFooter}>
                      <span className={styles.ratingBadge}>★ {svc.rating}</span>
                      <Link href={`/services/${svc.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className={styles.cardBtn}>
                        Book Now →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.dots}>
              {services.map((svc, i) => (
                <i 
                  key={i} 
                  className={i === activeStep ? styles.on : ''} 
                  onClick={() => scrollToService(i)}
                  title={`${svc.num} ${svc.title}`}
                  role="button"
                  tabIndex={0}
                />
              ))}
            </div>
          </div>

          {/* Scrollable articles */}
          <div className={styles.steps} id="steps">
            {services.map((svc, i) => (
              <article
                key={i}
                ref={el => { articlesRef.current[i] = el; }}
                className={`${styles.step} ${i === activeStep ? styles.stepOn : ''}`}
                onClick={() => scrollToService(i)}
              >
                <div className={styles.stepHeader}>
                  <span className={styles.stepNum}>{svc.num}</span>
                  <h2>{svc.title}</h2>
                </div>

                {/* Inline image container for mobile view */}
                <div className={styles.mobileStepImgContainer}>
                  <img src={svc.img} alt={svc.title} className={styles.mobileStepImg} />
                </div>

                <p>{svc.desc}</p>
                <Link href={`/services/${svc.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className={styles.stepLink}>
                  Explore {svc.title} →
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className={styles.how}>
          <div className="container">
            <h2>How Workivo works</h2>
            <p className={styles.howSub}>From booking to doorstep in minutes.</p>
            <div className={styles.howGrid}>
              {howItWorks.map((item, i) => (
                <div key={i} className={styles.howCard}>
                  <div className={styles.howStep}>{item.step}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WORKER CTA ── */}
        <section className={styles.workerBand}>
          <div className="container">
            <div className={styles.workerContent}>
              <div className={styles.workerText}>
                <h2>Are you a skilled professional?</h2>
                <p>Join our network of 500+ verified workers. Set your schedule, earn well, and build your reputation with every job.</p>
                <Link href="/workers/apply" className="btn">Apply to Join →</Link>
              </div>
              <div className={styles.workerBenefits}>
                {['Flexible hours', 'Weekly payouts', 'Job protection', 'Skill training'].map((b, i) => (
                  <div key={i} className={styles.benefit}>
                    <span className={styles.check}>✓</span> {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className={styles.join}>
          <div className="container">
            <h2>Your next task is just a tap away.</h2>
            <p>Browse services, compare pros, and book instantly. Small task, big relief.</p>
            <Link href="/book" className="btn">Get started free</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
