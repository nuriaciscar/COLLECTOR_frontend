<template>
  <nav class="header">
    <p>Home</p>
    <p>Feed</p>
    <p>COLLECTOR</p>
    <img src= https://cdn-icons.flaticon.com/png/512/3405/premium/3405771.png>
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
}
</style>
