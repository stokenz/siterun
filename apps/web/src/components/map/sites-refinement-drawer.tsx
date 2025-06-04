import {
  Drawer,
  Stack,
  Group,
  Title,
  CloseButton,
  Flex,
  useMatches,
} from "@mantine/core";
import { IconFilter } from "@tabler/icons-react";
import DrawerButton from "./drawer-button";
import { useDisclosure } from "@mantine/hooks";
import CustomRefinementList from "~/components/filters/checkbox-refinement";
import ClearRefinements from "~/components/filters/clear-refinements";
import { Can } from "~/lib/ability";

/**
 * Filter drawer for the refinement components. This renders the button
 * that opens the drawer and the drawer itself.
 * The refinement components allow users to filter the sites displayed on the map.
 * @returns
 */
export default function SitesRefinementDrawer() {
  const [opened, actions] = useDisclosure(false);

  const isMobile = useMatches({
    base: true,
    sm: false,
  });

  return (
    <>
      <Flex
        style={{
          position: "absolute",
          top: 14,
          left: 420,
        }}
        gap="md"
      >
        <DrawerButton
          label="Filters"
          opened={opened}
          actions={actions}
          icon={<IconFilter />}
          autoShowIndicator
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
            <Title>Filters</Title>

            <CloseButton
              size="lg"
              onClick={actions.close}
              aria-label="Close filter drawer"
            />
          </Group>

          <ClearRefinements />

          <Can I="read" a="Alarm">
            <CustomRefinementList
              label="Active Alarms"
              attribute="alarms"
              sortBy={["count"]}
              noDataLabel="No active alarms"
            />
          </Can>

          <CustomRefinementList
            label="Tags"
            attribute="tags"
            sortBy={["count"]}
            noDataLabel="No tags"
          />
        </Stack>
      </Drawer>
    </>
  );
}
