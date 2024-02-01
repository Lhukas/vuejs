import {Movies} from "./src/Movies/movies";

const express = require('express');
const cors = require ('cors');

import moviesRouter from './src/Movies/movie.router'; // Assurez-vous de spécifier le chemin correct


//npx ts-node index.ts

import  MoviesController  from './src/Movies/movie.controller';
import { MoviesJSONService }  from './src/Movies/movies.json-service';
const moviesController = new MoviesController(new MoviesJSONService());

const app = express();

app.use(cors())
app.use(express.json())

const port = 3000;

app.use('/movies', moviesRouter);


app.listen(port, () => {
    console.log(`Serveur Express écoutant sur le port ${port}`);
});





