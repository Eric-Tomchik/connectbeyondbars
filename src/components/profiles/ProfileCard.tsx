"use client";

import Link from "next/link";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import type { Doc, Id } from "../../../convex/_generated/dataModel";
import {
  MapPin,
  Calendar,
  CheckCircle,
  Star,
  User,
  Heart,
} from "lucide-react";

interface ProfileCardProps {
  profile: Doc<"inmates">;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  // Get primary photo URL if available
  const photoUrl = useQuery(
    api.files.getUrl,
    profile.primaryPhotoId ? { storageId: profile.primaryPhotoId } : "skip"
  );

  const purposeLabels: Record<string, string> = {
    friendship: "Friendship",
    mentorship: "Mentorship",
    "faith-based": "Faith",
    "creative-writing": "Creative",
    educational: "Education",
  };

  const releaseYear = profile.expectedReleaseDate
    ? new Date(profile.expectedReleaseDate).getFullYear()
    : null;

  return (
    <Link
      href={`/profiles/${profile.slug}`}
      className="card p-6 group block transition-transform hover:-translate-y-1"
    >
      {/* Featured badge */}
      {profile.isFeatured && (
        <div className="flex justify-end mb-2">
          <span className="badge-featured">
            <Star className="w-3 h-3 mr-1" />
            Featured
          </span>
        </div>
      )}

      {/* Photo / Avatar */}
      <div className="flex justify-center mb-4">
        {photoUrl ? (
          <img
            src={photoUrl}
            alt={`${profile.firstName} ${profile.lastName[0]}.`}
            className="w-20 h-20 rounded-full object-cover border-2 border-surface-700 group-hover:border-brand-500/50 transition-colors"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-surface-800 flex items-center justify-center border-2 border-surface-700 group-hover:border-brand-500/50 transition-colors">
            <User className="w-8 h-8 text-surface-500" />
          </div>
        )}
      </div>

      {/* Name & verification */}
      <div className="text-center mb-3">
        <h3 className="text-lg font-semibold text-white group-hover:text-brand-400 transition-colors flex items-center justify-center gap-1.5">
          {profile.firstName} {profile.lastName[0]}.
          {profile.isVerified && (
            <CheckCircle className="w-4 h-4 text-green-400" />
          )}
        </h3>
        <div className="flex items-center justify-center gap-3 text-surface-400 text-sm mt-1">
          <span>{profile.age} years old</span>
          <span className="text-surface-700">·</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {profile.state}
          </span>
        </div>
      </div>

      {/* Bio preview */}
      <p className="text-surface-400 text-sm text-center line-clamp-3 mb-4 leading-relaxed">
        {profile.bio}
      </p>

      {/* Interests */}
      <div className="flex flex-wrap gap-1.5 justify-center mb-4">
        {profile.interests.slice(0, 4).map((interest) => (
          <span key={interest} className="badge-interest text-xs">
            {interest}
          </span>
        ))}
        {profile.interests.length > 4 && (
          <span className="badge-interest text-xs">
            +{profile.interests.length - 4}
          </span>
        )}
      </div>

      {/* Footer info */}
      <div className="flex items-center justify-between text-xs text-surface-500 pt-3 border-t border-surface-800/50">
        <div className="flex items-center gap-1">
          <Heart className="w-3.5 h-3.5" />
          {profile.penPalPurpose.map((p) => purposeLabels[p] || p).join(", ")}
        </div>
        {releaseYear && (
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            Release: {releaseYear}
          </div>
        )}
      </div>
    </Link>
  );
}
