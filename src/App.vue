<script setup>
import { initFlowbite } from "flowbite";
import { onMounted } from "vue";
import Footer from "./components/Footer.vue";

onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="section2"></router-view>
    <router-view name="starMap"></router-view>
    <router-view name="review"></router-view>
    <Footer></Footer>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
