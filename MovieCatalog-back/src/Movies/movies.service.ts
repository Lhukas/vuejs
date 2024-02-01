import { Movies } from './movies';



export interface MoviesService {
    addFavoris(id: number): Movies | null;
    removeFavoris(id: number): Movies | null;
    getById(id: number): Movies | null;
    getAllMovies() : Movies[];
}
