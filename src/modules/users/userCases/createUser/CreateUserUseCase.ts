import { User } from "@prisma/client"
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client/PrismaClient";
import { CreateUserDTO } from "../../dto/CreateUserDTO";

export class CreateUserUseCase {

    // O 'Promise<User>' indica que o retorno do execute é uma promise do tipo 'user'
    async execute({name, email}: CreateUserDTO): Promise<User> {

        // Verifica se o email do usuario ja existe 
        const userAlreadyExist = await prisma.user.findUnique({ where: { email }})

        if (userAlreadyExist) throw new AppError('User already exist!')

        const user = await prisma.user.create({ data: {name, email}})

        return user
    }
}