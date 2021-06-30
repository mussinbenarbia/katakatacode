import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const { DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;
export default new Sequelize(
  `postgres://${DB_USERNAME}:${DB_PASSWORD}@localhost:5432/${DB_NAME}`
);
