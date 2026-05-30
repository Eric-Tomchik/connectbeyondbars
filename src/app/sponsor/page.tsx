"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  Gift,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  BookOpen,
  Mail,
  CreditCard,
} from "lucide-react";

const sponsorTiers = [
  {
    name: "Letter Sponsor",
    price: "$5",
    period: "one-time",
    description: "Cover the cost of printing and mailing one letter for someone who can't afford it.",
    features: [
      "1 letter printed and mailed",
      "Sponsor badge on your profile",
      "Thank-you email with impact update",
    ],
    popular: false,
  },
  {
    name: "Profile Sponsor",
    price: "$25",
    period: "one-time",
    description: "Sponsor a full inmate profile — photo, verification, and 3 months of featured placement.",
    features: [
      "Full profile creation & verification",
      "3 months featured placement",
      "Sponsor badge on the profile",
      "Impact dashboard access",
      "Thank-you certificate",
    ],
    popular: true,
  },
  {
    name: "Monthly Champion",
    price: "$15",
    period: "/month",
    description: "Ongoing sponsorship that covers letters, profile maintenance, and platform operations.",
    features: [
      "3 sponsored letters per month",
      "1 new profile sponsored per quarter",
      "Champion badge on your profile",
      "Quarterly impact report",
      "Early access to new features",
      "Direct line to our team",
    ],
    popular: false,
  },
];

export default function SponsorPage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 border-b border-surface-800/50">
        <div className="section-container max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-600/10 border border-brand-600/20 mb-6">
            <Heart className="w-4 h-4 text-brand-400" />
            <span className="text-brand-400 text-sm font-medium">
              Make a Difference
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Sponsor a <span className="gradient-text">Connection</span>
          </h1>
          <p className="text-lg text-surface-300 leading-relaxed max-w-2xl mx-auto">
            Not everyone can afford to participate. Your sponsorship helps
            cover the costs of profile creation, letter printing, and mailing
            — ensuring that financial barriers never prevent meaningful human
            connection.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 border-b border-surface-800/50 bg-surface-900/30">
        <div className="section-container">
          <div className="flex flex-wrap items-center justify-center gap-12 text-center">
            <div>
              <div className="text-3xl font-bold text-white">$2.50</div>
              <div className="text-surface-400 text-sm mt-1">
                Cost to print &amp; mail 1 letter
              </div>
            </div>
            <div className="w-px h-12 bg-surface-800 hidden sm:block" />
            <div>
              <div className="text-3xl font-bold text-white">$15</div>
              <div className="text-surface-400 text-sm mt-1">
                Cost to create &amp; verify 1 profile
              </div>
            </div>
            <div className="w-px h-12 bg-surface-800 hidden sm:block" />
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-surface-400 text-sm mt-1">
                Goes to platform operations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Tiers */}
      <section className="py-20 border-b border-surface-800/50">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Choose Your Impact
          </h2>
          <p className="text-surface-400 text-center mb-12 max-w-2xl mx-auto">
            Every contribution directly supports connections between writers and
            incarcerated individuals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {sponsorTiers.map((tier) => (
              <div
                key={tier.name}
                className={`card p-8 relative flex flex-col ${
                  tier.popular ? "border-brand-600/30" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="badge-featured px-3 py-1 text-xs font-semibold">
                      MOST IMPACT
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <div className="text-3xl font-bold text-white mb-1">
                  {tier.price}
                  <span className="text-surface-500 text-base font-normal">
                    {tier.period === "one-time" ? "" : tier.period}
                  </span>
                </div>
                {tier.period === "one-time" && (
                  <span className="text-surface-500 text-xs mb-4">
                    one-time
                  </span>
                )}
                <p className="text-surface-400 text-sm mb-6 flex-1">
                  {tier.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-surface-300 text-sm"
                    >
                      <CheckCircle
                        className={`w-4 h-4 flex-shrink-0 ${
                          tier.popular ? "text-brand-400" : "text-green-400"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={
                    tier.popular
                      ? "btn-primary w-full justify-center"
                      : "btn-secondary w-full justify-center"
                  }
                >
                  {tier.period === "/month"
                    ? "Start Sponsoring"
                    : "Sponsor Now"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-20 border-b border-surface-800/50 bg-surface-900/30">
        <div className="section-container max-w-4xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Other Ways to Help
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Send a Book",
                description:
                  "Browse our curated bookstore and send a book directly to your pen pal's facility.",
                link: "/bookstore",
                linkText: "Visit Bookstore",
              },
              {
                icon: Users,
                title: "Spread the Word",
                description:
                  "Share ConnectBeyond Bars with friends, family, and your community. More writers means more connections.",
                link: null,
                linkText: null,
              },
              {
                icon: Mail,
                title: "Become a Writer",
                description:
                  "The most powerful thing you can do is write. Sign up for free and start connecting today.",
                link: "/auth/register",
                linkText: "Sign Up Free",
              },
            ].map((item) => (
              <div key={item.title} className="card p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-brand-600/10 border border-brand-600/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-brand-400" />
                </div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-surface-400 text-sm mb-4">
                  {item.description}
                </p>
                {item.link && (
                  <Link
                    href={item.link}
                    className="text-brand-400 hover:text-brand-300 text-sm font-medium transition-colors"
                  >
                    {item.linkText} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="section-container text-center max-w-3xl">
          <Star className="w-10 h-10 text-amber-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Every Connection Counts
          </h2>
          <p className="text-surface-400 text-lg mb-8 leading-relaxed">
            Your generosity creates opportunities for connection, hope, and
            rehabilitation. Thank you for believing in second chances.
          </p>
          <Link href="/contact" className="btn-primary">
            Questions? Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
