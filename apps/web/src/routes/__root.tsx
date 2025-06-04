import { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  Outlet,
  HeadContent,
} from "@tanstack/react-router";
import React from "react";

const RouterDevtools = import.meta.env.DEV
  ? React.lazy(() =>
      // Lazy load in development
      import("@tanstack/router-devtools").then((res) => ({
        default: res.TanStackRouterDevtools,
      })),
    )
  : () => null; // Render nothing in production

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
  title: string;
}>()({
  component: RootComponent,
  head: () => ({
    meta: [
      {
        title: "SiteRun",
      },
    ],
  }),
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <Outlet />
      <RouterDevtools position="bottom-right" />
    </>
  );
}
