import TableSection from "./table-section";
import { IconBellRinging, IconBell } from "@tabler/icons-react";

interface Props {
  siteId: string;
}

export default function AlarmsSummary({ siteId }: Props) {
  console.log(siteId);

  return (
    <TableSection
      title="Alarms"
      noRecordsText="No active alarms found"
      noRecordsIcon={<IconBell size={20} />}
      icon={<IconBellRinging size={20} />}
      menuItems={[{ label: "View all alarms", to: "/alarms" }]}
      columns={[
        {
          accessor: "plannedStart",
          title: "Name",
        },
        {
          accessor: "duration",
          title: "Severity",
        },
        {
          accessor: "status",
          title: "First Seen",
        },
        {
          accessor: "source",
          title: "Source",
        },
      ]}
      records={[]}
      fetching={false}
    />
  );
}
