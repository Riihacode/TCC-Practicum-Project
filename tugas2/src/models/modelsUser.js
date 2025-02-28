import { Sequelize } from "sequelize";
import db from "../config/configDatabase";

const { DataTypes } = Sequelize;

const User = db.define(
    "User", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    }, {
        tableName: "users",
    }
)

db.sync().then(() => console.log("Database Synchronized"));

export default User;