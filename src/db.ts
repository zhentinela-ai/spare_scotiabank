import { DataSource } from "typeorm";
import env_vars, { entities } from "./config";

const { host, password, port, user } = env_vars;
const username = user;

export const AppDataSource = new DataSource({
  type: "mysql",
  host,
  username,
  password,
  port,
  database: "spare_orm",
  entities: entities,
  // logging: true,
  synchronize: true,
});
