// Lightweight global store using React context + localStorage persistence.
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { createElement } from "react";
import type { Food, Exercise } from "./mock-data";

export type MealType = "Breakfast" | "Lunch" | "Dinner" | "Snacks";
export type MealEntry = { id: string; meal: MealType; food: Food; servings: number };
export type ExerciseEntry = { id: string; exercise: Exercise; minutes: number; kcal: number };

export type Profile = {
  name: string;
  age: number;
  gender: "male" | "female";
  heightCm: number;
  weightKg: number;
  goal: "lose" | "maintain" | "gain";
  activity: number; // 1.2-1.9
  calorieGoal: number;
  proteinGoal: number;
  carbsGoal: number;
  fatsGoal: number;
  waterGoalMl: number;
};

type State = {
  profile: Profile;
  meals: MealEntry[];
  exercises: ExerciseEntry[];
  waterMl: number;
  theme: "light" | "dark";
};

const defaultState: State = {
  profile: {
    name: "Alex",
    age: 28,
    gender: "male",
    heightCm: 178,
    weightKg: 77,
    goal: "lose",
    activity: 1.55,
    calorieGoal: 2100,
    proteinGoal: 150,
    carbsGoal: 220,
    fatsGoal: 70,
    waterGoalMl: 2500,
  },
  meals: [],
  exercises: [],
  waterMl: 0,
  theme: "light",
};

type Ctx = {
  state: State;
  setProfile: (p: Partial<Profile>) => void;
  addMeal: (meal: MealType, food: Food, servings: number) => void;
  removeMeal: (id: string) => void;
  addExercise: (ex: Exercise, minutes: number) => void;
  removeExercise: (id: string) => void;
  addWater: (ml: number) => void;
  resetWater: () => void;
  toggleTheme: () => void;
};

const StoreCtx = createContext<Ctx | null>(null);

const KEY = "fitcal-ai-state-v1";

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<State>(defaultState);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(KEY) : null;
      if (raw) setState({ ...defaultState, ...JSON.parse(raw) });
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch {}
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", state.theme === "dark");
    }
  }, [state, ready]);

  const api: Ctx = {
    state,
    setProfile: (p) => setState((s) => ({ ...s, profile: { ...s.profile, ...p } })),
    addMeal: (meal, food, servings) =>
      setState((s) => ({ ...s, meals: [...s.meals, { id: crypto.randomUUID(), meal, food, servings }] })),
    removeMeal: (id) => setState((s) => ({ ...s, meals: s.meals.filter((m) => m.id !== id) })),
    addExercise: (exercise, minutes) =>
      setState((s) => ({
        ...s,
        exercises: [...s.exercises, { id: crypto.randomUUID(), exercise, minutes, kcal: Math.round(exercise.kcalPerMin * minutes) }],
      })),
    removeExercise: (id) => setState((s) => ({ ...s, exercises: s.exercises.filter((e) => e.id !== id) })),
    addWater: (ml) => setState((s) => ({ ...s, waterMl: Math.max(0, s.waterMl + ml) })),
    resetWater: () => setState((s) => ({ ...s, waterMl: 0 })),
    toggleTheme: () => setState((s) => ({ ...s, theme: s.theme === "dark" ? "light" : "dark" })),
  };

  return createElement(StoreCtx.Provider, { value: api }, children);
}

export function useStore() {
  const ctx = useContext(StoreCtx);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}

export function useTotals() {
  const { state } = useStore();
  const eaten = state.meals.reduce(
    (acc, m) => {
      acc.kcal += m.food.kcal * m.servings;
      acc.protein += m.food.protein * m.servings;
      acc.carbs += m.food.carbs * m.servings;
      acc.fats += m.food.fats * m.servings;
      return acc;
    },
    { kcal: 0, protein: 0, carbs: 0, fats: 0 },
  );
  const burned = state.exercises.reduce((a, e) => a + e.kcal, 0);
  return {
    eaten: { kcal: Math.round(eaten.kcal), protein: Math.round(eaten.protein), carbs: Math.round(eaten.carbs), fats: Math.round(eaten.fats) },
    burned,
    net: Math.round(eaten.kcal - burned),
    remaining: Math.round(state.profile.calorieGoal - eaten.kcal + burned),
  };
}
