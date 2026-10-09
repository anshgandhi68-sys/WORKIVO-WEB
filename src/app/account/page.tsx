'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './account.module.css';
import { getBookings, BookingRecord } from '@/lib/api';

export default function AccountDashboardPage() {
  const [bookings, setBookings] = useState<BookingRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getBookings();
      setBookings(data);
      setLoading(false);
    }
    load();
  }, []);

  const activeBookings = bookings.filter((b) => b.status !== 'completed' && b.status !== 'cancelled');
  const completedBookings = bookings.filter((b) => b.status === 'completed');
  const recentBooking = bookings[0];

  return (
    <>
      <header className={styles.pageHeader}>
        <h1>Welcome back, Alex!</h1>
        <p>Manage your services, track bookings, and update your profile.</p>
      </header>

      <div className={styles.dashboardStats}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <div style={{ padding: '24px', background: 'var(--c)', borderRadius: '16px' }}>
            <h3 style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px' }}>Active Bookings</h3>
            <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--g)' }}>
              {loading ? '...' : activeBookings.length}
            </div>
          </div>
          <div style={{ padding: '24px', background: 'var(--c)', borderRadius: '16px' }}>
            <h3 style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px' }}>Completed Services</h3>
            <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--g)' }}>
              {loading ? '...' : completedBookings.length}
            </div>
          </div>
        </div>

        <h2>Recent Activity</h2>
        {recentBooking ? (
          <div
            style={{
              padding: '24px',
              border: '2px solid var(--line)',
              borderRadius: '16px',
              marginTop: '16px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <strong style={{ fontSize: '18px' }}>{recentBooking.service_title}</strong>
              <span className={`${styles.badge} ${styles.upcoming}`}>{recentBooking.status.toUpperCase()}</span>
            </div>
            <p style={{ opacity: 0.8, fontSize: '14px', margin: '4px 0 16px' }}>
              Scheduled for {recentBooking.scheduled_date} at {recentBooking.scheduled_time} • {recentBooking.address_line}
            </p>
            <Link href="/account/bookings" className="btn o" style={{ textDecoration: 'none', display: 'inline-block' }}>
              View All Bookings
            </Link>
          </div>
        ) : (
          <div
            className={styles.emptyState}
            style={{
              padding: '40px 20px',
              textAlign: 'center',
              background: 'var(--line)',
              borderRadius: '16px',
              marginTop: '16px',
            }}
          >
            <p>{loading ? 'Loading live activity...' : 'No recent activity to display.'}</p>
            <Link href="/book" className="btn mt-4" style={{ display: 'inline-block', marginTop: '16px' }}>
              Book a Service
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
