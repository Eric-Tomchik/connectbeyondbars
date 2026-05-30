import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

// ─── Public Queries ──────────────────────────────────────────

/** List active inmate profiles with filters */
export const list = query({
  args: {
    state: v.optional(v.string()),
    gender: v.optional(v.string()),
    purpose: v.optional(v.string()),
    featured: v.optional(v.boolean()),
    limit: v.optional(v.number()),
    cursor: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    let q = ctx.db
      .query("inmates")
      .withIndex("by_status", (q) => q.eq("status", "active"));

    const results = await q.collect();

    // Apply filters in memory (Convex doesn't support multi-field index filtering well)
    let filtered = results;

    if (args.state) {
      filtered = filtered.filter((i) => i.state === args.state);
    }
    if (args.gender) {
      filtered = filtered.filter((i) => i.gender === args.gender);
    }
    if (args.purpose) {
      filtered = filtered.filter((i) =>
        i.penPalPurpose.includes(args.purpose as any)
      );
    }
    if (args.featured) {
      filtered = filtered.filter((i) => i.isFeatured);
    }

    // Sort: featured first, then by newest
    filtered.sort((a, b) => {
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return b.createdAt - a.createdAt;
    });

    const limit = args.limit ?? 20;
    return filtered.slice(0, limit);
  },
});

/** Get a single profile by slug */
export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("inmates")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
  },
});

/** Get a single profile by ID */
export const getById = query({
  args: { id: v.id("inmates") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

/** Search profiles by bio text */
export const search = query({
  args: {
    query: v.string(),
    state: v.optional(v.string()),
    gender: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    let searchQuery = ctx.db
      .query("inmates")
      .withSearchIndex("search_profiles", (q) => {
        let s = q.search("bio", args.query);
        if (args.state) s = s.eq("state", args.state);
        if (args.gender) s = s.eq("gender", args.gender);
        s = s.eq("status", "active");
        return s;
      });

    return await searchQuery.collect();
  },
});

/** Get counts for stats */
export const getStats = query({
  handler: async (ctx) => {
    const active = await ctx.db
      .query("inmates")
      .withIndex("by_status", (q) => q.eq("status", "active"))
      .collect();

    const states = new Set(active.map((i) => i.state));

    return {
      totalProfiles: active.length,
      totalStates: states.size,
      verifiedCount: active.filter((i) => i.isVerified).length,
    };
  },
});

/** Get unique states from active profiles */
export const getStates = query({
  handler: async (ctx) => {
    const active = await ctx.db
      .query("inmates")
      .withIndex("by_status", (q) => q.eq("status", "active"))
      .collect();

    const states = [...new Set(active.map((i) => i.state))].sort();
    return states;
  },
});

/** Increment profile view count */
export const incrementViews = mutation({
  args: { id: v.id("inmates") },
  handler: async (ctx, args) => {
    const inmate = await ctx.db.get(args.id);
    if (!inmate) return;
    await ctx.db.patch(args.id, {
      profileViews: inmate.profileViews + 1,
    });
  },
});

// ─── Admin Mutations ─────────────────────────────────────────

/** Create a new inmate profile (admin only) */
export const create = mutation({
  args: {
    firstName: v.string(),
    lastName: v.string(),
    age: v.number(),
    gender: v.union(v.literal("male"), v.literal("female"), v.literal("non-binary"), v.literal("other")),
    dateOfBirth: v.optional(v.string()),
    state: v.string(),
    facility: v.string(),
    inmateId: v.optional(v.string()),
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
    bio: v.string(),
    interests: v.array(v.string()),
    education: v.optional(v.string()),
    languages: v.array(v.string()),
    religiousAffiliation: v.optional(v.string()),
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
    photoIds: v.optional(v.array(v.id("_storage"))),
    primaryPhotoId: v.optional(v.id("_storage")),
    wishlistItems: v.optional(v.array(v.string())),
    isFeatured: v.optional(v.boolean()),
    status: v.optional(v.union(v.literal("draft"), v.literal("active"))),
  },
  handler: async (ctx, args) => {
    // Generate slug from name
    const baseSlug = `${args.firstName}-${args.lastName}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    // Check for duplicates
    let slug = baseSlug;
    let counter = 1;
    while (
      await ctx.db
        .query("inmates")
        .withIndex("by_slug", (q) => q.eq("slug", slug))
        .first()
    ) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    const now = Date.now();

    return await ctx.db.insert("inmates", {
      ...args,
      slug,
      photoIds: args.photoIds ?? [],
      isVerified: false,
      isFeatured: args.isFeatured ?? false,
      status: args.status ?? "draft",
      profileViews: 0,
      correspondenceCount: 0,
      createdAt: now,
      updatedAt: now,
    });
  },
});

/** Update an inmate profile (admin only) */
export const update = mutation({
  args: {
    id: v.id("inmates"),
    firstName: v.optional(v.string()),
    lastName: v.optional(v.string()),
    age: v.optional(v.number()),
    gender: v.optional(v.union(v.literal("male"), v.literal("female"), v.literal("non-binary"), v.literal("other"))),
    dateOfBirth: v.optional(v.string()),
    state: v.optional(v.string()),
    facility: v.optional(v.string()),
    inmateId: v.optional(v.string()),
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
    bio: v.optional(v.string()),
    interests: v.optional(v.array(v.string())),
    education: v.optional(v.string()),
    languages: v.optional(v.array(v.string())),
    religiousAffiliation: v.optional(v.string()),
    penPalPurpose: v.optional(v.array(
      v.union(
        v.literal("friendship"),
        v.literal("mentorship"),
        v.literal("faith-based"),
        v.literal("creative-writing"),
        v.literal("educational")
      )
    )),
    preferredLetterFrequency: v.optional(
      v.union(v.literal("weekly"), v.literal("biweekly"), v.literal("monthly"))
    ),
    photoIds: v.optional(v.array(v.id("_storage"))),
    primaryPhotoId: v.optional(v.id("_storage")),
    wishlistItems: v.optional(v.array(v.string())),
    isVerified: v.optional(v.boolean()),
    verificationBadge: v.optional(
      v.union(v.literal("doc-verified"), v.literal("photo-verified"), v.literal("full-verified"))
    ),
    status: v.optional(v.union(
      v.literal("draft"),
      v.literal("active"),
      v.literal("paused"),
      v.literal("removed")
    )),
    isFeatured: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    const existing = await ctx.db.get(id);
    if (!existing) throw new Error("Profile not found");

    await ctx.db.patch(id, {
      ...updates,
      updatedAt: Date.now(),
    });
  },
});

/** Delete an inmate profile (admin only) */
export const remove = mutation({
  args: { id: v.id("inmates") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

/** List all profiles for admin (including drafts) */
export const adminList = query({
  handler: async (ctx) => {
    return await ctx.db.query("inmates").order("desc").collect();
  },
});
