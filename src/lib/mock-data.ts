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
  { id: "16", name: "Grilled Chicken Salad", brand: "Recipe", serving: "1 bowl", kcal: 350, protein: 35, carbs: 12, fats: 14, verified: true },
  { id: "17", name: "Berry Protein Smoothie", brand: "Recipe", serving: "1 glass", kcal: 280, protein: 25, carbs: 32, fats: 4, verified: true },
  { id: "18", name: "Quinoa Buddha Bowl", brand: "Recipe", serving: "1 bowl", kcal: 420, protein: 16, carbs: 58, fats: 14, verified: true },
  { id: "19", name: "Salmon Avocado Toast", brand: "Recipe", serving: "2 slices", kcal: 380, protein: 22, carbs: 28, fats: 18, verified: true },
  { id: "20", name: "Lentil Soup", brand: "Recipe", serving: "1 bowl", kcal: 220, protein: 14, carbs: 38, fats: 2 },
  { id: "21", name: "Tofu Stir Fry", brand: "Recipe", serving: "1 plate", kcal: 310, protein: 19, carbs: 22, fats: 16, verified: true },
  { id: "22", name: "Chia Seed Pudding", brand: "Recipe", serving: "1 cup", kcal: 190, protein: 6, carbs: 20, fats: 9 },
  { id: "23", name: "Cottage Cheese & Berries", serving: "1 cup", kcal: 180, protein: 24, carbs: 14, fats: 3, verified: true },
  { id: "24", name: "Sweet Potato Fries", serving: "100g", kcal: 160, protein: 2, carbs: 34, fats: 4 },
  { id: "25", name: "Veggie Omelette", brand: "Recipe", serving: "3 eggs", kcal: 260, protein: 20, carbs: 4, fats: 18, verified: true },
  { id: "26", name: "Almond Butter Rice Cakes", serving: "2 cakes", kcal: 190, protein: 5, carbs: 22, fats: 9 },
  { id: "27", name: "Turkey & Cheese Wrap", brand: "Recipe", serving: "1 wrap", kcal: 320, protein: 28, carbs: 26, fats: 11, verified: true },
  { id: "28", name: "Peanut Butter Banana Toast", brand: "Recipe", serving: "1 slice", kcal: 250, protein: 8, carbs: 34, fats: 10 },
  { id: "29", name: "Matcha Latte", serving: "1 cup", kcal: 110, protein: 4, carbs: 12, fats: 3 },
  { id: "30", name: "Dark Chocolate", serving: "25g", kcal: 150, protein: 2, carbs: 13, fats: 11, verified: true },
  { id: "in1", name: "Idli", serving: "2 pieces (100g)", kcal: 120, protein: 4, carbs: 26, fats: 0.5, verified: true },
  { id: "in2", name: "Plain Dosa", serving: "1 medium", kcal: 160, protein: 4, carbs: 29, fats: 3, verified: true },
  { id: "in3", name: "Masala Dosa", brand: "Recipe", serving: "1 large", kcal: 320, protein: 7, carbs: 54, fats: 10, verified: true },
  { id: "in4", name: "Poha", brand: "Recipe", serving: "1 bowl (150g)", kcal: 250, protein: 5, carbs: 45, fats: 7, verified: true },
  { id: "in5", name: "Upma", brand: "Recipe", serving: "1 bowl (150g)", kcal: 270, protein: 5, carbs: 42, fats: 9, verified: true },
  { id: "in6", name: "Aloo Paratha", brand: "Recipe", serving: "1 paratha", kcal: 300, protein: 6, carbs: 44, fats: 11, verified: true },
  { id: "in7", name: "Paneer Paratha", brand: "Recipe", serving: "1 paratha", kcal: 340, protein: 12, carbs: 40, fats: 14, verified: true },
  { id: "in8", name: "Plain Paratha", serving: "1 paratha", kcal: 260, protein: 5, carbs: 38, fats: 10 },
  { id: "in9", name: "Phulka / Roti", serving: "1 piece (30g)", kcal: 85, protein: 3, carbs: 18, fats: 0.5, verified: true },
  { id: "in10", name: "Butter Naan", serving: "1 piece", kcal: 290, protein: 7, carbs: 45, fats: 9, verified: true },
  { id: "in11", name: "Garlic Naan", serving: "1 piece", kcal: 300, protein: 7, carbs: 46, fats: 10, verified: true },
  { id: "in12", name: "Steamed Basmati Rice", serving: "1 cup cooked", kcal: 205, protein: 4, carbs: 45, fats: 0.4, verified: true },
  { id: "in13", name: "Jeera Rice", brand: "Recipe", serving: "1 cup cooked", kcal: 230, protein: 4, carbs: 45, fats: 4, verified: true },
  { id: "in14", name: "Yellow Dal Tadka", brand: "Recipe", serving: "1 bowl (200g)", kcal: 220, protein: 12, carbs: 32, fats: 5, verified: true },
  { id: "in15", name: "Dal Makhani", brand: "Recipe", serving: "1 bowl (200g)", kcal: 330, protein: 14, carbs: 36, fats: 15, verified: true },
  { id: "in16", name: "Chana Masala / Chole", brand: "Recipe", serving: "1 bowl (200g)", kcal: 280, protein: 12, carbs: 42, fats: 8, verified: true },
  { id: "in17", name: "Rajma Masala", brand: "Recipe", serving: "1 bowl (200g)", kcal: 260, protein: 11, carbs: 40, fats: 6, verified: true },
  { id: "in18", name: "Palak Paneer", brand: "Recipe", serving: "1 bowl (200g)", kcal: 310, protein: 16, carbs: 12, fats: 22, verified: true },
  { id: "in19", name: "Paneer Tikka Masala", brand: "Recipe", serving: "1 bowl (200g)", kcal: 360, protein: 18, carbs: 16, fats: 25, verified: true },
  { id: "in20", name: "Kadai Paneer", brand: "Recipe", serving: "1 bowl (200g)", kcal: 340, protein: 17, carbs: 15, fats: 24, verified: true },
  { id: "in21", name: "Matar Paneer", brand: "Recipe", serving: "1 bowl (200g)", kcal: 320, protein: 15, carbs: 18, fats: 22, verified: true },
  { id: "in22", name: "Shahi Paneer", brand: "Recipe", serving: "1 bowl (200g)", kcal: 380, protein: 16, carbs: 18, fats: 28, verified: true },
  { id: "in23", name: "Malai Kofta", brand: "Recipe", serving: "1 bowl (200g)", kcal: 410, protein: 12, carbs: 32, fats: 28, verified: true },
  { id: "in24", name: "Aloo Gobi", brand: "Recipe", serving: "1 bowl (150g)", kcal: 180, protein: 4, carbs: 22, fats: 8, verified: true },
  { id: "in25", name: "Bhindi Masala", brand: "Recipe", serving: "1 bowl (150g)", kcal: 160, protein: 3, carbs: 18, fats: 9, verified: true },
  { id: "in26", name: "Baingan Bharta", brand: "Recipe", serving: "1 bowl (150g)", kcal: 150, protein: 3, carbs: 16, fats: 8, verified: true },
  { id: "in27", name: "Mix Veg Curry", brand: "Recipe", serving: "1 bowl (200g)", kcal: 190, protein: 5, carbs: 24, fats: 9, verified: true },
  { id: "in28", name: "Butter Chicken", brand: "Recipe", serving: "1 bowl (250g)", kcal: 450, protein: 32, carbs: 14, fats: 30, verified: true },
  { id: "in29", name: "Chicken Tikka Masala", brand: "Recipe", serving: "1 bowl (250g)", kcal: 400, protein: 34, carbs: 16, fats: 22, verified: true },
  { id: "in30", name: "Chicken Curry (Home Style)", brand: "Recipe", serving: "1 bowl (250g)", kcal: 320, protein: 30, carbs: 12, fats: 16, verified: true },
  { id: "in31", name: "Mutton Rogan Josh", brand: "Recipe", serving: "1 bowl (250g)", kcal: 480, protein: 32, carbs: 12, fats: 32, verified: true },
  { id: "in32", name: "Fish Curry", brand: "Recipe", serving: "1 bowl (250g)", kcal: 310, protein: 28, carbs: 10, fats: 17, verified: true },
  { id: "in33", name: "Prawn Masala", brand: "Recipe", serving: "1 bowl (200g)", kcal: 280, protein: 26, carbs: 12, fats: 14, verified: true },
  { id: "in34", name: "Egg Curry", brand: "Recipe", serving: "2 eggs + gravy", kcal: 260, protein: 16, carbs: 12, fats: 16, verified: true },
  { id: "in35", name: "Chicken Biryani", brand: "Recipe", serving: "1 plate (350g)", kcal: 550, protein: 32, carbs: 62, fats: 18, verified: true },
  { id: "in36", name: "Mutton Biryani", brand: "Recipe", serving: "1 plate (350g)", kcal: 620, protein: 34, carbs: 60, fats: 24, verified: true },
  { id: "in37", name: "Veg Biryani", brand: "Recipe", serving: "1 plate (350g)", kcal: 420, protein: 10, carbs: 68, fats: 12, verified: true },
  { id: "in38", name: "Paneer Biryani", brand: "Recipe", serving: "1 plate (350g)", kcal: 490, protein: 16, carbs: 64, fats: 18, verified: true },
  { id: "in39", name: "Hyderabadi Chicken Biryani", brand: "Recipe", serving: "1 plate (350g)", kcal: 580, protein: 34, carbs: 62, fats: 20, verified: true },
  { id: "in40", name: "Kadhi Pakora", brand: "Recipe", serving: "1 bowl (200g)", kcal: 240, protein: 8, carbs: 28, fats: 11, verified: true },
  { id: "in41", name: "Rajma Chawal", brand: "Recipe", serving: "1 plate (350g)", kcal: 460, protein: 15, carbs: 85, fats: 6, verified: true },
  { id: "in42", name: "Chole Bhature", brand: "Recipe", serving: "2 bhature + chole", kcal: 750, protein: 18, carbs: 92, fats: 34, verified: true },
  { id: "in43", name: "Poori Bhaji", brand: "Recipe", serving: "3 pooris + aloo bhaji", kcal: 520, protein: 10, carbs: 65, fats: 24, verified: true },
  { id: "in44", name: "Pav Bhaji", brand: "Recipe", serving: "2 pav + bhaji", kcal: 480, protein: 12, carbs: 68, fats: 18, verified: true },
  { id: "in45", name: "Vada Pav", serving: "1 piece", kcal: 300, protein: 6, carbs: 42, fats: 12, verified: true },
  { id: "in46", name: "Misal Pav", brand: "Recipe", serving: "2 pav + misal", kcal: 520, protein: 16, carbs: 70, fats: 20, verified: true },
  { id: "in47", name: "Samosa", serving: "1 piece (75g)", kcal: 220, protein: 3, carbs: 26, fats: 12, verified: true },
  { id: "in48", name: "Pakora / Bhajiya", serving: "100g", kcal: 280, protein: 6, carbs: 32, fats: 15, verified: true },
  { id: "in49", name: "Pani Puri / Golgappa", serving: "6 pieces", kcal: 180, protein: 4, carbs: 36, fats: 3, verified: true },
  { id: "in50", name: "Bhel Puri", serving: "1 plate", kcal: 250, protein: 5, carbs: 52, fats: 4, verified: true },
  { id: "in51", name: "Sev Puri", serving: "6 pieces", kcal: 270, protein: 5, carbs: 44, fats: 8, verified: true },
  { id: "in52", name: "Dhokla", serving: "3 pieces (100g)", kcal: 160, protein: 6, carbs: 30, fats: 2, verified: true },
  { id: "in53", name: "Khandvi", serving: "100g", kcal: 170, protein: 6, carbs: 24, fats: 6, verified: true },
  { id: "in54", name: "Sabudana Khichdi", brand: "Recipe", serving: "1 bowl (150g)", kcal: 330, protein: 3, carbs: 58, fats: 10, verified: true },
  { id: "in55", name: "Dal Khichdi", brand: "Recipe", serving: "1 bowl (250g)", kcal: 310, protein: 12, carbs: 54, fats: 5, verified: true },
  { id: "in56", name: "Medu Vada", serving: "2 pieces", kcal: 280, protein: 8, carbs: 32, fats: 14, verified: true },
  { id: "in57", name: "Rava Dosa", brand: "Recipe", serving: "1 medium", kcal: 220, protein: 5, carbs: 38, fats: 5, verified: true },
  { id: "in58", name: "Onion Uttapam", brand: "Recipe", serving: "1 medium", kcal: 240, protein: 6, carbs: 42, fats: 5, verified: true },
  { id: "in59", name: "Ven Pongal", brand: "Recipe", serving: "1 bowl (200g)", kcal: 350, protein: 9, carbs: 48, fats: 14, verified: true },
  { id: "in60", name: "Appam", serving: "2 pieces", kcal: 180, protein: 3, carbs: 38, fats: 2, verified: true },
  { id: "in61", name: "Kerala Parotta", serving: "1 piece", kcal: 320, protein: 6, carbs: 44, fats: 13, verified: true },
  { id: "in62", name: "Puttu", serving: "1 cylindrical piece", kcal: 210, protein: 4, carbs: 45, fats: 1.5 },
  { id: "in63", name: "Idiyappam", serving: "3 string hoppers", kcal: 190, protein: 3, carbs: 42, fats: 1 },
  { id: "in64", name: "Sarson Ka Saag & Makki Roti", brand: "Recipe", serving: "2 rotis + saag", kcal: 480, protein: 14, carbs: 65, fats: 18, verified: true },
  { id: "in65", name: "Thalipeeth", brand: "Recipe", serving: "1 piece", kcal: 220, protein: 7, carbs: 36, fats: 5, verified: true },
  { id: "in66", name: "Gulab Jamun", serving: "2 pieces", kcal: 300, protein: 4, carbs: 48, fats: 11, verified: true },
  { id: "in67", name: "Rasgulla", serving: "2 pieces", kcal: 250, protein: 4, carbs: 54, fats: 2, verified: true },
  { id: "in68", name: "Jalebi", serving: "50g", kcal: 230, protein: 1.5, carbs: 50, fats: 3 },
  { id: "in69", name: "Rice Kheer / Payasam", brand: "Recipe", serving: "1 bowl (150g)", kcal: 240, protein: 6, carbs: 38, fats: 7, verified: true },
  { id: "in70", name: "Gajar Ka Halwa", brand: "Recipe", serving: "1 bowl (150g)", kcal: 320, protein: 6, carbs: 42, fats: 15, verified: true },
  { id: "in71", name: "Rasmalai", serving: "2 pieces", kcal: 280, protein: 8, carbs: 38, fats: 11, verified: true },
  { id: "in72", name: "Kaju Katli", serving: "2 pieces (30g)", kcal: 160, protein: 3, carbs: 18, fats: 9, verified: true },
  { id: "in73", name: "Mysore Pak", serving: "1 piece (40g)", kcal: 240, protein: 2, carbs: 26, fats: 15, verified: true },
  { id: "in74", name: "Moong Dal Halwa", brand: "Recipe", serving: "1 bowl (100g)", kcal: 350, protein: 8, carbs: 40, fats: 18, verified: true },
  { id: "in75", name: "Shrikhand", serving: "1 bowl (100g)", kcal: 260, protein: 7, carbs: 34, fats: 11, verified: true },
  { id: "in76", name: "Basundi / Rabri", serving: "1 bowl (100g)", kcal: 240, protein: 7, carbs: 28, fats: 11, verified: true },
  { id: "in77", name: "Mango Lassi", brand: "Recipe", serving: "1 glass (250ml)", kcal: 220, protein: 8, carbs: 38, fats: 4, verified: true },
  { id: "in78", name: "Sweet Lassi", brand: "Recipe", serving: "1 glass (250ml)", kcal: 200, protein: 8, carbs: 32, fats: 5, verified: true },
  { id: "in79", name: "Chaas / Masala Buttermilk", brand: "Recipe", serving: "1 glass (250ml)", kcal: 45, protein: 3, carbs: 5, fats: 1.5, verified: true },
  { id: "in80", name: "Masala Chai", serving: "1 cup (150ml)", kcal: 110, protein: 3, carbs: 16, fats: 4, verified: true },
  { id: "in81", name: "South Indian Filter Coffee", serving: "1 cup (150ml)", kcal: 100, protein: 3, carbs: 14, fats: 3.5, verified: true },
  { id: "in82", name: "Sol Kadhi", serving: "1 glass (200ml)", kcal: 80, protein: 1, carbs: 8, fats: 5, verified: true },
  { id: "in83", name: "Jaljeera", serving: "1 glass (250ml)", kcal: 20, protein: 0.5, carbs: 4, fats: 0.1, verified: true },
  { id: "in84", name: "Thandai", serving: "1 glass (200ml)", kcal: 210, protein: 7, carbs: 26, fats: 9, verified: true },
  { id: "in85", name: "Nimbu Pani / Shikanji", serving: "1 glass (250ml)", kcal: 60, protein: 0.1, carbs: 15, fats: 0 },
  { id: "in86", name: "Tender Coconut Water", serving: "1 glass (250ml)", kcal: 45, protein: 1, carbs: 10, fats: 0.5, verified: true },
  { id: "in87", name: "Puran Poli", brand: "Recipe", serving: "1 piece", kcal: 310, protein: 7, carbs: 58, fats: 6, verified: true },
  { id: "in88", name: "Mirchi Bajji", serving: "2 pieces", kcal: 240, protein: 4, carbs: 28, fats: 12 },
  { id: "in89", name: "Kanda Bhaji / Pyaz Pakora", serving: "100g", kcal: 290, protein: 5, carbs: 34, fats: 16, verified: true },
  { id: "in90", name: "Sambar", brand: "Recipe", serving: "1 bowl (200g)", kcal: 140, protein: 6, carbs: 24, fats: 3, verified: true },
  { id: "in91", name: "Rasam", brand: "Recipe", serving: "1 bowl (200g)", kcal: 90, protein: 2, carbs: 16, fats: 2, verified: true },
  { id: "in92", name: "Coconut Chutney", brand: "Recipe", serving: "2 tbsp (30g)", kcal: 110, protein: 1.5, carbs: 4, fats: 10, verified: true },
  { id: "in93", name: "Tomato Chutney", brand: "Recipe", serving: "2 tbsp (30g)", kcal: 40, protein: 1, carbs: 6, fats: 1.5, verified: true }
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

