import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

const app = express();

app.use(cors());
app.use(express.json());
console.log("JWT_SECRET:", process.env.JWT_SECRET);


app.listen(5000, () => console.log("server terhubung"));
