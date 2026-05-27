import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

// Manually parse .env file
let envUrl = "";
let envAnonKey = "";
try {
  const envContent = fs.readFileSync(".env", "utf8");
  for (const line of envContent.split("\n")) {
    const matchUrl = line.match(/^VITE_SUPABASE_URL\s*=\s*(.*)$/);
    if (matchUrl) envUrl = matchUrl[1].trim();
    const matchKey = line.match(/^VITE_SUPABASE_ANON_KEY\s*=\s*(.*)$/);
    if (matchKey) envAnonKey = matchKey[1].trim();
  }
} catch (err) {
  console.error("Could not read .env file:", err.message);
}

const supabaseUrl = envUrl || "https://mksbyfunazogjjyvuqjk.supabase.co";
const supabaseAnonKey = envAnonKey || "sb_publishable_WCZGTHbYRJLcErKgR8zMEQ_TyBurC2N";

console.log("Supabase URL:", supabaseUrl);

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function runDiagnostics() {
  console.log("\n--- Testing Signup with a New User ---");
  const testEmail = `test_user_${Math.floor(Math.random() * 100000)}@example.com`;
  const testPassword = "Password123!";
  const testPhone = `+91 ${Math.floor(1000000000 + Math.random() * 9000000000)}`;

  console.log("Creating user with Email:", testEmail, "Phone:", testPhone);

  const { data, error } = await supabase.auth.signUp({
    email: testEmail,
    password: testPassword,
    options: {
      data: {
        full_name: "Test Diagnostic User",
        phone: testPhone,
      }
    }
  });

  if (error) {
    console.error("Signup failed with error:");
    console.error(JSON.stringify(error, null, 2));
  } else {
    console.log("Signup success! User ID:", data.user?.id);
  }

  console.log("\n--- Inspecting Profiles Table (Attempting to fetch 1 row) ---");
  const { data: profiles, error: pError } = await supabase
    .from("profiles")
    .select("*")
    .limit(1);

  if (pError) {
    console.error("Failed to query profiles table:", pError);
  } else {
    console.log("Successfully queried profiles table! Found row:", profiles);
  }
}

runDiagnostics().catch(console.error);
