import { Sequelize } from "sequelize";

const db = new Sequelize(
    "tcc_practicum_task2",
    "root",
    "",{
        host: "localhost",
        password: "",
        dialect: "mysql",
    }
);

const connectDB = async () => {
    try {
        await db.authenticate();
        console.log("Database connected successfully");
    } catch(error) {
        console.log("Database connection failed: ", error);
    }
};

export {
    db, 
    connectDB
};