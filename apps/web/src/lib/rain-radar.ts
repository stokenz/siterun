import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const rainRadarSchema = z.object({
  version: z.string(),
  generated: z.number(),
  // Host and protocol for the images.
  host: z.string(),
  // Weather radar maps.
  radar: z.object({
    // Past weather radar frames. 2 hours, with 10-minute steps.
    past: z.array(
      z.object({
        time: z.number(),
        path: z.string(),
      }),
    ),
    // Future weather radar frames. 30 minutes
    nowcast: z.array(
      z.object({
        time: z.number(),
        path: z.string(),
      }),
    ),
  }),
  // Past 2 hours of the infrared satellite data (channel 13) from the available satellites.
  satellite: z.object({
    infrared: z.array(
      z.object({
        time: z.number(),
        path: z.string(),
      }),
    ),
  }),
});

/**
 * Fetches the rain radar data from the RainViewer API
 *
 * https://www.rainviewer.com/api/weather-maps-api.html
 */
export const useRainRadar = (options: { enabled?: boolean } = {}) =>
  useQuery({
    queryKey: ["rain-radar"],
    queryFn: () =>
      fetch("https://api.rainviewer.com/public/weather-maps.json")
        .then((res) => res.json())
        .then((data) => rainRadarSchema.parseAsync(data))
        .then((data) => ({
          // {host}/{path}/{size}/{z}/{x}/{y}/{color}/{options}.png
          radar: `${data.host}/${data.radar.past[0].path}/256/{z}/{x}/{y}/2/1_0.png`,
          satellite: `${data.host}/${data.satellite.infrared[0].path}/256/{z}/{x}/{y}/0/0_0.png`,
        }))
        .catch((err) => Promise.reject(err.message)),
    ...options,
  });
