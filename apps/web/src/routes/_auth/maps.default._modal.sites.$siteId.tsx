import ErrorComponent from "~/components/layouts/error";
import { useSitesServiceFindOneSiteKey } from "../../api/queries";
import {
  Title,
  Text,
  Flex,
  Divider,
  Group,
  Badge,
  BackgroundImage,
  Menu,
  ActionIcon,
  Tooltip,
} from "@mantine/core";
import { createFileRoute, Link } from "@tanstack/react-router";
import { queryClient } from "~/app";
import { SitesService } from "~/api/requests";
import { useSuspenseQuery } from "@tanstack/react-query";
import PendingComponent from "~/components/layouts/pending";
import { Can } from "~/lib/ability";
import AlarmsSummary from "~/components/sidebar/alarms-summary";
import RoutesSummary from "~/components/sidebar/routes-summary";
import OutagesSummary from "~/components/sidebar/outages-summary";
import { IconDotsVertical, IconEdit, IconList } from "@tabler/icons-react";

const queryOptions = (id: string) => ({
  queryKey: [useSitesServiceFindOneSiteKey, id],
  queryFn: () => SitesService.findOneSite({ id }),
});

export const Route = createFileRoute(
  "/_auth/maps/default/_modal/sites/$siteId",
)({
  component: MapSite,
  errorComponent: ErrorComponent,
  pendingComponent: PendingComponent,
  loader: ({ params }) =>
    queryClient.ensureQueryData(queryOptions(params.siteId)),
});

function MapSite() {
  const { siteId } = Route.useParams();
  const { data: site } = useSuspenseQuery(queryOptions(siteId));

  const menuItems = [
    {
      label: "Edit site",
      to: `/sites/$siteId`,
      params: { siteId },
      icon: <IconEdit size={16} />,
    },
    { label: "View all sites", to: `/sites`, icon: <IconList size={16} /> },
  ];

  return (
    <Flex direction="column">
      <Flex h={200}>
        <BackgroundImage src="https://images.pexels.com/photos/4366417/pexels-photo-4366417.jpeg" />
      </Flex>

      <Flex px="lg" pt="xs" pb="sm" direction="column">
        <Group justify="space-between">
          <Title>{site.code}</Title>

          <Menu shadow="md" width={200} position="bottom-start">
            <Menu.Target>
              <ActionIcon variant="subtle" color="gray.5">
                <IconDotsVertical />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              {menuItems.map((item) => (
                <Menu.Item
                  key={item.to}
                  component={Link}
                  to={item.to}
                  leftSection={item.icon}
                >
                  {item.label}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        </Group>

        <Text>{site.name} · Cell Site</Text>

        <Group mt={5} gap={5}>
          {site.tags.map((tag) => (
            <Tooltip label={tag.description} multiline>
              <Badge key={tag.id} color={tag.color} variant="filled">
                {tag.name}
              </Badge>
            </Tooltip>
          ))}
        </Group>
      </Flex>

      <Divider size="sm" />

      <Can I="read" a="Alarm">
        <AlarmsSummary siteId={siteId} />
        <Divider size="sm" />
      </Can>

      <Can I="read" a="Route">
        <RoutesSummary siteId={siteId} />
        <Divider size="sm" />
      </Can>

      <Can I="read" a="Outage">
        <OutagesSummary siteId={siteId} />
        <Divider size="sm" />
      </Can>
    </Flex>
  );
}
