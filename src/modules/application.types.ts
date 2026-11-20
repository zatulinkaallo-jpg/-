import z from "zod";
import type { UserType } from "./users/users.types";

export type ApplicationEnvironment = {
    Variables: {
        user: UserType;
    }
    
    Bindings: {
        JWT_SECRET: string;
    }
}

export type ApplicationResult<T> = ApplicationSuccessResult<T> | ApplicationFailedResult;

export type ApplicationSuccessResult<T> = {
    success: true;
    data: T;
};

export type ApplicationFailedResult = {
    success: false;
    error: string;
};


export const IDParamSchema = z.object({
    id: z.string().regex(/^\d+$/, "Id must be number")
        .transform((value: string) => parseInt(value, 10)),
});

export type IDParamType = z.infer<typeof IDParamSchema>;




// type DemoType<FirstGeneric, SecondGeneric> = {
//     id: FirstGeneric;
//     title: SecondGeneric;
// }