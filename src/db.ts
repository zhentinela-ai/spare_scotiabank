import { Product } from "./entities/Product";
import { Brand } from "./entities/Brand";
import { Model } from "./entities/Model";
import { DataSource } from "typeorm";
import env_vars from "./config";

const { database, host, password, port, user } = env_vars;
const username = user;

export const AppDataSource = new DataSource({
  type: "mysql",
  host,
  username,
  password,
  port,
  database: "spare_orm",
  entities: [Product, Brand, Model],
  logging: true,
  synchronize: true,
});