export const WEIGHT_HISTORY: { day: string; weight: number }[] = [];

export function getWeightHistory() {
  if (typeof window === "undefined") return [];
  try {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    const userKey = currentUser.email ? `pulsepeak_weight_${currentUser.email}` : "pulsepeak_weight_history";
    const raw = localStorage.getItem(userKey);
    if (raw) return JSON.parse(raw);
    // If no history exists, initialize with their current profile weight
    if (currentUser.profile?.weightKg) {
      const todayStr = new Date().toLocaleDateString("en-US", { weekday: "short" });
      const initial = [{ day: todayStr, weight: currentUser.profile.weightKg }];
      localStorage.setItem(userKey, JSON.stringify(initial));
      return initial;
    }
  } catch {}
  return [];
}

export function saveWeightHistory(newWeight: number) {
  if (typeof window === "undefined") return;
  try {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    const userKey = currentUser.email ? `pulsepeak_weight_${currentUser.email}` : "pulsepeak_weight_history";
    let current = getWeightHistory();
    const todayStr = new Date().toLocaleDateString("en-US", { weekday: "short" });
    if (current.length === 0) {
      current = [{ day: todayStr, weight: newWeight }];
    } else if (current[current.length - 1].day === todayStr) {
      current[current.length - 1].weight = newWeight;
    } else {
      current.push({ day: todayStr, weight: newWeight });
    }
    localStorage.setItem(userKey, JSON.stringify(current));
  } catch {}
}

export const CALORIE_HISTORY: { day: string; eaten: number; burned: number }[] = [];

export function getCalorieHistory(currentEaten?: number, currentBurned?: number) {
  if (typeof window === "undefined") return [];
  try {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    const userKey = currentUser.email ? `pulsepeak_calorie_${currentUser.email}` : "pulsepeak_calorie_history";
    const raw = localStorage.getItem(userKey);
    let history = raw ? JSON.parse(raw) : [];
    const todayStr = new Date().toLocaleDateString("en-US", { weekday: "short" });
    if (currentEaten !== undefined && currentBurned !== undefined) {
      if (history.length === 0) {
        history = [{ day: todayStr, eaten: currentEaten, burned: currentBurned }];
      } else if (history[history.length - 1].day === todayStr) {
        history[history.length - 1] = { day: todayStr, eaten: currentEaten, burned: currentBurned };
      } else { history.push({ day: todayStr, eaten: currentEaten, burned: currentBurned }); }
      localStorage.setItem(userKey, JSON.stringify(history));
    }
    return history;
  } catch {}
  return [];
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
