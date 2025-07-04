import { mutation } from './_generated/server';
import { v } from 'convex/values';

export const subscribe = mutation({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("newsletter")
      .withIndex("email", (q) => q.eq("email", args.email))
      .unique();

    if (existing) return { status: "already" as const };

    await ctx.db.insert("newsletter", {
      email: args.email,
      subscribedAt: Date.now(),
    });

    return { status: "success" as const };
  },
});
