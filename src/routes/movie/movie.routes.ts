import { Router } from "express";
import { CreateMovieController } from "../../modules/movies/movieCase/createMovie/CreateMovieController";
import { GetMovieByDateController } from "../../modules/movies/movieCase/getMovie/GetMovieByDateController";
import { CreateMovieRentController } from "../../modules/movies/movieRentCase/createMovieRent/CreateMovieRentController";

const movieRoutes = Router()

const createMovieController = new CreateMovieController()
const createMovieRentController = new CreateMovieRentController()
const getMovieByDateController = new GetMovieByDateController()

movieRoutes.post('/create', createMovieController.handle)
movieRoutes.post('/create/movie/rent', createMovieRentController.handle)
movieRoutes.get('/get-movies', getMovieByDateController.handle)

export { movieRoutes}