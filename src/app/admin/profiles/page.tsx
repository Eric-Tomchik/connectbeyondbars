"use client";

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import type { Doc, Id } from "../../../../convex/_generated/dataModel";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Plus,
  Edit3,
  Trash2,
  Eye,
  EyeOff,
  CheckCircle,
  Star,
  Search,
  User,
  Save,
  X,
} from "lucide-react";

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada",
  "New Hampshire","New Jersey","New Mexico","New York","North Carolina",
  "North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island",
  "South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont",
  "Virginia","Washington","West Virginia","Wisconsin","Wyoming",
];

const PURPOSES = [
  { value: "friendship", label: "Friendship" },
  { value: "mentorship", label: "Mentorship" },
  { value: "faith-based", label: "Faith-Based" },
  { value: "creative-writing", label: "Creative Writing" },
  { value: "educational", label: "Educational" },
] as const;

export default function AdminProfilesPage() {
  const searchParams = useSearchParams();
  const showNew = searchParams.get("new") === "true";
  const profiles = useQuery(api.inmates.adminList);
  const updateProfile = useMutation(api.inmates.update);
  const removeProfile = useMutation(api.inmates.remove);

  const [editingId, setEditingId] = useState<Id<"inmates"> | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(showNew);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // Filter profiles
  const filtered = profiles?.filter((p) => {
    const matchesSearch =
      !searchQuery ||
      `${p.firstName} ${p.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.state.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = !statusFilter || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="section-container">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="text-surface-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-white">Inmate Profiles</h1>
              <p className="text-surface-400 text-sm">{profiles?.length ?? 0} total profiles</p>
            </div>
          </div>
          <button
            onClick={() => {
              setShowCreateForm(true);
              setEditingId(null);
            }}
            className="btn-primary text-sm py-2 px-4"
          >
            <Plus className="w-4 h-4 mr-1.5" />
            Add Profile
          </button>
        </div>

        {/* Create/Edit Form */}
        {showCreateForm && (
          <div className="mb-8">
            <ProfileForm
              onClose={() => setShowCreateForm(false)}
              onSuccess={() => setShowCreateForm(false)}
            />
          </div>
        )}

        {/* Search & Filter */}
        <div className="flex gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or state..."
              className="input-field pl-10 py-2 text-sm"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="input-field w-40 py-2 text-sm"
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="draft">Draft</option>
            <option value="paused">Paused</option>
            <option value="removed">Removed</option>
          </select>
        </div>

        {/* Profile List */}
        {filtered === undefined ? (
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="card p-4 h-20 animate-pulse" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="card p-8 text-center">
            <User className="w-10 h-10 text-surface-600 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">No profiles found</h3>
            <p className="text-surface-400 text-sm">
              {searchQuery || statusFilter
                ? "Try different search terms or filters."
                : "Create your first inmate profile to get started."}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((profile) =>
              editingId === profile._id ? (
                <div key={profile._id} className="mb-4">
                  <ProfileForm
                    profile={profile}
                    onClose={() => setEditingId(null)}
                    onSuccess={() => setEditingId(null)}
                  />
                </div>
              ) : (
                <div key={profile._id} className="card p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-surface-800 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-surface-500" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-white font-medium text-sm truncate">
                          {profile.firstName} {profile.lastName}
                        </h3>
                        {profile.isVerified && <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />}
                        {profile.isFeatured && <Star className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />}
                      </div>
                      <div className="text-surface-500 text-xs">
                        {profile.state} · {profile.age}yo · {profile.facility} · {profile.profileViews} views
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    {/* Status badge */}
                    <span className={`badge text-xs ${
                      profile.status === "active" ? "bg-green-500/20 text-green-400 border border-green-500/30" :
                      profile.status === "draft" ? "bg-surface-700 text-surface-300 border border-surface-600" :
                      profile.status === "paused" ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" :
                      "bg-red-500/20 text-red-400 border border-red-500/30"
                    }`}>
                      {profile.status}
                    </span>

                    {/* Toggle active/paused */}
                    <button
                      onClick={() =>
                        updateProfile({
                          id: profile._id,
                          status: profile.status === "active" ? "paused" : "active",
                        })
                      }
                      className="p-1.5 text-surface-400 hover:text-white transition-colors"
                      title={profile.status === "active" ? "Pause" : "Activate"}
                    >
                      {profile.status === "active" ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>

                    {/* Edit */}
                    <button
                      onClick={() => setEditingId(profile._id)}
                      className="p-1.5 text-surface-400 hover:text-brand-400 transition-colors"
                      title="Edit"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>

                    {/* View */}
                    <Link
                      href={`/profiles/${profile.slug}`}
                      className="p-1.5 text-surface-400 hover:text-white transition-colors"
                      title="View"
                      target="_blank"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>

                    {/* Delete */}
                    <button
                      onClick={() => {
                        if (confirm("Delete this profile permanently?")) {
                          removeProfile({ id: profile._id });
                        }
                      }}
                      className="p-1.5 text-surface-400 hover:text-red-400 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Profile Create/Edit Form ─────────────────────────────

interface ProfileFormProps {
  profile?: Doc<"inmates">;
  onClose: () => void;
  onSuccess: () => void;
}

function ProfileForm({ profile, onClose, onSuccess }: ProfileFormProps) {
  const createProfile = useMutation(api.inmates.create);
  const updateProfile = useMutation(api.inmates.update);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    firstName: profile?.firstName ?? "",
    lastName: profile?.lastName ?? "",
    age: profile?.age ?? 25,
    gender: (profile?.gender ?? "male") as "male" | "female" | "non-binary" | "other",
    dateOfBirth: profile?.dateOfBirth ?? "",
    state: profile?.state ?? "",
    facility: profile?.facility ?? "",
    inmateId: profile?.inmateId ?? "",
    offenseCategory: (profile?.offenseCategory ?? "") as any,
    sentenceType: profile?.sentenceType ?? "",
    expectedReleaseDate: profile?.expectedReleaseDate ?? "",
    bio: profile?.bio ?? "",
    interests: profile?.interests?.join(", ") ?? "",
    education: profile?.education ?? "",
    languages: profile?.languages?.join(", ") ?? "English",
    religiousAffiliation: profile?.religiousAffiliation ?? "",
    penPalPurpose: profile?.penPalPurpose ?? ["friendship"],
    preferredLetterFrequency: (profile?.preferredLetterFrequency ?? "biweekly") as "weekly" | "biweekly" | "monthly",
    wishlistItems: profile?.wishlistItems?.join(", ") ?? "",
    isFeatured: profile?.isFeatured ?? false,
    status: (profile?.status ?? "draft") as "draft" | "active" | "paused" | "removed",
    isVerified: profile?.isVerified ?? false,
  });

  const togglePurpose = (p: string) => {
    setForm((f) => ({
      ...f,
      penPalPurpose: f.penPalPurpose.includes(p as any)
        ? f.penPalPurpose.filter((x) => x !== p)
        : [...f.penPalPurpose, p as any],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const data = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      age: form.age,
      gender: form.gender,
      dateOfBirth: form.dateOfBirth || undefined,
      state: form.state,
      facility: form.facility.trim(),
      inmateId: form.inmateId || undefined,
      offenseCategory: form.offenseCategory || undefined,
      sentenceType: form.sentenceType || undefined,
      expectedReleaseDate: form.expectedReleaseDate || undefined,
      bio: form.bio.trim(),
      interests: form.interests.split(",").map((s) => s.trim()).filter(Boolean),
      education: form.education || undefined,
      languages: form.languages.split(",").map((s) => s.trim()).filter(Boolean),
      religiousAffiliation: form.religiousAffiliation || undefined,
      penPalPurpose: form.penPalPurpose as any,
      preferredLetterFrequency: form.preferredLetterFrequency,
      wishlistItems: form.wishlistItems ? form.wishlistItems.split(",").map((s) => s.trim()).filter(Boolean) : undefined,
      isFeatured: form.isFeatured,
      status: form.status as "draft" | "active",
    };

    try {
      if (profile) {
        await updateProfile({
          id: profile._id,
          ...data,
          isVerified: form.isVerified,
          status: form.status,
        });
      } else {
        await createProfile(data);
      }
      onSuccess();
    } catch (err: any) {
      setError(err?.message ?? "Failed to save profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-white">
          {profile ? "Edit Profile" : "Create New Profile"}
        </h2>
        <button onClick={onClose} className="text-surface-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-surface-300 text-sm font-medium mb-1.5">First Name *</label>
            <input type="text" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className="input-field" required />
          </div>
          <div>
            <label className="block text-surface-300 text-sm font-medium mb-1.5">Last Name *</label>
            <input type="text" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className="input-field" required />
          </div>
        </div>

        {/* Demographics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-surface-300 text-sm font-medium mb-1.5">Age *</label>
            <input type="number" value={form.age} onChange={(e) => setForm({ ...form, age: parseInt(e.target.value) || 0 })} className="input-field" min={18} required />
          </div>
          <div>
            <label className="block text-surface-300 text-sm font-medium mb-1.5">Gender *</label>
            <select value={form.gender} onChange={(e) => setForm({ ...form, gender: e.target.value as any })} className="input-field">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non-Binary</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-surface-300 text-sm font-medium mb-1.5">Date of Birth</label>
            <input type="date" value={form.dateOfBirth} onChange={(e) => setForm({ ...form, dateOfBirth: e.target.value })} className="input-field" />
          </div>
        </div>

        {/* Location */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-surface-300 text-sm font-medium mb-1.5">State *</label>
            <select value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} className="input-field" required>
              <option value="">Select state</option>
              {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-surface-300 text-sm font-medium mb-1.5">Facility *</label>
            <input type="text" value={form.facility} onChange={(e) => setForm({ ...form, facility: e.target.value })} className="input-field" placeholder="e.g. State Correctional Facility" required />
          </div>
          <div>
            <label className="block text-surface-300 text-sm font-medium mb-1.5">Inmate ID</label>
            <input type="text" value={form.inmateId} onChange={(e) => setForm({ ...form, inmateId: e.target.value })} className="input-field" placeholder="Optional" />
          </div>
        </div>

        {/* Offense / Sentence */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-surface-300 text-sm font-medium mb-1.5">Offense Category</label>
            <select value={form.offenseCategory} onChange={(e) => setForm({ ...form, offenseCategory: e.target.value as any })} className="input-field">
              <option value="">Not specified</option>
              <option value="non-violent">Non-Violent</option>
              <option value="violent">Violent</option>
              <option value="drug">Drug</option>
              <option value="financial">Financial</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-surface-300 text-sm font-medium mb-1.5">Sentence Type</label>
            <input type="text" value={form.sentenceType} onChange={(e) => setForm({ ...form, sentenceType: e.target.value })} className="input-field" placeholder="e.g. 5 years" />
          </div>
          <div>
            <label className="block text-surface-300 text-sm font-medium mb-1.5">Expected Release</label>
            <input type="date" value={form.expectedReleaseDate} onChange={(e) => setForm({ ...form, expectedReleaseDate: e.target.value })} className="input-field" />
          </div>
        </div>

        {/* Bio */}
        <div>
          <label className="block text-surface-300 text-sm font-medium mb-1.5">Bio / Personal Statement *</label>
          <textarea value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} className="input-field min-h-[120px] resize-y" placeholder="Write about the person, their interests, goals, and what they're looking for in a pen pal..." required />
        </div>

        {/* Interests & Languages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-surface-300 text-sm font-medium mb-1.5">Interests (comma-separated) *</label>
            <input type="text" value={form.interests} onChange={(e) => setForm({ ...form, interests: e.target.value })} className="input-field" placeholder="reading, art, music, cooking, sports" required />
          </div>
          <div>
            <label className="block text-surface-300 text-sm font-medium mb-1.5">Languages (comma-separated)</label>
            <input type="text" value={form.languages} onChange={(e) => setForm({ ...form, languages: e.target.value })} className="input-field" placeholder="English, Spanish" />
          </div>
        </div>

        {/* Education & Religion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-surface-300 text-sm font-medium mb-1.5">Education</label>
            <input type="text" value={form.education} onChange={(e) => setForm({ ...form, education: e.target.value })} className="input-field" placeholder="e.g. GED, High School, College" />
          </div>
          <div>
            <label className="block text-surface-300 text-sm font-medium mb-1.5">Religious Affiliation</label>
            <input type="text" value={form.religiousAffiliation} onChange={(e) => setForm({ ...form, religiousAffiliation: e.target.value })} className="input-field" placeholder="Optional" />
          </div>
        </div>

        {/* Pen Pal Purpose */}
        <div>
          <label className="block text-surface-300 text-sm font-medium mb-2">Pen Pal Purpose *</label>
          <div className="flex flex-wrap gap-2">
            {PURPOSES.map((p) => (
              <button
                key={p.value}
                type="button"
                onClick={() => togglePurpose(p.value)}
                className={`badge text-sm px-3 py-1.5 cursor-pointer transition-colors ${
                  form.penPalPurpose.includes(p.value as any)
                    ? "bg-brand-600/20 text-brand-400 border border-brand-500/30"
                    : "bg-surface-800 text-surface-400 border border-surface-700 hover:border-surface-600"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Frequency & Wishlist */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-surface-300 text-sm font-medium mb-1.5">Preferred Letter Frequency</label>
            <select value={form.preferredLetterFrequency} onChange={(e) => setForm({ ...form, preferredLetterFrequency: e.target.value as any })} className="input-field">
              <option value="weekly">Weekly</option>
              <option value="biweekly">Every 2 Weeks</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div>
            <label className="block text-surface-300 text-sm font-medium mb-1.5">Wishlist Items (comma-separated)</label>
            <input type="text" value={form.wishlistItems} onChange={(e) => setForm({ ...form, wishlistItems: e.target.value })} className="input-field" placeholder="books, stamps, art supplies" />
          </div>
        </div>

        {/* Toggles */}
        <div className="flex flex-wrap gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={form.isFeatured} onChange={(e) => setForm({ ...form, isFeatured: e.target.checked })} className="w-4 h-4 rounded border-surface-600 text-brand-600 focus:ring-brand-500" />
            <span className="text-surface-300 text-sm">Featured Profile</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={form.isVerified} onChange={(e) => setForm({ ...form, isVerified: e.target.checked })} className="w-4 h-4 rounded border-surface-600 text-green-600 focus:ring-green-500" />
            <span className="text-surface-300 text-sm">Verified</span>
          </label>
          <div className="flex items-center gap-2">
            <label className="text-surface-300 text-sm">Status:</label>
            <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as any })} className="input-field w-32 py-1.5 text-sm">
              <option value="draft">Draft</option>
              <option value="active">Active</option>
              <option value="paused">Paused</option>
              <option value="removed">Removed</option>
            </select>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-surface-800/50">
          <button type="button" onClick={onClose} className="btn-secondary text-sm py-2 px-4">
            Cancel
          </button>
          <button type="submit" disabled={loading} className="btn-primary text-sm py-2 px-4">
            <Save className="w-4 h-4 mr-1.5" />
            {loading ? "Saving..." : profile ? "Update Profile" : "Create Profile"}
          </button>
        </div>
      </form>
    </div>
  );
}
