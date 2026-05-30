"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { ProfileCard } from "@/components/profiles/ProfileCard";
import {
  Mail,
  Users,
  Heart,
  Calendar,
  Bookmark,
  Search,
  Crown,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export default function DashboardPage() {
  const writer = useQuery(api.writers.me);
  const savedProfiles = useQuery(api.writers.getSavedProfiles);
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (writer === null) {
      router.push("/auth/login");
    }
  }, [writer, router]);

  if (writer === undefined) {
    return (
      <div className="min-h-screen py-8">
        <div className="section-container">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-surface-800 rounded w-48" />
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="card p-6 h-24" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!writer) return null;

  return (
    <div className="min-h-screen py-8">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Welcome, {writer.displayName}
            </h1>
            <p className="text-surface-400 text-sm mt-1">
              Your pen pal dashboard
            </p>
          </div>
          <div className="flex items-center gap-3">
            {writer.subscriptionTier === "free" ? (
              <Link href="/pricing" className="btn-primary text-sm py-2 px-4">
                <Crown className="w-4 h-4 mr-1.5" />
                Upgrade to Premium
              </Link>
            ) : (
              <span className="badge-featured px-3 py-1">
                <Crown className="w-3.5 h-3.5 mr-1" />
                Premium Member
              </span>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            {
              icon: Mail,
              label: "Letters Sent",
              value: writer.lettersSent,
              color: "text-brand-400",
            },
            {
              icon: Users,
              label: "Active Pen Pals",
              value: writer.activePenPals,
              color: "text-green-400",
            },
            {
              icon: Calendar,
              label: "Months Active",
              value: writer.monthsOfCorrespondence,
              color: "text-amber-400",
            },
            {
              icon: Bookmark,
              label: "Saved Profiles",
              value: savedProfiles?.length ?? 0,
              color: "text-purple-400",
            },
          ].map((stat) => (
            <div key={stat.label} className="card p-5">
              <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-surface-500 text-xs mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Subscription Info */}
        <div className="card p-6 mb-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-white mb-1">
                Your Membership
              </h2>
              <p className="text-surface-400 text-sm">
                {writer.subscriptionTier === "premium" ? (
                  <>
                    Premium — Unlimited letters, priority processing, impact
                    dashboard
                  </>
                ) : (
                  <>Free — 2 letters per month, basic features</>
                )}
              </p>
            </div>
            {writer.subscriptionTier === "free" && (
              <Link
                href="/pricing"
                className="text-brand-400 hover:text-brand-300 text-sm font-medium flex items-center gap-1 transition-colors"
              >
                Upgrade
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <Link
            href="/profiles"
            className="card p-6 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-600/10 border border-brand-600/20 flex items-center justify-center group-hover:bg-brand-600/20 transition-colors">
              <Search className="w-6 h-6 text-brand-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold group-hover:text-brand-400 transition-colors">
                Browse Profiles
              </h3>
              <p className="text-surface-500 text-sm">
                Find your next pen pal connection
              </p>
            </div>
          </Link>

          <Link
            href="/dashboard"
            className="card p-6 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
              <TrendingUp className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold group-hover:text-green-400 transition-colors">
                Your Impact
              </h3>
              <p className="text-surface-500 text-sm">
                See the difference you&apos;re making
              </p>
            </div>
          </Link>
        </div>

        {/* Saved Profiles */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-brand-400" />
            Saved Profiles
          </h2>

          {savedProfiles === undefined ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="card p-6 h-48 animate-pulse" />
              ))}
            </div>
          ) : savedProfiles.length === 0 ? (
            <div className="card p-8 text-center">
              <Heart className="w-10 h-10 text-surface-600 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">
                No saved profiles yet
              </h3>
              <p className="text-surface-400 text-sm mb-4">
                Browse profiles and save the ones you&apos;d like to write to.
              </p>
              <Link href="/profiles" className="btn-primary text-sm">
                Browse Profiles
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedProfiles
                .filter((sp): sp is NonNullable<typeof sp> => sp !== null)
                .map((sp) => (
                  <ProfileCard key={sp._id} profile={sp.inmate} />
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
