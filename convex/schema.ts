import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  newsletter: defineTable({
    email: v.string(),
    subscribedAt: v.number(),
  }).index('email', ['email']),
});
