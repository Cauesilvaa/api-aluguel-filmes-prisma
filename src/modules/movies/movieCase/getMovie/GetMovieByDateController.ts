import { Request, Response } from "express";
import { GetMovieByDateUseCase } from "./GetMovieByDateUseCase";

export class GetMovieByDateController {
    async handle(req: Request, res: Response) {
        const getMovieByDateUseCase = new GetMovieByDateUseCase()

        const result = await getMovieByDateUseCase.execute()

        return res.status(200).json(result)
    }
}