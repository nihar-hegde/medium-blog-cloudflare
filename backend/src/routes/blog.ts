import { Hono } from "hono";
export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.post("/", (c) => {
  return c.text("Post Blog");
});

blogRouter.put("/", (c) => {
  return c.text("PUt Blog");
});

blogRouter.get("/bulk", (c) => {
  return c.text("Get all BLogs");
});

blogRouter.get("/:id", (c) => {
  const id = c.req.param("id");
  return c.text(`Get BLog by id ${id}`);
});
