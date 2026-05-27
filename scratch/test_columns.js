import { createClient } from "@supabase/supabase-js";
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

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const columnsToTest = [
  "id",
  "email",
  "name",
  "phone",
  "goal",
  "calorie_goal",
  "water_goal_ml",
  "protein_goal",
  "carbs_goal",
  "fats_goal",
  "weight_kg",
  "height_cm",
  "ai_plan",
  "age",
  "gender",
  "activity",
  "diet",
  "workout_type",
  "created_at"
];

async function testColumns() {
  console.log("Testing columns on public.profiles...\n");
  
  for (const col of columnsToTest) {
    const { error } = await supabase
      .from("profiles")
      .select(col)
      .limit(1);

    if (error) {
      console.log(`❌ Column "${col}" -> FAILS with error:`, error.message);
    } else {
      console.log(`✅ Column "${col}" -> EXISTS`);
    }
  }
}

testColumns().catch(console.error);
