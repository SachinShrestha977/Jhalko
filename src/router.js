import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/HomePage/Home.vue";
import Section2 from "./components/HomePage/Section2.vue";
import StarMap from "./components/HomePage/StarMap.vue";

const routes = [
  {
    path: "/",
    components: {
      default: Home,
      section2: Section2,
      starMap: StarMap,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
