<template>
  <section class="footer">
    <div class="footer__left">
      <p class="footer__left__name">Núria Ciscar</p>
      <p class="footer__left__date">December 2021</p>
    </div>
    <div class="footer__right">
      <p class="footer__right__name">Isdi Coders</p>
    </div>
  </section>
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
  font-size: 14px;
  align-items: flex-end;
  padding-left: 7px;
  margin-right: 7px;
  bottom: 0;
  position: fixed;
  margin-top: 50px;
  padding-bottom: 40px;
  width: 100%;
  background-color: $beige;
  padding-top: 40px;
  z-index: 0;
  width: 100vw;

  &__left {
    display: flex;
    flex-direction: row;
    margin-left: 20px;
    width: 65%;

    &__name {
      padding-right: 20px;
    }
  }
  &__right {
    display: flex;
    justify-content: flex-start;
    margin-right: 20px;
  }
}
@media (min-width: $tablet) {
  .footer {
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (min-width: $desktop) {
  .footer {
    display: flex;
    justify-content: center;
    &__right {
      display: flex;
      justify-content: flex-start;
      margin-left: -280px;
    }
    &__left {
      &__name {
        padding-right: 90px;
      }
    }
  }
}
</style>
