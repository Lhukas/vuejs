import { Router } from 'express';
import MoviesController from "./movie.controller";
import {MoviesJSONService} from "./movies.json-service";

const moviesController = new MoviesController(new MoviesJSONService());


const moviesRouter = Router();

moviesRouter.get('/', (req, res) => {
    res.json(moviesController.getAllMovies());
});

moviesRouter.get('/:id', (req, res) => {
    const movieId: number = req.params.id;
    res.json(moviesController.getById(movieId));
});


moviesRouter.get('/addFavoris/:id', (req, res) => {
    const movieId: number = req.params.id;
    res.json(moviesController.addFavoris(movieId));
});

moviesRouter.get('/removeFavoris/:id', (req, res) => {
    const movieId: number = req.params.id;
    res.json(moviesController.removeFavoris(movieId));
});

export default moviesRouter;
