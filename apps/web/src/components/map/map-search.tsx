import { useMap } from "react-map-gl";
import SiteSearch from "../search/site-search";
import { Flex, Text } from "@mantine/core";
import { IconCellSignal5 } from "@tabler/icons-react";
import { useNavigate } from "@tanstack/react-router";

export default function MapSearch() {
  const { current: map } = useMap();
  const navigate = useNavigate();

  return (
    <Flex
      style={{
        position: "absolute",
        top: 10,
        left: 20,
        zIndex: 210,
        width: 360,
      }}
    >
      <SiteSearch
        renderOptionLabel={({ code, name }) => (
          <Flex gap="md" align="center">
            <div>
              <IconCellSignal5 />
            </div>
            <div>
              <Text fz="sm" fw="bold">
                {code}
              </Text>
              <Text fz="xs" opacity={0.6}>
                {name}
              </Text>
            </div>
          </Flex>
        )}
        enableGeocoding
        onSelect={({ id, latitude, longitude, type }) => {
          map?.flyTo({ center: [longitude, latitude], zoom: 14 });
          if (type === "site") {
            navigate({
              to: "/maps/default",
              search: (prev) => ({ ...prev, siteId: id }),
            });
          }
        }}
        baseProps={{ w: "100%", size: "md" }}
        // Close sidebar on clear
        onClear={() => {
          navigate({
            to: "/maps/default",
            search: (prev) => ({ ...prev }),
          });
        }}
      />
    </Flex>
  );
}
