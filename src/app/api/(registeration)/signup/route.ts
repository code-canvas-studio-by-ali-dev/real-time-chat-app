import { NextRequest, NextResponse } from "next/server";
import { user_validation } from "@/lib/zod";
import { ZodError } from "zod";
import { formateZodError } from "@/lib/utils";

export async function POST(req: NextRequest): Promise<NextResponse<ApiTypes>> {
    try {
        const { fullname, email, password } = await req.json();

        user_validation.parse({ fullname, email, password });
        
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