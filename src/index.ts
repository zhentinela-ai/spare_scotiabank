import { App } from "./app";
import { AppDataSource } from "./db";

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Database connected");
    const app = new App();
    app.listen();
  } catch (error) {
    console.error(error);
  }
}

main();
