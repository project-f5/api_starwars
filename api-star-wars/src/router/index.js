import { createRouter, createWebHistory } from "vue-router";
<<<<<<< Updated upstream
=======
import FavoriteViewVue from "../views/FavoriteView.vue";
>>>>>>> Stashed changes
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
<<<<<<< Updated upstream
=======
    {
      path:"/favorite",
      name: "favorite",
      component: FavoriteViewVue,
    },
>>>>>>> Stashed changes
  ],
});

export default router;
