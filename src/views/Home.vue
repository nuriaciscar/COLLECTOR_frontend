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
      <div class="scroll">
        <div class="home__collections__single">
          <img
            class="home__collections__single__image"
            src="https://farm4.staticflickr.com/3935/15363200788_026cc5119e_b.jpg"
            alt="Description of image"
            width="100px"
            height="65px"
          />
          <img
            class="home__collections__single__image"
            src="https://farm4.staticflickr.com/3935/15363200788_026cc5119e_b.jpg"
            alt="Description of image"
            width="69px"
            height="94px"
          />
          <div class="home__collections__single__text">
            <p class="home__collections__single__text__date">June - August 2021</p>
            <p class="home__collections__single__text__name">Italia summer 2021</p>
          </div>
          <img
            class="home__collections__single__image"
            src="https://farm4.staticflickr.com/3935/15363200788_026cc5119e_b.jpg"
            alt="Description of image"
            width="100px"
            height="65px"
          />
          <img
            class="home__collections__single__image"
            src="https://farm4.staticflickr.com/3935/15363200788_026cc5119e_b.jpg"
            alt="Description of image"
            width="100px"
            height="65px"
          />
          <img
            class="home__collections__single__image"
            src="https://farm4.staticflickr.com/3935/15363200788_026cc5119e_b.jpg"
            alt="Description of image"
            width="100px"
            height="65px"
          />
          <img
            class="home__collections__single__image"
            src="https://farm4.staticflickr.com/3935/15363200788_026cc5119e_b.jpg"
            alt="Description of image"
            width="100px"
            height="65px"
          />
          <img
            class="home__collections__single__image"
            src="https://farm4.staticflickr.com/3935/15363200788_026cc5119e_b.jpg"
            alt="Description of image"
            width="100px"
            height="65px"
          />
        </div>
      </div>
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
  flex-direction: column;
  width: 100%;
  margin: 0;
  box-sizing: border-box;

  &__image {
    width: 100%;
    margin: 0;
    padding: 0;
    height: 280px;
    position: fixed;
    z-index: 0;
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

    z-index: 10px;
    overflow-y: scroll;
    overflow-x: hidden;

    &__single {
      display: flex;
      align-items: flex-end;
      overflow-y: scroll;
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
  }
}
</style>
