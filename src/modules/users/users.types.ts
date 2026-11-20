import z from "zod";

export const UserSchema = z.object({
  id: z.number(),
  title: z.string(),
  email: z.email(),
  password: z.string(),
});


export const userRegisterSchema = UserSchema.omit({ id: true });
export const UserUpdateSchema = UserSchema.pick({ email: true, password: true });
export const UserTokenSchema = z.object({ token: z.string() });

export type UserType = z.infer<typeof UserSchema>;
export type UserRegisterType = z.infer<typeof userRegisterSchema>;
export type UserAuthType = z.infer<typeof UserSchema>;
export type UserTokenType = z.infer<typeof UserTokenSchema>;





// export const UserCreateSchema = UserSchema.omit({ id: true });
// export const UserUpdateSchema = UserCreateSchema.partial();

// export type UserType = z.infer<typeof UserSchema>;
// export type UserCreateType = z.infer<typeof UserCreateSchema>;
// export type UserUpdateType = z.infer<typeof UserUpdateSchema>; 