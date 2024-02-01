<template>
<div class="containerMovie">

  <div class="movieContainer">
<div v-if="movie.image" class="ImageContainerMovie">
  <img  :src="'/'+movie.image" >
  </div>
    <div class="movieDetails">
      <span class="tag tag-teal">{{ movie.genre }}</span>
      <h1>{{movie.titre}}</h1>
      <p>{{movie.description}}</p>
      <button v-if="movie.favoris == 'TRUE'" @click="removeFavoris()" >Retirer de ma liste</button>
      <button v-else @click="addFavoris()">Ajouter à ma liste</button>

      <div class="user">
        <div class="container-note">
          <p>{{ movie.note }}</p>
        </div>
        <div class="user-info">
          <h5>{{ movie.studio }}</h5>
          <span>{{ movie.releaseYear }}</span>
        </div>
      </div>
      <h2>Disponible sur : </h2>
      <div class="containerWatch">
        <a href="https://netflix.com"> <img src="/netflix.png"></a>
        <a href="https://www.primevideo.com/"> <img src="/amazon.png"></a>
        <a href="https://www.disneyplus.com"><img src="/disney.png"></a>
      </div>
    </div>
  </div>
  <h2>Commentaire</h2>
</div>

</template>

<script>
import axios from "axios";

export default {
  name: 'Movie',
  data() {
    return {
      movie: "",
      movieId: ""
    };
  },
  created() {
    this.movieId = this.$route.params.id;

    axios.get('http://localhost:3000/movies/'+this.movieId).then((response) => {
      this.movie = response.data;
      console.log(this.movie)
      console.log(this.movieId)
    })
        .catch((error) => {
          console.error(error);
        });
  },
  methods: {
    removeFavoris() {
      axios.get('http://localhost:3000/movies/removeFavoris/'+this.movieId).then((response) => {
        this.movie = response.data;
        alert(this.movie.titre + " à été retiré de votre liste")
      })
    },
    addFavoris() {
      axios.get('http://localhost:3000/movies/addFavoris/'+this.movieId).then((response) => {
        this.movie = response.data;
        alert(this.movie.titre + " à été ajouté à votre liste")
      })
    }
  }
};

</script>

<style scoped>
.containerMovie{
  background-color: black !important;
  min-height: 100vh;
  padding-top: 50px;
}

.movieContainer{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.ImageContainerMovie img{
  width: 500px;
  height: 700px;
  border-radius: 30px;
  box-shadow: 0px 5px 50px -6px #FFFFFF;
}

.movieDetails{
  text-align: left;
  width: 90%;
}

.movieDetails h1{
  color: white;
}

.movieDetails p{
  color: white;
}

.movieDetails button{
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #db0000;
  width: 200px;
  cursor: pointer;
  margin: 20px 0px;
}

.container-note {

  background: #db0000;
  width: 50px;
  height: 50px;
  p{
    font-size: 16px;
  }
}

.user-info{
  color: white;
}

.user-info span{
  color: white;
}

h2{
  color: white;
}

.containerWatch{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

}
.containerWatch img{
  width: 80px;
  height: 80px;
  border-radius: 10px;
  cursor: pointer;

}


</style>
