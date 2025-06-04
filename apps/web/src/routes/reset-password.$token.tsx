import {
  Container,
  Paper,
  Text,
  PasswordInput,
  Button,
  Stack,
  Group,
  Center,
  Alert,
  Anchor,
  Box,
  rem,
} from "@mantine/core";
import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthServiceCompletePasswordReset } from "../api/queries";
import Logo from "~/assets/logo.png";
import {
  IconAlertTriangle,
  IconArrowLeft,
  IconCheck,
} from "@tabler/icons-react";
import { useEffect } from "react";

const passwordSchema = z.object({
  password: z.string().min(5),
});

export const Route = createFileRoute("/reset-password/$token")({
  component: ResetPassword,
});

function ResetPassword() {
  const { token } = Route.useParams();
  const navigate = Route.useNavigate();
  const resetPassword = useAuthServiceCompletePasswordReset();

  const passwordForm = useForm({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = passwordForm.handleSubmit(async (data) => {
    try {
      await resetPassword.mutateAsync({
        requestBody: {
          ...data,
          token,
        },
      });
    } catch (error) {
      console.error(error);
    }
  });

  useEffect(() => {
    // Redirect to the dashboard if the account was successfully linked
    // Waits 5 seconds before redirecting
    if (resetPassword.isSuccess) {
      setTimeout(() => {
        navigate({ to: "/" });
      }, 5000);
    }
  }, [resetPassword.isSuccess]);

  return (
    <Container size="xs" style={{ paddingTop: "20vh" }}>
      <Paper radius="md" p="xl" withBorder>
        <Center mb="sm">
          <img src={Logo} width={150} height={34} loading="lazy" />
        </Center>

        {resetPassword.isSuccess && (
          <Stack>
            <Alert icon={<IconCheck />} color="green" title="Success!">
              Your new password has been saved. If you are not automatically
              redirected to the dashboard, click the button below.
            </Alert>

            <Button component={Link} to="/">
              Take me to the dashboard
            </Button>
          </Stack>
        )}

        {!resetPassword.isSuccess && (
          <form onSubmit={onSubmit}>
            <Stack>
              <Text size="md" fw={500} ta="center">
                Please enter your new password
              </Text>

              {resetPassword.isError && (
                <Alert
                  variant="light"
                  color="red"
                  title="Something went wrong"
                  icon={<IconAlertTriangle />}
                >
                  {resetPassword.error.message}
                </Alert>
              )}

              <PasswordInput
                placeholder="New Password"
                required
                {...passwordForm.register("password")}
                error={passwordForm.formState.errors.password?.message}
              />

              <Group justify="space-between">
                <Anchor c="dimmed" size="sm" component={Link} to="/sign-in">
                  <Center inline>
                    <IconArrowLeft
                      style={{ width: rem(12), height: rem(12) }}
                      stroke={1.5}
                    />
                    <Box ml={5}>Back to the login page</Box>
                  </Center>
                </Anchor>

                <Button
                  type="submit"
                  loading={passwordForm.formState.isSubmitting}
                >
                  Save password
                </Button>
              </Group>
            </Stack>
          </form>
        )}
      </Paper>
    </Container>
  );
}
