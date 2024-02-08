import * as z from "zod";

export const signUpValidation = z.object({
    name: z.string().min(2, {message: 'Name too short'}),
    username: z.string().min(2, {message: 'Username too short'}),
    email: z.string().email(),
    password: z.string().min(6, {message: 'Password must be at least 6 characters long'}),
  });

  export const signInValidation = z.object({
    email: z.string().email(),
    password: z.string().min(6, {message: 'Password must be at least 6 characters long'}),
  });

  export const PostValidation = z.object({
    caption: z.string().min(5).max(2200),
    file: z.custom<File[]>(),
    location: z.string().min(2).max(100),
    tags: z.string()
  });