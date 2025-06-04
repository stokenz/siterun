import { useSitesServiceFindManyRoutesBySite } from "~/api/queries";
import TableSection from "./table-section";
import dayjs from "dayjs";
import { IconDirectionSign, IconDirectionSignOff } from "@tabler/icons-react";

interface Props {
  siteId: string;
}

export default function RoutesSummary({ siteId }: Props) {
  const routes = useSitesServiceFindManyRoutesBySite({
    id: siteId,
  });

  return (
    <TableSection
      title="Maintenance Routes"
      noRecordsText="No maintenance routes found"
      noRecordsIcon={<IconDirectionSignOff size={20} />}
      icon={<IconDirectionSign size={20} />}
      menuItems={[{ label: "View all routes", to: `/sites/${siteId}/routes` }]}
      columns={[
        {
          accessor: "name",
        },
        { accessor: "assignee.firstName", title: "Assignee" },
        {
          accessor: "createdAt",
          title: "Created",
          render: (row) => dayjs(row.createdAt).format("MMM D h:MMa"),
        },
      ]}
      records={routes.data ?? []}
      fetching={routes.isFetching}
    />
  );
}
