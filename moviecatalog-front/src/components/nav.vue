<template>
  <nav>
      <img src="/logo-Netflix.jpeg" alt="Description de l'image">
    <ul>
      <li><router-link to="/">Accueil</router-link></li>
      <li><router-link to="/about">Top 3</router-link></li>
      <li><router-link to="/contact">Ma liste</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style scoped>
nav {
  background-color: black;
  color: white;
  padding: 1rem;
}

img{
  width: 150px;
  height: auto;
  display: inline-block;
}

ul {
  list-style: none;
  display: inline-block;
  padding: 0;
  width: 100%;
}

li {
  margin: 10px;
  padding: 10px;
  display: inline-block;
  color: white !important;
  }

a{
  color: white !important;
  list-style: none;
  font-weight: 800;
  font-size: 16px;
  text-decoration: none;
}
a:hover{
  transform: scale(1.5);
}

</style>
