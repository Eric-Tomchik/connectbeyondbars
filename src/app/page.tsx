"use client";

import Link from "next/link";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";
import {
  Shield,
  Heart,
  Mail,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Lock,
  Search,
  BookOpen,
  TrendingDown,
} from "lucide-react";

export default function HomePage() {
  const stats = useQuery(api.inmates.getStats);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-[120px] animate-hero-glow pointer-events-none" />

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-600/10 border border-brand-600/20 mb-6">
              <Shield className="w-4 h-4 text-brand-400" />
              <span className="text-brand-400 text-sm font-medium">
                Your address stays 100% private
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Safe, Meaningful{" "}
              <span className="gradient-text">Pen Pal Connections</span>{" "}
              That Change Lives
            </h1>

            <p className="text-lg sm:text-xl text-surface-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Connect with incarcerated individuals through verified profiles and
              fully managed correspondence. No address sharing. No risk. Just
              real human connection.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/auth/register" className="btn-primary text-base px-8 py-3.5">
                Start Writing Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/profiles" className="btn-secondary text-base px-8 py-3.5">
                <Search className="w-5 h-5 mr-2" />
                Browse Profiles
              </Link>
            </div>

            {/* Trust Stats */}
            {stats && (
              <div className="flex flex-wrap items-center justify-center gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">
                    {stats.totalProfiles.toLocaleString()}+
                  </div>
                  <div className="text-surface-400 text-sm">Verified Profiles</div>
                </div>
                <div className="w-px h-10 bg-surface-800 hidden sm:block" />
                <div>
                  <div className="text-2xl font-bold text-white">
                    {stats.totalStates}
                  </div>
                  <div className="text-surface-400 text-sm">States</div>
                </div>
                <div className="w-px h-10 bg-surface-800 hidden sm:block" />
                <div>
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-surface-400 text-sm">Address Privacy</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Profiles */}
      <FeaturedProfiles />

      {/* Recently Added */}
      <RecentlyAdded />

      {/* How It Works */}
      <section className="py-20 border-t border-surface-800/50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-surface-400 text-lg max-w-2xl mx-auto">
              ConnectBeyond Bars makes it safe and simple to become a pen pal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                step: "01",
                title: "Browse & Match",
                description:
                  "Explore verified inmate profiles. Filter by state, interests, age, and correspondence goals to find your ideal pen pal match.",
              },
              {
                icon: Mail,
                step: "02",
                title: "Write Your Letter",
                description:
                  "Compose your letter online using our guided editor. We print it, mail it, and handle every step — your address is never shared.",
              },
              {
                icon: Heart,
                step: "03",
                title: "Build Connection",
                description:
                  "Receive replies through our secure platform. Track your impact and build a meaningful relationship that changes lives.",
              },
            ].map((item) => (
              <div key={item.step} className="card p-8 text-center group">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-600/10 border border-brand-600/20 mb-6 group-hover:bg-brand-600/20 transition-colors">
                  <item.icon className="w-7 h-7 text-brand-400" />
                </div>
                <div className="text-brand-500 text-xs font-mono mb-2">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-surface-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety First */}
      <section className="py-20 border-t border-surface-800/50 bg-surface-900/30">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <Lock className="w-3.5 h-3.5 text-green-400" />
                <span className="text-green-400 text-xs font-medium uppercase tracking-wider">
                  Safety First
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Your Privacy Is Non-Negotiable
              </h2>
              <p className="text-surface-300 text-lg mb-8 leading-relaxed">
                Every letter is routed through our secure Address Privacy Vault.
                Your home address is never shared with inmates, facilities, or
                anyone else. Period.
              </p>

              <ul className="space-y-4">
                {[
                  "Address Privacy Vault — all mail routed through our PO Box",
                  "DOC-verified inmate profiles with verification badges",
                  "Content moderation on every piece of correspondence",
                  "One-click blocking and reporting for any concerns",
                  "18+ age verification required for all writers",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-surface-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-brand-600/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-brand-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Address Privacy Vault</div>
                    <div className="text-surface-500 text-xs">How your address stays safe</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "You write", desc: "Compose your letter online" },
                    { label: "We print & mail", desc: "From our secure PO Box address" },
                    { label: "Inmate replies", desc: "To our PO Box — never your home" },
                    { label: "You receive", desc: "Reply scanned and delivered digitally" },
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-600/20 flex items-center justify-center text-brand-400 text-xs font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">{step.label}</div>
                        <div className="text-surface-500 text-xs">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 border-t border-surface-800/50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Pen Pals Matter
            </h2>
            <p className="text-surface-400 text-lg max-w-2xl mx-auto">
              Research shows that maintaining social connections during
              incarceration dramatically reduces recidivism
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingDown,
                stat: "40%",
                label: "Recidivism Reduction",
                desc: "With maintained social connections",
              },
              {
                icon: Users,
                stat: "1.9M+",
                label: "Incarcerated in the US",
                desc: "Seeking meaningful connection",
              },
              {
                icon: Heart,
                stat: "3x",
                label: "Better Mental Health",
                desc: "For those with regular correspondence",
              },
              {
                icon: Star,
                stat: "85%",
                label: "Successful Reentry",
                desc: "With community support networks",
              },
            ].map((item) => (
              <div key={item.label} className="card p-6 text-center">
                <item.icon className="w-8 h-8 text-brand-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{item.stat}</div>
                <div className="text-white text-sm font-medium mb-1">{item.label}</div>
                <div className="text-surface-500 text-xs">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 border-t border-surface-800/50 bg-surface-900/30">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-surface-400 text-lg">
              Start for free. Upgrade when you&apos;re ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Free Tier */}
            <div className="card p-8">
              <h3 className="text-xl font-bold text-white mb-2">Free</h3>
              <div className="text-3xl font-bold text-white mb-1">
                $0<span className="text-surface-500 text-base font-normal">/month</span>
              </div>
              <p className="text-surface-400 text-sm mb-6">
                Start connecting today
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Browse all verified profiles",
                  "Send 2 letters per month",
                  "Address Privacy Vault",
                  "Basic search & filters",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-surface-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/auth/register" className="btn-secondary w-full justify-center">
                Sign Up Free
              </Link>
            </div>

            {/* Premium Tier */}
            <div className="card p-8 border-brand-600/30 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="badge-featured px-3 py-1 text-xs font-semibold">
                  MOST POPULAR
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Premium</h3>
              <div className="text-3xl font-bold text-white mb-1">
                $9.99<span className="text-surface-500 text-base font-normal">/month</span>
              </div>
              <p className="text-surface-400 text-sm mb-6">
                For dedicated pen pals
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Unlimited letters per month",
                  "Advanced compatibility matching",
                  "Priority letter processing",
                  "Impact dashboard & stats",
                  "Ad-free experience",
                  "Save unlimited profiles",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-surface-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/pricing" className="btn-primary w-full justify-center">
                Get Premium
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-surface-800/50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-surface-300 text-lg mb-8 leading-relaxed">
              Every letter is a lifeline. Every connection reduces the chance of
              reoffending. Start your pen pal journey today — safely,
              meaningfully, and with full privacy protection.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/auth/register" className="btn-primary text-base px-8 py-3.5">
                Create Free Account
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/about" className="btn-secondary text-base px-8 py-3.5">
                <BookOpen className="w-5 h-5 mr-2" />
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <WaitlistSection />
    </div>
  );
}

