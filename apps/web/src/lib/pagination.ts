import { z } from "zod";

export const paginationSchema = z.object({
  page: z.number().int().nonnegative().catch(1),
  recordsPerPage: z.number().int().nonnegative().catch(100),
});
