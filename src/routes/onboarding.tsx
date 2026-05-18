import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useStore, type Profile } from "@/lib/store";
import { calcBMR, calcTDEE, goalAdjust } from "@/lib/mock-data";

export const Route = createFileRoute("/onboarding")({ component: Onboarding });

function Onboarding() {
  const { setProfile } = useStore();
  const nav = useNavigate();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Partial<Profile>>({
    gender: "male", age: 28, heightCm: 178, weightKg: 77, goal: "lose", activity: 1.55,
  });

  const totalSteps = 4;

  const finish = () => {
    const bmr = calcBMR(data.weightKg!, data.heightCm!, data.age!, data.gender!);
    const tdee = calcTDEE(bmr, data.activity!);
    const calorieGoal = goalAdjust(tdee, data.goal!);
    setProfile({
      ...data,
      calorieGoal,
      proteinGoal: Math.round((calorieGoal * 0.3) / 4),
      carbsGoal: Math.round((calorieGoal * 0.4) / 4),
      fatsGoal: Math.round((calorieGoal * 0.3) / 9),
    } as Profile);
    nav({ to: "/dashboard" });
  };

  return (
    <div className="min-h-dvh bg-background">
      <div className="mx-auto w-full max-w-md px-6 pt-8">
        <div className="flex gap-1.5">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-primary" : "bg-muted"}`} />
          ))}
        </div>

        <div className="mt-10">
          {step === 0 && (
            <Step title="What's your goal?" subtitle="We'll tailor your plan.">
              <div className="space-y-2">
                {([
                  { v: "lose", t: "Lose weight", d: "Calorie deficit & sustainable cut" },
                  { v: "maintain", t: "Maintain weight", d: "Stay where you are" },
                  { v: "gain", t: "Build muscle", d: "Lean surplus + protein focus" },
                ] as const).map((o) => (
                  <button
                    key={o.v}
                    onClick={() => setData({ ...data, goal: o.v })}
                    className={`w-full rounded-2xl border p-4 text-left transition ${data.goal === o.v ? "border-primary bg-primary/5 ring-2 ring-primary" : "border-border bg-card"}`}
                  >
                    <div className="font-display font-semibold">{o.t}</div>
                    <div className="text-xs text-muted-foreground">{o.d}</div>
                  </button>
                ))}
              </div>
            </Step>
          )}
          {step === 1 && (
            <Step title="Tell us about you" subtitle="Used for BMR calculations.">
              <div className="grid grid-cols-2 gap-2">
                {(["male", "female"] as const).map((g) => (
                  <button key={g} onClick={() => setData({ ...data, gender: g })}
                    className={`rounded-2xl border py-4 font-display font-medium capitalize ${data.gender === g ? "border-primary bg-primary/5 ring-2 ring-primary" : "border-border bg-card"}`}>
                    {g}
                  </button>
                ))}
              </div>
              <NumberField label="Age" value={data.age!} onChange={(v) => setData({ ...data, age: v })} suffix="yrs" />
            </Step>
          )}
          {step === 2 && (
            <Step title="Body metrics" subtitle="Be honest — we won't judge.">
              <NumberField label="Height" value={data.heightCm!} onChange={(v) => setData({ ...data, heightCm: v })} suffix="cm" />
              <NumberField label="Weight" value={data.weightKg!} onChange={(v) => setData({ ...data, weightKg: v })} suffix="kg" />
            </Step>
          )}
          {step === 3 && (
            <Step title="Activity level" subtitle="How active are you weekly?">
              <div className="space-y-2">
                {([
                  { v: 1.2, t: "Sedentary", d: "Desk job, little exercise" },
                  { v: 1.375, t: "Lightly active", d: "1-3 workouts / week" },
                  { v: 1.55, t: "Moderately active", d: "3-5 workouts / week" },
                  { v: 1.725, t: "Very active", d: "6-7 workouts / week" },
                ] as const).map((o) => (
                  <button key={o.v} onClick={() => setData({ ...data, activity: o.v })}
                    className={`w-full rounded-2xl border p-4 text-left ${data.activity === o.v ? "border-primary bg-primary/5 ring-2 ring-primary" : "border-border bg-card"}`}>
                    <div className="font-display font-semibold">{o.t}</div>
                    <div className="text-xs text-muted-foreground">{o.d}</div>
                  </button>
                ))}
              </div>
            </Step>
          )}
        </div>

        <div className="fixed inset-x-0 bottom-0 mx-auto flex max-w-md gap-3 px-6 pb-8 pt-4">
          {step > 0 && (
            <button onClick={() => setStep(step - 1)} className="flex-1 rounded-2xl border border-border bg-card py-4 font-display font-medium">
              Back
            </button>
          )}
          <button
            onClick={() => (step === totalSteps - 1 ? finish() : setStep(step + 1))}
            className="flex-[2] rounded-2xl bg-gradient-hero py-4 font-display font-semibold text-primary-foreground shadow-glow"
          >
            {step === totalSteps - 1 ? "Build my plan" : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}

function Step({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div>
      <h1 className="font-display text-3xl font-bold tracking-tight">{title}</h1>
      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      <div className="mt-6 space-y-3">{children}</div>
    </div>
  );
}

function NumberField({ label, value, onChange, suffix }: { label: string; value: number; onChange: (v: number) => void; suffix: string }) {
  return (
    <label className="flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-3.5">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="flex items-baseline gap-1">
        <input type="number" value={value} onChange={(e) => onChange(+e.target.value)} className="w-20 bg-transparent text-right font-display text-xl font-semibold outline-none" />
        <span className="text-sm text-muted-foreground">{suffix}</span>
      </span>
    </label>
  );
}
