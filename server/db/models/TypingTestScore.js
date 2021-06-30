import Sequelize from "sequelize";
import db from "../../db.js";
const { DataTypes } = Sequelize;

export default db.define("typing_test_scores", {
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completionTimestamp: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  charsPerMinute: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
