import * as z from "zod";

export const signUpValidation = z.object({
    Name: z.string().min(2, {message: 'Name too short'}),
    Username: z.string().min(2, {message: 'Username too short'}),
    Email: z.string().email(),
    Password: z.string().min(6, {message: 'Password must be at least 6 characters long'}),
  });