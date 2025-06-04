import { MAPBOX_PUBLIC_KEY } from "./constants";

// https://docs.mapbox.com/api/navigation/directions/#route-object
type MapboxRoute = {
  routes: {
    // Total duration in seconds
    duration: number;
    // Total distance in meters
    distance: number;
    geometry: {
      coordinates: [number, number][];
      type: "LineString";
    };
    legs: {
      duration: number;
      distance: number;
    }[];
  }[];
};

export async function calculateRoute(
  locations: {
    name: string;
    longitude: number;
    latitude: number;
  }[],
): Promise<MapboxRoute | null> {
  try {
    const validLocations = locations.filter(
      (site) =>
        site.name.length > 0 &&
        site.longitude !== null &&
        site.latitude !== null,
    );
    const params = validLocations
      .map((loc) => `${loc.longitude},${loc.latitude}`)
      .join(";");
    const formData = new URLSearchParams();
    formData.append("coordinates", params);
    formData.append("alternatives", "false");
    formData.append("geometries", "geojson");
    formData.append("overview", "full");
    formData.append("steps", "false");

    const mbResponse = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving?access_token=${MAPBOX_PUBLIC_KEY}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
        body: formData,
      },
    );

    if (!mbResponse.ok) {
      console.log(mbResponse.status, mbResponse.statusText);
      return null;
    }

    const mbData = await mbResponse.json();

    return mbData;
  } catch (error) {
    console.error(error);
    return null;
  }
}
