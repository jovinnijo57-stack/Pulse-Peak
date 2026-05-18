import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Check, X } from "lucide-react";
import { clsx } from "clsx";

export const Route = createFileRoute("/signup")({ component: Signup });

async function hashPassword(password: string) {
  const msgUint8 = new TextEncoder().encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function Signup() {
  const nav = useNavigate();
  const [step, setStep] = useState<"form" | "otp">("form");
  const [countryCode, setCountryCode] = useState("+91");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", password: "", referral: "" });
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const pwd = formData.password;
  const pwdValidations = {
    length: pwd.length >= 8,
    capital: /[A-Z]/.test(pwd),
    number: /[0-9]/.test(pwd),
    special: /[^A-Za-z0-9]/.test(pwd)
  };
  const isPasswordValid = Object.values(pwdValidations).every(Boolean);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password || !formData.phone) {
      setError("Please fill all required fields.");
      return;
    }
    
    if (!formData.email.toLowerCase().endsWith("@gmail.com")) {
      setError("Only @gmail.com emails are allowed.");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }

    if (!isPasswordValid) {
      setError("Please ensure your password meets all strength requirements.");
      return;
    }

    setError("");
    // Move to OTP step
    setStep("otp");
    console.log("OTP sent to:", formData.email, "Use 123456 to verify.");
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === "123456") {
      // Hash password
      const hashedPassword = await hashPassword(formData.password);
      
      // Save to database (localStorage)
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const fullPhone = `${countryCode} ${formData.phone}`;
      const userToSave = { ...formData, phone: fullPhone, password: hashedPassword };
      users.push(userToSave);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(userToSave));
      nav({ to: "/onboarding" });
    } else {
      setError("Invalid OTP. Try 123456.");
    }
  };

  const handleGoogleSignup = () => {
    const googleUser = { name: "Google User", email: formData.email.endsWith("@gmail.com") ? formData.email : "google@gmail.com", phone: "", password: "", referral: "" };
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    // Ensure we only save if not already exists (just to be safe)
    if (!users.some((u: any) => u.email === googleUser.email)) {
      users.push(googleUser);
      localStorage.setItem("users", JSON.stringify(users));
    }
    localStorage.setItem("currentUser", JSON.stringify(googleUser));
    nav({ to: "/onboarding" });
  };

  return (
    <div className="min-h-dvh bg-background">
      <div className="mx-auto w-full max-w-md px-6 pt-6 pb-12">
        <button onClick={() => step === "otp" ? setStep("form") : window.history.back()} className="inline-flex items-center gap-1 text-sm text-muted-foreground">
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        <h1 className="mt-10 font-display text-3xl font-bold tracking-tight">
          {step === "otp" ? "Verify your email" : "Create your account"}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {step === "otp" ? `We sent a code to ${formData.email}` : "Start your transformation today."}
        </p>

        {error && <p className="mt-4 text-sm font-semibold text-destructive">{error}</p>}

        {step === "form" ? (
          <>
            <form onSubmit={handleRegister} className="mt-6 space-y-3">
              <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Full name" className="w-full rounded-2xl border border-border bg-card px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-ring" />
              <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email (e.g., you@gmail.com)" className="w-full rounded-2xl border border-border bg-card px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-ring" />
              
              <div className="flex gap-2">
                <select 
                  value={countryCode} 
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="w-24 rounded-2xl border border-border bg-card px-3 py-3.5 text-sm outline-none focus:ring-2 focus:ring-ring appearance-none"
                >
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+61">🇦🇺 +61</option>
                </select>
                <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })} placeholder="Phone number" className="flex-1 rounded-2xl border border-border bg-card px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-ring" />
              </div>

              <div className="space-y-2">
                <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="Password" className="w-full rounded-2xl border border-border bg-card px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-ring" />
                
                {/* Password Strength Indicators */}
                <div className="grid grid-cols-2 gap-2 px-1 text-xs">
                  <ValidationItem isValid={pwdValidations.length} label="Min 8 characters" />
                  <ValidationItem isValid={pwdValidations.capital} label="1 capital letter" />
                  <ValidationItem isValid={pwdValidations.number} label="1 number" />
                  <ValidationItem isValid={pwdValidations.special} label="1 special character" />
                </div>
              </div>

              <input value={formData.referral} onChange={(e) => setFormData({ ...formData, referral: e.target.value })} placeholder="Referral Code (Optional)" className="w-full rounded-2xl border border-border bg-card px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-ring" />
              
              <button 
                disabled={!isPasswordValid || !formData.name || !formData.email || formData.phone.length < 10}
                className="mt-2 w-full rounded-2xl bg-gradient-hero py-4 font-display text-base font-semibold text-primary-foreground shadow-glow transition active:scale-[0.98] disabled:opacity-50 disabled:grayscale"
              >
                Create account
              </button>
            </form>

            <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
              <div className="h-px flex-1 bg-border" /> OR <div className="h-px flex-1 bg-border" />
            </div>
            <button
              onClick={handleGoogleSignup}
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-border bg-card py-3.5 font-display font-medium transition active:scale-[0.98]"
            >
              <GoogleIcon /> Continue with Google
            </button>
          </>
        ) : (
          <form onSubmit={handleVerifyOtp} className="mt-8 space-y-3">
            <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter 6-digit OTP (123456)" className="w-full rounded-2xl border border-border bg-card px-4 py-3.5 text-center tracking-widest text-lg outline-none focus:ring-2 focus:ring-ring" maxLength={6} />
            <button className="mt-2 w-full rounded-2xl bg-gradient-hero py-4 font-display text-base font-semibold text-primary-foreground shadow-glow transition active:scale-[0.98]">
              Verify and Continue
            </button>
          </form>
        )}

        {step === "form" && (
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Already have an account? <Link to="/login" className="font-semibold text-primary">Sign in</Link>
          </p>
        )}
      </div>
    </div>
  );
}

function ValidationItem({ isValid, label }: { isValid: boolean, label: string }) {
  return (
    <div className={clsx("flex items-center gap-1.5 transition-colors", isValid ? "text-primary font-medium" : "text-muted-foreground")}>
      {isValid ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5 opacity-50" />}
      <span>{label}</span>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.5 29.5 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5 43.5 34.8 43.5 24c0-1.2-.1-2.3-.3-3.5z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.5 29.5 4.5 24 4.5 16.3 4.5 9.6 8.9 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 43.5c5.4 0 10.3-2 14-5.3l-6.5-5.5C29.6 34.4 27 35.5 24 35.5c-5.3 0-9.7-3.4-11.3-8l-6.5 5C9.5 39 16.2 43.5 24 43.5z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.3 5.6l6.5 5.5C41.6 36 43.5 30.5 43.5 24c0-1.2-.1-2.3-.3-3.5z"/>
    </svg>
  );
}
