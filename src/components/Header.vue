<template>
  <nav class="header">
    <img class="header__home" src="@/assets/home.png" alt="Home icon" width="28" height="27" />
    <p class="header__feed">Feed</p>
    <p class="header__logo">COLLECTOR</p>
    <img src="@/assets/lupa.png" alt="Search lens icon" width="30" height="27" />
    <img class="header__avatar" src="@/assets/popular2.jpeg" alt="Avatar" width="35" height="35" />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  data: () => ({}),
});
</script>

<style scoped lang="scss">
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

.header {
  display: flex;
  flex-direction: row;
  font-family: "Canela";
  font-size: 20px;
  margin-top: 20px;
  justify-content: space-around;
  align-items: flex-end;
  margin-left: 7px;
  margin-right: 7px;

  &__avatar {
    border-radius: 50%;
  }

  &__logo {
    padding-left: 11px;
    padding-right: 11px;
  }
}
</style>
