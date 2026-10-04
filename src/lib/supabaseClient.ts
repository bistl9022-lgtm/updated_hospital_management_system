import { createClient } from "@supabase/supabase-js";

const DEFAULT_URL = "https://mottnvnlmurdzfjfzgxl.supabase.co";
const DEFAULT_KEY = "sb_publishable_zacgbtlxFDlFYDyvoaZBmg_rKlz141W";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || DEFAULT_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || DEFAULT_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
