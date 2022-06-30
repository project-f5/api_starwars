<script>
import HomeView from "./views/HomeView.vue";
<<<<<<< Updated upstream
export default {
  name: "App",
  data: () => ({}),
  components: { HomeView },
=======
import FavoriteView from "./views/FavoriteView.vue";
export default {
  name: "App",
  data: () => ({}),
  components: { HomeView, FavoriteView },
>>>>>>> Stashed changes
};
</script>

<template>
<<<<<<< Updated upstream
  <HomeView></HomeView>
</template>

<style></style>
=======
<div>
  <HomeView></HomeView>
  <RouterLink to="/favorite"></RouterLink>
</div>
  
</template>

<style>

@import './assets/base.css';

</style>
>>>>>>> Stashed changes
