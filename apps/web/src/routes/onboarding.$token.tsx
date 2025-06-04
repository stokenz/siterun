import {
  Container,
  Paper,
  Text,
  PasswordInput,
  Button,
  Stack,
  Center,
} from "@mantine/core";
import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthServiceCompletePasswordReset } from "../api/queries";
import Logo from "~/assets/logo.png";
import { useEffect } from "react";
import Alert from "~/components/alert";

const onboardingSchema = z.object({
  password: z.string().min(5),
});

export const Route = createFileRoute("/onboarding/$token")({
  component: OnboardUser,
});

function OnboardUser() {
  const { token } = Route.useParams();
  const navigate = Route.useNavigate();
  const onboardUser = useAuthServiceCompletePasswordReset();

  const passwordForm = useForm({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = passwordForm.handleSubmit(async (data) => {
    try {
      await onboardUser.mutateAsync({
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
    if (onboardUser.isSuccess) {
      setTimeout(() => {
        navigate({ to: "/" });
      }, 5000);
    }
  }, [onboardUser.isSuccess]);

  return (
    <Container size="xs" style={{ paddingTop: "20vh" }}>
      <Paper radius="md" p="xl" withBorder>
        <Center mb="sm">
          <img src={Logo} width={150} height={34} loading="lazy" />
        </Center>

        {onboardUser.isSuccess && (
          <Stack>
            <Alert variant="success" title="Success!">
              Your account has been successfully setup. If you are not
              automatically redirected to the dashboard, click the button below.
            </Alert>

            <Button component={Link} to="/">
              Take me to the dashboard
            </Button>
          </Stack>
        )}

        {!onboardUser.isSuccess && (
          <form onSubmit={onSubmit}>
            <Stack>
              <Text size="md" fw={500} ta="center">
                Welcome to SiteRun!
                <br />
                Please set a password for your account
              </Text>

              {onboardUser.isError && (
                <Alert variant="error" title="Something went wrong">
                  {onboardUser.error.message}
                </Alert>
              )}

              <PasswordInput
                placeholder="Password"
                required
                {...passwordForm.register("password")}
                error={passwordForm.formState.errors.password?.message}
              />

              <Button
                type="submit"
                fullWidth
                loading={passwordForm.formState.isSubmitting}
              >
                Save password
              </Button>
            </Stack>
          </form>
        )}
      </Paper>
    </Container>
  );
}
