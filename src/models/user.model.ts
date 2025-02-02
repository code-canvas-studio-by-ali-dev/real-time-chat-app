import mongoose, { Schema } from "mongoose";

const userSchema: Schema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ['Admin', 'User', 'Employee', 'Tester'],
            default: "useUserr"
        },
        refreshToken: {
            type: String,
            default: undefined
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model<UserTypes>("users", userSchema)

export default User;