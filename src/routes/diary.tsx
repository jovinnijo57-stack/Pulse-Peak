import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneShell, ScreenHeader } from "@/components/PhoneShell";
import { useStore, useTotals, type MealType } from "@/lib/store";
import { ChevronRight, Plus, Trash2 } from "lucide-react";

export const Route = createFileRoute("/diary")({
  head: () => ({ meta: [{ title: "Food Diary — FitCal AI" }] }),
  component: Diary,
});

const MEALS: MealType[] = ["Breakfast", "Lunch", "Dinner", "Snacks"];
const ICONS: Record<MealType, string> = { Breakfast: "🥣", Lunch: "🥗", Dinner: "🍽️", Snacks: "🍎" };

function Diary() {
  const { state, removeMeal } = useStore();
  const totals = useTotals();

  return (
    <PhoneShell>
      <ScreenHeader title="Food Diary" subtitle="Today" />

      <div className="mx-5 rounded-3xl bg-gradient-hero p-5 text-primary-foreground shadow-glow">
        <p className="text-xs uppercase tracking-widest text-primary-foreground/70">Daily total</p>
        <p className="mt-1 font-display text-4xl font-bold">{totals.eaten.kcal}<span className="ml-1 text-base font-medium text-primary-foreground/70">/ {state.profile.calorieGoal} kcal</span></p>
        <div className="mt-3 grid grid-cols-3 gap-3 text-xs">
          <Mini label="Protein" v={totals.eaten.protein} />
          <Mini label="Carbs" v={totals.eaten.carbs} />
          <Mini label="Fats" v={totals.eaten.fats} />
        </div>
      </div>

      <div className="mt-4 space-y-3 px-5">
        {MEALS.map((meal) => {
          const items = state.meals.filter((m) => m.meal === meal);
          const kcal = items.reduce((a, m) => a + m.food.kcal * m.servings, 0);
          return (
            <section key={meal} className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-muted text-xl">{ICONS[meal]}</span>
                  <div>
                    <p className="font-display font-semibold">{meal}</p>
                    <p className="text-xs text-muted-foreground">{Math.round(kcal)} kcal</p>
                  </div>
                </div>
                <Link to="/add" search={{ meal } as never} className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Plus className="h-4 w-4" />
                </Link>
              </div>
              {items.length > 0 && (
                <ul className="divide-y divide-border border-t border-border">
                  {items.map((m) => (
                    <li key={m.id} className="flex items-center justify-between px-4 py-2.5">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">{m.food.name}</p>
                        <p className="text-xs text-muted-foreground">{m.servings} × {m.food.serving} · {Math.round(m.food.kcal * m.servings)} kcal</p>
                      </div>
                      <button onClick={() => removeMeal(m.id)} className="text-muted-foreground hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}

        <Link to="/recipes" className="flex items-center justify-between rounded-3xl border border-border bg-card px-4 py-4 shadow-card">
          <div>
            <p className="font-display font-semibold">Recipes & meal planner</p>
            <p className="text-xs text-muted-foreground">Build, save and plan your week</p>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
      </div>
    </PhoneShell>
  );
}

function Mini({ label, v }: { label: string; v: number }) {
  return (
    <div className="rounded-2xl bg-white/10 px-3 py-2 backdrop-blur">
      <p className="text-[10px] uppercase tracking-widest text-primary-foreground/70">{label}</p>
      <p className="mt-0.5 font-display text-base font-semibold">{Math.round(v)}g</p>
    </div>
  );
}
