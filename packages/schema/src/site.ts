import z from "zod";
import { tagOutputSchema } from "./tag";
import { paginationOutputSchema } from "./pagination";
import { latitude, longitude } from "./utils";

export const siteOutputSchema = z.object({
  id: z.string(),
  code: z.string(),
  name: z.string(),
  longitude,
  latitude,
  tags: z.array(tagOutputSchema),
  createdAt: z.string().datetime(),
});

export const siteInputSchema = siteOutputSchema
  .omit({
    id: true,
    createdAt: true,
  })
  .extend({
    // Connect tags by id
    tags: z.array(z.string()),
  });

export const sitePaginationOutputSchema = paginationOutputSchema.extend({
  records: z.array(siteOutputSchema),
});

export const siteGeoJSONOutputSchema = z.object({
  type: z.literal("FeatureCollection"),
  features: z.array(
    z.object({
      type: z.literal("Feature"),
      properties: z.object({
        id: z.string(),
        code: z.string(),
        name: z.string(),
        tags: z.array(z.string()), // Tag IDs
      }),
      geometry: z.object({
        type: z.literal("Point"),
        coordinates: z.tuple([longitude, latitude]),
      }),
    }),
  ),
});
