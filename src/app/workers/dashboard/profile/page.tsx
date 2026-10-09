'use client';

import React, { useState } from 'react';
import styles from '../dashboard.module.css';

const allServiceOptions = [
  'Electrician',
  'Home Cooking',
  'Barber at Home',
  'Nails & Beauty',
  'Furniture Repair & Assembly',
  'Plumbing Services',
  'Deep Home Cleaning',
  'AC Service & Repair',
  'Packers & Movers',
  'Laundry & Dry Clean',
];

export default function ProfileServicesPage() {
  const [profile, setProfile] = useState({
    fullName: 'Rajesh Sharma',
    email: 'rajesh.sharma@example.com',
    phone: '+91 98123 45678',
    city: 'Mumbai',
    upiId: '9812345678@paytm',
    selectedServices: ['Electrician', 'AC Service & Repair', 'Plumbing Services'],
    experienceYears: '6 years',
  });

  const [saved, setSaved] = useState(false);

  const handleServiceToggle = (service: string) => {
    setProfile(prev => {
      if (prev.selectedServices.includes(service)) {
        return { ...prev, selectedServices: prev.selectedServices.filter(s => s !== service) };
      }
      return { ...prev, selectedServices: [...prev.selectedServices, service] };
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <>
      <header className={styles.pageHeader}>
        <h1>Profile & Services</h1>
        <p>Manage your partner profile, skill categories, working city, and payout details.</p>
      </header>

      {saved && (
        <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10b981', color: '#10b981', padding: '16px', borderRadius: '14px', marginBottom: '24px', fontWeight: 700 }}>
          Profile & Service offerings updated successfully!
        </div>
      )}

      <form onSubmit={handleSave}>
        {/* Personal Details Section */}
        <div style={{ background: 'var(--card)', border: '1.5px solid var(--line)', borderRadius: '20px', padding: '28px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', color: 'var(--g)', marginBottom: '20px' }}>Personal & Contact Details</h2>
          
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="fullName">Full Name</label>
              <input 
                type="text" 
                id="fullName" 
                value={profile.fullName} 
                onChange={(e) => setProfile({...profile, fullName: e.target.value})}
                className={styles.input}
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                value={profile.phone} 
                onChange={(e) => setProfile({...profile, phone: e.target.value})}
                className={styles.input}
                required 
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                value={profile.email} 
                onChange={(e) => setProfile({...profile, email: e.target.value})}
                className={styles.input}
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="city">Service City</label>
              <input 
                type="text" 
                id="city" 
                value={profile.city} 
                onChange={(e) => setProfile({...profile, city: e.target.value})}
                className={styles.input}
                required 
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="upiId">Instant Payout UPI ID / Bank VPA</label>
            <input 
              type="text" 
              id="upiId" 
              value={profile.upiId} 
              onChange={(e) => setProfile({...profile, upiId: e.target.value})}
              className={styles.input}
              required 
            />
          </div>
        </div>

        {/* Services & Skills Section */}
        <div style={{ background: 'var(--card)', border: '1.5px solid var(--line)', borderRadius: '20px', padding: '28px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', color: 'var(--g)', marginBottom: '8px' }}>Offered Service Categories</h2>
          <p style={{ fontSize: '14px', opacity: 0.75, marginBottom: '20px' }}>
            Select the services you are certified and equipped to perform.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginBottom: '24px' }}>
            {allServiceOptions.map(svc => (
              <label 
                key={svc}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px 18px',
                  border: profile.selectedServices.includes(svc) ? '2px solid var(--co)' : '1.5px solid var(--line)',
                  background: profile.selectedServices.includes(svc) ? 'rgba(233, 132, 125, 0.08)' : 'transparent',
                  borderRadius: '14px',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '14px',
                  transition: 'all 0.2s'
                }}
              >
                <input 
                  type="checkbox" 
                  checked={profile.selectedServices.includes(svc)}
                  onChange={() => handleServiceToggle(svc)}
                  style={{ width: '18px', height: '18px', accentColor: 'var(--co)' }}
                />
                <span>{svc}</span>
              </label>
            ))}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="experienceYears">Years of Experience</label>
            <input 
              type="text" 
              id="experienceYears" 
              value={profile.experienceYears} 
              onChange={(e) => setProfile({...profile, experienceYears: e.target.value})}
              className={styles.input}
              required 
            />
          </div>
        </div>

        {/* Submit */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button type="submit" className="btn" style={{ padding: '12px 32px', fontSize: '15px' }}>
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
}
