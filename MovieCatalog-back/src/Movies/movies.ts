export class Movies {
    constructor(
        private _id: number,
        private _titre: string,
        private _studio: string,
        private _note: number,
        private _genre: string,
        private _image: string,
        private _releaseYear: string,
        private _favoris: string,
        private _description: string
    ) {
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get titre(): string {
        return this._titre;
    }

    set titre(value: string) {
        this._titre = value;
    }

    get studio(): string {
        return this._studio;
    }

    set studio(value: string) {
        this._studio = value;
    }

    get note(): number {
        return this._note;
    }

    set note(value: number) {
        this._note = value;
    }

    get genre(): string {
        return this._genre;
    }

    set genre(value: string) {
        this._genre = value;
    }

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }

    get releaseYear(): string {
        return this._releaseYear;
    }

    set releaseYear(value: string) {
        this._releaseYear = value;
    }

    get favoris(): string {
        return this._favoris;
    }

    set favoris(value: string) {
        this._favoris = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }
}