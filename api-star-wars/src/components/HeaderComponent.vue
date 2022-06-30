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
        <a href="/home/"><IconHome /></a>
        <a class="buttontext" href="/home/"><h3>Home</h3></a>
      </button>
      <button>
        <a href="/favorites/">
        <img src="../components/icons/favoritos.png" alt="">
        </a>
        <a class="buttontext" href="/favorites/" ><h3>Favorites</h3></a>
      </button>
    </nav>
  </header>
</template>

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


@media (max-width: 400px) {
  header{
    display: inline;
    margin: auto;
    background-color: #6c5807;
  }
}
.iconprincipal{
  padding: 2.5rem 2rem 1rem 2rem;
  
}

.title {
  color: white;
  font-family: 'Concert One', cursive;
  font-size: 22px;
  text-align: center;
  margin: auto;
  }
 @media (max-width: 400px){
  .title {
    font-size: 15px;
    text-align: center;
    margin-top: 1.5rem;
    margin-block-end: 1.5rem ;
  }
 }
 h1 {
  margin: 0.5rem;
 }
  
nav {
  display: flex;
  align-items: flex-end;
  
}
@media (max-width: 400px) {
  nav{
    display: block;
    margin: auto;
  }
}
button {
  display: inline-flex;
  align-items: flex-end;
  background-color: #6c5807; 
  border: none;
  margin-bottom: 1rem;
  gap: 1rem;
}
.buttontext{
  border-radius: 1rem;
  background: rgba(255, 61, 0, 0.3);
  padding: 10px 30px 10px 30px;
  text-decoration: none;
  }
  .buttontext:hover {
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
