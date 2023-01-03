import * as dotenv from "dotenv";
import { Scotia } from "./entities/Scotia";
import { Brand } from "./entities/Brand";
import { Lot } from "./entities/Lot";
import { Model } from "./entities/Model";
import { Product } from "./entities/Product";
import { Output } from "./entities/Output";
import { Inventory } from "./entities/Inventory";
import { Devolution } from "./entities/Devolution";
import { InternOperation } from "./entities/internOperation";
import { OperationAssigned } from "./entities/operationAssigned";

dotenv.config();

const env_vars = {
  host: process.env.HOST || "localhost",
  port: Number(process.env.PORT) || 3306,
  user: process.env.USER || "root",
  password: process.env.PASSWORD || "123456",
  database: process.env.DATABASE || "spare_orm",
  serverPort: Number(process.env.SERVERPORT) || 3000,
};

export const entities = [
  Product,
  Brand,
  Model,
  Lot,
  Scotia,
  Output,
  Inventory,
  Devolution,
  InternOperation,
  OperationAssigned
];

export const stringType = "varchar";
export const numberType = "int";

export default env_vars;
