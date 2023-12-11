import * as z from "zod";

export const BlogFormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  image_url: z.string().min(2, {
    message: "invalid url.",
  }),
  content: z.string().min(2, {
    message: "content must be at least 2 characters.",
  }),
  is_publish: z.boolean(),
  is_premium: z.boolean(),
});
