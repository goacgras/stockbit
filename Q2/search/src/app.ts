import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { searchRoute } from "./routes/search";
import { detailRoute } from "./routes/detail";

const app = express();

app.use(express.json());

app.use(searchRoute);
app.use(detailRoute);

export { app };
