import axios from "axios";
import { Request, Response, Router } from "express";
import { Search } from "../entity/Search";

const router = Router();

router.get("/search/:title", async (req: Request, res: Response) => {
    const { title } = req.params;

    const url = `http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}=${title}&page=2`;

    const response = await axios.get(url);
    const newSearch = new Search({
        end_point: url,
        paramenter: title,
    });

    await newSearch.save();

    res.status(200).send(response.data.Search || []);
});

export { router as searchRoute };
