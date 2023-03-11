const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Sayings = sequelize.define(
    "sayings",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        uuid: { type: DataTypes.STRING,  unique: false, allowNull: false },
        text: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false,
            defaultValue: "",
        }
    }
);

module.exports = {
    Sayings
};
