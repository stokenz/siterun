import z from "zod";
import { paginationOutputSchema } from "./pagination";

export const tagOutputSchema = z.object({
  id: z.string(),
  name: z.string().min(1).max(10),
  description: z.string(),
  color: z
    .string()
    .refine(
      (value) => /^#[0-9A-F]{6}$/i.test(value),
      "Please provide a valid hex color code (ie hash followed by 6 characters 0-9 or A-F like #FF0000)",
    ),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const tagInputSchema = tagOutputSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const tagPaginationOutputSchema = paginationOutputSchema.extend({
  records: z.array(tagOutputSchema),
});
