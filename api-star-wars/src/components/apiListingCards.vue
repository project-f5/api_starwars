<template>
  <div class="card" >
    <img :src="src"/>
    <ul>
      <li>{{name}}</li>
      <li>{{gender}}</li>
      <li>Species</li>
      <li>Homeworld</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "apiListingCards",
  data: () => ({}),
  props: {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    src:{
      type: String,
      required: true,
    }
  },
};
</script>

<style scoped>
.card{
  border: 2px solid white;
  display: flex;
  direction: row;
  justify-content: center;
  width: 20%;
  height: 100px;
}
</style>
