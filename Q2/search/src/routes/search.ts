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
        throw new Error("Something went wrong");
    }
});

export { router as searchRoute };
