<template>
  <div class="container">
    <Header />
    <Footer />
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
  font-family: "Canela";
  src: local("Canela"), url(./fonts/Canela/Canela-Thin.woff) format("woff");
}
#app,
html,
body,
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
  font-family: "Canela";
  font-weight: 200;
  background-color: $beige;
}

::-webkit-scrollbar-track {
  border: 1px solid black;
}
</style>
