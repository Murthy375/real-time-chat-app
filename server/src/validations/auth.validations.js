import { z } from "zod";

export const registerPostRequestBodySchema = z
  .object({
    name: z.string().min(1).trim(),
    firstName: z.string().min(1),
    lastName: z.string().min(1).optional(),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const loginPostRequestBodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});