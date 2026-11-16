import { Contet, Hono, type TepedResponse } from "hono";
import { UsersRepository } from "./users/repository";

export class AuthController {
    constructor(private readonly repository: UsersRepository) {}
    public routes(): Hono {
        return new Hono();
    }
}