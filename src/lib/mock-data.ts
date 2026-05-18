// Sample data for PulsePeak MVP (no backend yet)
export type Food = {
  id: string;
  name: string;
  brand?: string;
  serving: string;
  kcal: number;
  protein: number;
  carbs: number;
  fats: number;
  verified?: boolean;
};

export const FOODS: Food[] = [
  { id: "1", name: "Greek Yogurt", brand: "Fage", serving: "170g", kcal: 100, protein: 18, carbs: 6, fats: 0, verified: true },
  { id: "2", name: "Oatmeal", brand: "Quaker", serving: "40g dry", kcal: 150, protein: 5, carbs: 27, fats: 3, verified: true },
  { id: "3", name: "Banana", serving: "1 medium", kcal: 105, protein: 1.3, carbs: 27, fats: 0.4 },
  { id: "4", name: "Grilled Chicken Breast", serving: "150g", kcal: 248, protein: 46, carbs: 0, fats: 5, verified: true },
  { id: "5", name: "Brown Rice", serving: "1 cup cooked", kcal: 216, protein: 5, carbs: 45, fats: 1.8 },
  { id: "6", name: "Avocado", serving: "1/2 fruit", kcal: 160, protein: 2, carbs: 9, fats: 15 },
  { id: "7", name: "Salmon Fillet", serving: "150g", kcal: 280, protein: 39, carbs: 0, fats: 13, verified: true },
  { id: "8", name: "Almonds", serving: "30g", kcal: 174, protein: 6, carbs: 6, fats: 15 },
  { id: "9", name: "Whole Wheat Bread", serving: "2 slices", kcal: 160, protein: 8, carbs: 28, fats: 2 },
  { id: "10", name: "Eggs", serving: "2 large", kcal: 156, protein: 13, carbs: 1, fats: 11 },
  { id: "11", name: "Sweet Potato", serving: "150g baked", kcal: 130, protein: 2, carbs: 30, fats: 0.2 },
  { id: "12", name: "Protein Shake", brand: "Whey Gold", serving: "1 scoop", kcal: 120, protein: 24, carbs: 3, fats: 1, verified: true },
  { id: "13", name: "Spinach", serving: "100g", kcal: 23, protein: 3, carbs: 4, fats: 0.4 },
  { id: "14", name: "Olive Oil", serving: "1 tbsp", kcal: 119, protein: 0, carbs: 0, fats: 13.5 },
  { id: "15", name: "Apple", serving: "1 medium", kcal: 95, protein: 0.5, carbs: 25, fats: 0.3 },
];

export type Exercise = { id: string; name: string; kcalPerMin: number; icon: string };
export const EXERCISES: Exercise[] = [
  { id: "e1", name: "Walking", kcalPerMin: 4, icon: "🚶" },
  { id: "e2", name: "Running", kcalPerMin: 11, icon: "🏃" },
  { id: "e3", name: "Cycling", kcalPerMin: 8, icon: "🚴" },
  { id: "e4", name: "Weight Lifting", kcalPerMin: 6, icon: "🏋️" },
  { id: "e5", name: "Yoga", kcalPerMin: 3, icon: "🧘" },
  { id: "e6", name: "Swimming", kcalPerMin: 10, icon: "🏊" },
  { id: "e7", name: "HIIT", kcalPerMin: 13, icon: "⚡" },
  { id: "e8", name: "Hiking", kcalPerMin: 7, icon: "🥾" },
];

export const WEIGHT_HISTORY = [
  { day: "Mon", weight: 78.2 },
  { day: "Tue", weight: 78.0 },
  { day: "Wed", weight: 77.8 },
  { day: "Thu", weight: 77.9 },
  { day: "Fri", weight: 77.5 },
  { day: "Sat", weight: 77.3 },
  { day: "Sun", weight: 77.1 },
];

export function getWeightHistory() {
  if (typeof window === "undefined") return WEIGHT_HISTORY;
  try {
    const raw = localStorage.getItem("pulsepeak_weight_history");
    if (raw) return JSON.parse(raw);
  } catch {}
  return WEIGHT_HISTORY;
}

export function saveWeightHistory(newWeight: number) {
  if (typeof window === "undefined") return;
  const current = getWeightHistory();
  const updated = [...current];
  updated[updated.length - 1] = { ...updated[updated.length - 1], weight: newWeight };
  try {
    localStorage.setItem("pulsepeak_weight_history", JSON.stringify(updated));
  } catch {}
}

export const CALORIE_HISTORY = [
  { day: "Mon", eaten: 2100, burned: 420 },
  { day: "Tue", eaten: 1980, burned: 380 },
  { day: "Wed", eaten: 2240, burned: 510 },
  { day: "Thu", eaten: 1850, burned: 290 },
  { day: "Fri", eaten: 2050, burned: 460 },
  { day: "Sat", eaten: 2310, burned: 620 },
  { day: "Sun", eaten: 1920, burned: 350 },
];

export function getCalorieHistory(currentEaten?: number, currentBurned?: number) {
  if (typeof window === "undefined") return CALORIE_HISTORY;
  try {
    const raw = localStorage.getItem("pulsepeak_calorie_history");
    let history = raw ? JSON.parse(raw) : [...CALORIE_HISTORY];
    if (currentEaten !== undefined && currentBurned !== undefined) {
      history[history.length - 1] = {
        ...history[history.length - 1],
        eaten: currentEaten,
        burned: currentBurned,
      };
      localStorage.setItem("pulsepeak_calorie_history", JSON.stringify(history));
    }
    return history;
  } catch {}
  return CALORIE_HISTORY;
}

// BMR (Mifflin-St Jeor)
export function calcBMR(weight: number, height: number, age: number, gender: "male" | "female") {
  const base = 10 * weight + 6.25 * height - 5 * age;
  return Math.round(base + (gender === "male" ? 5 : -161));
}
export function calcTDEE(bmr: number, activity: number) { return Math.round(bmr * activity); }
export function goalAdjust(tdee: number, goal: "lose" | "maintain" | "gain") {
  if (goal === "lose") return tdee - 500;
  if (goal === "gain") return tdee + 350;
  return tdee;
}
