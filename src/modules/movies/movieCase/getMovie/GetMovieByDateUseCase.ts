import { Movie } from "@prisma/client";
import { prisma } from "../../../../prisma/client/PrismaClient";

export class GetMovieByDateUseCase {
    async execute(): Promise<Movie[]> {
        const movies = await prisma.movie.findMany({ 
            orderBy: { release_date: "desc" },

            // O 'include' tras a opção de incluir algo a mais na pesquisa, e como tem uma tabela de relacionamento da para incluir ela na pesquisa tbm
            // O 'select' é como se fosse o 'attributes' do sequelize . Ent nesse exemplo do movie_rent eu so quero trazer o user e do user eu so quero trazer o nome e email
            include: {
                movie_rent: { select: { user: { select: { name: true, email: true }}}}
            }
        })
        return movies
    }
}