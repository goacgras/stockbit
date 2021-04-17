import axios from "axios";
import { Search } from "../entity/Search";

export class SendRequest {
    static async generateResponse(title: string, type: string) {
        const url = `http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&page=2`;
        let uri =
            type === "/search" ? url + `&s=${title}` : url + `&t=${title}`;

        const res = await axios.get(uri);

        const newSearch = new Search({
            paramenter: title,
            end_point: type,
        });

        await newSearch.save();

        return res.data || [];
    }
}
