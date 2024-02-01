<template>
  <Nav />
  <router-view></router-view>
</template>

<script>

import Home from "@/components/home.vue";
import nav from "@/components/nav.vue";
import Nav from "@/components/nav.vue";
import Movie from "@/components/movie.vue";


export default {
  name: 'App',
  components: {
    Nav,
   Home,
    Movie
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0px;
}
</style>
