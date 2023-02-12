import { Movie } from "@prisma/client";
import { CreateMovieDTO } from "../../dto/CreateMovieDTO";
import { prisma } from "../../../../prisma/client/PrismaClient";
import { AppError } from "../../../../errors/AppError";

export class CreateMovieUseCase {

    // O 'Promise<Movie>' indica que o retorno do execute é uma promise do tipo 'movie'
    async execute({title, duration, release_date}: CreateMovieDTO): Promise<Movie> {

        // Verifica se o filme ja existe 
        const movieAlreadyExist = await prisma.movie.findUnique({ where: { title }})

        if (movieAlreadyExist) throw new AppError("Movie already exist")

        const movie = await prisma.movie.create({data: {title, duration, release_date}})

        return movie
    }
}