import { Router } from "express";
import { CreateMovieController } from "../../modules/movies/movieCase/createMovie/CreateMovieController";

const movieRoutes = Router()

const createMovieController = new CreateMovieController()

movieRoutes.post('/create', createMovieController.handle)

export { movieRoutes}