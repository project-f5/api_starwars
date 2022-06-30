<script>
import apiListingCards from "../components/apiListingCards.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
export default {
  name: "HomeView",
  data() {
    return {
      characters: [],
      api: [
        "https://swapi.dev/api/people?page=1",
        "https://swapi.dev/api/people?page=2",
      ],
      images: [],
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
    },
    getImages() {
      for (let i = 1; i < 22; i++) {
        if (i === 17) {
          continue;
        } else {
          let urlObject = {
            url: `https://starwars-visualguide.com/assets/img/characters/${i}.jpg`,
          };
          this.images.push(urlObject);
        }
      }
    },
  },
  created() {
    this.getCharacters();
    this.getImages();
  },
  components: { apiListingCards, HeaderComponent, FooterComponent },
};
</script>

<template>
<HeaderComponent />
  <br>
  <h4>CHARACTER GUIDE</h4>
  <div class="grid">
    <div class="box" v-for="(character, index) in characters" :key="character.index" >
    <apiListingCards
      :src="images[index].url"
      :name="character.name"
      :gender="character.gender"
      :homeworld="character.homeworld"
      :speciesData="character.species"
    />
    </div>
  </div>
  <br>
  <FooterComponent/>
</template>


<style scoped>
@import '../assets/homeView.css';
</style>
