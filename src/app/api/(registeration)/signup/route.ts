import { NextRequest, NextResponse } from "next/server";
import { user_validation } from "@/lib/zod";
import { ZodError } from "zod";
import { formateZodError } from "@/lib/utils";

export async function POST(req: NextRequest) {
    try {
        const { fullname, email, password } = await req.json();

        // Validate the input using Zod
        const checkValidation = user_validation.parse({ fullname, email, password });

        // Return a success response
        return NextResponse.json(
            { message: "User registered successfully", data: checkValidation },
            { status: 200 }
        );
    } catch (error) {
        if(error instanceof ZodError){
            console.log(formateZodError(error))
        }
    }
}