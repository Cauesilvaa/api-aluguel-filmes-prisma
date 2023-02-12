import { Router } from "express";
import { CreateMovieController } from "../../modules/movies/movieCase/createMovie/CreateMovieController";
import { CreateMovieRentController } from "../../modules/movies/movieRentCase/createMovieRent/CreateMovieRentController";

const movieRoutes = Router()

const createMovieController = new CreateMovieController()
const createMovieRentController = new CreateMovieRentController()

movieRoutes.post('/create', createMovieController.handle)
movieRoutes.post('/create/movie/rent', createMovieRentController.handle)

export { movieRoutes}