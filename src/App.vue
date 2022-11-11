<template>
  <div class="">
    <MainNav />
    <Hero />
  </div>
</template>

<script>
import Hero from "./components/Hero.vue";
import MainNav from "./components/MainNav.vue";

export default {
  name: "App",
  components: { MainNav, Hero },
};
</script>

<style></style>
