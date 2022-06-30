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
  <div>
    <img :src="src" />
    <ul>
      <li>Name: {{ name }}</li>
      <li>Gender: {{ gender }}</li>
      <li v-if="Object.keys(planets).includes(homeworld)">
        Homeworld: {{ planets[homeworld] }}
      </li>
      <li v-if="Object.keys(species)">Specie: {{ species[speciesData] }}</li>
      <li v-else>FALSE</li>
    </ul>
  </div>
</template>

<style scoped>
img{
  height: 15vh;
  width: 10vw;
}
.card{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
}
h4{
  color:white;
}
@media (max-width: 400px) {
  img{
    height: 20vh;
    width: 20vw;
    
  }
}
</style>

