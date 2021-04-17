import "reflect-metadata";
import { createConnection } from "typeorm";
import { app } from "./app";

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
