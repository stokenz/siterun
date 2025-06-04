import { Button, Container, Group } from "@mantine/core";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import {
  ErrorComponent as RouterErrorComponent,
  ErrorComponentProps,
  useRouter,
} from "@tanstack/react-router";
import { useEffect } from "react";

export default function ErrorComponent({ error, reset }: ErrorComponentProps) {
  const router = useRouter();
  const queryErrorResetBoundary = useQueryErrorResetBoundary();

  useEffect(() => {
    queryErrorResetBoundary.reset();
  }, [queryErrorResetBoundary]);

  return (
    <Container my="xl" size="sm">
      <RouterErrorComponent error={error} />

      <Group>
        <Button
          onClick={() => {
            reset();
            router.invalidate();
          }}
        >
          Retry
        </Button>
      </Group>
    </Container>
  );
}
