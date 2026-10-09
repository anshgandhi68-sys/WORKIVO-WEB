'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import styles from './dashboard.module.css';

export default function WorkerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <Navigation />
      
      <main className={styles.main}>
        <div className="container">
          <div className={styles.demoWarning}>
            <strong>Development Demo:</strong> Backend systems are not yet connected. This dashboard displays mock data.
          </div>
          
          <div className={styles.dashboardLayout}>
            <aside className={styles.sidebar}>
              <div className={styles.workerInfo}>
                <div className={styles.avatar}>WP</div>
                <div>
                  <div className={styles.workerName}>Workivo Partner</div>
                  <div className={styles.statusBadge}>Pending Verification</div>
                </div>
              </div>
              
              <nav className={styles.sideNav}>
                <Link 
                  href="/workers/dashboard" 
                  className={`${styles.navItem} ${pathname === '/workers/dashboard' ? styles.active : ''}`}
                >
                  Overview
                </Link>
                <Link 
                  href="/workers/dashboard/jobs" 
                  className={`${styles.navItem} ${pathname === '/workers/dashboard/jobs' ? styles.active : ''}`}
                >
                  My Jobs
                </Link>
                <Link 
                  href="/workers/dashboard/earnings" 
                  className={`${styles.navItem} ${pathname === '/workers/dashboard/earnings' ? styles.active : ''}`}
                >
                  Earnings
                </Link>
                <Link 
                  href="/workers/dashboard/profile" 
                  className={`${styles.navItem} ${pathname === '/workers/dashboard/profile' ? styles.active : ''}`}
                >
                  Profile & Services
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
