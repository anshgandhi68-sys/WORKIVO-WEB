'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './dashboard.module.css';

export default function WorkerDashboardPage() {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <>
      <header className={styles.pageHeader}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1>Dashboard Overview</h1>
            <p>Monitor your active jobs, earnings, and availability.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--c)', padding: '10px 18px', borderRadius: '999px' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--g)' }}>
              Status: {isOnline ? 'Online (Accepting Jobs)' : 'Offline'}
            </span>
            <button 
              onClick={() => setIsOnline(!isOnline)} 
              className="btn" 
              style={{ padding: '6px 14px', fontSize: '12px', background: isOnline ? '#10b981' : 'var(--co)' }}
            >
              {isOnline ? 'Go Offline' : 'Go Online'}
            </button>
          </div>
        </div>
      </header>

      {/* Verified Status Banner */}
      <div className={styles.verifiedAlert} style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', padding: '20px', borderRadius: '16px', marginBottom: '32px' }}>
        <h3 style={{ color: '#10b981', margin: '0 0 4px', fontSize: '18px' }}>Verified Workivo Partner</h3>
        <p style={{ margin: 0, fontSize: '14px', opacity: 0.85 }}>
          Your profile and ID verification are 100% complete. You are receiving instant service requests in your area.
        </p>
      </div>

      {/* Key Metrics */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <h3>Total Earnings</h3>
          <div className={styles.statValue}>₹18,450</div>
          <p>This Month (+14% vs last month)</p>
        </div>
        <div className={styles.statCard}>
          <h3>Completed Jobs</h3>
          <div className={styles.statValue}>32</div>
          <p>100% Completion Rate</p>
        </div>
        <div className={styles.statCard}>
          <h3>Average Rating</h3>
          <div className={styles.statValue}>4.9</div>
          <p>Based on 28 customer reviews</p>
        </div>
        <div className={styles.statCard}>
          <h3>Active Requests</h3>
          <div className={styles.statValue}>2</div>
          <p>Scheduled for today</p>
        </div>
      </div>

      {/* Upcoming Jobs Preview */}
      <div className={styles.recentJobs}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '22px', margin: 0, color: 'var(--g)' }}>Today's Scheduled Jobs</h2>
          <Link href="/workers/dashboard/jobs" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--co)', textDecoration: 'none' }}>
            View All Jobs →
          </Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ background: 'var(--card)', border: '1.5px solid var(--line)', borderRadius: '18px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                <strong style={{ fontSize: '18px', color: 'var(--tx)' }}>Electrical Switchboard Repair</strong>
                <span style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#d97706', padding: '4px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 700 }}>
                  Today at 2:30 PM
                </span>
              </div>
              <p style={{ margin: '0 0 6px', fontSize: '14px', opacity: 0.8 }}>
                Customer: Rajesh Kumar • Sector 18, Block B, Main Road
              </p>
              <div style={{ fontSize: '13px', color: 'var(--co)', fontWeight: 700 }}>
                Payout: ₹650 (UPI Instant)
              </div>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn" style={{ padding: '8px 18px', fontSize: '13px' }}>Start Job</button>
              <button className="btn o" style={{ padding: '8px 18px', fontSize: '13px' }}>Call Customer</button>
            </div>
          </div>

          <div style={{ background: 'var(--card)', border: '1.5px solid var(--line)', borderRadius: '18px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                <strong style={{ fontSize: '18px', color: 'var(--tx)' }}>AC Filter Cleaning & Checkup</strong>
                <span style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#2563eb', padding: '4px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 700 }}>
                  Today at 5:00 PM
                </span>
              </div>
              <p style={{ margin: '0 0 6px', fontSize: '14px', opacity: 0.8 }}>
                Customer: Priya Sharma • Flat 402, Sunshine Heights
              </p>
              <div style={{ fontSize: '13px', color: 'var(--co)', fontWeight: 700 }}>
                Payout: ₹850 (UPI Instant)
              </div>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn" style={{ padding: '8px 18px', fontSize: '13px' }}>Start Job</button>
              <button className="btn o" style={{ padding: '8px 18px', fontSize: '13px' }}>Call Customer</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
