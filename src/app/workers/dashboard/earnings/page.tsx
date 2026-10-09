'use client';

import React, { useState } from 'react';
import styles from '../dashboard.module.css';

const payoutHistory = [
  { id: 'PAY-701', date: 'Oct 07, 2026', amount: '₹4,250', status: 'Completed', method: 'UPI ••9812' },
  { id: 'PAY-692', date: 'Sep 30, 2026', amount: '₹5,100', status: 'Completed', method: 'Bank Account ••4012' },
  { id: 'PAY-681', date: 'Sep 23, 2026', amount: '₹4,800', status: 'Completed', method: 'UPI ••9812' },
  { id: 'PAY-670', date: 'Sep 16, 2026', amount: '₹4,300', status: 'Completed', method: 'Bank Account ••4012' },
];

export default function EarningsPage() {
  const [payoutRequested, setPayoutRequested] = useState(false);

  const handleRequestPayout = () => {
    setPayoutRequested(true);
    setTimeout(() => {
      setPayoutRequested(false);
      alert('Payout request submitted successfully! Funds will reflect in your UPI account within 10 minutes.');
    }, 1200);
  };

  return (
    <>
      <header className={styles.pageHeader}>
        <h1>Earnings & Payouts</h1>
        <p>Track your income, weekly payouts, and bank transfer history.</p>
      </header>

      {/* Instant Payout Card */}
      <div 
        style={{ 
          background: 'linear-gradient(135deg, var(--g) 0%, #1a3a35 100%)', 
          color: '#ffffff', 
          borderRadius: '22px', 
          padding: '32px', 
          marginBottom: '36px',
          boxShadow: '0 12px 30px rgba(0,0,0,0.15)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span style={{ fontSize: '13px', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px' }}>Available Balance</span>
            <div style={{ fontSize: '42px', fontWeight: 700, margin: '4px 0 8px', color: '#FBF1EE' }}>₹4,820.00</div>
            <div style={{ fontSize: '13px', opacity: 0.85 }}>Linked Account: UPI (9812345678@paytm)</div>
          </div>
          <button 
            onClick={handleRequestPayout}
            disabled={payoutRequested}
            className="btn"
            style={{ 
              background: '#ffffff', 
              color: 'var(--g)', 
              fontWeight: 700, 
              padding: '14px 28px', 
              fontSize: '15px',
              border: 'none'
            }}
          >
            {payoutRequested ? 'Transferring...' : 'Request Instant Payout →'}
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className={styles.statsGrid} style={{ marginBottom: '40px' }}>
        <div className={styles.statCard}>
          <h3>Total Revenue</h3>
          <div className={styles.statValue}>₹18,450</div>
          <p>This Month</p>
        </div>
        <div className={styles.statCard}>
          <h3>Weekly Average</h3>
          <div className={styles.statValue}>₹4,612</div>
          <p>4 Active Weeks</p>
        </div>
        <div className={styles.statCard}>
          <h3>Customer Tips</h3>
          <div className={styles.statValue}>₹950</div>
          <p>100% kept by partner</p>
        </div>
        <div className={styles.statCard}>
          <h3>Workivo Commission</h3>
          <div className={styles.statValue}>0%</div>
          <p>Promotional 0% Fee Tier</p>
        </div>
      </div>

      {/* Payout History Table */}
      <div>
        <h2 style={{ fontSize: '22px', marginBottom: '20px', color: 'var(--g)' }}>Recent Payout History</h2>
        <div style={{ background: 'var(--card)', border: '1.5px solid var(--line)', borderRadius: '20px', overflow: 'hidden' }}>
          {payoutHistory.map((payout, index) => (
            <div 
              key={payout.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px 24px',
                borderBottom: index < payoutHistory.length - 1 ? '1px solid var(--line)' : 'none',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div>
                <strong style={{ fontSize: '16px', display: 'block', marginBottom: '4px' }}>{payout.amount}</strong>
                <span style={{ fontSize: '13px', opacity: 0.7 }}>{payout.date} • {payout.method}</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 700 }}>
                  {payout.status}
                </span>
                <span style={{ display: 'block', fontSize: '12px', opacity: 0.6, marginTop: '4px' }}>Ref: {payout.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
