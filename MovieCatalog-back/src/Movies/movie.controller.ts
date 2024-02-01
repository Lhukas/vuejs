// @ts-ignore
import { Movies } from './Movies';
import { MoviesService } from './movies.service';


export default class MoviesController {

    constructor(private moviesService: MoviesService) {}

    addFavoris(id: number): Movies {
        return this.moviesService.addFavoris(id);
    }

    removeFavoris(id: number): Movies {
        return this.moviesService.removeFavoris(id);
    }

    getById(id: number): Movies | null {
        return this.moviesService.getById(id);
    }


     getAllMovies(): Movies[] {
        return this.moviesService.getAllMovies();
    }


}
