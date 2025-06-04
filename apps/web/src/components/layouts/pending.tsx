import { Container, Stack, Skeleton } from "@mantine/core";

export default function PendingComponent() {
  return (
    <Container my="xl" size="sm">
      <Stack>
        <Skeleton height={40} maw={100} radius="sm" />
        <Skeleton height={15} maw={200} radius="sm" />
      </Stack>
    </Container>
  );
}
