import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client/PrismaClient";
import { CreateMovieRentDTO } from "../../dto/CreateMovieRentDTO";

export class CreateMovieRentUseCase {

    // O 'Promise<void>' indica que o retorno do execute é uma promise do tipo 'void'
    async execute({movieId, userId} : CreateMovieRentDTO): Promise<void> {

        // Verifica se o filme existe
        const movieExist = await prisma.movie.findUnique({ where : { id: movieId }})
        if (!movieExist) throw new AppError("Movie does not exists")

        // Verifica se o filme esta alugado
        const movieAlreadyRented = await prisma.movieRent.findFirst({ where: { movieId }})
        if (movieAlreadyRented) throw new AppError("Movie already rented")

        // Verifica se o usuario existe
        const userExist = await prisma.user.findUnique({ where: { id: userId }})
        if (!userExist) throw new AppError("User does not exist")

        // Cria locação de filme
        await prisma.movieRent.create({ data: { movieId, userId }})
    }
}