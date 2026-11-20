import { Hono } from "hono";
import { Database } from "bun:sqlite";
import { UsersModule } from "./users/users.module";

export class ApplicationModule {
  private readonly server: Hono; 
  private readonly database: Database;
  private readonly users: UsersModule;

  constructor() {
    this.server = new Hono();
    this.database = new Database("api.sqlite");
    this.users = new UsersModule(this.database);
  }

  public init(): ApplicationModule { 
    const {users} = this.users.init();
    this.server.route('/api/users', users)
    return this;
  }

  public start(): Hono {
    return this.server;
  }
}

  // const {users} = this.users.init();
    // this.server.route('/api/users', users);
    // return this;