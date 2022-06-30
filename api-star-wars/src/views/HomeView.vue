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
  components: { apiListingCards, HeaderComponent, FooterComponent },
};
</script>


<template>
<HeaderComponent />
  <br>
  <h4>CHARACTER GUIDE</h4>
  <div class="grid">
    <div class="box" v-for="(character, index) in characters" :key="character.index">
      <apiListingCards :src="images[index].url" :name="character.name" :gender="character.gender" />
    </div>
  </div>
  <br>
  <FooterComponent/>
</template>




<style scoped>

.grid {
  border: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 4rem;
  margin: 2rem;
}


@media (max-width: 405px){
  .grid {
    display: grid;
    grid-template-columns:1fr 1fr ;
    gap: 2rem;
    margin: 1rem;
  }
}

.box {
background: rgba(151, 151, 151, 0.19);
font-family: 'Concert One', cursive;
text-align: center;
line-height: 2rem;
}

h4 {
  text-align: center;
  color: white;
  font-size: 1.8rem;
  font-family: 'Concert One', cursive;
}

</style>
