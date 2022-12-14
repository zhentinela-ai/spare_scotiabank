import express, { Application } from "express";
import morgan from "morgan";
import env_vars from "./config";

// Routes

export class App {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.app.set("port", this.port || env_vars.serverPort);
  }

  middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }

  routes() {
    // this.app.use();
  }

  listen() {
    this.app.listen(this.app.get("port"));
    console.log("Server is running on port", this.app.get("port"));
  }
}
