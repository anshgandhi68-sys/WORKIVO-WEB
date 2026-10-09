import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  process.env.SUPABASE_URL ||
  'https://vxiyopjjyohcapmtvlef.supabase.co';

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.SUPABASE_PUBLISHABLE_KEY ||
  'sb_publishable_MA0qP1APIohvZtjmbMGHLQ_EJbr8Elx';

/**
 * Standard Supabase client using public / publishable credentials.
 * Safe for use in both browser and server environments.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Privileged server-side Supabase client using service role / secret key.
 * ONLY for server-side operations (Route Handlers, Server Actions, Node.js scripts).
 * Returns null if executed without a secret key (e.g. in browser).
 */
export const getSupabaseAdmin = (): SupabaseClient | null => {
  const secretKey = process.env.SUPABASE_SECRET_KEY;
  if (!secretKey) {
    return null;
  }
  return createClient(supabaseUrl, secretKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
};
