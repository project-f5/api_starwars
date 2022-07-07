import { createRouter, createWebHistory } from "vue-router";
import FormNewCharacterVue from "../components/FormNewCharacter.vue";
import FavoriteViewVue from "../views/FavoriteView.vue";
import HomeViewVue from "../views/HomeView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeViewVue,
    },
    {
      path:"/favorite",
      name: "favorite",
      component: FavoriteViewVue,
    },
    /*{
      path:"/create",
      name: "create",
      component: FormNewCharacterVue
    }*/
  ],
});

export default router;
