import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { searchRoute } from "./routes/search";
import { createConnection } from "typeorm";

const app = express();

app.use(express.json());

app.use(searchRoute);

const start = async () => {
    try {
        await createConnection();
        console.log("database connected");
    } catch (err) {
        console.log(err);
    }
    app.listen(4000, () => {
        console.log("Listening on port 4000");
    });
};

start();
