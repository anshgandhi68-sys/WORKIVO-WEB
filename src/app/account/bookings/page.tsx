'use client';

import React from 'react';
import Link from 'next/link';
import styles from '../account.module.css';

export default function BookingsPage() {
  return (
    <>
      <header className={styles.pageHeader}>
        <h1>My Bookings</h1>
        <p>View and manage your service appointments.</p>
      </header>

      <div className="tabs" style={{ display: 'flex', gap: '16px', marginBottom: '32px', borderBottom: '2px solid var(--line)', paddingBottom: '16px' }}>
        <button style={{ background: 'none', border: 'none', fontWeight: 700, color: 'var(--t)', borderBottom: '2px solid var(--t)', paddingBottom: '16px', marginBottom: '-18px' }}>Upcoming</button>
        <button style={{ background: 'none', border: 'none', fontWeight: 700, color: 'var(--tx)', opacity: 0.6 }}>History</button>
      </div>

      <div className={styles.bookingsList}>
        {/* Mock empty state for now */}
        <div className={styles.emptyState} style={{ padding: '60px 20px', textAlign: 'center', background: 'var(--c)', borderRadius: '16px' }}>
          <h3 style={{ marginBottom: '16px' }}>No upcoming bookings</h3>
          <p style={{ opacity: 0.8, marginBottom: '24px' }}>You don't have any services scheduled right now.</p>
          <Link href="/book" className="btn">Book a Service</Link>
        </div>

        {/* Example of a booking card structure (hidden for now) */}
        <div className={styles.bookingCard} style={{ display: 'none' }}>
          <div className={styles.bookingInfo}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <h3>Home Cleaning</h3>
              <span className={`${styles.badge} ${styles.upcoming}`}>Upcoming</span>
            </div>
            <div className={styles.bookingMeta}>
              <span>Oct 15, 2026 at 10:00 AM</span>
              <span>•</span>
              <span>123 Demo Street, City</span>
            </div>
          </div>
          <div className={styles.bookingActions} style={{ display: 'flex', gap: '12px' }}>
            <button className="btn o">Reschedule</button>
            <button className="btn">View Details</button>
          </div>
        </div>
      </div>
    </>
  );
}
