import { OpenAPIHono } from "@hono/zod-openapi";
import { auth } from "../../lib/auth";

const app = new OpenAPIHono();

app.on(["GET", "POST"], "*", (c) => {
  console.log("auth", c.req.raw);
  return auth.handler(c.req.raw);
});

export default app;
