// src/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lzjrpohlfstloabawnqk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6anJwb2hsZnN0bG9hYmF3bnFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1Nzg4NjgsImV4cCI6MjA3NTE1NDg2OH0.1GfDta_54sGBV0Y6ZeYqDbOD2mXek9ZaFXFEsJChcM8';

export const supabase = createClient(supabaseUrl, supabaseKey);
