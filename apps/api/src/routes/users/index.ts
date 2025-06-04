import { createRoute, OpenAPIHono } from "@hono/zod-openapi";
import { ParamsSchema, UserSchema } from "./validation";

const app = new OpenAPIHono();

app.openapi(
  createRoute({
    method: "get",
    path: "/{id}",
    request: {
      params: ParamsSchema,
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: UserSchema,
          },
        },
        description: "Retrieve the user",
      },
    },
  }),
  (c) => {
    const { id } = c.req.valid("param");

    return c.json(
      {
        id,
        age: 20,
        name: "Ultra-man",
      },
      200,
    );
  },
);

export default app;
