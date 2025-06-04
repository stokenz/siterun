import { Source, Layer } from "react-map-gl";
import { useSitesServiceFindManySitesGeoJson } from "~/api/queries";

/**
 * Takes the site search results and maps them to a GeoJSON
 * map layer.
 * @returns
 */
export default function SitesLayer() {
  const { data: sites } = useSitesServiceFindManySitesGeoJson();

  return (
    <Source id="sites" type="geojson" data={sites}>
      <Layer
        id="point"
        type="circle"
        paint={{
          "circle-radius": 7,
          "circle-color": "green",
          "circle-stroke-color": "white",
          "circle-stroke-width": 2,
        }}
      />
      <Layer
        id="point-label"
        type="symbol"
        layout={{
          "text-field": "{code}",
          "text-offset": [0, 0.5],
          "text-anchor": "top",
        }}
        paint={{
          "text-color": "#000",
          "text-halo-color": "#fff",
          "text-halo-width": 1,
        }}
      />
    </Source>
  );
}
