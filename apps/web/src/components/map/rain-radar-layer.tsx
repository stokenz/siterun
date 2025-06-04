import { Layer, Source } from "react-map-gl";
import { useRainRadar } from "~/lib/rain-radar";

export default function RainRadarLayer() {
  const rainRadar = useRainRadar();

  return (
    <Source
      id="rain-radar"
      type="raster"
      tiles={rainRadar.isSuccess ? [rainRadar.data.radar] : []}
      tileSize={256}
      attribution='<a href="https://www.rainviewer.com/api.html">Rain Viewer API</a>'
    >
      <Layer
        type="raster"
        paint={{
          "raster-opacity": 0.8,
        }}
      />
    </Source>
  );
}
