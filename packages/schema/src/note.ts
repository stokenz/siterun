import z from "zod";
import { userOutputSchema } from "./user";
import { paginationOutputSchema } from "./pagination";

export const noteOutputSchema = z.object({
  id: z.string(),
  text: z.string(),
  user: userOutputSchema,
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const noteInputSchema = noteOutputSchema.omit({
  id: true,
  user: true,
  createdAt: true,
  updatedAt: true,
});

export const notePaginationOutputSchema = paginationOutputSchema.extend({
  records: z.array(noteOutputSchema),
});
