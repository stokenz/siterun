import { useGeocodingCore } from "@mapbox/search-js-react";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { MAPBOX_PUBLIC_KEY } from "~/lib/constants";

type GeocodingOption = {
  id: string;
  name: string;
  place: string;
  latitude: number;
  longitude: number;
};

const geocodingFeaturesSchema = z.array(
  z.object({
    properties: z.object({
      mapbox_id: z.string(),
      name_preferred: z.string(),
      place_formatted: z.string(),
    }),
    geometry: z.object({
      coordinates: z.array(z.number()),
    }),
  }),
);

export function useGeocodingSearch(
  query: string,
  enabled: boolean,
  country: "nz",
): {
  isFetching: boolean;
  data?: GeocodingOption[];
} {
  const geocodingCore = useGeocodingCore({
    accessToken: MAPBOX_PUBLIC_KEY,
    country,
  });

  const addressSearchResults = useQuery({
    queryKey: ["addressSearch", query],
    queryFn: async () => {
      if (!query) {
        return [];
      }

      const results = await geocodingCore.forward(query);

      const features = await geocodingFeaturesSchema.safeParseAsync(
        results.features,
      );

      if (!features.success) {
        throw new Error(features.error.message);
      }

      return features.data.map((feature) => ({
        id: feature.properties.mapbox_id,
        name: feature.properties.name_preferred,
        place: feature.properties.place_formatted,
        latitude: feature.geometry.coordinates[1],
        longitude: feature.geometry.coordinates[0],
      }));
    },
    enabled,
  });

  return {
    isFetching: addressSearchResults.isFetching,
    data: addressSearchResults.data,
  };
}
