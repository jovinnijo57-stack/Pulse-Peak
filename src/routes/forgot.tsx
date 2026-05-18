import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/forgot")({ component: Forgot });

function Forgot() {
  return (
    <div className="min-h-dvh bg-background">
      <div className="mx-auto w-full max-w-md px-6 pt-6">
        <Link to="/login" className="inline-flex items-center gap-1 text-sm text-muted-foreground"><ArrowLeft className="h-4 w-4" /> Back</Link>
        <h1 className="mt-10 font-display text-3xl font-bold tracking-tight">Reset password</h1>
        <p className="mt-1 text-sm text-muted-foreground">We'll send you a reset link.</p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-3">
          <input type="email" placeholder="Email" className="w-full rounded-2xl border border-border bg-card px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-ring" />
          <button className="w-full rounded-2xl bg-gradient-hero py-4 font-display font-semibold text-primary-foreground shadow-glow">Send reset link</button>
        </form>
      </div>
    </div>
  );
}
