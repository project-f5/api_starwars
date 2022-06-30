<<<<<<< Updated upstream
<template>
  <div class="card" >
    <img :src="src"/>
    <div>
      <h4>{{name}}</h4>
      <h4>{{gender}}</h4>
      <h4>Species</h4>
      <h4>Homeworld</h4>
    </div>
  </div>
</template>

=======
>>>>>>> Stashed changes
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
    src: {
      type: String,
      required: true,
    },

  },
};
</script>

<<<<<<< Updated upstream
=======
<template>
  <div class="card" >
    <img :src="src"/>
    <div>
      <h4>{{name}}</h4>
      <h4>{{gender}}</h4>
      <h4>Species</h4>
      <h4>Homeworld</h4>
    </div>
  </div>
</template>

>>>>>>> Stashed changes
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
</style>
