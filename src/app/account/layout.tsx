'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import styles from './account.module.css';

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isAuthenticated] = useState(true); // Mocking authentication

  if (!isAuthenticated) {
    return (
      <>
        <Navigation />
        <main className={styles.main}>
          <div className="container">
            <div className={styles.authGate}>
              <h2>Please Sign In</h2>
              <p>You need to be signed in to view your account.</p>
              <button className="btn">Sign In</button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      
      <main className={styles.main}>
        <div className="container">
          <div className={styles.demoWarning}>
            <strong>Development Demo:</strong> Backend systems (Supabase) are not yet configured. Displaying mock data for layout purposes.
          </div>
          
          <div className={styles.accountLayout}>
            <aside className={styles.sidebar}>
              <div className={styles.userInfo}>
                <div className={styles.avatar}>A</div>
                <div>
                  <div className={styles.userName}>Alex Customer</div>
                  <div className={styles.userEmail}>alex@example.com</div>
                </div>
              </div>
              
              <nav className={styles.sideNav}>
                <Link 
                  href="/account" 
                  className={`${styles.navItem} ${pathname === '/account' ? styles.active : ''}`}
                >
                  Dashboard
                </Link>
                <Link 
                  href="/account/profile" 
                  className={`${styles.navItem} ${pathname === '/account/profile' ? styles.active : ''}`}
                >
                  Profile & Settings
                </Link>
                <Link 
                  href="/account/bookings" 
                  className={`${styles.navItem} ${pathname === '/account/bookings' ? styles.active : ''}`}
                >
                  My Bookings
                </Link>
                <button className={styles.signOutBtn}>
                  Sign Out
                </button>
              </nav>
            </aside>
            
            <div className={styles.content}>
              {children}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
