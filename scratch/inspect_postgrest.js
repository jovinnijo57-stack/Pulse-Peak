import fs from "fs";

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

async function inspectSchema() {
  const url = `${supabaseUrl}/rest/v1/`;
  console.log("Fetching PostgREST schema from:", url);

  const res = await fetch(url, {
    headers: {
      "apikey": supabaseAnonKey,
      "Authorization": `Bearer ${supabaseAnonKey}`
    }
  });

  const schema = await res.json();
  console.log("\n--- Tables in Schema ---");
  const tables = schema.definitions ? Object.keys(schema.definitions) : [];
  console.log(tables);

  if (schema.definitions && schema.definitions.profiles) {
    console.log("\n--- Profiles Table Schema ---");
    console.log(JSON.stringify(schema.definitions.profiles, null, 2));
  } else {
    console.log("\nProfiles table not found in definitions!");
  }
}

inspectSchema().catch(console.error);
