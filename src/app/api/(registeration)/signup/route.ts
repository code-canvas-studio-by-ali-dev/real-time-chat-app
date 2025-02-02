import connectToDatabase from "@/lib/db";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

const Post = async (req: NextRequest): Promise<NextResponse<RegisterApi>> => {
    await connectToDatabase()
    
    const { fullname, email, password } = await req.json();

    const newUser = await User.create({ fullname, email, password });

    return NextResponse.json(
        {
            success: true,
            message: "User registered successfully",
            data: newUser,
            token: {
                refreshToken: "",
                accessToken: "",
            },
        },
        {
            status: 201,
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
};

export default Post;