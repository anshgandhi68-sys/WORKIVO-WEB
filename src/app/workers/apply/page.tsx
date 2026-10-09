'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import styles from './apply.module.css';
import { submitWorkerApplication } from '@/lib/api';

const availableServices = [
  '⚡ Electrician',
  '🍳 Home Cooking',
  '✂️ Barber at Home',
  '💅 Nails & Beauty',
  '🪑 Furniture Repair & Assembly',
  '🔧 Plumbing Services',
  '🧹 Deep Home Cleaning',
  '❄️ AC Service & Repair',
  '📦 Packers & Movers',
  '👕 Laundry & Dry Clean',
];

export default function WorkerApplyPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    services: [] as string[],
    experience: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [appId, setAppId] = useState<string>('');

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      if (prev.services.includes(service)) {
        return { ...prev, services: prev.services.filter(s => s !== service) };
      }
      return { ...prev, services: [...prev.services, service] };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await submitWorkerApplication(formData);
      setIsSubmitting(false);
      if (res.success) {
        setAppId(res.applicationId || `APP-${Math.floor(10000 + Math.random() * 90000)}`);
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setIsSubmitting(false);
      setStatus('error');
    }
  };

  return (
    <>
      <Navigation />
      
      <main className={styles.main}>
        <div className="container">
          <div className={styles.formContainer}>
            <header className={styles.header}>
              <h1>Become a Partner</h1>
              <div className={styles.stepsIndicator}>
                <div className={`${styles.dot} ${step >= 1 ? styles.active : ''}`}>1</div>
                <div className={`${styles.line} ${step >= 2 ? styles.active : ''}`}></div>
                <div className={`${styles.dot} ${step >= 2 ? styles.active : ''}`}>2</div>
                <div className={`${styles.line} ${step >= 3 ? styles.active : ''}`}></div>
                <div className={`${styles.dot} ${step >= 3 ? styles.active : ''}`}>3</div>
              </div>
            </header>

            <div className={styles.formCard}>
              {status === 'success' ? (
                <div className={styles.resultState} style={{ textAlign: 'left', padding: '16px 0' }}>
                  <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                    <div style={{ fontSize: '56px', marginBottom: '12px' }}>⏳</div>
                    <span style={{ 
                      background: 'rgba(245, 158, 11, 0.12)', 
                      color: '#d97706', 
                      fontSize: '13px', 
                      fontWeight: 700, 
                      padding: '6px 16px', 
                      borderRadius: '999px',
                      display: 'inline-block',
                      marginBottom: '12px'
                    }}>
                      Application Under Review
                    </span>
                    <h2 style={{ color: 'var(--g)', fontSize: '28px', margin: '0 0 8px' }}>
                      Application Received!
                    </h2>
                    <p style={{ opacity: 0.8, fontSize: '15px', margin: 0 }}>
                      Thank you for applying to join the Workivo Partner Network.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className={styles.reviewBox} style={{ marginBottom: '28px' }}>
                    <div className={styles.reviewRow}>
                      <span>Application Ref:</span>
                      <strong style={{ color: 'var(--co)' }}>{appId}</strong>
                    </div>
                    <div className={styles.reviewRow}>
                      <span>Applicant Name:</span>
                      <strong>{formData.firstName} {formData.lastName}</strong>
                    </div>
                    <div className={styles.reviewRow}>
                      <span>Contact Info:</span>
                      <strong>{formData.email} | {formData.phone}</strong>
                    </div>
                    <div className={styles.reviewRow}>
                      <span>Selected Services:</span>
                      <strong>{formData.services.join(', ')}</strong>
                    </div>
                  </div>

                  {/* Next Steps Section */}
                  <div style={{ background: 'var(--card)', border: '1.5px solid var(--line)', borderRadius: '16px', padding: '24px', marginBottom: '32px' }}>
                    <h3 style={{ fontSize: '18px', color: 'var(--g)', marginBottom: '16px' }}>What happens next?</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                        <div style={{ background: 'var(--line)', width: '32px', height: '32px', borderRadius: '50%', display: 'grid', placeItems: 'center', fontWeight: 700, color: 'var(--co)', flexShrink: 0 }}>1</div>
                        <div>
                          <strong style={{ display: 'block', fontSize: '15px' }}>Document Verification & Phone Interview</strong>
                          <p style={{ margin: 0, fontSize: '13px', opacity: 0.8, lineHeight: 1.5 }}>Our onboarding specialist will call you within 24 to 48 hours to verify your ID proof and experience.</p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                        <div style={{ background: 'var(--line)', width: '32px', height: '32px', borderRadius: '50%', display: 'grid', placeItems: 'center', fontWeight: 700, color: 'var(--co)', flexShrink: 0 }}>2</div>
                        <div>
                          <strong style={{ display: 'block', fontSize: '15px' }}>Partner Orientation & Training</strong>
                          <p style={{ margin: 0, fontSize: '13px', opacity: 0.8, lineHeight: 1.5 }}>Brief online orientation on Workivo quality standards, safety protocols, and customer care.</p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                        <div style={{ background: 'var(--line)', width: '32px', height: '32px', borderRadius: '50%', display: 'grid', placeItems: 'center', fontWeight: 700, color: 'var(--co)', flexShrink: 0 }}>3</div>
                        <div>
                          <strong style={{ display: 'block', fontSize: '15px' }}>Account Activation & Acceptance</strong>
                          <p style={{ margin: 0, fontSize: '13px', opacity: 0.8, lineHeight: 1.5 }}>Log in to the Workivo Partner Portal, set your working hours, and start accepting service requests!</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/workers/dashboard" className="btn">Go to Partner Portal →</Link>
                    <button 
                      onClick={() => { 
                        setStep(1); 
                        setStatus('idle'); 
                        setFormData({ firstName: '', lastName: '', email: '', phone: '', services: [], experience: '' }); 
                      }} 
                      className="btn o"
                    >
                      Submit Another Application
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {step === 1 && (
                    <form onSubmit={handleNext}>
                      <h2>Personal Information</h2>
                      <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                          <label htmlFor="firstName">First Name</label>
                          <input 
                            type="text" id="firstName" required
                            value={formData.firstName}
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                            className={styles.input}
                            placeholder="John"
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label htmlFor="lastName">Last Name</label>
                          <input 
                            type="text" id="lastName" required
                            value={formData.lastName}
                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                            className={styles.input}
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="email">Email Address</label>
                        <input 
                          type="email" id="email" required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className={styles.input}
                          placeholder="john.doe@example.com"
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="phone">Phone Number</label>
                        <input 
                          type="tel" id="phone" required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className={styles.input}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div className={styles.actions}>
                        <button type="submit" className="btn">Next Step</button>
                      </div>
                    </form>
                  )}

                  {step === 2 && (
                    <form onSubmit={handleNext}>
                      <h2>Services & Experience</h2>
                      <div className={styles.formGroup}>
                        <label>What services do you provide?</label>
                        <div className={styles.servicesGrid}>
                          {availableServices.map(service => (
                            <label key={service} className={styles.serviceCheckbox}>
                              <input 
                                type="checkbox" 
                                checked={formData.services.includes(service)}
                                onChange={() => handleServiceToggle(service)}
                              />
                              <span>{service}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="experience">Tell us about your experience</label>
                        <textarea 
                          id="experience" required rows={4}
                          value={formData.experience}
                          onChange={(e) => setFormData({...formData, experience: e.target.value})}
                          className={styles.input}
                          placeholder="How many years have you been working in this field? Do you have any certifications or prior work history?"
                        ></textarea>
                      </div>
                      <div className={styles.actions}>
                        <button type="button" onClick={handleBack} className="btn o">Back</button>
                        <button type="submit" className="btn" disabled={formData.services.length === 0}>Next Step</button>
                      </div>
                    </form>
                  )}

                  {step === 3 && (
                    <form onSubmit={handleSubmit}>
                      <h2>Review & Submit</h2>
                      <p className="mb-4" style={{ opacity: 0.8, marginBottom: '20px' }}>
                        Please review your application details below before submitting. Our team will contact you to complete the verification process.
                      </p>
                      
                      <div className={styles.reviewBox}>
                        <div className={styles.reviewRow}>
                          <span>Applicant Name:</span>
                          <strong>{formData.firstName} {formData.lastName}</strong>
                        </div>
                        <div className={styles.reviewRow}>
                          <span>Contact Info:</span>
                          <strong>{formData.email} | {formData.phone}</strong>
                        </div>
                        <div className={styles.reviewRow}>
                          <span>Selected Services:</span>
                          <strong>{formData.services.join(', ')}</strong>
                        </div>
                        <div className={styles.reviewRow}>
                          <span>Experience Summary:</span>
                          <strong>{formData.experience}</strong>
                        </div>
                      </div>

                      <div className={styles.actions}>
                        <button type="button" onClick={handleBack} className="btn o" disabled={isSubmitting}>Back</button>
                        <button type="submit" className="btn" disabled={isSubmitting}>
                          {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
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
