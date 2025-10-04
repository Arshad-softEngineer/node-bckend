const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
    logging: false,
  }
);

sequelize.authenticate()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("Unable to connect to DB:", err));

module.exports = sequelize;
