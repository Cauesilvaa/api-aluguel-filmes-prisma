import { Router } from "express";
import { CreateUserController } from "../../modules/users/userCases/createUser/CreateUserController";

const userRoutes = Router()
const createUseController = new CreateUserController()

userRoutes.post("/create", createUseController.handle)

export { userRoutes }