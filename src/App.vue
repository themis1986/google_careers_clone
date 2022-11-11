<template>
  <div class="">
    <MainNav />
    <Hero />
  </div>
</template>

<script>
import Hero from "./components/jobSearch/Hero.vue";
import MainNav from "./components/navigation/MainNav.vue";

export default {
  name: "App",
  components: { MainNav, Hero },
};
</script>

<style></style>
