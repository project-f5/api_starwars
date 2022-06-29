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
export default {
  name: "HomeView",
  data() {
    return {
      characters: [],
      api: [
        "https://swapi.dev/api/people?page=1",
        "https://swapi.dev/api/people?page=2",
      ],
      images: [
        {
          url: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
        },
        {
          url: "https://starwars-visualguide.com/assets/img/characters/2.jpg",
        },
        {
          url: "https://starwars-visualguide.com/assets/img/characters/3.jpg",
        },
        {
          url: "https://starwars-visualguide.com/assets/img/characters/4.jpg",
        },
        {
          url: "https://starwars-visualguide.com/assets/img/characters/5.jpg",
        },
        {
          url: "https://starwars-visualguide.com/assets/img/characters/6.jpg",
        },
        {
          url: "https://starwars-visualguide.com/assets/img/characters/7.jpg",
        },
        {
          url: "https://starwars-visualguide.com/assets/img/characters/8.jpg",
        },
        {
          url: "https://starwars-visualguide.com/assets/img/characters/9.jpg",
        },
        {
          url: "https://starwars-visualguide.com/assets/img/characters/10.jpg",
        },
        {
          url: "https://starwars-visualguide.com/assets/img/characters/11.jpg",
        },
        {
          url: "https://starwars-visualguide.com/assets/img/characters/12.jpg",
        },
        {
          url: "https://starwars-visualguide.com/assets/img/characters/13.jpg",
        },
        {
          url: "https://starwars-visualguide.com/assets/img/characters/14.jpg",
        },
        {
          url: "https://starwars-visualguide.com/assets/img/characters/15.jpg",
        },
        {
          url: "https://starwars-visualguide.com/assets/img/characters/16.jpg",
        },
        {
          url: "https://starwars-visualguide.com/assets/img/characters/18.jpg",
        },
        {
          url: "https://starwars-visualguide.com/assets/img/characters/19.jpg",
        },
        {
          url: "https://starwars-visualguide.com/assets/img/characters/20.jpg",
        },
        {
          url: "https://starwars-visualguide.com/assets/img/characters/21.jpg",
        },
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
  components: { apiListingCards },
};
</script>

<style scoped>

.grid{
  display:grid;
  grid-template-columns: repeat (4,1fr);
  grid-template-rows: repeat (5,1fr);
}
</style>
