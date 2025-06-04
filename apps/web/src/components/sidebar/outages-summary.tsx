import { useSitesServiceFindManyOutagesBySite } from "~/api/queries";
import TableSection from "./table-section";
import dayjs from "dayjs";
import { getDurationText } from "../duration";
import { IconBolt, IconBoltOff } from "@tabler/icons-react";

interface Props {
  siteId: string;
}

export default function OutagesSummary({ siteId }: Props) {
  const outages = useSitesServiceFindManyOutagesBySite({
    id: siteId,
  });

  return (
    <TableSection
      title="Planned Outages"
      noRecordsText="No upcoming outages found"
      noRecordsIcon={<IconBoltOff size={20} />}
      icon={<IconBolt size={20} />}
      menuItems={[{ label: "View all outages", to: "/outages" }]}
      columns={[
        {
          accessor: "plannedStart",
          title: "Start",
          render: (row) => dayjs(row.plannedStart).format("MMM D h:MMa"),
        },
        {
          accessor: "duration",
          title: "Duration",
          render: (row) => getDurationText(row.plannedStart, row.plannedEnd),
        },
        {
          accessor: "status",
          title: "Status",
          // render: (row) => (
          //   <Badge color={mapOutageStatusToColor(row.status)}>
          //     {row.status}
          //   </Badge>
          // ),
        },
      ]}
      records={outages.data ?? []}
      fetching={outages.isFetching}
    />
  );
}
