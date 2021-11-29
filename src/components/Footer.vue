<template>
  <nav class="footer">
    <div class="footer__left">
      <p class="footer__left__name">Núria Ciscar</p>
      <p class="footer__left__date">December 2021</p>
    </div>
    <div class="footer__right">
      <p class="footer__right__name">Isdi Coders</p>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  data: () => ({}),
});
</script>

<style scoped lang="scss">
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

.footer {
  display: flex;
  flex-direction: row;
  font-family: "Canela";
  font-size: 20px;
  margin-bottom: 20px;
  align-items: flex-end;
  margin-left: 7px;
  margin-right: 7px;

  &__left__name {
    display: flex;
    width: 30%;
  }
}
</style>
