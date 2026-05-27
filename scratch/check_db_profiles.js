import { createClient } from "@supabase/supabase-js";
import fs from "fs";

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

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkProfiles() {
  const { data, error } = await supabase.from("profiles").select("*");
  if (error) {
    console.error("Error querying profiles:", error);
  } else {
    console.log("Profiles in Supabase Database:");
    console.log(JSON.stringify(data, null, 2));
  }
}

checkProfiles().catch(console.error);
