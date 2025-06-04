import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@mantine/core/styles.layer.css";
import "mantine-datatable/styles.layer.css";
import "./styles/layout.css";
import "@mantine/notifications/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/charts/styles.css";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import * as Sentry from "@sentry/react";
import posthog from "posthog-js";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

Sentry.init({
  dsn: "https://f3f90f9b131b9a1daa26b8a333f388f9@o4507705507577856.ingest.us.sentry.io/4507705510789120",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: [/^https:\/\/app\.gositerun\.com/],
  replaysSessionSampleRate: 1.0,
  replaysOnErrorSampleRate: 1.0,
  allowUrls: [/^https:\/\/app\.gositerun\.com/],
});

posthog.init("phc_lWylpvZoSSEk4qtWi86Mcqr8pX3whtslx2uTVDMyq20", {
  api_host: "https://us.i.posthog.com",
  person_profiles: "identified_only",
});

export const queryClient = new QueryClient();

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    queryClient,
    title: "SiteRun",
  },
  defaultPreload: "intent",
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("app")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ColorSchemeScript />

      <MantineProvider>
        <Notifications />

        <ModalsProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </ModalsProvider>
      </MantineProvider>
    </StrictMode>,
  );
}
