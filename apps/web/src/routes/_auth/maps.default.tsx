import {
  createFileRoute,
  Outlet,
  ErrorComponent,
} from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import {
  Map,
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
  ScaleControl,
  MapLayerMouseEvent,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { useCallback, useState } from "react";
import { MAPBOX_PUBLIC_KEY } from "../../lib/constants";
import { useMatches } from "@mantine/core";
import HomeControl from "../../components/map/map-home";
import Search from "~/components/map/map-search";
import {
  DEFAULT_LAT,
  DEFAULT_LNG,
  getBasemapStyle,
  mapSearchSchema,
} from "~/lib/map";
import LayerDrawer from "~/components/map/layer-drawer";
import RainRadarLayer from "~/components/map/rain-radar-layer";
import SitesLayer from "~/components/map/sites-layer";

export const Route = createFileRoute("/_auth/maps/default")({
  component: MapPage,
  errorComponent: ErrorComponent,
  validateSearch: zodValidator(mapSearchSchema),
});

function MapPage() {
  const navigate = Route.useNavigate();
  const search = Route.useSearch();

  const [cursor, setCursor] = useState<string>("auto");

  const showFullScreen = useMatches({
    base: false,
    sm: true,
  });

  const handleMapClick = useCallback(({ features }: MapLayerMouseEvent) => {
    const siteId = features?.[0]?.properties?.id;

    if (siteId) {
      navigate({
        to: "/maps/default/sites/$siteId",
        params: { siteId },
        search: (prev) => ({ ...prev }),
      });
    }
  }, []);

  const onMouseEnter = useCallback(() => setCursor("pointer"), []);
  const onMouseLeave = useCallback(() => setCursor("auto"), []);

  return (
    <Map
      mapboxAccessToken={MAPBOX_PUBLIC_KEY}
      initialViewState={{
        latitude: search.lat,
        longitude: search.lng,
        zoom: search.zoom,
        // Default view to bounding box of New Zealand
        bounds:
          search.lat === DEFAULT_LAT && search.lng === DEFAULT_LNG
            ? [
                [165.954319, -47.436123],
                [179.229264, -33.217074],
              ]
            : undefined,
      }}
      onMoveEnd={(e) =>
        navigate({
          search: (prev) => ({
            ...prev,
            zoom: e.viewState.zoom,
            lat: e.viewState.latitude,
            lng: e.viewState.longitude,
          }),
        })
      }
      style={{ width: "100%", height: "100vh" }}
      mapStyle={getBasemapStyle(search.base)}
      interactiveLayerIds={["point", "point-label"]}
      onClick={handleMapClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      cursor={cursor}
    >
      <Search />

      {showFullScreen && <FullscreenControl position="top-right" />}

      <HomeControl position="top-right" />

      <NavigationControl position="bottom-right" />

      <GeolocateControl position="bottom-right" />

      <ScaleControl />

      {/* <SitesRefinementDrawer /> */}

      <LayerDrawer />

      <SitesLayer />

      {search.layers.includes("rain-radar") && <RainRadarLayer />}

      <Outlet />
    </Map>
  );
}
