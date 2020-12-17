import { ConnectionOptions } from "typeorm";
import path from "path";
import { User } from "./entity/User";

const config: ConnectionOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [User],
  synchronize: true,
  migrations: [path.join(__dirname, "migrations/*.ts")],
};

export default config;
