"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import Link from "next/link";
import {
  ArrowLeft,
  Users,
  Crown,
  Mail,
  Calendar,
  User,
} from "lucide-react";

export default function AdminWritersPage() {
  const writers = useQuery(api.writers.adminList);
  const stats = useQuery(api.writers.getStats);

  return (
    <div className="min-h-screen py-8">
      <div className="section-container">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/admin" className="text-surface-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-white">Writers</h1>
            <p className="text-surface-400 text-sm">
              {stats?.total ?? 0} registered · {stats?.premium ?? 0} premium · {stats?.active ?? 0} active
            </p>
          </div>
        </div>

        {/* Writer List */}
        {writers === undefined ? (
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="card p-4 h-16 animate-pulse" />
            ))}
          </div>
        ) : writers.length === 0 ? (
          <div className="card p-8 text-center">
            <Users className="w-10 h-10 text-surface-600 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">No writers yet</h3>
            <p className="text-surface-400 text-sm">
              Writers will appear here once they register.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {writers.map((writer) => (
              <div key={writer._id} className="card p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-surface-800 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-surface-500" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-medium text-sm truncate">
                        {writer.displayName}
                      </h3>
                      {writer.subscriptionTier === "premium" && (
                        <span className="badge-featured text-xs">
                          <Crown className="w-3 h-3 mr-0.5" />
                          Premium
                        </span>
                      )}
                    </div>
                    <div className="text-surface-500 text-xs flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        {writer.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Joined {new Date(writer.joinedAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-surface-500 flex-shrink-0">
                  <div className="text-center">
                    <div className="text-white font-bold text-sm">{writer.lettersSent}</div>
                    <div>Letters</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-sm">{writer.activePenPals}</div>
                    <div>Pen Pals</div>
                  </div>
                  <span className={`badge text-xs ${
                    writer.isActive
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-surface-700 text-surface-400 border border-surface-600"
                  }`}>
                    {writer.isActive ? "Active" : "Inactive"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
