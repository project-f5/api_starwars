<template>
  <header>
    <div class="iconprincipal">
      <IconStarwars />
    </div>
    <div class="title">
      <h1>EXPLORE THE GALAXY</h1>
    </div>
  
    <nav>
      <button>
        <IconHome />
        <a href="/home/"><h3>Home</h3></a>
      </button>
      <button>
        <img src="../components/icons/favoritos.png" alt="">
        <a href="/favorites/"><h3>Favorites</h3></a>
      </button>
    </nav>
  </header>
</template>
<script>
import IconStarwars from './icons/IconStarwars.vue';
import IconHome from './icons/IconHome.vue';
export default {
    name: "HeaderComponent",
    data: () => ({}),
    components: { IconStarwars, IconHome }
};
</script>
<style scoped>
header {
  height: 200px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  justify-content: space-around;
  background-color: #6c5807;
}
.iconprincipal{
  padding-top: 2rem;
  padding-left: 2rem;
}
.title {
  color: white;
  font-family: 'Concert One', cursive;
  font-size: 30px;
  }
  
nav {
  display: flex;
  align-items: flex-end;
  background-color: #6c5807;
}
button {
  display: inline-flex;
  align-items: flex-end;
  background-color: #6c5807;
  border: none;
  margin-bottom: 1rem;
  gap: 1rem;
}
a{
  border-radius: 1rem;
  background: rgba(255, 61, 0, 0.3);
  padding: 10px 30px 10px 30px;
  text-decoration: none;
  }
  a:hover {
    background: white;
  }
  h3{
  display: inline;
  margin: none;
  font-size: 22px;
  color: white;
  font-family: 'Concert One', cursive;
  }
  h3:hover{
    color: black;
  }
</style>
