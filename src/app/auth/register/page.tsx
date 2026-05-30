"use client";

import { useState } from "react";
import { useAuthActions } from "@convex-dev/auth/react";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  UserPlus,
  Mail,
  Lock,
  User,
  AlertCircle,
  CheckCircle,
  Shield,
} from "lucide-react";

export default function RegisterPage() {
  const { signIn } = useAuthActions();
  const createWriter = useMutation(api.writers.create);
  const router = useRouter();

  const [step, setStep] = useState<"form" | "age-verify">("age-verify");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAgeVerify = () => {
    setStep("form");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setLoading(true);

    try {
      // Register with Convex Auth
      await signIn("password", {
        email,
        password,
        flow: "signUp",
      });

      // Create writer profile
      await createWriter({
        displayName,
        email,
      });

      router.push("/dashboard");
    } catch (err: any) {
      setError(
        err?.message?.includes("already exists")
          ? "An account with this email already exists."
          : "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // Age verification gate
  if (step === "age-verify") {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="card p-8 text-center">
            <Shield className="w-12 h-12 text-brand-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-white mb-3">
              Age Verification
            </h1>
            <p className="text-surface-400 text-sm mb-6 leading-relaxed">
              ConnectBeyond Bars requires all writers to be 18 years of age or
              older. By proceeding, you confirm that you are at least 18 years
              old.
            </p>

            <div className="space-y-3">
              <button
                onClick={handleAgeVerify}
                className="btn-primary w-full justify-center"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                I am 18 or older — Continue
              </button>
              <Link
                href="/"
                className="btn-secondary w-full justify-center block"
              >
                Go Back
              </Link>
            </div>

            <p className="text-surface-500 text-xs mt-4">
              Strict no-minor policy. Violations result in account termination.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-brand-600 flex items-center justify-center mx-auto mb-4">
            <UserPlus className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Create Your Account
          </h1>
          <p className="text-surface-400 text-sm">
            Join ConnectBeyond Bars and start making a difference
          </p>
        </div>

        <div className="card p-8">
          {error && (
            <div className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
              <span className="text-red-400 text-sm">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-surface-300 text-sm font-medium mb-1.5">
                Display Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-surface-500" />
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Your name or pen name"
                  className="input-field pl-11"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-surface-300 text-sm font-medium mb-1.5">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-surface-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="input-field pl-11"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-surface-300 text-sm font-medium mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-surface-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 8 characters"
                  className="input-field pl-11"
                  required
                  minLength={8}
                />
              </div>
            </div>

            <div>
              <label className="block text-surface-300 text-sm font-medium mb-1.5">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-surface-500" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  className="input-field pl-11"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center py-3"
            >
              {loading ? "Creating account..." : "Create Free Account"}
            </button>
          </form>

          <div className="mt-4 p-3 rounded-lg bg-surface-800/40 text-center">
            <p className="text-surface-500 text-xs">
              Free accounts include: browse profiles, 2 letters/month, address
              privacy vault
            </p>
          </div>

          <div className="mt-6 text-center">
            <p className="text-surface-400 text-sm">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="text-brand-400 hover:text-brand-300 font-medium transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
