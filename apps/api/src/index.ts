import { OpenAPIHono } from "@hono/zod-openapi";
import users from "./routes/users";
import auth from "./routes/auth";
import { cors } from "hono/cors";

const app = new OpenAPIHono({
  defaultHook: (result, c) => {
    if (!result.success) {
      return c.json(
        {
          ok: false,
          errors: result,
          source: "custom_error_handler",
        },
        422,
      );
    }
  },
});

app.use("*", async (c, next) => {
  const corsMiddlewareHandler = cors({
    origin: "http://localhost:3001",
    credentials: true,
  });
  return corsMiddlewareHandler(c, next);
});

app.openAPIRegistry.registerComponent("securitySchemes", "Bearer", {
  type: "http",
  scheme: "bearer",
});

app.route("/api/auth", auth);
app.route("/api/users", users);

// The OpenAPI documentation will be available at /doc
app.doc31("/docs", {
  openapi: "3.1.0",
  info: {
    version: "1.0.0",
    title: "SiteRun API",
  },
});

export default app;
