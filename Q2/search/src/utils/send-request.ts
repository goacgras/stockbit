import axios from "axios";
import { Search } from "../entities/Search";

export class SendRequest {
    static async generateResponse(title: string, type: string) {
        const url = `http://www.omdbapi.com/?apikey=faf7e5bb&page=2`;
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
