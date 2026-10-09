'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import styles from './apply.module.css';

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
  const isBackendConfigured = false;

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
    
    // Simulate backend call
    setTimeout(() => {
      setIsSubmitting(false);
      if (isBackendConfigured) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    }, 1500);
  };

  const availableServices = [
    'Home Cleaning', 'Deep Cleaning', 'Plumbing', 
    'Electrical', 'Furniture Assembly', 'Moving Help'
  ];

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
              {!isBackendConfigured && (
                <div className={styles.demoWarning}>
                  <strong>Development Demo:</strong> Backend systems are not yet connected. Applications will not be saved.
                </div>
              )}

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
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="lastName">Last Name</label>
                      <input 
                        type="text" id="lastName" required
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className={styles.input}
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
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" id="phone" required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className={styles.input}
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
                      placeholder="How many years have you been working in this field? Do you have any certifications?"
                    ></textarea>
                  </div>
                  <div className={styles.actions}>
                    <button type="button" onClick={handleBack} className="btn o">Back</button>
                    <button type="submit" className="btn" disabled={formData.services.length === 0}>Next Step</button>
                  </div>
                </form>
              )}

              {step === 3 && status === 'idle' && (
                <form onSubmit={handleSubmit}>
                  <h2>Review & Submit</h2>
                  <p className="mb-4">Please review your information before submitting your application. Our team will contact you to complete the verification process.</p>
                  
                  <div className={styles.reviewBox}>
                    <div className={styles.reviewRow}>
                      <span>Name:</span>
                      <strong>{formData.firstName} {formData.lastName}</strong>
                    </div>
                    <div className={styles.reviewRow}>
                      <span>Contact:</span>
                      <strong>{formData.email} | {formData.phone}</strong>
                    </div>
                    <div className={styles.reviewRow}>
                      <span>Services:</span>
                      <strong>{formData.services.join(', ')}</strong>
                    </div>
                  </div>

                  <div className={styles.actions}>
                    <button type="button" onClick={handleBack} className="btn o" disabled={isSubmitting}>Back</button>
                    <button type="submit" className="btn" disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </div>
                </form>
              )}

              {step === 3 && status === 'error' && (
                <div className={styles.resultState}>
                  <div className={styles.errorIcon}>⚠️</div>
                  <h2>Application Not Saved</h2>
                  <p>As this is a development demo, the backend services are not yet configured to process applications.</p>
                  <p>Your application would normally be marked as "Pending Verification" at this stage.</p>
                  <Link href="/workers/dashboard" className="btn mt-4">View Mock Dashboard</Link>
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
