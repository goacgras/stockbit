import { createConnection, getConnection } from "typeorm";
import { Search } from "../entities/Search";

let conn: any;
beforeAll(async () => {
    conn = await createConnection();
});

afterAll(async () => {
    await getConnection()
        .createQueryBuilder()
        .delete()
        .from(Search)
        .where("paramenter = :title", { title: "aladdin" })
        .execute();

    await conn.close();
});
