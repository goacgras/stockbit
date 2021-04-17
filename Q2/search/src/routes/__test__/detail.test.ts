import request from "supertest";
import { app } from "../../app";

it("returns 200 when search for movie detail", async () => {
    return request(app)
        .get("/detail")
        .send({
            title: "aladdin",
        })
        .expect(200);
});
