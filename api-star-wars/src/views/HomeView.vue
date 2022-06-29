<script>
export default {
  data() {
    return {
      characters: [],
    };
  },
  mounted() {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => {this.characters = data.results}); 
  }
  
};
</script>

<template>
  <h1>Personajes</h1>
  <div v-for="character in characters" :key="character.id">
    <h3>{{ character.name }}</h3>
    <h3>{{ character.gender }}</h3>
    <h3>{{ character.homeworld }}</h3>
  </div>
</template>

<style></style>
