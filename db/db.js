import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "postgres://mussin:mussin@localhost:5432/katakatacode"
); // Example for postgres

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connect();
