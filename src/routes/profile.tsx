import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { PhoneShell, ScreenHeader } from "@/components/PhoneShell";
import { useStore } from "@/lib/store";
import { ChevronRight, Moon, Sun, Bell, LogOut, Crown, Shield, BarChart3, Sparkles } from "lucide-react";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile — FitCal AI" }] }),
  component: Profile,
});

function Profile() {
  const { state, toggleTheme } = useStore();
  const nav = useNavigate();
  const { profile } = state;

  return (
    <PhoneShell>
      <ScreenHeader title="Profile" subtitle="Settings & preferences" />

      <div className="mx-5 flex items-center gap-4 rounded-3xl bg-gradient-hero p-5 text-primary-foreground shadow-glow">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white/15 font-display text-2xl font-bold backdrop-blur">
          {profile.name.charAt(0)}
        </div>
        <div className="flex-1">
          <p className="font-display text-lg font-bold">{profile.name}</p>
          <p className="text-xs text-primary-foreground/70 capitalize">{profile.goal} weight · {profile.weightKg}kg · {profile.heightCm}cm</p>
        </div>
      </div>

      <Link to="/onboarding" className="mx-5 mt-4 flex items-center gap-3 rounded-3xl bg-gradient-gold p-4 text-gold-foreground shadow-card">
        <Crown className="h-5 w-5" />
        <div className="flex-1">
          <p className="font-display font-bold">Upgrade to Premium</p>
          <p className="text-xs opacity-80">AI coaching, advanced analytics & more</p>
        </div>
        <ChevronRight className="h-4 w-4" />
      </Link>

      <div className="mx-5 mt-4 grid grid-cols-3 gap-3 text-center">
        {[
          { l: "Calories", v: profile.calorieGoal },
          { l: "Protein", v: `${profile.proteinGoal}g` },
          { l: "Water", v: `${profile.waterGoalMl / 1000}L` },
        ].map((s) => (
          <div key={s.l} className="rounded-2xl border border-border bg-gradient-card p-3 shadow-card">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</p>
            <p className="mt-1 font-display text-lg font-bold">{s.v}</p>
          </div>
        ))}
      </div>

      <div className="mx-5 mt-4 overflow-hidden rounded-3xl border border-border bg-card shadow-card">
        <Row icon={<Sparkles className="h-4 w-4" />} label="AI nutrition coach" to="/ai" />
        <Row icon={<BarChart3 className="h-4 w-4" />} label="Progress & reports" to="/progress" />
        <Row icon={<Bell className="h-4 w-4" />} label="Reminders" />
        <Row icon={state.theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />} label={`Switch to ${state.theme === "dark" ? "light" : "dark"} mode`} onClick={toggleTheme} />
        <Row icon={<Shield className="h-4 w-4" />} label="Admin dashboard" to="/admin" />
      </div>

      <button onClick={() => nav({ to: "/" })} className="mx-5 mt-4 flex w-[calc(100%-2.5rem)] items-center justify-center gap-2 rounded-2xl border border-destructive/30 bg-destructive/10 py-3.5 text-sm font-semibold text-destructive">
        <LogOut className="h-4 w-4" /> Sign out
      </button>
    </PhoneShell>
  );
}

function Row({ icon, label, to, onClick }: { icon: React.ReactNode; label: string; to?: string; onClick?: () => void }) {
  const inner = (
    <div className="flex items-center gap-3 px-4 py-3.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-muted text-primary">{icon}</span>
      <span className="flex-1 text-sm font-medium">{label}</span>
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
    </div>
  );
  if (to) return <Link to={to as never} className="block border-b border-border last:border-0">{inner}</Link>;
  return <button onClick={onClick} className="block w-full border-b border-border text-left last:border-0">{inner}</button>;
}
