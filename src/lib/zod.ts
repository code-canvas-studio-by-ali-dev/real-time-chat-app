import { z } from "zod";

const user_validation = z.object({
    fullname: z.string().min(3, {message: "Fullname must be atleast 3 characters long"}).max(20, {message: "Fullname must be atleast 20 characters long"}),
    email: z.string().email({message: "Invalid email formate"}),
    password: z.string().min(8, { message: "Password must be at least 8 characters long." }).max(20, {message: "Password is too longs"}).regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." }).regex(/[a-z]/, { message: "Password must contain at least one lowercase letter." }).regex(/[0-9]/, { message: "Password must contain at least one number." }).regex(/[\W_]/, { message: "Password must contain at least one special character." }),
    role: z.enum(["Admin", "User", "Employee", "Tester"]),
})

export {
    user_validation
}
