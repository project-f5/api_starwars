<template>
  <div class="card" v-for="(character, index) in characters" :key="index">
    <h3>{{ character.name }}</h3>
    <h3>{{ character.gender }}</h3>
  </div>
</template>
<script>
export default {
  name: "apiListingCards",
  data: () => ({}),
  props: {
    characters: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped></style>
