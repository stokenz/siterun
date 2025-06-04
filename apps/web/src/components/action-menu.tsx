import { Menu, Button, Loader } from "@mantine/core";
import { IconBolt } from "@tabler/icons-react";
import React from "react";

type Props = {
  isPending?: boolean;
  actions: {
    sectionHeader?: string;
    label: string;
    icon: React.ReactNode;
    onClick: () => void;
  }[];
};

export default function ActionMenu({ actions, isPending }: Props) {
  return (
    <Menu
      trigger="hover"
      openDelay={100}
      closeDelay={100}
      shadow="md"
      width={200}
    >
      <Menu.Target>
        <Button
          variant="light"
          leftSection={<IconBolt size={14} />}
          loading={isPending}
        >
          Actions
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        {actions.map(({ sectionHeader, label, icon, onClick }, index) => (
          <React.Fragment key={label}>
            {sectionHeader && index > 0 && <Menu.Divider />}

            {sectionHeader && <Menu.Label>{sectionHeader}</Menu.Label>}

            <Menu.Item
              onClick={onClick}
              disabled={isPending}
              rightSection={isPending ? <Loader /> : null}
              leftSection={icon}
            >
              {label}
            </Menu.Item>
          </React.Fragment>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
