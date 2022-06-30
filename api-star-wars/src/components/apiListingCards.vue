<script>
export default {
  name: "apiListingCards",
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
  props: {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    homeworld: {
      type: String,
      required: true,
    },
    speciesData: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <div class="card" >
    <img class="ficha" :src="src" />
    <div >
      <h4>Name: {{ name }}</h4>
      <h4>Gender: {{ gender }}</h4>
      <h4 v-if="Object.keys(planets).includes(homeworld)">
        Homeworld: {{ planets[homeworld] }}
      </h4>
      <h4 v-if="Object.keys(species)">Specie: {{ species[speciesData] }}</h4>
      <h4 v-else>FALSE</h4>
      <button type="button">
        <a href="/favorites/">
        <img src="../components/icons/favoritos.png" alt="favorite"/>
        </a>
      </button>
    </div>
  </div>
</template>

<style scoped>
.ficha{
  height: 15vh;
  width: 10vw;
}
.card{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  padding-top: 2em;
}
h4{
  color:white;
}
button{
  background-color:rgba(151, 151, 151, 0);
  border: none;
  margin-left: 12vw;
  
}

@media (max-width: 400px) {
  .ficha{
    height: 20vh;
    width: 20vw;
  }
}
</style>

