<template>
  <HeaderComponent />
  <div>
    <apiListingCards :characters="characters" />
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

<style scoped></style>
