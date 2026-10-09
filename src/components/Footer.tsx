'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logoRow}>
              <img src="/workivo-logo.svg" alt="Workivo" className={styles.logoImg} />
              <span className={styles.logoText}>Workivo</span>
            </div>
            <p className={styles.tagline}>Small task, Big relief.</p>
            <p className={styles.desc}>
              Connecting customers who need everyday household services with skilled workers who deliver quality, right at your doorstep.
            </p>
          </div>
          <div className={styles.col}>
            <h4>Services</h4>
            <Link href="/services">All Services</Link>
            <Link href="/book">Book a Service</Link>
            <Link href="/services/electrician">Electrician</Link>
            <Link href="/services/plumbing">Plumbing</Link>
            <Link href="/services/home-cleaning">Home Cleaning</Link>
          </div>
          <div className={styles.col}>
            <h4>Company</h4>
            <Link href="/about">About Us</Link>
            <Link href="/workers">For Workers</Link>
            <Link href="/workers/apply">Join as Worker</Link>
            <Link href="/help">Help & Support</Link>
          </div>
          <div className={styles.col}>
            <h4>Legal</h4>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cancellation">Cancellation Policy</Link>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; 2026 Workivo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
