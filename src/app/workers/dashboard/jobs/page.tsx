'use client';

import React, { useState } from 'react';
import styles from '../dashboard.module.css';

type Job = {
  id: string;
  title: string;
  category: string;
  customerName: string;
  customerPhone: string;
  address: string;
  date: string;
  time: string;
  payout: string;
  status: 'Upcoming' | 'Completed' | 'In Progress';
};

const mockJobs: Job[] = [
  {
    id: 'JOB-901',
    title: 'Electrical Switchboard Repair',
    category: 'Electrical',
    customerName: 'Rajesh Kumar',
    customerPhone: '+91 98123 45678',
    address: 'House 42, Sector 18, Block B, Main Road',
    date: 'Today',
    time: '2:30 PM',
    payout: '₹650',
    status: 'Upcoming'
  },
  {
    id: 'JOB-902',
    title: 'AC Filter Cleaning & Checkup',
    category: 'AC Service',
    customerName: 'Priya Sharma',
    customerPhone: '+91 98765 12345',
    address: 'Flat 402, Sunshine Heights, Green Park',
    date: 'Today',
    time: '5:00 PM',
    payout: '₹850',
    status: 'Upcoming'
  },
  {
    id: 'JOB-889',
    title: 'Kitchen Sink Tap Replacement & Leak Repair',
    category: 'Plumbing',
    customerName: 'Amit Verma',
    customerPhone: '+91 99887 66554',
    address: 'Villa 12, Palm Meadows Colony',
    date: 'Yesterday',
    time: '11:00 AM',
    payout: '₹720',
    status: 'Completed'
  },
  {
    id: 'JOB-884',
    title: 'Wooden Dining Table Leg Repair & Assembly',
    category: 'Carpentry',
    customerName: 'Neha Gupta',
    customerPhone: '+91 97112 33445',
    address: 'C-204, Royal Palms Apartments',
    date: 'Oct 06, 2026',
    time: '3:15 PM',
    payout: '₹1,100',
    status: 'Completed'
  },
  {
    id: 'JOB-876',
    title: 'Deep Kitchen Cleaning & Appliance Polish',
    category: 'Cleaning',
    customerName: 'Sanjay Malhotra',
    customerPhone: '+91 98223 99887',
    address: 'Tower A, Flat 801, Prestige Enclave',
    date: 'Oct 04, 2026',
    time: '10:00 AM',
    payout: '₹1,450',
    status: 'Completed'
  }
];

export default function MyJobsPage() {
  const [filter, setFilter] = useState<'All' | 'Upcoming' | 'Completed'>('All');

  const filteredJobs = filter === 'All' 
    ? mockJobs 
    : mockJobs.filter(j => j.status === filter);

  return (
    <>
      <header className={styles.pageHeader}>
        <h1>My Jobs</h1>
        <p>Manage your active assignments, past service history, and customer details.</p>
      </header>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
        {(['All', 'Upcoming', 'Completed'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            style={{
              padding: '10px 22px',
              borderRadius: '999px',
              border: '1.5px solid var(--line)',
              background: filter === tab ? 'var(--t)' : 'var(--card)',
              color: filter === tab ? '#ffffff' : 'var(--tx)',
              fontWeight: 700,
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {tab} {tab === 'All' ? `(${mockJobs.length})` : tab === 'Upcoming' ? '(2)' : '(3)'}
          </button>
        ))}
      </div>

      {/* Jobs List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {filteredJobs.map(job => (
          <div 
            key={job.id} 
            style={{ 
              background: 'var(--card)', 
              border: '1.5px solid var(--line)', 
              borderRadius: '20px', 
              padding: '24px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <h3 style={{ margin: 0, fontSize: '20px', color: 'var(--tx)' }}>{job.title}</h3>
                  <span 
                    style={{ 
                      padding: '4px 12px', 
                      borderRadius: '999px', 
                      fontSize: '12px', 
                      fontWeight: 700,
                      background: job.status === 'Upcoming' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                      color: job.status === 'Upcoming' ? '#d97706' : '#10b981'
                    }}
                  >
                    {job.status}
                  </span>
                </div>
                <span style={{ fontSize: '13px', opacity: 0.6, fontWeight: 600 }}>
                  Job ID: {job.id} • {job.category}
                </span>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '22px', fontWeight: 700, color: 'var(--co)' }}>{job.payout}</div>
                <span style={{ fontSize: '12px', opacity: 0.7 }}>Instant Payout</span>
              </div>
            </div>

            <div style={{ background: 'var(--c)', borderRadius: '14px', padding: '16px', marginBottom: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              <div>
                <span style={{ fontSize: '12px', opacity: 0.6, display: 'block', marginBottom: '2px' }}>Customer</span>
                <strong style={{ fontSize: '14px' }}>{job.customerName}</strong>
                <div style={{ fontSize: '13px', opacity: 0.8 }}>{job.customerPhone}</div>
              </div>
              <div>
                <span style={{ fontSize: '12px', opacity: 0.6, display: 'block', marginBottom: '2px' }}>Date & Time</span>
                <strong style={{ fontSize: '14px' }}>{job.date}</strong>
                <div style={{ fontSize: '13px', opacity: 0.8 }}>{job.time}</div>
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <span style={{ fontSize: '12px', opacity: 0.6, display: 'block', marginBottom: '2px' }}>Location Address</span>
                <strong style={{ fontSize: '14px' }}>{job.address}</strong>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              {job.status === 'Upcoming' ? (
                <>
                  <button className="btn" style={{ padding: '8px 20px', fontSize: '13px' }}>Start Job</button>
                  <button className="btn o" style={{ padding: '8px 20px', fontSize: '13px' }}>Call Customer</button>
                </>
              ) : (
                <button className="btn o" style={{ padding: '8px 20px', fontSize: '13px' }}>View Receipt</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
