import { ZodError, ZodTypeAny } from "zod";

const formateZodError = <T extends ZodTypeAny>(error: ZodError<T>): Record<string, string> => {
    const formattedErrors: Record<string, string> = {};
    error.errors.forEach((err) => {
        const field_name = err.path[0]
        const field_message = err.message
        if (formattedErrors[field_name]) {
            formattedErrors[field_name] = formattedErrors[field_name].concat(", ", field_message);
        } else {
            formattedErrors[field_name] = field_message
        }
    });
    return formattedErrors;
}

export {
    formateZodError
}