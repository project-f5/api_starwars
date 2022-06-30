<script setup>
import IconStarwars from './icons/IconStarwars.vue';
import IconHome from './icons/IconHome.vue';

</script>
<template>
  <header>
    <div class="iconprincipal">
      <IconStarwars />
    </div>
    <div class="title">
      <h1>EXPLORE THE GALAXY</h1>
    </div>

    <nav>
      <button type="button">
        <a href="/home/">
          <IconHome />
        </a>
        <a class="buttontext" href="/home/">
          <h3>Home</h3>
        </a>
      </button>
      <button>
        <a href="./favorite">
          <img  class="fav" src="../assets/imgs/favoritos.png" alt="Icon Fav">
        </a>
        <a class="buttontext" href="./favorite">
          <h3>Favorites</h3>
        </a>
      </button>
    </nav>
  </header>
</template>

<style scoped>
@import '../assets/headerComponent.css';
</style>
