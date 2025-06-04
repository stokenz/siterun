import MapPreviewSatellite from "../assets/map/map-satellite.png";
import MapPreviewStreets from "../assets/map/map-streets.png";
import MapPreviewTerrain from "../assets/map/map-terrain.png";
import MapPreviewRadar from "../assets/map/map-radar.png";
import MapPreviewOutage from "../assets/map/map-outage.png";
import { z } from "zod";
import { fallback } from "@tanstack/zod-adapter";

export const DEFAULT_BASE = "streets";
export const DEFAULT_LAYERS: MapOverlay[] = [];
export const DEFAULT_ZOOM = 10;
export const DEFAULT_LAT = -36.848461;
export const DEFAULT_LNG = 174.763336;

export const basemapStyles = ["streets", "satellite", "terrain"] as const;

export type BasemapStyle = (typeof basemapStyles)[number];

export const basemapStyleOptions: { value: BasemapStyle; label: string }[] = [
  { value: "streets", label: "Streets" },
  { value: "satellite", label: "Satellite" },
  { value: "terrain", label: "Terrain" },
];

/**
 * Get Mapbox GL style URL based on user selected base style
 *
 * @param base - User selected base style
 * @param colorScheme - Mantine color scheme
 * @returns
 */
export function getBasemapStyle(base: BasemapStyle) {
  switch (base) {
    case "streets":
      return "mapbox://styles/stokedevelopment/cm3xt5zp7005w01rcacwn6t9o"; // Simple Streets
    case "satellite":
      return "mapbox://styles/mapbox/satellite-streets-v12";
    case "terrain":
      return "mapbox://styles/mapbox/outdoors-v12";
  }
}

/**
 * Get background image for the basemap select.
 *
 * @param base - User selected base style
 * @returns
 */
export function getBasemapStyleBackground(base: BasemapStyle) {
  switch (base) {
    case "streets":
      return MapPreviewStreets;
    case "satellite":
      return MapPreviewSatellite;
    case "terrain":
      return MapPreviewTerrain;
  }
}

export const mapOverlays = ["power-outages", "rain-radar"] as const;

export type MapOverlay = (typeof mapOverlays)[number];

export const mapOverlayOptions: {
  value: MapOverlay;
  label: string;
}[] = [
  { value: "power-outages", label: "Power Outages" },
  { value: "rain-radar", label: "Rain Radar" },
];

export function getMapOverlayBackground(overlay: MapOverlay) {
  switch (overlay) {
    case "power-outages":
      return MapPreviewOutage;
    case "rain-radar":
      return MapPreviewRadar;
  }
}

export const mapSearchSchema = z.object({
  base: fallback(z.enum(basemapStyles), DEFAULT_BASE).default(DEFAULT_BASE),
  layers: fallback(
    z.enum(["power-outages", "rain-radar"]).array(),
    DEFAULT_LAYERS,
  ).default(DEFAULT_LAYERS),
  zoom: fallback(z.number(), DEFAULT_ZOOM).default(DEFAULT_ZOOM),
  lat: fallback(z.number(), DEFAULT_LAT).default(DEFAULT_LAT),
  lng: fallback(z.number(), DEFAULT_LNG).default(DEFAULT_LNG),
});
