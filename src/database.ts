import { createPool } from "mysql2/promise";
import env_vars from "./config";

const { host, port, user, password, database } = env_vars;

export const connect = async () => {
  const connection = await createPool({
    host: host,
    port: port,
    user: user,
    password: password,
    database: database,
    connectionLimit: 10,
  });
  return connection;
};
