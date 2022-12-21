import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import env_vars from "./config";

// Routes
import lotRoutes from "./routes/lot.routes";
import modelRoutes from "./routes/model.routes";

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
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/lots", lotRoutes);
    this.app.use("/models", modelRoutes);
  }

  listen() {
    this.app.listen(this.app.get("port"));
    console.log("Server is running on port", this.app.get("port"));
  }
}
