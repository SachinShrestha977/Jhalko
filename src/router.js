import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/HomePage/Home.vue";
import Section2 from "./components/HomePage/Section2.vue";
import StarMap from "./components/HomePage/StarMap.vue";
import Review from "./components/HomePage/Review.vue";
import Frame from "./components/Frame/Frame.vue";
import Order from "./components/Frame/Order.vue";

const routes = [
  {
    path: "/",
    components: {
      default: Home,
      section2: Section2,
      starMap: StarMap,
      review: Review,
    },
  },
  {
    path: "/frame",
    component: Frame,
  },
  {
    path: "/order",
    component: Order,
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
