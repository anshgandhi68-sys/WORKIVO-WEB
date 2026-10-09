import React from 'react';
import styles from './dashboard.module.css';

export default function WorkerDashboardPage() {
  return (
    <>
      <header className={styles.pageHeader}>
        <h1>Dashboard Overview</h1>
        <p>Monitor your jobs, earnings, and account status.</p>
      </header>

      <div className={styles.statusAlert}>
        <h3>⚠️ Account Pending Verification</h3>
        <p>Your application is currently being reviewed by our team. You will not receive job requests until your account is fully verified. This process usually takes 1-2 business days.</p>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <h3>Total Earnings</h3>
          <div className={styles.statValue}>$0.00</div>
          <p>This month</p>
        </div>
        <div className={styles.statCard}>
          <h3>Completed Jobs</h3>
          <div className={styles.statValue}>0</div>
          <p>All time</p>
        </div>
        <div className={styles.statCard}>
          <h3>Rating</h3>
          <div className={styles.statValue}>--</div>
          <p>No reviews yet</p>
        </div>
      </div>

      <div className={styles.recentJobs}>
        <h2>Upcoming Jobs</h2>
        <div className={styles.emptyState}>
          <p>You have no upcoming jobs. Your account must be verified before you can receive booking requests.</p>
        </div>
      </div>
    </>
  );
}
