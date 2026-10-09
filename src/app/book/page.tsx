'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import styles from './book.module.css';
import { createBooking, isBackendConfigured } from '@/lib/api';

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    address: '',
    date: '',
    time: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await createBooking(formData);
      setIsSubmitting(false);
      if (res.success) {
        setBookingStatus('success');
      } else {
        setBookingStatus('error');
      }
    } catch {
      setIsSubmitting(false);
      setBookingStatus('error');
    }
  };

  return (
    <>
      <Navigation />
      
      <main className={styles.main}>
        <div className="container">
          <div className={styles.bookingContainer}>
            <header className={styles.header}>
              <h1>Book a Service</h1>
              <div className={styles.stepsIndicator}>
                <div className={`${styles.dot} ${step >= 1 ? styles.active : ''}`}></div>
                <div className={`${styles.line} ${step >= 2 ? styles.active : ''}`}></div>
                <div className={`${styles.dot} ${step >= 2 ? styles.active : ''}`}></div>
                <div className={`${styles.line} ${step >= 3 ? styles.active : ''}`}></div>
                <div className={`${styles.dot} ${step >= 3 ? styles.active : ''}`}></div>
                <div className={`${styles.line} ${step >= 4 ? styles.active : ''}`}></div>
                <div className={`${styles.dot} ${step >= 4 ? styles.active : ''}`}></div>
              </div>
            </header>

            <div className={styles.formCard}>
              {!isBackendConfigured && (
                <div className={styles.demoWarning}>
                  <strong>Development Demo:</strong> Backend systems are not yet connected. Bookings cannot be completed.
                </div>
              )}

              {step === 1 && (
                <form onSubmit={handleNext}>
                  <h2>1. Select a Service</h2>
                  <div className={styles.formGroup}>
                    <label htmlFor="service">Available Services</label>
                    <select 
                      id="service" 
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className={styles.input}
                    >
                      <option value="">Select a service</option>
                      {/* Simulating no services configured yet */}
                      <option value="demo" disabled>No services currently configured</option>
                    </select>
                  </div>
                  <div className={styles.actions}>
                    <button type="submit" className="btn" disabled={!formData.service}>Next Step</button>
                  </div>
                </form>
              )}

              {step === 2 && (
                <form onSubmit={handleNext}>
                  <h2>2. Service Address</h2>
                  <div className={styles.formGroup}>
                    <label htmlFor="address">Your Address</label>
                    <textarea 
                      id="address" 
                      required
                      placeholder="Enter full address"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      className={styles.input}
                      rows={3}
                    ></textarea>
                  </div>
                  <div className={styles.actions}>
                    <button type="button" onClick={handleBack} className="btn o">Back</button>
                    <button type="submit" className="btn" disabled={!formData.address}>Next Step</button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <form onSubmit={handleNext}>
                  <h2>3. Date & Time</h2>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="date">Date</label>
                      <input 
                        type="date" 
                        id="date" 
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className={styles.input}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="time">Time</label>
                      <input 
                        type="time" 
                        id="time" 
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                        className={styles.input}
                      />
                    </div>
                  </div>
                  <div className={styles.actions}>
                    <button type="button" onClick={handleBack} className="btn o">Back</button>
                    <button type="submit" className="btn" disabled={!formData.date || !formData.time}>Review</button>
                  </div>
                </form>
              )}

              {step === 4 && bookingStatus === 'idle' && (
                <form onSubmit={handleSubmit}>
                  <h2>4. Review & Confirm</h2>
                  <div className={styles.reviewBox}>
                    <div className={styles.reviewRow}>
                      <span>Service:</span>
                      <strong>{formData.service || 'None selected'}</strong>
                    </div>
                    <div className={styles.reviewRow}>
                      <span>Address:</span>
                      <strong>{formData.address}</strong>
                    </div>
                    <div className={styles.reviewRow}>
                      <span>Date & Time:</span>
                      <strong>{formData.date} at {formData.time}</strong>
                    </div>
                  </div>
                  <div className={styles.actions}>
                    <button type="button" onClick={handleBack} className="btn o" disabled={isSubmitting}>Back</button>
                    <button type="submit" className="btn" disabled={isSubmitting}>
                      {isSubmitting ? 'Processing...' : 'Confirm Booking'}
                    </button>
                  </div>
                </form>
              )}

              {step === 4 && bookingStatus === 'error' && (
                <div className={styles.errorState}>
                  <h2>Booking Failed</h2>
                  <p>As this is a development demo, the backend services are not yet configured to process real bookings.</p>
                  <button onClick={() => {setStep(1); setBookingStatus('idle');}} className="btn mt-4">Start Over</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
