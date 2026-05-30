import { v } from "convex/values";
import { query, mutation } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

/** Get the current writer profile for the logged-in user */
export const me = query({
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return null;

    return await ctx.db
      .query("writers")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .first();
  },
});

/** Create a writer profile after registration */
export const create = mutation({
  args: {
    displayName: v.string(),
    email: v.string(),
    bio: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    // Check if writer already exists
    const existing = await ctx.db
      .query("writers")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .first();

    if (existing) return existing._id;

    const now = Date.now();
    return await ctx.db.insert("writers", {
      userId,
      displayName: args.displayName,
      email: args.email,
      bio: args.bio,
      subscriptionTier: "free",
      lettersSent: 0,
      activePenPals: 0,
      monthsOfCorrespondence: 0,
      isActive: true,
      ageVerified: true, // They confirmed during registration
      joinedAt: now,
      lastActiveAt: now,
    });
  },
});

/** Update writer profile */
export const update = mutation({
  args: {
    displayName: v.optional(v.string()),
    bio: v.optional(v.string()),
    photoId: v.optional(v.id("_storage")),
    maxActivePenPals: v.optional(v.number()),
    preferredAgeRange: v.optional(v.object({
      min: v.number(),
      max: v.number(),
    })),
    preferredStates: v.optional(v.array(v.string())),
    correspondenceGoals: v.optional(v.array(v.string())),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const writer = await ctx.db
      .query("writers")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .first();

    if (!writer) throw new Error("Writer profile not found");

    await ctx.db.patch(writer._id, {
      ...args,
      lastActiveAt: Date.now(),
    });
  },
});

/** Save/bookmark an inmate profile */
export const saveProfile = mutation({
  args: { inmateId: v.id("inmates") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const writer = await ctx.db
      .query("writers")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .first();

    if (!writer) throw new Error("Writer profile not found");

    // Check if already saved
    const existing = await ctx.db
      .query("savedProfiles")
      .withIndex("by_writer_inmate", (q) =>
        q.eq("writerId", writer._id).eq("inmateId", args.inmateId)
      )
      .first();

    if (existing) return existing._id;

    return await ctx.db.insert("savedProfiles", {
      writerId: writer._id,
      inmateId: args.inmateId,
      savedAt: Date.now(),
    });
  },
});

/** Unsave a profile */
export const unsaveProfile = mutation({
  args: { inmateId: v.id("inmates") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const writer = await ctx.db
      .query("writers")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .first();

    if (!writer) return;

    const saved = await ctx.db
      .query("savedProfiles")
      .withIndex("by_writer_inmate", (q) =>
        q.eq("writerId", writer._id).eq("inmateId", args.inmateId)
      )
      .first();

    if (saved) await ctx.db.delete(saved._id);
  },
});

/** Get saved profiles for the current writer */
export const getSavedProfiles = query({
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];

    const writer = await ctx.db
      .query("writers")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .first();

    if (!writer) return [];

    const saved = await ctx.db
      .query("savedProfiles")
      .withIndex("by_writer", (q) => q.eq("writerId", writer._id))
      .collect();

    // Fetch inmate details
    const profiles = await Promise.all(
      saved.map(async (s) => {
        const inmate = await ctx.db.get(s.inmateId);
        return inmate ? { ...s, inmate } : null;
      })
    );

    return profiles.filter(Boolean);
  },
});

/** Update subscription tier (called by Stripe webhook) */
export const updateSubscription = mutation({
  args: {
    stripeCustomerId: v.string(),
    subscriptionTier: v.union(v.literal("free"), v.literal("premium")),
    stripeSubscriptionId: v.optional(v.string()),
    subscriptionExpiresAt: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const writer = await ctx.db
      .query("writers")
      .withIndex("by_stripeCustomerId", (q) =>
        q.eq("stripeCustomerId", args.stripeCustomerId)
      )
      .first();

    if (!writer) throw new Error("Writer not found for Stripe customer");

    await ctx.db.patch(writer._id, {
      subscriptionTier: args.subscriptionTier,
      stripeSubscriptionId: args.stripeSubscriptionId,
      subscriptionExpiresAt: args.subscriptionExpiresAt,
    });
  },
});

/** Admin: list all writers */
export const adminList = query({
  handler: async (ctx) => {
    return await ctx.db.query("writers").order("desc").collect();
  },
});

/** Get writer stats for admin dashboard */
export const getStats = query({
  handler: async (ctx) => {
    const allWriters = await ctx.db.query("writers").collect();
    return {
      total: allWriters.length,
      premium: allWriters.filter((w) => w.subscriptionTier === "premium").length,
      free: allWriters.filter((w) => w.subscriptionTier === "free").length,
      active: allWriters.filter((w) => w.isActive).length,
    };
  },
});
