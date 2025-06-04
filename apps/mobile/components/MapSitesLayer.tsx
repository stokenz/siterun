import { SiteOutputDto } from "@/api/requests";
import { useMemo, useEffect } from "react";
import { useInfiniteHits } from "react-instantsearch";
import { Marker } from "react-native-maps";
import { View, Text } from "react-native";
import Svg, { Circle, Path, Rect, Text as SvgText } from "react-native-svg";
interface Props {
  onPress: (properties: SiteOutputDto, event: any) => void;
}

/**
 * Takes the site search results from Typesense and maps them to a GeoJSON
 * map layer.
 * @returns
 */
export default function SitesLayer({ onPress }: Props) {
  const infiniteHitsApi = useInfiniteHits();

  const geojson = useMemo(() => {
    if (!infiniteHitsApi.items || infiniteHitsApi.items.length === 0) {
      return {
        type: "FeatureCollection",
        features: [],
      };
    }

    return {
      type: "FeatureCollection" as const,
      features: infiniteHitsApi.items.map((hit) => ({
        type: "Feature" as const,
        properties: hit as unknown as SiteOutputDto,
        geometry: {
          type: "Point" as const,
          coordinates: [hit._geoloc?.lng as number, hit._geoloc?.lat as number],
        },
      })),
    };
  }, [infiniteHitsApi.items]);

  useEffect(() => {
    if (!infiniteHitsApi.isLastPage) {
      infiniteHitsApi.showMore();
    }
  }, [infiniteHitsApi.results?.page, infiniteHitsApi.isLastPage]);

  // Using Marker component instead of Geojson because it allows for
  // customizing the text labels and marker icons
  return geojson.features.map((feature) => (
    <Marker
      key={feature.properties.id}
      onPress={() => onPress(feature.properties, feature)}
      coordinate={{
        latitude: feature.geometry.coordinates[1],
        longitude: feature.geometry.coordinates[0],
      }}
      identifier={feature.properties.id}
      tracksViewChanges={false}
    >
      <Svg viewBox="0 0 200 100" style={{ width: 100, height: 50 }}>
        <Circle cx="25" cy="25" r="25" translateX={75} fill="white" />
        <Circle cx="25" cy="25" r="20" translateX={75} fill="green" />
        <SvgText
          fontSize={32}
          fill="black"
          textAnchor="middle"
          translateY={77}
          x="50%"
          stroke="white"
          strokeWidth={5}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity={0.9}
        >
          {feature.properties.code}
        </SvgText>
        <SvgText
          fontSize={32}
          fill="black"
          textAnchor="middle"
          translateY={77}
          x="50%"
        >
          {feature.properties.code}
        </SvgText>
      </Svg>
    </Marker>
  ));
}
