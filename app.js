import { sequelize } from "./src/config/database.js";
import express from "express";
import morgan from "morgan";

app.use(morgan("dev"));
const app = express();

const PORT=process.env.PORT || 3000;

