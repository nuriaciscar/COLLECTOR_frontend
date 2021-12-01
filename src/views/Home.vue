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
    <section class="home__collections">
      <CollectionList />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CollectionList from "@/components/CollectionList.vue";

export default defineComponent({
  name: "Home",
  components: {
    CollectionList,
  },
});
</script>

<style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";
.home {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  justify-content: space-between;
  &__image {
    width: 100%;
    margin-bottom: 20px;
    padding: 0;
    height: 280px;
    position: absolute;
    z-index: 3;
    &__big {
      width: 100%;
      height: 210px;
      margin: 0;
      padding-top: 65px;
      object-fit: cover;
    }
    &__date {
      font-family: "Public Sans", sans-serif;
      font-size: 12px;
      padding-top: 6px;
      padding-left: 23px;
    }
  }

  &__collections {
    width: 100vw;
    margin-top: 45px;
    height: 600px;
    overflow-y: scroll;
    overflow-x: hidden;
    padding-top: 300px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
