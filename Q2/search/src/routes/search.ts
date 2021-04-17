import { Request, Response, Router } from "express";
import { SendRequest } from "../utils/send-request";

const router = Router();

router.get("/search", async (req: Request, res: Response) => {
    const { title } = req.body;
    try {
        const response = await SendRequest.generateResponse(title, "/search");
        return res.status(200).send(response);
    } catch (err) {
        console.log(err);
    }
});

export { router as searchRoute };
