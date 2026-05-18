import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PhoneShell, ScreenHeader } from "@/components/PhoneShell";
import { EXERCISES } from "@/lib/mock-data";
import { useStore } from "@/lib/store";
import { Trash2, Flame, Clock, Footprints } from "lucide-react";

export const Route = createFileRoute("/exercise")({
  head: () => ({ meta: [{ title: "Workouts — PulsePeak" }] }),
  component: ExercisePage,
});

function ExercisePage() {
  const { state, addExercise, removeExercise } = useStore();
  const [selected, setSelected] = useState<typeof EXERCISES[number] | null>(null);
  const [mins, setMins] = useState(30);

  const totalBurned = state.exercises.reduce((a, e) => a + e.kcal, 0);

  return (
    <PhoneShell>
      <ScreenHeader title="Workouts" subtitle="Move daily, win weekly." />

      <div className="mx-5 grid grid-cols-3 gap-3">
        <Stat icon={<Flame className="h-4 w-4" />} label="Burned" value={`${totalBurned}`} sub="kcal" />
        <Stat icon={<Clock className="h-4 w-4" />} label="Active" value={`${state.exercises.reduce((a, e) => a + e.minutes, 0)}`} sub="min" />
        <Stat icon={<Footprints className="h-4 w-4" />} label="Steps" value="8,420" sub="today" />
      </div>

      <div className="mx-5 mt-5">
        <h2 className="mb-2 font-display text-base font-semibold">Quick add</h2>
        <div className="grid grid-cols-4 gap-2">
          {EXERCISES.map((e) => (
            <button
              key={e.id}
              onClick={() => setSelected(e)}
              className="flex flex-col items-center gap-1 rounded-2xl border border-border bg-card p-3 text-center transition active:scale-95"
            >
              <span className="text-xl">{e.icon}</span>
              <span className="text-[10px] font-medium leading-tight">{e.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mx-5 mt-6">
        <h2 className="mb-2 font-display text-base font-semibold">Today's log</h2>
        <ul className="space-y-2">
          {state.exercises.map((e) => (
            <li key={e.id} className="flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-muted text-lg">{e.exercise.icon}</span>
                <div>
                  <p className="text-sm font-semibold">{e.exercise.name}</p>
                  <p className="text-xs text-muted-foreground">{e.minutes} min · {e.kcal} kcal</p>
                </div>
              </div>
              <button onClick={() => removeExercise(e.id)} className="text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
            </li>
          ))}
          {state.exercises.length === 0 && (
            <p className="rounded-2xl border border-dashed border-border bg-card py-8 text-center text-sm text-muted-foreground">No workouts yet today.</p>
          )}
        </ul>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-end bg-foreground/40 backdrop-blur-sm" onClick={() => setSelected(null)}>
          <div onClick={(e) => e.stopPropagation()} className="mx-auto w-full max-w-md rounded-t-3xl bg-card p-5 shadow-glow">
            <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-muted" />
            <p className="font-display text-lg font-bold">{selected.icon} {selected.name}</p>
            <p className="text-xs text-muted-foreground">~{selected.kcalPerMin} kcal/min</p>
            <div className="my-5">
              <input type="range" min={5} max={120} value={mins} onChange={(e) => setMins(+e.target.value)} className="w-full accent-[oklch(0.42_0.09_165)]" />
              <div className="mt-2 flex items-baseline justify-between">
                <span className="text-sm text-muted-foreground">Duration</span>
                <span className="font-display text-2xl font-bold">{mins} <span className="text-sm font-medium text-muted-foreground">min · {Math.round(selected.kcalPerMin * mins)} kcal</span></span>
              </div>
            </div>
            <button
              onClick={() => { addExercise(selected, mins); setSelected(null); }}
              className="w-full rounded-2xl bg-gradient-hero py-4 font-display font-semibold text-primary-foreground shadow-glow"
            >
              Log workout
            </button>
          </div>
        </div>
      )}
    </PhoneShell>
  );
}

function Stat({ icon, label, value, sub }: { icon: React.ReactNode; label: string; value: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-border bg-gradient-card p-3 shadow-card">
      <div className="flex items-center gap-1.5 text-muted-foreground">{icon}<span className="text-[10px] uppercase tracking-widest">{label}</span></div>
      <p className="mt-1 font-display text-xl font-bold">{value}<span className="ml-0.5 text-xs font-medium text-muted-foreground">{sub}</span></p>
    </div>
  );
}
