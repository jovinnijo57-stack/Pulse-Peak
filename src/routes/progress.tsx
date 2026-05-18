import { createFileRoute } from "@tanstack/react-router";
import { PhoneShell, ScreenHeader } from "@/components/PhoneShell";
import { CALORIE_HISTORY, WEIGHT_HISTORY } from "@/lib/mock-data";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, BarChart, Bar, CartesianGrid } from "recharts";

export const Route = createFileRoute("/progress")({
  head: () => ({ meta: [{ title: "Progress — FitCal AI" }] }),
  component: Progress,
});

function Progress() {
  return (
    <PhoneShell>
      <ScreenHeader title="Progress" subtitle="Weekly & monthly insights" />

      <div className="mx-5 grid grid-cols-3 gap-3">
        {[
          { l: "Avg kcal", v: "2,065" },
          { l: "Streak", v: "12 days" },
          { l: "Lost", v: "-1.1 kg" },
        ].map((s) => (
          <div key={s.l} className="rounded-2xl border border-border bg-gradient-card p-3 shadow-card">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</p>
            <p className="mt-1 font-display text-xl font-bold">{s.v}</p>
          </div>
        ))}
      </div>

      <Card title="Weight trend" sub="Last 7 days">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={WEIGHT_HISTORY} margin={{ left: -10, right: 8, top: 8, bottom: 0 }}>
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.5} />
                <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" axisLine={false} tickLine={false} fontSize={10} tick={{ fill: "var(--color-muted-foreground)" }} />
            <YAxis domain={["dataMin - 0.5", "dataMax + 0.5"]} axisLine={false} tickLine={false} fontSize={10} tick={{ fill: "var(--color-muted-foreground)" }} />
            <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
            <Area type="monotone" dataKey="weight" stroke="var(--color-primary)" strokeWidth={3} fill="url(#g1)" />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      <Card title="Calories in vs out" sub="Weekly">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={CALORIE_HISTORY} margin={{ left: -10, right: 8, top: 8, bottom: 0 }}>
            <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" axisLine={false} tickLine={false} fontSize={10} tick={{ fill: "var(--color-muted-foreground)" }} />
            <YAxis axisLine={false} tickLine={false} fontSize={10} tick={{ fill: "var(--color-muted-foreground)" }} />
            <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
            <Bar dataKey="eaten" fill="var(--color-primary)" radius={[6, 6, 0, 0]} />
            <Bar dataKey="burned" fill="var(--color-gold)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </PhoneShell>
  );
}

function Card({ title, sub, children }: { title: string; sub: string; children: React.ReactNode }) {
  return (
    <div className="mx-5 mt-4 rounded-3xl border border-border bg-gradient-card p-5 shadow-card">
      <div className="mb-3 flex items-baseline justify-between">
        <p className="font-display font-semibold">{title}</p>
        <span className="text-xs text-muted-foreground">{sub}</span>
      </div>
      <div className="h-44">{children}</div>
    </div>
  );
}
