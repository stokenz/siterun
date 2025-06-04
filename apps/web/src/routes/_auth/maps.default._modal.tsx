import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Affix, Paper, Stack, useMatches } from "@mantine/core";

export const Route = createFileRoute("/_auth/maps/default/_modal")({
  component: MapsMapIdModal,
});

function MapsMapIdModal() {
  const isMobile = useMatches({
    base: true,
    sm: false,
  });

  return (
    <Affix position={{ top: 0, left: isMobile ? 0 : 85 }}>
      <Paper
        shadow="0 1px 2px rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15)"
        w={400}
        h="100vh"
        radius={0}
        style={{ position: "relative" }}
      >
        <Stack>
          <Outlet />
        </Stack>
      </Paper>
    </Affix>
  );
}
