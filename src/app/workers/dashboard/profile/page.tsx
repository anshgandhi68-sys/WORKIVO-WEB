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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', marginBottom: '24px' }}>
            {allServiceOptions.map(svc => {
              const isChecked = profile.selectedServices.includes(svc);
              return (
                <label 
                  key={svc}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    padding: '16px 20px',
                    border: isChecked ? '2px solid #8c443e' : '1.5px solid var(--line)',
                    background: isChecked ? 'rgba(140, 68, 62, 0.08)' : 'var(--card)',
                    boxShadow: isChecked ? '0 4px 12px rgba(140, 68, 62, 0.1)' : 'none',
                    borderRadius: '14px',
                    cursor: 'pointer',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: 'var(--tx)',
                    transition: 'all 0.2s'
                  }}
                >
                  <span>{svc}</span>
                  <input 
                    type="checkbox" 
                    checked={isChecked}
                    onChange={() => handleServiceToggle(svc)}
                    style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
                  />
                  <span 
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      border: isChecked ? '2px solid #8c443e' : '2px solid var(--line)',
                      background: isChecked ? '#8c443e' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.2s'
                    }}
                  >
                    {isChecked && (
                      <span 
                        style={{
                          width: '5px',
                          height: '9px',
                          border: 'solid #ffffff',
                          borderWidth: '0 2.2px 2.2px 0',
                          transform: 'rotate(45deg) translate(-1px, -1px)'
                        }}
                      />
                    )}
                  </span>
                </label>
              );
            })}
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
