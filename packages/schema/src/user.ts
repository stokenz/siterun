import z from "zod";
import { paginationOutputSchema } from "./pagination";

export const userOutputSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  active: z.boolean(),
  address: z.string(),
  createdAt: z.date(),
});

export const userInputSchema = userOutputSchema.omit({
  id: true,
  createdAt: true,
});

export const userPaginationOutputSchema = paginationOutputSchema.extend({
  records: z.array(userOutputSchema),
});
