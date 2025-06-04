import { Tooltip, Indicator, ActionIcon } from "@mantine/core";

interface Props {
  label: string;
  opened: boolean;
  actions: {
    open: () => void;
    close: () => void;
  };
  icon: React.ReactNode;
  showIndicator?: boolean;
  // Show indicator based on refinements (filter state)
  autoShowIndicator?: boolean;
}

export default function DrawerButton({ label, opened, actions, icon }: Props) {
  return (
    <Tooltip label={label}>
      <Indicator inline disabled>
        <ActionIcon
          size="lg"
          variant="white"
          color="black"
          onClick={opened ? actions.close : actions.open}
        >
          {icon}
        </ActionIcon>
      </Indicator>
    </Tooltip>
  );
}
