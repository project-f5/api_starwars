<template>
  <HeaderComponent />
  <h4>CHARACTER GUIDE</h4>
  <div class="card" v-for="(character, index) in characters" :key="character.index">
    <apiListingCards :src="images[index].url" :name="character.name" :gender="character.gender" class="grid"/>
  </div>
  <footer>This is the footer</footer>
</template>

<script>
import apiListingCards from "../components/apiListingCards.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
export default {
  name: "HomeView",
  data() {
    return {
      characters: [],
      api: [
        "https://swapi.dev/api/people?page=1",
        "https://swapi.dev/api/people?page=2",
      ],
    };
  },
  props: {},
  methods: {
    async getCharacters() {
      let dataCharacters = [];
      for (let i = 0; i < 2; i++) {
        let response = await fetch(this.api[i]);
        let data = await response.json();
        if (i === 0) {
          let dataArray = data.results;
          dataArray.forEach(function (element) {
            dataCharacters.push(element);
          });
        }
        if (i === 1) {
          let dataArray = data.results;
          dataArray.forEach(function (element) {
            dataCharacters.push(element);
          });
        }
      }
      this.characters = dataCharacters;
      console.log(this.characters);
    },
  },

  created() {
    this.getCharacters();
  },
  components: { apiListingCards, HeaderComponent },
};
</script>

<style scoped>

.grid{
  display:grid;
  grid-template-columns: repeat (4,1fr);
  grid-template-rows: repeat (5,1fr);
}
</style>
