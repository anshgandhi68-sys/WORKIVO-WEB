'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import styles from './book.module.css';
import { createBooking } from '@/lib/api';

const availableServices = [
  { id: 'electrician', name: '⚡ Electrician' },
  { id: 'home-cooking', name: '🍳 Home Cooking' },
  { id: 'barber-at-home', name: '✂️ Barber at Home' },
  { id: 'nails-and-beauty', name: '💅 Nails & Beauty' },
  { id: 'furniture-repair', name: '🪑 Furniture Repair & Assembly' },
  { id: 'plumbing', name: '🔧 Plumbing Services' },
  { id: 'home-cleaning', name: '🧹 Deep Home Cleaning' },
  { id: 'ac-repair', name: '❄️ AC Service & Repair' },
  { id: 'packers-and-movers', name: '📦 Packers & Movers' },
  { id: 'laundry', name: '👕 Laundry & Dry Clean' },
];

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
  const [confirmedBookingId, setConfirmedBookingId] = useState<string>('');

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
        setConfirmedBookingId(res.bookingId || `WVK-${Math.floor(100000 + Math.random() * 900000)}`);
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
              {bookingStatus === 'success' ? (
                <div className={styles.successState} style={{ textAlign: 'center', padding: '32px 16px' }}>
                  <div style={{ fontSize: '54px', marginBottom: '16px' }}>🎉</div>
                  <h2 style={{ color: 'var(--g)', fontSize: '28px', marginBottom: '8px' }}>Booking Confirmed!</h2>
                  <p style={{ opacity: 0.8, fontSize: '15px', marginBottom: '20px' }}>
                    Your service appointment has been scheduled successfully.
                  </p>
                  
                  <div className={styles.reviewBox} style={{ margin: '0 auto 28px', maxWidth: '420px', textAlign: 'left' }}>
                    <div className={styles.reviewRow}>
                      <span>Booking Ref:</span>
                      <strong style={{ color: 'var(--co)' }}>{confirmedBookingId}</strong>
                    </div>
                    <div className={styles.reviewRow}>
                      <span>Service:</span>
                      <strong>{formData.service}</strong>
                    </div>
                    <div className={styles.reviewRow}>
                      <span>Date & Time:</span>
                      <strong>{formData.date} at {formData.time}</strong>
                    </div>
                    <div className={styles.reviewRow}>
                      <span>Address:</span>
                      <strong>{formData.address}</strong>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/account/bookings" className="btn">View My Bookings</Link>
                    <button onClick={() => { setStep(1); setBookingStatus('idle'); setFormData({ service: '', address: '', date: '', time: '' }); }} className="btn o">
                      Book Another Service
                    </button>
                  </div>
                </div>
              ) : (
                <>
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
                          {availableServices.map((svc) => (
                            <option key={svc.id} value={svc.name}>
                              {svc.name}
                            </option>
                          ))}
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
                          placeholder="Enter full address with landmark"
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
                          <label htmlFor="time">Time Slot</label>
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

                  {step === 4 && (
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
                          {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
                        </button>
                      </div>
                    </form>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
