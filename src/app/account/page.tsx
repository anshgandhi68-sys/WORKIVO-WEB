'use client';

import React from 'react';
import Link from 'next/link';
import styles from './account.module.css';

export default function AccountDashboardPage() {
  return (
    <>
      <header className={styles.pageHeader}>
        <h1>Welcome back, Alex!</h1>
        <p>Manage your services, track bookings, and update your profile.</p>
      </header>

      <div className={styles.dashboardStats}>
        {/* Placeholder for dashboard overview widgets */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          <div style={{ padding: '24px', background: 'var(--c)', borderRadius: '16px' }}>
            <h3 style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px' }}>Active Bookings</h3>
            <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--g)' }}>0</div>
          </div>
          <div style={{ padding: '24px', background: 'var(--c)', borderRadius: '16px' }}>
            <h3 style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px' }}>Completed Services</h3>
            <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--g)' }}>0</div>
          </div>
        </div>
        
        <h2>Recent Activity</h2>
        <div className={styles.emptyState} style={{ padding: '40px 20px', textAlign: 'center', background: 'var(--line)', borderRadius: '16px', marginTop: '16px' }}>
          <p>No recent activity to display.</p>
          <Link href="/book" className="btn mt-4" style={{ display: 'inline-block', marginTop: '16px' }}>Book a Service</Link>
        </div>
      </div>
    </>
  );
}
