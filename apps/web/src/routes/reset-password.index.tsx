import {
  Container,
  Paper,
  Text,
  TextInput,
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
import { useAuthServiceInitiatePasswordReset } from "../api/queries";
import Logo from "~/assets/logo.png";
import {
  IconAlertTriangle,
  IconArrowLeft,
  IconCheck,
} from "@tabler/icons-react";

const emailSchema = z.object({
  email: z.string().email(),
});

export const Route = createFileRoute("/reset-password/")({
  component: ResetPassword,
});

function ResetPassword() {
  const resetPassword = useAuthServiceInitiatePasswordReset();

  const emailPasswordForm = useForm({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = emailPasswordForm.handleSubmit(async (data) => {
    try {
      await resetPassword.mutateAsync({ requestBody: data });
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Container size="xs" style={{ paddingTop: "20vh" }}>
      <Paper radius="md" p="xl" withBorder>
        <Center mb="sm">
          <img src={Logo} width={150} height={34} loading="lazy" />
        </Center>

        {resetPassword.isSuccess && (
          <Stack>
            <Alert icon={<IconCheck />} color="green" title="Success!">
              If an account with this email exists, you will receive an email
              with a link to reset your password.
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

        {!resetPassword.isSuccess && (
          <form onSubmit={onSubmit}>
            <Stack>
              <Text size="md" fw={500} ta="center">
                Please enter your email to get a password reset link
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

              <TextInput
                label="Email"
                placeholder="Email"
                required
                type="email"
                {...emailPasswordForm.register("email")}
                error={emailPasswordForm.formState.errors.email?.message}
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
                  loading={emailPasswordForm.formState.isSubmitting}
                >
                  Reset password
                </Button>
              </Group>
            </Stack>
          </form>
        )}
      </Paper>
    </Container>
  );
}
