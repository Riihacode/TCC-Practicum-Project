import { Sequelize } from "sequelize";

const db = new Sequelize(
    //"tcc_practicum_task2"
    "prak-tcc-task3-123210038",
    "root",
    "",{
        /*
        host: "localhost",
        password: "",
        dialect: "mysql",
        */
        host: "104.154.27.60",
        password: "testing_prak-tcc-task3-123210038",
        dialect: "mysql",
        logging: console.log,
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