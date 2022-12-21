import * as dotenv from "dotenv";
import { Operation } from "./entities/Operation";
import { Brand } from "./entities/Brand";
import { Lot } from "./entities/Lot";
import { Model } from "./entities/Model";
import { Product } from "./entities/Product";
import { Output } from "./entities/Output";
import { Inventory } from "./entities/Inventory";

dotenv.config();

const env_vars = {
  host: process.env.HOST || "localhost",
  port: Number(process.env.PORT) || 3306,
  user: process.env.USER || "root",
  password: process.env.PASSWORD || "123456",
  database: process.env.DATABASE || "spare",
  serverPort: Number(process.env.SERVERPORT) || 3000,
};

export const entities = [
  Product,
  Brand,
  Model,
  Lot,
  Operation,
  Output,
  Inventory,
];

export const stringType = "varchar";
export const numberType = "int";

export default env_vars;
