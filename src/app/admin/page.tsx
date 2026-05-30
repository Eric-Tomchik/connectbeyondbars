"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Link from "next/link";
import {
  Users,
  UserPlus,
  Mail,
  LayoutDashboard,
  TrendingUp,
  Crown,
  FileText,
} from "lucide-react";

export default function AdminDashboard() {
  const inmateStats = useQuery(api.inmates.getStats);
  const writerStats = useQuery(api.writers.getStats);
  const waitlistCount = useQuery(api.waitlist.count);

  return (
    <div className="min-h-screen py-8">
      <div className="section-container">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <LayoutDashboard className="w-6 h-6 text-brand-400" />
              Admin Dashboard
            </h1>
            <p className="text-surface-400 text-sm mt-1">
              Manage profiles, writers, and platform operations
            </p>
          </div>
          <Link
            href="/admin/profiles?new=true"
            className="btn-primary text-sm py-2 px-4"
          >
            <UserPlus className="w-4 h-4 mr-1.5" />
            Add Profile
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="card p-5">
            <Users className="w-5 h-5 text-brand-400 mb-2" />
            <div className="text-2xl font-bold text-white">
              {inmateStats?.totalProfiles ?? "—"}
            </div>
            <div className="text-surface-500 text-xs">Active Profiles</div>
          </div>
          <div className="card p-5">
            <FileText className="w-5 h-5 text-green-400 mb-2" />
            <div className="text-2xl font-bold text-white">
              {inmateStats?.verifiedCount ?? "—"}
            </div>
            <div className="text-surface-500 text-xs">Verified</div>
          </div>
          <div className="card p-5">
            <Crown className="w-5 h-5 text-amber-400 mb-2" />
            <div className="text-2xl font-bold text-white">
              {writerStats?.premium ?? "—"}
            </div>
            <div className="text-surface-500 text-xs">Premium Writers</div>
          </div>
          <div className="card p-5">
            <Mail className="w-5 h-5 text-purple-400 mb-2" />
            <div className="text-2xl font-bold text-white">
              {waitlistCount ?? "—"}
            </div>
            <div className="text-surface-500 text-xs">Waitlist Signups</div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <Link
            href="/admin/profiles"
            className="card p-6 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-600/10 border border-brand-600/20 flex items-center justify-center group-hover:bg-brand-600/20 transition-colors">
              <Users className="w-6 h-6 text-brand-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold group-hover:text-brand-400 transition-colors">
                Inmate Profiles
              </h3>
              <p className="text-surface-500 text-sm">
                Create, edit, manage profiles
              </p>
            </div>
          </Link>

          <Link
            href="/admin/writers"
            className="card p-6 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
              <TrendingUp className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold group-hover:text-green-400 transition-colors">
                Writers
              </h3>
              <p className="text-surface-500 text-sm">
                {writerStats?.total ?? 0} registered writers
              </p>
            </div>
          </Link>

          <Link
            href="/admin/profiles?new=true"
            className="card p-6 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
              <UserPlus className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                New Profile
              </h3>
              <p className="text-surface-500 text-sm">
                Add an inmate profile
              </p>
            </div>
          </Link>
        </div>

        {/* Platform Overview */}
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-white mb-4">
            Platform Overview
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-surface-500 text-xs mb-1">Total Writers</div>
              <div className="text-xl font-bold text-white">
                {writerStats?.total ?? 0}
              </div>
            </div>
            <div>
              <div className="text-surface-500 text-xs mb-1">Free Tier</div>
              <div className="text-xl font-bold text-white">
                {writerStats?.free ?? 0}
              </div>
            </div>
            <div>
              <div className="text-surface-500 text-xs mb-1">Premium</div>
              <div className="text-xl font-bold text-white">
                {writerStats?.premium ?? 0}
              </div>
            </div>
            <div>
              <div className="text-surface-500 text-xs mb-1">States Covered</div>
              <div className="text-xl font-bold text-white">
                {inmateStats?.totalStates ?? 0}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
