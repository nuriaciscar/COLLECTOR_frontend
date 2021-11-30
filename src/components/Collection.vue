<template>
  <section class="collection">
    <div class="collection__single">
      <img
        class="collection__single__image"
        src="https://farm4.staticflickr.com/3935/15363200788_026cc5119e_b.jpg"
        alt="Description of image"
        width="100px"
        height="65px"
      />
      <img
        class="collection__single__image"
        src="https://farm4.staticflickr.com/3935/15363200788_026cc5119e_b.jpg"
        alt="Description of image"
        width="69px"
        height="94px"
      />
      <div class="collection__single__text">
        <p class="collection__single__text__date">June - August 2021</p>
        <p class="collection__single__text__name">Italia summer 2021</p>
      </div>
      <img
        class="collection__single__image"
        src="https://farm4.staticflickr.com/3935/15363200788_026cc5119e_b.jpg"
        alt="Description of image"
        width="100px"
        height="65px"
      />
      <img
        class="collection__single__image"
        src="https://farm4.staticflickr.com/3935/15363200788_026cc5119e_b.jpg"
        alt="Description of image"
        width="100px"
        height="65px"
      />
      <img
        class="collection__single__image"
        src="https://farm4.staticflickr.com/3935/15363200788_026cc5119e_b.jpg"
        alt="Description of image"
        width="100px"
        height="65px"
      />
      <img
        class="collection__single__image"
        src="https://farm4.staticflickr.com/3935/15363200788_026cc5119e_b.jpg"
        alt="Description of image"
        width="100px"
        height="65px"
      />
      <img
        class="collection__single__image"
        src="https://farm4.staticflickr.com/3935/15363200788_026cc5119e_b.jpg"
        alt="Description of image"
        width="100px"
        height="65px"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Collection",
  data: () => ({}),
});
</script>

<style scoped lang="scss">
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

.collection__single {
  display: flex;
  align-items: flex-end;
  overflow-y: scroll;
  padding-top: 20px;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  &::-webkit-scrollbar {
    display: none;
  }
  &__text {
    padding-left: 15px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: column;
    bottom: 0;

    &__date {
      font-size: 14px;
      white-space: nowrap;
    }
    &__name {
      font-size: 30px;
      white-space: nowrap;
      font-weight: 200;
      padding-top: 14px;
      bottom: -10px;
    }
  }
  &__image {
    padding-left: 15px;
  }
}
</style>
