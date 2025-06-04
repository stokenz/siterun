import z from "zod";
import { siteOutputSchema } from "./site";
import { paginationOutputSchema } from "./pagination";

export const deviceOutputSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  siteId: z.string().min(1),
  site: siteOutputSchema.omit({ tags: true }),
  createdAt: z.date(),
  ipAddress: z.string().ip().nullable(),
  port: z.coerce.number().int().positive().nullable(),
  username: z.string().nullable(),
  password: z.string().nullable(),
  protocol: z.string().nullable(),
  active: z.boolean(),
});

export const deviceInputSchema = deviceOutputSchema.omit({
  id: true,
  site: true,
  createdAt: true,
});

export const devicePaginationOutputSchema = paginationOutputSchema.extend({
  records: z.array(deviceOutputSchema),
});
