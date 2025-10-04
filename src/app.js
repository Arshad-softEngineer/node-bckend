const express = require("express");
const sequelize = require("./db");
require("dotenv").config();

const userRoutes = require("./routes/user.routes");

const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "test") {
  (async () => {
    try {
      await sequelize.sync();
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (err) {
      console.error("Failed to sync DB:", err);
    }
  })();
}

module.exports = app;
