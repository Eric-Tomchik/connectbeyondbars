import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

export default defineSchema({
  ...authTables,

  inmates: defineTable({
    // Basic info
    firstName: v.string(),
    lastName: v.string(),
    slug: v.string(),
    age: v.number(),
    gender: v.union(
      v.literal("male"),
      v.literal("female"),
      v.literal("non-binary"),
      v.literal("other")
    ),
    dateOfBirth: v.optional(v.string()),

    // Location
    state: v.string(),
    facility: v.string(),
    inmateId: v.optional(v.string()),

    // Legal
    offenseCategory: v.optional(
      v.union(
        v.literal("non-violent"),
        v.literal("violent"),
        v.literal("drug"),
        v.literal("financial"),
        v.literal("other")
      )
    ),
    sentenceType: v.optional(v.string()),
    expectedReleaseDate: v.optional(v.string()),

    // Profile content
    bio: v.string(),
    interests: v.array(v.string()),
    education: v.optional(v.string()),
    languages: v.array(v.string()),
    religiousAffiliation: v.optional(v.string()),

    // Pen pal preferences
    penPalPurpose: v.array(
      v.union(
        v.literal("friendship"),
        v.literal("mentorship"),
        v.literal("faith-based"),
        v.literal("creative-writing"),
        v.literal("educational")
      )
    ),
    preferredLetterFrequency: v.optional(
      v.union(v.literal("weekly"), v.literal("biweekly"), v.literal("monthly"))
    ),

    // Media
    photoIds: v.array(v.id("_storage")),
    primaryPhotoId: v.optional(v.id("_storage")),

    // Wishlist
    wishlistItems: v.optional(v.array(v.string())),

    // Verification
    isVerified: v.boolean(),
    verificationBadge: v.optional(
      v.union(
        v.literal("doc-verified"),
        v.literal("photo-verified"),
        v.literal("full-verified")
      )
    ),
    foundingMember: v.optional(v.boolean()),

    // Admin
    status: v.union(
      v.literal("draft"),
      v.literal("active"),
      v.literal("paused"),
      v.literal("removed")
    ),
    isFeatured: v.boolean(),

    // Stats
    profileViews: v.number(),
    correspondenceCount: v.number(),

    // Timestamps
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_slug", ["slug"])
    .index("by_status", ["status"])
    .index("by_state", ["state"])
    .index("by_featured", ["isFeatured"])
    .searchIndex("search_profiles", {
      searchField: "bio",
      filterFields: ["status", "state", "gender"],
    }),

  writers: defineTable({
    userId: v.id("users"),
    displayName: v.string(),
    email: v.string(),
    bio: v.optional(v.string()),
    photoId: v.optional(v.id("_storage")),

    // Subscription
    subscriptionTier: v.union(v.literal("free"), v.literal("premium")),
    stripeCustomerId: v.optional(v.string()),
    stripeSubscriptionId: v.optional(v.string()),
    subscriptionExpiresAt: v.optional(v.number()),

    // Preferences
    maxActivePenPals: v.optional(v.number()),
    preferredAgeRange: v.optional(
      v.object({ min: v.number(), max: v.number() })
    ),
    preferredStates: v.optional(v.array(v.string())),
    correspondenceGoals: v.optional(v.array(v.string())),

    // Stats
    lettersSent: v.number(),
    activePenPals: v.number(),
    monthsOfCorrespondence: v.number(),

    // Status
    isActive: v.boolean(),
    ageVerified: v.boolean(),

    // Timestamps
    joinedAt: v.number(),
    lastActiveAt: v.number(),
  })
    .index("by_userId", ["userId"])
    .index("by_email", ["email"])
    .index("by_stripeCustomerId", ["stripeCustomerId"]),

  savedProfiles: defineTable({
    writerId: v.id("writers"),
    inmateId: v.id("inmates"),
    savedAt: v.number(),
  })
    .index("by_writer", ["writerId"])
    .index("by_writer_inmate", ["writerId", "inmateId"]),

  letters: defineTable({
    writerId: v.id("writers"),
    inmateId: v.id("inmates"),
    content: v.string(),
    status: v.union(
      v.literal("draft"),
      v.literal("pending_review"),
      v.literal("approved"),
      v.literal("sent"),
      v.literal("delivered"),
      v.literal("rejected")
    ),
    moderationNotes: v.optional(v.string()),
    sentAt: v.optional(v.number()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_writer", ["writerId"])
    .index("by_inmate", ["inmateId"])
    .index("by_status", ["status"]),

  waitlist: defineTable({
    email: v.string(),
    name: v.optional(v.string()),
    type: v.union(
      v.literal("writer"),
      v.literal("family"),
      v.literal("organization")
    ),
    message: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_email", ["email"]),

  adminLogs: defineTable({
    action: v.string(),
    targetType: v.string(),
    targetId: v.optional(v.string()),
    details: v.optional(v.string()),
    adminUserId: v.optional(v.id("users")),
    createdAt: v.number(),
  }).index("by_action", ["action"]),
});
