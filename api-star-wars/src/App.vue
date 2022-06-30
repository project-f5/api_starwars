<script>
import HomeView from "./views/HomeView.vue";
import FavoriteView from "./views/FavoriteView.vue";
export default {
  name: "App",
  data: () => ({}),
  components: { HomeView, FavoriteView },
};
</script>

<template>
<div>
  <HomeView></HomeView>
  <RouterLink to="/favorite"></RouterLink>
</div>
  
</template>

<style>



</style>
