import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import env_vars from "./config";
import bodyParser from "body-parser";

// Routes
import lotRoutes from "./routes/lot.routes";
import modelRoutes from "./routes/model.routes";
import inventoryRoutes from "./routes/inventory.routes";
import outputRoutes from "./routes/output.routes";
import { initialValues } from "./initialValues";

export class App {
  private app: Application;

  constructor(private port?: number | string) {
    initialValues();
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
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
  }

  routes() {
    this.app.use("/lots", lotRoutes);
    this.app.use("/models", modelRoutes);
    this.app.use("/inventory", inventoryRoutes);
    this.app.use("/outputs", outputRoutes);
  }

  listen() {
    this.app.listen(this.app.get("port"));
    console.log("Server is running on port", this.app.get("port"));
  }
}
