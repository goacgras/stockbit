import request from "supertest";
import { app } from "../../app";

it("returns 200 when search for title", async () => {
    return request(app)
        .get("/search")
        .send({
            title: "aladdin",
        })
        .expect(200);
});
