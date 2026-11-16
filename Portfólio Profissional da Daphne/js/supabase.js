import { createClient } from '@supabase/supabase-js';
const SUPABASE_URL = 'https://sgjudgceydnvdqlwlcix.supabase.co'
const SUPABASE_KEY = 'sb_publishable_Kr1wMBQ_SnIhgtdVSOk4xg_2o1C1ch-'

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
)