function ProfileCard({
  profile,
}: {
  profile: {
    slug: string;
    firstName: string;
    lastName: string;
    age: number;
    state: string;
    facility: string;
    bio: string;
    interests: string[];
    photoUrl?: string;
    isFeatured: boolean;
  };
}) {
  return (
    <Link href={`/profiles/${profile.slug}`} className="card p-5 group block">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-xl bg-brand-600/10 border border-brand-600/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
          {profile.photoUrl ? (
            <img
              src={profile.photoUrl}
              alt={profile.firstName}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-brand-400 font-bold text-lg">
              {profile.firstName[0]}
              {profile.lastName[0]}
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-white font-semibold text-sm group-hover:text-brand-400 transition-colors">
              {profile.firstName} {profile.lastName[0]}.
            </h3>
            <span className="text-surface-500 text-xs">
              {profile.age} · {profile.state}
            </span>
            {profile.isFeatured && (
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            )}
          </div>
          <p className="text-surface-400 text-xs leading-relaxed line-clamp-2 mb-2">
            {profile.bio}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {profile.interests.slice(0, 3).map((i) => (
              <span
                key={i}
                className="badge-interest text-[10px] py-0.5 px-1.5"
              >
                {i}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

function FeaturedProfiles() {
  const featured = useQuery(api.inmates.list, {
    featured: true,
    limit: 4,
  });

  if (!featured || featured.profiles.length === 0) return null;

  return (
    <section className="py-16 border-t border-surface-800/50">
      <div className="section-container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              <h2 className="text-2xl font-bold text-white">
                Featured Profiles
              </h2>
            </div>
            <p className="text-surface-400 text-sm">
              Highlighted pen pals looking for meaningful connections
            </p>
          </div>
          <Link
            href="/profiles"
            className="btn-secondary text-sm hidden sm:flex"
          >
            View All
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featured.profiles.map((profile) => (
            <ProfileCard key={profile._id} profile={profile as any} />
          ))}
        </div>
        <div className="text-center mt-6 sm:hidden">
          <Link href="/profiles" className="btn-secondary text-sm">
            View All Profiles
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function RecentlyAdded() {
  const recent = useQuery(api.inmates.list, {
    limit: 6,
  });

  if (!recent || recent.profiles.length === 0) return null;

  return (
    <section className="py-16 border-t border-surface-800/50 bg-surface-900/30">
      <div className="section-container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white">Recently Added</h2>
            <p className="text-surface-400 text-sm">
              New pen pals waiting to hear from you
            </p>
          </div>
          <Link
            href="/profiles"
            className="btn-secondary text-sm hidden sm:flex"
          >
            Browse All
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recent.profiles.map((profile) => (
            <ProfileCard key={profile._id} profile={profile as any} />
          ))}
        </div>
        <div className="text-center mt-6 sm:hidden">
          <Link href="/profiles" className="btn-secondary text-sm">
            Browse All Profiles
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WaitlistSection() {
  const joinWaitlist = useMutation(api.waitlist.join);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await joinWaitlist({ email, type: "writer" });
      setSubmitted(true);
    } catch {
      // handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 border-t border-surface-800/50 bg-brand-950/30">
      <div className="section-container">
        <div className="max-w-xl mx-auto text-center">
          <Mail className="w-10 h-10 text-brand-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">
            Stay Updated
          </h3>
          <p className="text-surface-400 text-sm mb-6">
            Get notified about new profiles, platform updates, and pen pal
            success stories.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">You&apos;re on the list!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input-field flex-1"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-primary px-6 whitespace-nowrap"
              >
                {loading ? "..." : "Join"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
