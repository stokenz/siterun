import {
  createFileRoute,
  ErrorComponentProps,
  Outlet,
  ErrorComponent as DefaultErrorComponent,
  redirect,
} from "@tanstack/react-router";
import { AuthContext, isAuthenticated } from "~/lib/auth";
import { useAuthServiceLogout, useUsersServiceFindMeKey } from "../api/queries";
import { notifications } from "@mantine/notifications";
import {
  Button,
  Container,
  Stack,
  Text,
  Divider,
  Title,
  Group,
} from "@mantine/core";
import { useEffect } from "react";
import { IconMap2, IconBell } from "@tabler/icons-react";
import NavbarLink from "../components/navbar-link";
import ThemeToggle from "~/components/theme-toggle";
import LogoutButton from "~/components/logout-button";
import PendingPageComponent from "~/components/layouts/pending-page";
import { UsersService } from "~/api/requests";
import { queryClient } from "~/app";
import { useSuspenseQuery } from "@tanstack/react-query";
import MainLayout from "~/components/layouts/main";
import { AbilityContext, createAbilityForUser } from "~/lib/ability";
import NavbarNotificationButton from "~/components/navbar-button";

const queryOptions = () => ({
  queryKey: [useUsersServiceFindMeKey],
  queryFn: () => UsersService.findMe(),
});

export const Route = createFileRoute("/_auth")({
  component: AuthComponent,
  pendingComponent: PendingPageComponent,
  errorComponent: ErrorComponent,
  beforeLoad: async () => {
    // Fast check to see if the user is authenticated using client readable auth cookie
    if (!isAuthenticated()) {
      throw redirect({
        to: "/sign-in",
        search: {
          // Use the current location to power a redirect after login
          // (Do not use `router.state.resolvedLocation` as it can
          // potentially lag behind the actual current location)
          redirect: location.href,
          source: "web",
        },
      });
    }
  },
  loader: () => queryClient.ensureQueryData(queryOptions()),
});

function AuthComponent() {
  const { data: user } = useSuspenseQuery(queryOptions());

  return (
    <AuthContext.Provider value={user}>
      <AbilityContext.Provider value={createAbilityForUser(user)}>
        <MainLayout
          topLinks={
            <>
              <NavbarNotificationButton label="Notifications" icon={IconBell} />

              <Divider my="xs" />

              <NavbarLink
                label="Main Map"
                icon={IconMap2}
                to="/maps/default"
                activeExact
              />
            </>
          }
          bottomLinks={
            <>
              <ThemeToggle />

              <LogoutButton />
            </>
          }
        >
          <Outlet />
        </MainLayout>
      </AbilityContext.Provider>
    </AuthContext.Provider>
  );
}

function ErrorComponent(props: ErrorComponentProps) {
  const navigate = Route.useNavigate();
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

  useEffect(() => {
    // Todo: Base redirection on error code not string message
    if (props.error.message === "Unauthorized") {
      logout.mutate();
    }
  }, [props.error.message]);

  if (import.meta.env.DEV) {
    console.warn("Rendering default error component", props);
    return <DefaultErrorComponent {...props} />;
  }

  return (
    <Container my="lg">
      <Stack>
        <Title>Sorry, we ran into an error!</Title>

        <Text>{props.error.message}</Text>

        <Text>
          Please try again by refreshing the page or clicking the button below.
          Or logout and login again.
        </Text>

        <Group>
          <Button onClick={() => props.reset()}>Try again</Button>

          <Button
            variant="subtle"
            onClick={() => logout.mutate()}
            loading={logout.isPending}
          >
            Logout
          </Button>
        </Group>
      </Stack>
    </Container>
  );
}
