import { Commentary } from './commentary';



export interface CommentaryServices {
    getMovieCommentaries(idMovie: number): Commentary[] | null;
}
