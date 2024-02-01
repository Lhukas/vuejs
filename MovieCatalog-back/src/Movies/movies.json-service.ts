import { Movies } from './movies';
import {MoviesService} from "./movies.service";
import * as fs from "fs";

export class MoviesJSONService implements MoviesService {

    private movies!: Movies[];
    private IDnew : number = 0
    private newMovies !: Movies

    constructor() {
        const data = fs.readFileSync('./src/Movies/movies.json', 'utf-8');
        this.movies = JSON.parse(data);
    }


    addFavoris(id: number): Movies | null{

        const foundMovie = this.getById(id)

        foundMovie.favoris = "TRUE";
        fs.writeFileSync('./src/Movies/movies.json', JSON.stringify(this.movies, null, 2), 'utf-8');
        return foundMovie
    }

    removeFavoris(id: number): Movies | null{

        const foundMovie = this.getById(id)

        foundMovie.favoris = "FALSE";
        fs.writeFileSync('./src/Movies/movies.json', JSON.stringify(this.movies, null, 2), 'utf-8');
        return foundMovie
    }

    getById(id: number): Movies | null {
        const foundMovie = this.movies.find((movie) => movie.id == id);
        return foundMovie || null;
    }

    getByUsername(title: string): Movies | null {
        const movies = this.movies.find(user => movies.title === title);
        return movies || null;
    }


    generationID() : number {
        return Math.floor(Math.random() * 10000);
    }


    getAllMovies() : Movies[]{
        return this.movies;
    }
}


