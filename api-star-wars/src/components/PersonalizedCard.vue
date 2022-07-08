<script>
import { mapActions } from 'pinia';
import { useStarwarsStore } from '../stores/starwars';

export default {
  name: "PersonalizedCard",
  props: {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    homeworld: {
      type: String,
      required: true,
    },
    speciesData: {
      type: String,
      required: true,
    },
  },
  methods:{
    ...mapActions(useStarwarsStore, ["deleteFavorite"])
  }
};
</script>

<template>
  <div class="card" >
    <img class="ficha" :src="src" />
    <div >
      <h4>Name: {{ name }}</h4>
      <h4>Gender: {{ gender }}</h4>
      <h4>
        Homeworld: {{ homeworld }}
      </h4>
      <h4>Specie: {{ speciesData }}</h4>
      <button type="button" @click="deleteFavorite(index)">
      <a>
        <img class="icon-delete" src="../assets/imgs/basura.png 12-01-47-582.png" alt="delete"/>
      </a>
      </button>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/apiListingCards.css';
</style>