import { Database } from "bun:sqlite";
import { Hono } from "hono";
import { UsersRepository } from "./users.repository";
import { UsersController } from "./users.controller";

export class UsersModule {

  private readonly repository: UsersRepository;
  private readonly users: UsersController;

  constructor(private readonly database: Database) {
    this.repository = new UsersRepository(this.database);
    this.users = new UsersController(this.repository);
  }

  public init() {
    this.repository.init();
    return {
      users: this.users.routes(),
    }
  }
}
