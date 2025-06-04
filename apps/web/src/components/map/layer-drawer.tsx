import {
  Drawer,
  Stack,
  Group,
  Title,
  CloseButton,
  Flex,
  BackgroundImage,
  Checkbox,
  Radio,
  Text,
  useMatches,
} from "@mantine/core";
import DrawerButton from "./drawer-button";
import { useDisclosure } from "@mantine/hooks";
import { IconMap } from "@tabler/icons-react";
import {
  BasemapStyle,
  basemapStyleOptions,
  getBasemapStyleBackground,
  MapOverlay,
  mapOverlayOptions,
  getMapOverlayBackground,
  DEFAULT_BASE,
} from "~/lib/map";
import { useNavigate, useSearch } from "@tanstack/react-router";

/**
 * Layer drawer for choosing the basemap and additional data overlays.
 * This renders the button that opens the drawer and the drawer itself.
 * Overlays include weather, traffic, and other data layers.
 * @returns
 */
export default function LayerDrawer() {
  const [opened, actions] = useDisclosure(false);

  const search = useSearch({ from: "/_auth/maps/default" });
  const navigate = useNavigate({ from: "/maps/default" });

  const isMobile = useMatches({
    base: true,
    sm: false,
  });

  const hasModifiedLayers =
    search.base !== DEFAULT_BASE || search.layers.length > 0;

  return (
    <>
      <Flex
        style={{
          position: "absolute",
          top: 14,
          left: 470,
        }}
      >
        <DrawerButton
          label="Layers"
          opened={opened}
          actions={actions}
          icon={<IconMap />}
          showIndicator={hasModifiedLayers}
        />
      </Flex>

      <Drawer
        opened={opened}
        onClose={actions.close}
        position="right"
        withCloseButton={false}
        withOverlay={false}
        keepMounted
        withinPortal={false}
        styles={{
          content: {
            marginRight: isMobile ? 0 : 85,
          },
        }}
      >
        <Stack>
          <Group justify="space-between">
            <Title>Layers</Title>

            <CloseButton
              size="lg"
              onClick={actions.close}
              aria-label="Close layer drawer"
            />
          </Group>

          <Radio.Group
            value={search.base}
            onChange={(newBase) =>
              navigate({
                search: (prev) => ({
                  ...prev,
                  base: newBase as BasemapStyle,
                }),
              })
            }
            label="Basemap"
            description="The background layer of the map"
          >
            <Stack pt="md" gap="xs">
              {basemapStyleOptions.map((option) => (
                <Radio.Card radius="md" value={option.value} key={option.value}>
                  <BackgroundImage
                    src={getBasemapStyleBackground(option.value)}
                    radius="sm"
                    pos="relative"
                  >
                    <Group p="md" gap="sm" w="100%">
                      <Radio.Indicator />

                      <Text
                        size="lg"
                        fw="bold"
                        c="white"
                        style={{ textShadow: "#000 0 0 5px" }}
                      >
                        {option.label}
                      </Text>
                    </Group>
                  </BackgroundImage>
                </Radio.Card>
              ))}
            </Stack>
          </Radio.Group>

          <Checkbox.Group
            value={search.layers}
            onChange={(newAdditionalLayers) => {
              navigate({
                search: (prev) => ({
                  ...prev,
                  layers: newAdditionalLayers as MapOverlay[],
                }),
              });
            }}
            label="Overlays"
            description="Add more information to the map"
          >
            <Stack pt="md" gap="xs">
              {mapOverlayOptions.map((option) => (
                <Checkbox.Card
                  radius="md"
                  value={option.value}
                  key={option.value}
                >
                  <BackgroundImage
                    src={getMapOverlayBackground(option.value)}
                    radius="sm"
                  >
                    <Group p="md" gap="sm" w="100%">
                      <Checkbox.Indicator />

                      <Text
                        size="lg"
                        fw="bold"
                        c="white"
                        style={{ textShadow: "#000 0 0 5px" }}
                      >
                        {option.label}
                      </Text>
                    </Group>
                  </BackgroundImage>
                </Checkbox.Card>
              ))}
            </Stack>
          </Checkbox.Group>
        </Stack>
      </Drawer>
    </>
  );
}
