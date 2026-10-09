/**
 * Supabase and External API Integrations Stub
 * 
 * DEVELOPMENT DEMO MODE
 * This file serves as the integration point for Supabase, Razorpay, and other external APIs.
 * 
 * Current Status: PENDING SECRETS & ENVIRONMENT VARIABLES
 * Due to the absence of production secrets (SUPABASE_URL, SUPABASE_ANON_KEY, RAZORPAY_KEY), 
 * these clients are currently stubbed out.
 * 
 * To enable real backend integration:
 * 1. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local
 * 2. Add NEXT_PUBLIC_RAZORPAY_KEY_ID to .env.local
 * 3. Replace these stubs with actual implementations using @supabase/supabase-js
 */

export const isBackendConfigured = false;

// Example Supabase client stub
export const supabase = {
  auth: {
    signIn: async () => ({ error: new Error('Backend not configured') }),
    signUp: async () => ({ error: new Error('Backend not configured') }),
    signOut: async () => ({ error: null }),
    getSession: async () => ({ data: { session: null }, error: null }),
  },
  from: (table: string) => ({
    select: () => Promise.resolve({ data: [], error: null }),
    insert: () => Promise.resolve({ data: null, error: new Error('Backend not configured') }),
    update: () => Promise.resolve({ data: null, error: new Error('Backend not configured') }),
    delete: () => Promise.resolve({ data: null, error: new Error('Backend not configured') }),
  }),
};

// Example Razorpay checkout stub
export const initiateRazorpayCheckout = async (options: any) => {
  console.warn('Razorpay is not configured. This is a demo checkout.');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Razorpay integration pending environment secrets.'));
    }, 1000);
  });
};
