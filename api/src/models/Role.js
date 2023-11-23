const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "role",
    {
      idRole: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      nameRole: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
