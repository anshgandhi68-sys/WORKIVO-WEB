'use client';

import React from 'react';
import styles from '../account.module.css';

export default function ProfilePage() {
  return (
    <>
      <header className={styles.pageHeader}>
        <h1>Profile & Settings</h1>
        <p>Manage your personal information and preferences.</p>
      </header>

      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Personal Information</h2>
        <div className={styles.formGroup} style={{ marginTop: '24px' }}>
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" defaultValue="Alex Customer" className={styles.input} />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" defaultValue="alex@example.com" className={styles.input} readOnly style={{ opacity: 0.7 }} />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" placeholder="Add phone number" className={styles.input} />
        </div>

        <div className={styles.divider}></div>

        <h2>Saved Addresses</h2>
        <div className={styles.formGroup} style={{ marginTop: '24px' }}>
          <label htmlFor="address1">Primary Address</label>
          <textarea id="address1" placeholder="Enter your full address" className={styles.input} rows={3}></textarea>
        </div>

        <div style={{ marginTop: '32px', display: 'flex', gap: '16px' }}>
          <button type="submit" className="btn">Save Changes</button>
          <button type="button" className="btn o">Cancel</button>
        </div>
      </form>
    </>
  );
}
