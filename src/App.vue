<template>
  <div class="container">
    <Header v-if="!['/login', '/register'].includes($route.path)" />
    <Footer v-if="!['/login', '/register'].includes($route.path)" />
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  components: {
    Header,
    Footer,
  },
});
</script>

<style lang="scss">
@import "./styles/_mixins";
@import "./styles/_variables";
$font-dir: "/fonts/";
@font-face {
  font-family: "Canela", sans-serif;
  src: local("Canela"), url(./fonts/Canela/Canela-Thin.woff) format("woff");
  src: local("Canela Light"), url(./fonts/Canela/Canela-Light.woff) format("woff");
  src: local("Canela Medium"), url(./fonts/Canela/Canela-Medium.woff) format("woff");
  src: local("Canela Regular"), url(./fonts/Canela/Canela-Regular.woff) format("woff");
}
#app,
html,
body {
  background-color: $beige;
}

.view {
  height: 100%;
}

.body--overflow-hidden {
  overflow: hidden;
}

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: "Canela", serif;
  font-weight: 200;
}

::-webkit-scrollbar-track {
  border: 1px solid black;
}
</style>
