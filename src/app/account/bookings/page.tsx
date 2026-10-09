'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../account.module.css';
import { getBookings, BookingRecord } from '@/lib/api';

export default function BookingsPage() {
  const [bookings, setBookings] = useState<BookingRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'history'>('upcoming');

  useEffect(() => {
    async function load() {
      setLoading(true);
      const data = await getBookings();
      setBookings(data);
      setLoading(false);
    }
    load();
  }, []);

  const upcomingBookings = bookings.filter((b) => b.status !== 'completed' && b.status !== 'cancelled');
  const pastBookings = bookings.filter((b) => b.status === 'completed' || b.status === 'cancelled');

  const displayedBookings = activeTab === 'upcoming' ? upcomingBookings : pastBookings;

  return (
    <>
      <header className={styles.pageHeader}>
        <h1>My Bookings</h1>
        <p>View and track your real-time appointments verified via Supabase.</p>
      </header>

      <div
        className="tabs"
        style={{
          display: 'flex',
          gap: '16px',
          marginBottom: '32px',
          borderBottom: '2px solid var(--line)',
          paddingBottom: '16px',
        }}
      >
        <button
          onClick={() => setActiveTab('upcoming')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 700,
            color: activeTab === 'upcoming' ? 'var(--t)' : 'var(--tx)',
            borderBottom: activeTab === 'upcoming' ? '2px solid var(--t)' : '2px solid transparent',
            paddingBottom: '16px',
            marginBottom: '-18px',
            opacity: activeTab === 'upcoming' ? 1 : 0.6,
          }}
        >
          Upcoming ({upcomingBookings.length})
        </button>
        <button
          onClick={() => setActiveTab('history')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 700,
            color: activeTab === 'history' ? 'var(--t)' : 'var(--tx)',
            borderBottom: activeTab === 'history' ? '2px solid var(--t)' : '2px solid transparent',
            paddingBottom: '16px',
            marginBottom: '-18px',
            opacity: activeTab === 'history' ? 1 : 0.6,
          }}
        >
          History ({pastBookings.length})
        </button>
      </div>

      <div className={styles.bookingsList}>
        {loading ? (
          <div style={{ padding: '40px 20px', textAlign: 'center', opacity: 0.7 }}>
            Loading bookings from Supabase...
          </div>
        ) : displayedBookings.length === 0 ? (
          <div
            className={styles.emptyState}
            style={{
              padding: '60px 20px',
              textAlign: 'center',
              background: 'var(--c)',
              borderRadius: '16px',
            }}
          >
            <h3 style={{ marginBottom: '16px' }}>
              {activeTab === 'upcoming' ? 'No upcoming bookings' : 'No past bookings'}
            </h3>
            <p style={{ opacity: 0.8, marginBottom: '24px' }}>
              {activeTab === 'upcoming'
                ? "You don't have any active service appointments right now."
                : 'No past completed service history found.'}
            </p>
            <Link href="/book" className="btn">
              Book a Service
            </Link>
          </div>
        ) : (
          displayedBookings.map((b) => (
            <div key={b.id} className={styles.bookingCard}>
              <div className={styles.bookingInfo}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <h3>{b.service_title}</h3>
                  <span
                    className={`${styles.badge} ${
                      b.status === 'completed'
                        ? styles.completed
                        : b.status === 'cancelled'
                        ? styles.cancelled
                        : styles.upcoming
                    }`}
                  >
                    {b.status.toUpperCase()}
                  </span>
                  <span style={{ fontSize: '12px', opacity: 0.6 }}>#{b.booking_code}</span>
                </div>
                <div className={styles.bookingMeta}>
                  <span>
                    {b.scheduled_date} at {b.scheduled_time}
                  </span>
                  <span>•</span>
                  <span>{b.address_line}</span>
                  {b.worker_name && (
                    <>
                      <span>•</span>
                      <span>Worker: {b.worker_name}</span>
                    </>
                  )}
                </div>
              </div>
              <div className={styles.bookingActions} style={{ display: 'flex', gap: '12px' }}>
                <Link href="/book" className="btn o" style={{ textDecoration: 'none' }}>
                  Book Another
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
