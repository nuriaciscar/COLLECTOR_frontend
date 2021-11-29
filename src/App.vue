<template>
  <div class="container">
    <Header />
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";

export default defineComponent({
  components: {
    Header,
  },
});
</script>

<style lang="scss">
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
  font-family: "Public Sans", sans-serif;
}

::-webkit-scrollbar-track {
  border: 1px solid black;

  @font-face {
    font-family: "Public Sans";
    font-weight: 200;
    src: local("Public Sans"),
      url(./fonts/Public_Sans/static/PublicSans-ExtraLight.ttf) format("truetype");
  }
}
</style>
