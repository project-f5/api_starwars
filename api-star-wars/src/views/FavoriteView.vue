<script>
import { mapState } from 'pinia';
import HeaderComponent from '../components/HeaderComponent.vue'; 
import { useStarwarsStore } from '../stores/starwars';
import FavoriteCard from '../components/FavoriteCard.vue';
export default{
    data() {
    return {
      planets: {
        "https://swapi.dev/api/planets/1/": "Tattoine",
        "https://swapi.dev/api/planets/2/": "Alderaan",
        "https://swapi.dev/api/planets/8/": "Naboo",
        "https://swapi.dev/api/planets/14/": "Kashyyyk",
        "https://swapi.dev/api/planets/20/": "Stewjon",
        "https://swapi.dev/api/planets/21/": "Eriadu",
        "https://swapi.dev/api/planets/22/": "Corellia",
        "https://swapi.dev/api/planets/23/": "Rodia",
        "https://swapi.dev/api/planets/24/": "Nal Hutta",
        "https://swapi.dev/api/planets/26/": "Bestine IV",
        "https://swapi.dev/api/planets/28/": "Unknown",
      },
      species: {
        "": "Unknown",
        "https://swapi.dev/api/species/2/": "Droid",
        "https://swapi.dev/api/species/3/": "Wookie",
        "https://swapi.dev/api/species/4/": "Rodian",
        "https://swapi.dev/api/species/5/": "Hutt",
        "https://swapi.dev/api/species/6/": "Yoda's Species",
      },
    };
  },
    components: { HeaderComponent, FavoriteCard },
    computed:{
        ...mapState(useStarwarsStore, ['characterArray','pictureArray'])
    }

}
</script>

<template>
<h1>estamos hasta los huevos</h1>
<div class="grid">
    <div class="box" v-for="(character, index) in characterArray" :key="character.index">
    <FavoriteCard
      :index="index"
      :src="pictureArray[index]"
      :name="character.name"
      :gender="character.gender"
      :homeworld="character.homeworld"
      :speciesData="character.species"
    />
    </div>
  </div>
        <div class="button-add">
          <button class="button-img" type="button"></button> 
        <h5>ADD NEW CHARACTERS</h5>
        </div>
</template>

<style scoped>
@import '../assets/homeView.css';
</style>