import { createFileRoute } from "@tanstack/react-router";
import { PhoneShell, ScreenHeader } from "@/components/PhoneShell";
import { Plus, Calendar, Heart } from "lucide-react";

export const Route = createFileRoute("/recipes")({
  head: () => ({ meta: [{ title: "Recipes & Planner — FitCal AI" }] }),
  component: Recipes,
});

const SAMPLE_RECIPES = [
  { name: "Protein pancakes", kcal: 420, time: "15 min", tag: "Breakfast" },
  { name: "Mediterranean salad", kcal: 380, time: "10 min", tag: "Lunch" },
  { name: "Lean turkey chili", kcal: 540, time: "35 min", tag: "Dinner" },
  { name: "Overnight oats", kcal: 310, time: "5 min", tag: "Breakfast" },
];

const WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function Recipes() {
  return (
    <PhoneShell>
      <ScreenHeader title="Recipes" subtitle="Save favorites & plan your week" action={
        <button className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-hero text-primary-foreground shadow-glow"><Plus className="h-4 w-4" /></button>
      }/>

      <div className="mx-5 rounded-3xl border border-border bg-gradient-card p-4 shadow-card">
        <div className="mb-3 flex items-center gap-2">
          <Calendar className="h-4 w-4 text-primary" />
          <p className="font-display text-sm font-semibold">Weekly meal plan</p>
        </div>
        <div className="grid grid-cols-7 gap-1.5">
          {WEEK.map((d, i) => (
            <button key={d} className={`rounded-xl border py-2 text-center text-xs font-semibold ${i === 2 ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`}>
              {d}
            </button>
          ))}
        </div>
      </div>

      <h2 className="mx-5 mt-6 mb-2 font-display text-base font-semibold">Saved recipes</h2>
      <div className="mx-5 grid grid-cols-2 gap-3">
        {SAMPLE_RECIPES.map((r) => (
          <div key={r.name} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            <div className="flex h-24 items-center justify-center bg-gradient-hero text-3xl">
              {r.tag === "Breakfast" ? "🥞" : r.tag === "Lunch" ? "🥗" : "🍲"}
            </div>
            <div className="p-3">
              <div className="flex items-start justify-between">
                <p className="text-sm font-semibold leading-tight">{r.name}</p>
                <Heart className="h-3.5 w-3.5 text-destructive" fill="currentColor" />
              </div>
              <p className="mt-1 text-[11px] text-muted-foreground">{r.kcal} kcal · {r.time}</p>
            </div>
          </div>
        ))}
      </div>
    </PhoneShell>
  );
}
