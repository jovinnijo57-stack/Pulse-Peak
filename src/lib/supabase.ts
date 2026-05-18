import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://mksbyfunazogjjyvuqjk.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rc2J5ZnVuYXpvZ2pqeXZ1cWprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwODc5MjgsImV4cCI6MjA5NDY2MzkyOH0.T0yU2IKvCujeEvAcPIPk7DVTYYkZjNIVF6bmg-aAMAY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
