import { z } from "zod";

const user_validation = z.object({
    fullname: z.string().nonempty({message: "Fullname field is required"}).min(3, {message: "Fullname must be atleast 3 characters long"}).max(20, {message: "Fullname must be atleast 20 characters long"}).optional(),
    email: z.string().nonempty({message: "Email field is required"}).email({message: "Invalid email formate"}),
    password: z.string().nonempty({message: "Password field is required"}).min(8, { message: "Password must be at least 8 characters long" }).max(20, {message: "Password is too longs"}).regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" }).regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" }).regex(/[0-9]/, { message: "Password must contain at least one number" }).regex(/[\W_]/, { message: "Password must contain at least one special character" }),
})

export {
    user_validation
}
