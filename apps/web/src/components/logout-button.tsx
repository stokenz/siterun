import { Tooltip, ActionIcon, rem, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconLogout } from "@tabler/icons-react";
import { useNavigate } from "@tanstack/react-router";
import { useAuthServiceLogout } from "~/api/queries";
import classes from "./navbar-link.module.css";

export default function LogoutButton() {
  const navigate = useNavigate();

  const logout = useAuthServiceLogout({
    onSuccess: () => {
      navigate({ to: "/sign-in", search: { source: "web" } });
    },
    onError: () => {
      notifications.show({
        title: "Error",
        message: "Something went wrong, please try again.",
        color: "red",
      });
    },
  });

  return (
    <Tooltip label="Logout" position="right" transitionProps={{ duration: 0 }}>
      <ActionIcon
        variant="subtle"
        aria-label="Logout"
        onClick={() => logout.mutate()}
        className={classes.link}
        loading={logout.isPending}
        w="100%"
      >
        <IconLogout style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
        <Text ml="xs" hiddenFrom="sm">
          Logout
        </Text>
      </ActionIcon>
    </Tooltip>
  );
}
