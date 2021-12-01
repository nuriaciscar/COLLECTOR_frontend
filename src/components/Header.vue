<template>
  <nav class="header">
    <img class="header__home" src="@/assets/home.png" alt="Home icon" width="24" height="23" />
    <p class="header__feed">Feed</p>
    <p class="header__logo">COLLECTOR</p>
    <img
      class="header__search"
      src="@/assets/lupa.png"
      alt="Search lens icon"
      width="26"
      height="24"
    />
    <img class="header__avatar" src="@/assets/popular2.png" alt="Avatar" width="35" height="35" />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<style scoped lang="scss">
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

.header {
  display: flex;
  flex-direction: row;
  font-family: "Canela", sans-serif;
  position: fixed;
  font-size: 20px;
  margin-top: 10px;
  justify-content: center;
  align-items: flex-end;
  width: 100vw;
  z-index: 0;

  &__avatar {
    border-radius: 50%;
  }

  &__logo {
    padding-left: 20px;
    padding-right: 20px;
  }
  &__feed {
    padding-left: 10px;
  }
  &__search {
    padding-right: 10px;
    padding-bottom: 3px;
  }
  &__home {
    padding-bottom: 3px;
  }
}
</style>
