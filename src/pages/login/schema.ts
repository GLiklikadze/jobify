import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "email-required-error" })
    .email({ message: "email-invalid-pattern" }),

  password: z
    .string()
    .nonempty({ message: "password-required-error" })
    .min(6, { message: "password-minLength-error" })
    .max(25, { message: "password-maxLength-error" }),
});
