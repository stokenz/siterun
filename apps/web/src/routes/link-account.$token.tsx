import {
  Container,
  Paper,
  Button,
  Stack,
  Center,
  Alert,
  Anchor,
  Box,
  rem,
} from "@mantine/core";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useAuthServiceLinkOauthAccount } from "../api/queries";
import Logo from "~/assets/logo.png";
import { IconArrowLeft, IconCheck } from "@tabler/icons-react";
import { useEffect } from "react";
import { IconAlertTriangle } from "@tabler/icons-react";

export const Route = createFileRoute("/link-account/$token")({
  component: LinkAccount,
});

function LinkAccount() {
  const { token } = Route.useParams();
  const navigate = Route.useNavigate();
  const linkAccount = useAuthServiceLinkOauthAccount();

  useEffect(() => {
    linkAccount.mutateAsync({ requestBody: { token } });
  }, []);

  useEffect(() => {
    // Redirect to the dashboard if the account was successfully linked
    // Waits 5 seconds before redirecting
    if (linkAccount.isSuccess) {
      setTimeout(() => {
        navigate({ to: "/" });
      }, 5000);
    }
  }, [linkAccount.isSuccess]);

  return (
    <Container size="xs" style={{ paddingTop: "20vh" }}>
      <Paper radius="md" p="xl" withBorder>
        <Center mb="sm">
          <img src={Logo} width={150} height={34} loading="lazy" />
        </Center>

        {linkAccount.isSuccess && (
          <Stack>
            <Alert icon={<IconCheck />} color="green" title="Success!">
              Your account has been successfully linked. If you are not
              automatically redirected to the dashboard, click the button below.
            </Alert>

            <Button component={Link} to="/">
              Take me to the dashboard
            </Button>
          </Stack>
        )}

        {linkAccount.isError && (
          <Stack>
            <Alert
              variant="light"
              color="red"
              title="Something went wrong"
              icon={<IconAlertTriangle />}
            >
              {linkAccount.error.message}
            </Alert>

            <Anchor c="dimmed" size="sm" component={Link} to="/sign-in">
              <Center inline>
                <IconArrowLeft
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
                <Box ml={5}>Back to the login page</Box>
              </Center>
            </Anchor>
          </Stack>
        )}

        {linkAccount.isPending && (
          <Button onClick={() => {}} loading>
            Linking account...
          </Button>
        )}
      </Paper>
    </Container>
  );
}
