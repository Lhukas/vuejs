export class Commentary {
    constructor(
        private _idCommentary: number,
        private _idMovie: number,
        private _pseudo: string,
        private _content: string,
        private _note: number,
    ) {
    }


    get idCommentary(): number {
        return this._idCommentary;
    }

    set idCommentary(value: number) {
        this._idCommentary = value;
    }

    get idMovie(): number {
        return this._idMovie;
    }

    set idMovie(value: number) {
        this._idMovie = value;
    }

    get pseudo(): string {
        return this._pseudo;
    }

    set pseudo(value: string) {
        this._pseudo = value;
    }

    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
    }

    get note(): number {
        return this._note;
    }

    set note(value: number) {
        this._note = value;
    }
}