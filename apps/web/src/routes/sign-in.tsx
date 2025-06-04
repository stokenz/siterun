import {
  Container,
  Paper,
  Text,
  TextInput,
  Button,
  Stack,
  Group,
  Divider,
  Center,
  Alert,
  Anchor,
  PasswordInput,
} from "@mantine/core";
import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import GoogleIcon from "../components/icons/google-icon";
import MicrosoftIcon from "../components/icons/microsoft-icon";
import Logo from "~/assets/logo.png";
import { IconAlertTriangle } from "@tabler/icons-react";
import { authClient } from "~/lib/auth-client";

const emailPasswordSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export const Route = createFileRoute("/sign-in")({
  component: SignIn,
  validateSearch: z.object({
    redirect: z.string().optional(),
    statusCode: z.number().optional(),
    message: z.string().optional(),
    source: z.enum(["web", "mobile"]).optional().default("web"),
  }),
});

function SignIn() {
  const router = useRouter();
  const search = Route.useSearch();

  const emailPasswordForm = useForm({
    resolver: zodResolver(emailPasswordSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = emailPasswordForm.handleSubmit(async (data) => {
    try {
      const res = await authClient.signIn.email({
        email: data.email,
        password: data.password,
        callbackURL: "/dashboard",
        rememberMe: true,
      });

      if (res.error) {
        console.error(res.error);
        return;
      }

      // Trigger any redirects, eg this is used to redirect back to mobile app after auth
      // The redirect is set by the API server based on the `source` query/search param
      if (res.data.redirect) {
        window.location.href = res.data.url ?? "/";
      } else {
        await router.navigate({
          to: "/maps/default",
        });
      }
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Container size="xs" style={{ paddingTop: "20vh" }}>
      <Paper radius="md" p="xl" withBorder>
        <Stack gap="sm">
          <Center>
            <img src={Logo} width={150} height={34} loading="lazy" />
          </Center>

          <Text size="md" fw={500} ta="center">
            Please sign in to continue
          </Text>

          {search.statusCode && search.message && (
            <Alert
              variant="light"
              color="red"
              title="Something went wrong"
              icon={<IconAlertTriangle />}
            >
              {search.message}
            </Alert>
          )}
        </Stack>

        <Group grow mb="md" mt="md">
          <Button
            leftSection={<GoogleIcon />}
            variant="default"
            component="a"
            href={`/api/auth/providers/google?source=${search.source}`}
          >
            Google
          </Button>
        </Group>

        <Group grow mb="md" mt="md">
          <Button
            leftSection={<MicrosoftIcon />}
            variant="default"
            component="a"
            href={`/api/auth/providers/microsoft?source=${search.source}`}
          >
            Microsoft
          </Button>
        </Group>

        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        />

        <form onSubmit={onSubmit}>
          <Stack>
            {/* {login.isError && (
              <Alert
                variant="light"
                color="red"
                title="Something went wrong"
                icon={<IconAlertTriangle />}
              >
                {login.error.message}
              </Alert>
            )} */}

            <TextInput
              label="Email"
              placeholder="Email"
              required
              type="email"
              {...emailPasswordForm.register("email")}
              error={emailPasswordForm.formState.errors.email?.message}
            />

            <PasswordInput
              label="Password"
              placeholder="Password"
              required
              type="password"
              {...emailPasswordForm.register("password")}
              error={emailPasswordForm.formState.errors.password?.message}
            />

            <Group justify="space-between">
              <Anchor component={Link} to="/reset-password" size="sm">
                Forgot password?
              </Anchor>
            </Group>

            <Button
              type="submit"
              loading={emailPasswordForm.formState.isSubmitting}
            >
              Sign in
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}
