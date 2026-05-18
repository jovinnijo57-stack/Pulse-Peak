import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Flame, Apple } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FitCal AI — Your Premium Nutrition Coach" },
      { name: "description", content: "Track calories, macros, workouts and let AI plan your meals." },
    ],
  }),
  component: Splash,
});

function Splash() {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
      <div className="absolute bottom-20 -right-20 h-80 w-80 rounded-full bg-primary-glow/40 blur-3xl" />

      <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col px-6 pb-10 pt-16">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-gold text-gold-foreground shadow-glow">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">FitCal AI</span>
        </motion.div>

        <div className="mt-16 flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-balance"
          >
            Eat smarter.
            <br />
            <span className="bg-gradient-to-r from-gold to-primary-foreground bg-clip-text text-transparent">Train sharper.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
            className="mt-5 max-w-xs text-base text-primary-foreground/80"
          >
            A premium calorie & fitness companion powered by AI nutrition coaching.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-10 grid grid-cols-3 gap-3">
            {[
              { Icon: Flame, label: "Smart calorie engine" },
              { Icon: Apple, label: "AI meal scoring" },
              { Icon: Sparkles, label: "Weekly insights" },
            ].map(({ Icon, label }) => (
              <div key={label} className="rounded-2xl border border-white/15 bg-white/5 p-3 backdrop-blur-md">
                <Icon className="mb-2 h-5 w-5 text-gold" />
                <p className="text-[11px] leading-tight text-primary-foreground/80">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="space-y-3">
          <Link
            to="/signup"
            className="block w-full rounded-2xl bg-gradient-gold py-4 text-center font-display text-base font-semibold text-gold-foreground shadow-glow transition active:scale-[0.98]"
          >
            Get started — it's free
          </Link>
          <Link to="/login" className="block w-full rounded-2xl border border-white/20 bg-white/5 py-4 text-center font-display text-base font-medium backdrop-blur-md">
            I already have an account
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
