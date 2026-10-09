'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.brand}>
        <img src="/workivo-logo.svg" alt="Workivo Logo" className={styles.logo} />
        <span className={styles.brandName}>Workivo</span>
      </Link>
      <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link href="/book" onClick={() => setMenuOpen(false)}>Book Now</Link>
        <Link href="/workers" onClick={() => setMenuOpen(false)}>For Workers</Link>
        <Link href="/account" onClick={() => setMenuOpen(false)}>My Account</Link>
        <Link href="/book" className={`btn ${styles.navBtn}`} onClick={() => setMenuOpen(false)}>
          Get Started
        </Link>
      </div>
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.close : ''} />
      </button>
    </nav>
  );
}
