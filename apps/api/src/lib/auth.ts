import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { betterAuth } from "better-auth";
import { db } from "./db";
import { admin, apiKey, organization } from "better-auth/plugins";

const { BETTER_AUTH_URL, BETTER_AUTH_SECRET } = process.env;

export const auth: ReturnType<typeof betterAuth> = betterAuth({
  appName: "SiteRun",
  basePath: "/api",
  database: drizzleAdapter(db, { provider: "pg" }),
  baseURL: BETTER_AUTH_URL,
  secret: BETTER_AUTH_SECRET,
  plugins: [admin(), apiKey(), organization()],
});
