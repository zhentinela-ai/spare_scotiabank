import * as dotenv from "dotenv";

dotenv.config();

const env_vars = {
  host: process.env.HOST || "localhost",
  port: Number(process.env.PORT) || 3306,
  user: process.env.USER || "root",
  password: process.env.PASSWORD || "123456",
  database: process.env.DATABASE || "spare",
  serverPort: Number(process.env.SERVERPORT) || 3000,
};

export default env_vars;
