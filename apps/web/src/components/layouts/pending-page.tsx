import { Container, Stack, Skeleton } from "@mantine/core";
import MainLayout from "./main";

export default function PendingPageComponent() {
  return (
    <MainLayout
      topLinks={
        <Stack gap="xs">
          <Skeleton height={50} width={50} radius="sm" />
          <Skeleton height={50} width={50} radius="sm" />
          <Skeleton height={50} width={50} radius="sm" />
          <Skeleton height={50} width={50} radius="sm" />
          <Skeleton height={50} width={50} radius="sm" />
        </Stack>
      }
      bottomLinks={[]}
    >
      <Container my="xl" size="sm">
        <Stack>
          <Skeleton height={40} maw={100} radius="sm" />
          <Skeleton height={15} maw={200} radius="sm" />
        </Stack>
      </Container>
    </MainLayout>
  );
}
