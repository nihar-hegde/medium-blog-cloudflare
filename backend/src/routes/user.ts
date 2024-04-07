import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signUpInput, signInInput } from "@nihar_hegde/medium-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();
userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signUpInput.safeParse(body);
  if (!success) {
    c.status(403);
    return c.json({ message: "Invalid inputs" });
  }

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

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signInInput.safeParse(body);
  if (!success) {
    c.status(403);
    return c.json({ message: "Invalid Inputs" });
  }
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
