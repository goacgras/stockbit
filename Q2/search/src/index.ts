import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { searchRoute } from "./routes/search";
import { createConnection } from "typeorm";
import { detailRoute } from "./routes/detail";

const app = express();

app.use(express.json());

app.use(searchRoute);
app.use(detailRoute);

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
