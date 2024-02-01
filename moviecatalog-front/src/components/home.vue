<template>
  <div class="container">
    <div class="card" v-for="(movie, index) in movies" :key="index">
      <router-link :to="'/movie/' + movie.id">
      <div class="card-header">
        <img :src="'/'+movie.image" >
      </div>
      <div class="card-body">
        <span class="tag tag-teal">{{ movie.genre }}</span>
        <h4>
          {{ movie.titre }}
        </h4>
        <p>
          {{ movie.description }}
        </p>
        <div class="user">
          <div class="container-note">
            <p>{{ movie.note }}</p>
          </div>
          <div class="user-info">
            <h5>{{ movie.studio }}</h5>
            <span>{{ movie.releaseYear }}</span>
          </div>
        </div>

      </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/nav.vue'; // Importation du composant de navigation
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Nav, // Enregistrement du composant pour une utilisation dans le template
  },

  data() {
    return {
      movies: [],
    };
  },
  created() {
    axios.get('http://localhost:3000/movies').then((response) => {
          this.movies = response.data;
          console.log(this.movies)
        })
        .catch((error) => {
          console.error(error);
        });
  },

  methods: {
    getImage(imgName) {
      return '../assets/' + imgName + '.jpg';
    }
  }


};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");





.container {
  display: block;
  grid-auto-columns: 1fr 1fr;
  width: 90%;
  margin: 30px auto;

}

.card {
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 300px;
  display: inline-block;
  color: black !important;
}

.card-header img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  min-height: 250px;
}

.tag {
  background: #cccccc;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;
}

.tag-teal {
  background-color: #47bcd4;
}

.tag-purple {
  background-color: #5e76bf;
}

.tag-pink {
  background-color: #cd5b9f;
}

.card-body p {
  font-size: 13px;
  margin: 0 0 40px;
}

.user {
  display: flex;
  margin-top: auto;
}

.container-note {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  p{
    display: inline-block;
    vertical-align: middle;
    margin: 0;
    font-weight: 800;
  }
}

.user-info{
  text-align: left;
  margin-left: 20px;
}

.user-info span{
font-weight: 800;
}

.user-info h5 {
  margin: 0;
}

.user-info small {
  color: #545d7a;
}

a{
  text-decoration: none;
  color: black;

}
a:visited {
  color: black; /* ou toute autre couleur de votre choix */
}
</style>
