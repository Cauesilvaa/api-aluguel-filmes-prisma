import { Router } from "express";
import { movieRoutes } from "./movie/movie.routes";
import { userRoutes } from "./user/user.routes";

const routes = Router();

routes.use("/users", userRoutes)
routes.use("/movies", movieRoutes)

export { routes }