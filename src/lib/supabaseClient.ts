import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://vxiyopjjyohcapmtvlef.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_MA0qP1APIohvZtjmbMGHLQ_EJbr8Elx';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
