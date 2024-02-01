import {Commentary} from "./commentary";
import {CommentaryServices} from "./commentary.services";
import * as fs from "fs";



export class CommentaryJSONService implements CommentaryServices {

    private commentaries!: Commentary[];


    constructor() {
        const data = fs.readFileSync('./src/Commentary/commentaries.json', 'utf-8');
        this.commentaries = JSON.parse(data);
    }



    getMovieCommentaries(idMovie: number): Commentary[] | null {
        return this.commentaries;
    }

}