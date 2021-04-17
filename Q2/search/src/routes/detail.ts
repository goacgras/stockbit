import { Request, Response, Router } from "express";
import { SendRequest } from "../utils/send-request";

const router = Router();

router.get("/detail", async (req: Request, res: Response) => {
    const { title } = req.body;
    try {
        const response = await SendRequest.generateResponse(title, "/detail");
        return res.status(200).send(response);
    } catch (err) {
        console.log(err);
        throw new Error("Something went wrong");
    }
});

export { router as detailRoute };
