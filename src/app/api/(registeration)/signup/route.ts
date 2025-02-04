import { NextRequest, NextResponse } from "next/server";
import { user_validation } from "@/lib/zod";
import { ZodError } from "zod";
import { formateZodError } from "@/lib/utils";
import dbConnect from "@/lib/db";
import User from "@/models/user.model";

export async function POST(req: NextRequest): Promise<NextResponse<ApiTypes>> {
    await dbConnect()

    try {
        const { fullname, email, password } = await req.json();

        user_validation.parse({ fullname, email, password });

        const findUserIfExists = await User.find({ email })
        if(findUserIfExists){
            return NextResponse.json(
                {
                    success: false,
                    message: "Email or password is incorrect"
                },
                {
                    status: 400
                }
            )
        }

        const newUser = await User.create({ fullname, email, password });


    } catch (error) {
        if (error instanceof ZodError) {
            return NextResponse.json(
                {
                    success: false,
                    errors: formateZodError(error)
                },
                {
                    status: 400
                }
            )
        }
    }
}