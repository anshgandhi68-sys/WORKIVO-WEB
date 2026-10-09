import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import styles from './workers.module.css';

export default function WorkersLandingPage() {
  return (
    <>
      <Navigation />
      
      <main>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1>Become a Workivo Partner</h1>
              <p>Turn your skills into a thriving business. Join our network of trusted professionals and connect with customers who need your services today.</p>
              <div className={styles.heroActions}>
                <Link href="/workers/apply" className="btn">Apply Now</Link>
                <Link href="#benefits" className="btn o">Learn More</Link>
              </div>
            </div>
          </div>
          <div className={styles.heroBackground}></div>
        </section>

        <section id="benefits" className={styles.benefits}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Why Partner with Workivo?</h2>
            
            <div className={styles.grid}>
              <div className={styles.card}>
                <div className={styles.icon}>💰</div>
                <h3>Set Your Own Rates</h3>
                <p>You have full control over your pricing and the services you offer. Keep the lion's share of what you earn.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.icon}>📅</div>
                <h3>Flexible Schedule</h3>
                <p>Work when you want, where you want. Accept jobs that fit your schedule and lifestyle.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.icon}>🚀</div>
                <h3>Grow Your Business</h3>
                <p>We bring the customers to you. Focus on providing great service while we handle the marketing and bookings.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.howItWorks}>
          <div className="container">
            <h2 className={styles.sectionTitle}>How It Works</h2>
            
            <div className={styles.stepsGrid}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <h3>Apply</h3>
                <p>Submit your application with your skills, experience, and preferred service areas.</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <h3>Verify</h3>
                <p>Complete our identity and background verification process to build trust with customers.</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <h3>Work & Earn</h3>
                <p>Start receiving booking requests, complete jobs, and get paid securely through our platform.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className="container text-center">
            <h2>Ready to get started?</h2>
            <p>Join thousands of professionals already growing their business with Workivo.</p>
            <Link href="/workers/apply" className="btn mt-4">Start Your Application</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
