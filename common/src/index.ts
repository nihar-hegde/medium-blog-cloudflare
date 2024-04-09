import z from "zod";

// NOTE: Sign up
export const signUpInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(1, { message: "Name is Required" }),
});

export type SignUpInput = z.infer<typeof signUpInput>;

// NOTE: Sign In
export const signInInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type SignInInput = z.infer<typeof signInInput>;

// NOTE: Create Blog
export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});

export type CreateBlogInput = z.infer<typeof createBlogInput>;

// NOTE: Update Blog
export const updateBlogInput = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
});

export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
