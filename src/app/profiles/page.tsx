"use client";

import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { ProfileCard } from "@/components/profiles/ProfileCard";
import {
  Search,
  Filter,
  MapPin,
  Users,
  ChevronDown,
} from "lucide-react";

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming",
];

export default function ProfilesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [purposeFilter, setPurposeFilter] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Use search query or regular list
  const searchResults = useQuery(
    api.inmates.search,
    searchQuery.length >= 2
      ? {
          query: searchQuery,
          state: stateFilter || undefined,
          gender: genderFilter || undefined,
        }
      : "skip"
  );

  const listResults = useQuery(api.inmates.list, {
    state: stateFilter || undefined,
    gender: genderFilter || undefined,
    purpose: purposeFilter || undefined,
    limit: 50,
  });

  const profiles = searchQuery.length >= 2 ? searchResults : listResults;
  const availableStates = useQuery(api.inmates.getStates);

  return (
    <div className="min-h-screen py-8">
      <div className="section-container">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Browse Pen Pal Profiles
          </h1>
          <p className="text-surface-400">
            Find someone to connect with. Every profile is verified and
            moderated for safety.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-surface-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by interests, bio, hobbies..."
                className="input-field pl-12"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`btn-secondary px-4 gap-2 ${showFilters ? "border-brand-500/50" : ""}`}
            >
              <Filter className="w-5 h-5" />
              Filters
              <ChevronDown
                className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {/* Filter Row */}
          {showFilters && (
            <div className="card p-4 animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* State */}
                <div>
                  <label className="block text-surface-400 text-xs font-medium mb-1.5">
                    <MapPin className="w-3.5 h-3.5 inline mr-1" />
                    State
                  </label>
                  <select
                    value={stateFilter}
                    onChange={(e) => setStateFilter(e.target.value)}
                    className="input-field py-2 text-sm"
                  >
                    <option value="">All States</option>
                    {(availableStates ?? US_STATES).map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-surface-400 text-xs font-medium mb-1.5">
                    <Users className="w-3.5 h-3.5 inline mr-1" />
                    Gender
                  </label>
                  <select
                    value={genderFilter}
                    onChange={(e) => setGenderFilter(e.target.value)}
                    className="input-field py-2 text-sm"
                  >
                    <option value="">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-Binary</option>
                  </select>
                </div>

                {/* Purpose */}
                <div>
                  <label className="block text-surface-400 text-xs font-medium mb-1.5">
                    Pen Pal Purpose
                  </label>
                  <select
                    value={purposeFilter}
                    onChange={(e) => setPurposeFilter(e.target.value)}
                    className="input-field py-2 text-sm"
                  >
                    <option value="">All Purposes</option>
                    <option value="friendship">Friendship</option>
                    <option value="mentorship">Mentorship</option>
                    <option value="faith-based">Faith-Based</option>
                    <option value="creative-writing">Creative Writing</option>
                    <option value="educational">Educational</option>
                  </select>
                </div>
              </div>

              {/* Clear */}
              {(stateFilter || genderFilter || purposeFilter) && (
                <button
                  onClick={() => {
                    setStateFilter("");
                    setGenderFilter("");
                    setPurposeFilter("");
                  }}
                  className="mt-3 text-brand-400 hover:text-brand-300 text-xs font-medium transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          )}
        </div>

        {/* Results */}
        {profiles === undefined ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="card p-6 animate-pulse">
                <div className="w-16 h-16 rounded-full bg-surface-800 mx-auto mb-4" />
                <div className="h-5 bg-surface-800 rounded w-2/3 mx-auto mb-2" />
                <div className="h-4 bg-surface-800 rounded w-1/2 mx-auto mb-4" />
                <div className="h-16 bg-surface-800 rounded mb-4" />
                <div className="flex gap-2 justify-center">
                  <div className="h-6 w-16 bg-surface-800 rounded-full" />
                  <div className="h-6 w-16 bg-surface-800 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        ) : profiles.length === 0 ? (
          <div className="text-center py-20">
            <Users className="w-12 h-12 text-surface-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              No profiles found
            </h3>
            <p className="text-surface-400 mb-6">
              {searchQuery
                ? "Try a different search term or adjust your filters."
                : "Check back soon — new profiles are added regularly."}
            </p>
            {(searchQuery || stateFilter || genderFilter || purposeFilter) && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setStateFilter("");
                  setGenderFilter("");
                  setPurposeFilter("");
                }}
                className="btn-secondary"
              >
                Clear all filters
              </button>
            )}
          </div>
        ) : (
          <>
            <p className="text-surface-500 text-sm mb-4">
              Showing {profiles.length} profile{profiles.length !== 1 ? "s" : ""}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {profiles.map((profile) => (
                <ProfileCard key={profile._id} profile={profile} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
