import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

/** Add email to waitlist */
export const join = mutation({
  args: {
    email: v.string(),
    name: v.optional(v.string()),
    type: v.union(v.literal("writer"), v.literal("family"), v.literal("organization")),
    message: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Check if already on waitlist
    const existing = await ctx.db
      .query("waitlist")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (existing) return { alreadyExists: true, id: existing._id };

    const id = await ctx.db.insert("waitlist", {
      ...args,
      createdAt: Date.now(),
    });

    return { alreadyExists: false, id };
  },
});

/** Admin: list all waitlist entries */
export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("waitlist").order("desc").collect();
  },
});

/** Admin: get waitlist count */
export const count = query({
  handler: async (ctx) => {
    const all = await ctx.db.query("waitlist").collect();
    return all.length;
  },
});
