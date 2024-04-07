import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign, verify } from "hono/jwt";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();
// NOTE: Middleware
app.use("/api/v1/blog/*", async (c, next) => {
  const jwt = c.req.header("Authorization");
  if (!jwt) {
    c.status(401);
    return c.json({ error: "unauthorized" });
  }
  const token = jwt.split(" ")[1];
  const payload = await verify(token, c.env.JWT_SECRET);
  if (!payload) {
    c.status(401);
    return c.json({ error: "unauthorized" });
  }
  c.set("userId", payload.id);
  await next();
});

// NOTE: Routes

app.post("/api/v1/user/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });

    const jwt = await sign(
      { id: user.id, email: user.email },
      c.env.JWT_SECRET,
    );
    return c.json({ message: "User Created successfully", user, jwt });
  } catch (error) {
    c.status(403);
    return c.json({ error });
  }
});

app.post("/api/v1/user/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const findUser = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password,
    },
  });
  if (!findUser) {
    c.status(403);
    return c.json({ error: "User not found!" });
  }
  const jwt = await sign(
    { id: findUser.id, email: findUser.email },
    c.env.JWT_SECRET,
  );

  return c.json({ jwt });
});

app.post("/api/v1/blog", (c) => {
  return c.text("Post Blog");
});

app.put("/api/v1/blog", (c) => {
  return c.text("PUt Blog");
});

app.get("/api/v1/blog/bulk", (c) => {
  return c.text("Get all BLogs");
});

app.get("/api/v1/blog/:id", (c) => {
  const id = c.req.param("id");
  return c.text(`Get BLog by id ${id}`);
});

export default app;
