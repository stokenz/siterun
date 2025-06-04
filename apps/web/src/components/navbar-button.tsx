import {
  Tooltip,
  rem,
  Text,
  UnstyledButton,
  Indicator,
  Drawer,
  useMatches,
  Stack,
  Title,
  Group,
  CloseButton,
} from "@mantine/core";
import { IconHome2 } from "@tabler/icons-react";
import classes from "./navbar-link.module.css";
import { useDisclosure } from "@mantine/hooks";
import Alert from "./alert";

type NavbarLinkProps = {
  icon: typeof IconHome2;
  label: string;
};

export default function NavbarNotificationButton({
  icon: Icon,
  label,
}: NavbarLinkProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMatches({
    base: true,
    sm: false,
  });

  return (
    <>
      <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
        <UnstyledButton
          aria-label={label}
          className={classes.link}
          onClick={opened ? close : open}
        >
          <Indicator color="red" disabled={true}>
            <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
          </Indicator>
          <Text hiddenFrom="sm">{label}</Text>
        </UnstyledButton>
      </Tooltip>

      <Drawer
        opened={opened}
        onClose={close}
        position="left"
        withCloseButton={false}
        ml={isMobile ? 0 : 85}
        zIndex={220}
      >
        <Stack>
          <Group justify="space-between">
            <Title>Notifications</Title>

            <CloseButton
              size="lg"
              onClick={close}
              aria-label="Close notification drawer"
            />
          </Group>

          <Alert variant="success">No new notifications</Alert>
        </Stack>
      </Drawer>
    </>
  );
}
