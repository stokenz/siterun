import {
  Title,
  Group,
  Stack,
  ActionIcon,
  rem,
  Menu,
  ThemeIcon,
} from "@mantine/core";
import { IconDotsVertical, IconExternalLink } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { DataTable, DataTableColumn } from "mantine-datatable";

type Props<T> = {
  title: string;
  icon: React.ReactNode;
  menuItems: { label: string; to: string }[];
  columns: DataTableColumn<T>[];
  records: T[];
  fetching?: boolean;
  noRecordsText?: string;
  noRecordsIcon?: React.ReactNode;
};

export default function TableSection<T>({
  title,
  icon,
  menuItems,
  columns,
  records,
  fetching,
  noRecordsText,
  noRecordsIcon,
}: Props<T>) {
  return (
    <Stack px="lg" py="sm">
      <Group justify="space-between">
        <Group gap={5}>
          {icon}
          <Title order={4}>{title}</Title>
        </Group>

        <Menu shadow="md" position="bottom-start">
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
                leftSection={
                  <IconExternalLink
                    style={{ width: rem(14), height: rem(14) }}
                  />
                }
              >
                {item.label}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      </Group>

      <DataTable
        columns={columns}
        records={records}
        fetching={fetching}
        highlightOnHover
        minHeight={150}
        noRecordsText={noRecordsText}
        noRecordsIcon={
          <ThemeIcon radius="xl" color="gray">
            {noRecordsIcon}
          </ThemeIcon>
        }
      />
    </Stack>
  );
}
