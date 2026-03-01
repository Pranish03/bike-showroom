import { z } from "zod";

export const createBikeValidationSchema = z.object({
  name: z.string().min(2, "Name must have atleast 2 characters"),
  price: z.string().min(1, "Price is required"),
  brand: z.string().min(2, "Brand must have atleast 2 characters"),
  image: z.any().refine((file) => file instanceof File, {
    message: "Image is required",
  }),
  description: z
    .string()
    .min(10, "Description must have atleast 10 characters"),
  details: z.string().optional(),
});

export const updateBikeValidationSchema = createBikeValidationSchema.partial();
