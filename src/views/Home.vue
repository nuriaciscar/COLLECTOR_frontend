<template>
  <div class="home">
    <section class="home__image">
      <img
        class="home__image__big"
        src="https://farm4.staticflickr.com/3935/15363200788_026cc5119e_b.jpg"
        alt="Description of image"
      />
      <p class="home__image__date">INDIA 2 YEARS AGO</p>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
});
</script>

<style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  &__image {
    width: 100%;
    margin: 0;
    padding: 0;
    &__big {
      width: 100%;
      height: 230px;
      margin: 0;
      padding-top: 35px;
    }
    &__date {
      font-family: "Public Sans", sans-serif;
      font-size: 12px;
      padding-top: 6px;
      padding-left: 23px;
    }
  }
}
</style>
