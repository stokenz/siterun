import z from "zod";
import { deviceOutputSchema } from "./device";
import { paginationOutputSchema } from "./pagination";

export const alarmOutputSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  description: z.string(),
  severity: z.number(),
  onAt: z.date(),
  offAt: z.date().nullable(),
  deviceId: z.string().min(1),
  device: deviceOutputSchema.omit({ site: true }),
  createdAt: z.date(),
});

export const alarmPaginationOutputSchema = paginationOutputSchema.extend({
  records: z.array(alarmOutputSchema),
});

export const alarmInputSchema = alarmOutputSchema.omit({
  id: true,
  device: true,
  createdAt: true,
});
