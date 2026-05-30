import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

/** Generate an upload URL for file storage */
export const generateUploadUrl = mutation({
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

/** Get a file URL by storage ID */
export const getUrl = query({
  args: { storageId: v.id("_storage") },
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.storageId);
  },
});
