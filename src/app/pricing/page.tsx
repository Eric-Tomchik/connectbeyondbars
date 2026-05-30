"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Link from "next/link";
import {
  CheckCircle,
  Crown,
  Shield,
  Zap,
  Heart,
  ArrowRight,
} from "lucide-react";

export default function PricingPage() {
  const writer = useQuery(api.writers.me);

  const handleUpgrade = async () => {
    // Future: Stripe checkout redirect
    // For now, link to registration if not logged in
    if (!writer) {
      window.location.href = "/auth/register";
      return;
    }
    // TODO: Create Stripe checkout session
    alert("Stripe checkout coming soon! Premium features will be available at launch.");
  };

  return (
    <div className="min-h-screen py-20">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-600/10 border border-brand-600/20 mb-6">
            <Crown className="w-4 h-4 text-brand-400" />
            <span className="text-brand-400 text-sm font-medium">
              Simple, transparent pricing
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Choose Your <span className="gradient-text">Plan</span>
          </h1>
          <p className="text-surface-400 text-lg max-w-xl mx-auto">
            Start for free. Upgrade to Premium when you&apos;re ready for
            unlimited connections.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Free */}
          <div className="card p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-white mb-2">Free</h2>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl font-extrabold text-white">$0</span>
              <span className="text-surface-500">/month</span>
            </div>
            <p className="text-surface-400 text-sm mb-8">
              Perfect for getting started
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Browse all verified profiles",
                "Send up to 2 letters per month",
                "Address Privacy Vault protection",
                "Basic search & filters",
                "Save up to 5 profiles",
                "Email support",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-surface-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {writer ? (
              writer.subscriptionTier === "free" ? (
                <div className="btn-secondary w-full justify-center opacity-75 cursor-default">
                  Current Plan
                </div>
              ) : (
                <div className="text-center text-surface-500 text-sm">
                  You&apos;re on Premium
                </div>
              )
            ) : (
              <Link href="/auth/register" className="btn-secondary w-full justify-center">
                Sign Up Free
              </Link>
            )}
          </div>

          {/* Premium */}
          <div className="card p-8 sm:p-10 border-brand-600/30 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-brand-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg shadow-brand-600/30">
                RECOMMENDED
              </span>
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">Premium</h2>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl font-extrabold text-white">$9.99</span>
              <span className="text-surface-500">/month</span>
            </div>
            <p className="text-surface-400 text-sm mb-8">
              For dedicated pen pals
            </p>

            <ul className="space-y-4 mb-10">
              {[
                { text: "Everything in Free", highlight: false },
                { text: "Unlimited letters per month", highlight: true },
                { text: "Advanced compatibility matching", highlight: true },
                { text: "Priority letter processing (24hr)", highlight: true },
                { text: "Full impact dashboard & stats", highlight: true },
                { text: "Save unlimited profiles", highlight: true },
                { text: "Ad-free experience", highlight: false },
                { text: "Priority support", highlight: false },
              ].map(({ text, highlight }) => (
                <li key={text} className="flex items-start gap-3">
                  <CheckCircle
                    className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      highlight ? "text-brand-400" : "text-green-400"
                    }`}
                  />
                  <span className={`text-sm ${highlight ? "text-white font-medium" : "text-surface-300"}`}>
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            {writer?.subscriptionTier === "premium" ? (
              <div className="btn-primary w-full justify-center opacity-75 cursor-default">
                <Crown className="w-5 h-5 mr-2" />
                Current Plan
              </div>
            ) : (
              <button
                onClick={handleUpgrade}
                className="btn-primary w-full justify-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                Get Premium
              </button>
            )}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Is it really free to sign up?",
                a: "Yes! Free accounts can browse all profiles, use the Address Privacy Vault, and send up to 2 letters per month at no cost.",
              },
              {
                q: "How does the Address Privacy Vault work?",
                a: "All mail is routed through our secure PO Box. You write online, we print and send from our address. Replies come to our PO Box and are scanned back to you digitally. Your home address is never shared.",
              },
              {
                q: "Can I cancel Premium anytime?",
                a: "Absolutely. Cancel anytime with no penalties. Your account reverts to the Free tier at the end of your billing period.",
              },
              {
                q: "How are profiles verified?",
                a: "We manually review each profile and work with Departments of Correction to verify inmate identity and status. Verified profiles display a green verification badge.",
              },
              {
                q: "Is there an age requirement?",
                a: "Yes, all writers must be 18 years of age or older. Age verification is required during registration.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="card p-6">
                <h3 className="text-white font-semibold mb-2">{q}</h3>
                <p className="text-surface-400 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Safety note */}
        <div className="max-w-3xl mx-auto mt-12">
          <div className="card p-6 bg-green-500/5 border-green-500/10">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-green-400 font-semibold mb-1">
                  Safety Included with Every Plan
                </h3>
                <p className="text-surface-400 text-sm leading-relaxed">
                  Address Privacy Vault, content moderation, profile verification,
                  one-click blocking, and 18+ age verification are included
                  free with every account. Your safety is never a premium feature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
