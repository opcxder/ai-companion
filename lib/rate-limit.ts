import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

//allow user to requestion within 10s time frame
export async function rateLimit(identifier: string) {

  // Create new Ratelimit instance
  const rateLimit = new Ratelimit({

    redis: Redis.fromEnv(), // Redis client for storing rate limit data
    limiter: Ratelimit.slidingWindow(10, "10 s"),
    analytics: true,
    prefix: "@upstash/ratelimit",
  });

  return await rateLimit.limit(identifier);
}

//The identifier is a unique string used to identify each user or client for rate limiting.