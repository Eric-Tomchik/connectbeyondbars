"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  CheckCircle,
  Star,
  User,
  Heart,
  BookOpen,
  Mail,
  Shield,
  ArrowLeft,
  Clock,
  GraduationCap,
  Globe,
  Bookmark,
  Eye,
} from "lucide-react";

export default function ProfileDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const profile = useQuery(api.inmates.getBySlug, { slug });
  const writer = useQuery(api.writers.me);
  const incrementViews = useMutation(api.inmates.incrementViews);
  const saveProfile = useMutation(api.writers.saveProfile);
  const unsaveProfile = useMutation(api.writers.unsaveProfile);
  const savedProfiles = useQuery(api.writers.getSavedProfiles);

  const isSaved = savedProfiles?.some(
    (sp) => sp && profile && sp.inmateId === profile._id
  );

  // Increment view count on mount
  useEffect(() => {
    if (profile?._id) {
      incrementViews({ id: profile._id });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile?._id]);

  if (profile === undefined) {
    return (
      <div className="min-h-screen py-12">
        <div className="section-container max-w-4xl">
          <div className="card p-12 animate-pulse">
            <div className="w-24 h-24 rounded-full bg-surface-800 mx-auto mb-6" />
            <div className="h-6 bg-surface-800 rounded w-1/3 mx-auto mb-4" />
            <div className="h-4 bg-surface-800 rounded w-1/4 mx-auto mb-8" />
            <div className="space-y-3">
              <div className="h-4 bg-surface-800 rounded" />
              <div className="h-4 bg-surface-800 rounded w-5/6" />
              <div className="h-4 bg-surface-800 rounded w-4/6" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (profile === null) {
    return (
      <div className="min-h-screen py-20">
        <div className="section-container text-center">
          <User className="w-16 h-16 text-surface-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">
            Profile Not Found
          </h1>
          <p className="text-surface-400 mb-6">
            This profile may have been removed or is no longer active.
          </p>
          <Link href="/profiles" className="btn-primary">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Profiles
          </Link>
        </div>
      </div>
    );
  }

  const purposeLabels: Record<string, string> = {
    friendship: "Friendship",
    mentorship: "Mentorship",
    "faith-based": "Faith-Based Correspondence",
    "creative-writing": "Creative Writing",
    educational: "Educational",
  };

  const frequencyLabels: Record<string, string> = {
    weekly: "Weekly",
    biweekly: "Every 2 Weeks",
    monthly: "Monthly",
  };

  return (
    <div className="min-h-screen py-8">
      <div className="section-container max-w-4xl">
        {/* Back link */}
        <Link
          href="/profiles"
          className="inline-flex items-center gap-1.5 text-surface-400 hover:text-white text-sm mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to profiles
        </Link>

        <div className="card p-8 sm:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            {/* Photo */}
            <div className="flex justify-center mb-4">
              <div className="w-28 h-28 rounded-full bg-surface-800 flex items-center justify-center border-2 border-surface-700">
                <User className="w-12 h-12 text-surface-500" />
              </div>
            </div>

            {/* Badges */}
            <div className="flex items-center justify-center gap-2 mb-3">
              {profile.isFeatured && (
                <span className="badge-featured">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </span>
              )}
              {profile.isVerified && (
                <span className="badge-verified">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {profile.verificationBadge === "full-verified"
                    ? "Fully Verified"
                    : profile.verificationBadge === "doc-verified"
                      ? "DOC Verified"
                      : "Verified"}
                </span>
              )}
              {profile.foundingMember && (
                <span className="badge bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  Founding Member
                </span>
              )}
            </div>

            {/* Name */}
            <h1 className="text-3xl font-bold text-white mb-2">
              {profile.firstName} {profile.lastName[0]}.
            </h1>

            {/* Quick info */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-surface-400 text-sm">
              <span>{profile.age} years old</span>
              <span className="text-surface-700">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {profile.state}
              </span>
              <span className="text-surface-700">·</span>
              <span>{profile.facility}</span>
            </div>
          </div>

          {/* Bio */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-brand-400" />
              About Me
            </h2>
            <p className="text-surface-300 leading-relaxed whitespace-pre-line">
              {profile.bio}
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {/* Interests */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <Heart className="w-4 h-4 text-brand-400" />
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <span key={interest} className="badge-interest">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Pen Pal Purpose */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-400" />
                Looking For
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.penPalPurpose.map((purpose) => (
                  <span
                    key={purpose}
                    className="badge bg-brand-600/10 text-brand-400 border border-brand-600/20"
                  >
                    {purposeLabels[purpose] || purpose}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            {profile.education && (
              <div>
                <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-brand-400" />
                  Education
                </h3>
                <p className="text-surface-400 text-sm">{profile.education}</p>
              </div>
            )}

            {/* Languages */}
            {profile.languages.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-brand-400" />
                  Languages
                </h3>
                <p className="text-surface-400 text-sm">
                  {profile.languages.join(", ")}
                </p>
              </div>
            )}

            {/* Release Date */}
            {profile.expectedReleaseDate && (
              <div>
                <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-400" />
                  Expected Release
                </h3>
                <p className="text-surface-400 text-sm">
                  {new Date(profile.expectedReleaseDate).toLocaleDateString(
                    "en-US",
                    { year: "numeric", month: "long" }
                  )}
                </p>
              </div>
            )}

            {/* Letter Frequency */}
            {profile.preferredLetterFrequency && (
              <div>
                <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-400" />
                  Preferred Frequency
                </h3>
                <p className="text-surface-400 text-sm">
                  {frequencyLabels[profile.preferredLetterFrequency]}
                </p>
              </div>
            )}
          </div>

          {/* Wishlist */}
          {profile.wishlistItems && profile.wishlistItems.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-white mb-3">
                Care Package Wishlist
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.wishlistItems.map((item) => (
                  <span key={item} className="badge-interest">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Stats bar */}
          <div className="flex items-center justify-center gap-6 py-4 border-t border-surface-800/50 text-xs text-surface-500">
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              {profile.profileViews} views
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" />
              {profile.correspondenceCount} letters received
            </span>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            {writer ? (
              <>
                <Link
                  href={`/dashboard?write=${profile._id}`}
                  className="btn-primary w-full sm:w-auto justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Write a Letter
                </Link>
                <button
                  onClick={() =>
                    isSaved
                      ? unsaveProfile({ inmateId: profile._id })
                      : saveProfile({ inmateId: profile._id })
                  }
                  className={`btn-secondary w-full sm:w-auto justify-center ${isSaved ? "text-brand-400 border-brand-500/30" : ""}`}
                >
                  <Bookmark
                    className={`w-5 h-5 mr-2 ${isSaved ? "fill-current" : ""}`}
                  />
                  {isSaved ? "Saved" : "Save Profile"}
                </button>
              </>
            ) : (
              <div className="text-center">
                <Link href="/auth/register" className="btn-primary mb-2">
                  <Mail className="w-5 h-5 mr-2" />
                  Sign Up to Write a Letter
                </Link>
                <p className="text-surface-500 text-xs">
                  Free account required to correspond
                </p>
              </div>
            )}
          </div>

          {/* Safety Note */}
          <div className="mt-8 p-4 rounded-lg bg-green-500/5 border border-green-500/10">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-green-400 text-sm font-medium mb-1">
                  Your Privacy is Protected
                </p>
                <p className="text-surface-400 text-xs leading-relaxed">
                  All correspondence is routed through our Address Privacy Vault.
                  Your home address is never shared with inmates, facilities, or
                  anyone else.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
