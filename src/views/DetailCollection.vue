<template>
  <div class="detail">
    <div class="detail__top">
      <div class="detail__top__arrow">
        <router-link to="/collections">
          <img src="../assets/next.png" class="back" width="25" height="13" alt="Arrow icon" />
        </router-link>
      </div>
      <h1 class="detail__top__title">{{ collection.name }}</h1>
      <img
        src="../assets/Button.svg"
        class="detail__top__switch"
        width="55"
        height="35"
        alt="Change order button"
      />
    </div>
    <div class="detail__grid">
      <ul v-for="image in collection.images" :key="image.id">
        <router-link :to="`/image/${image.id}`">
          <li class="detail__grid__li">
            <Image
              :description="image.description"
              :date="image.date"
              :image="image.image"
              :category="image.lay"
              :owner="image.owner"
              :name="collection.name"
              :grid="true"
            />
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import { useRoute } from "vue-router";

import Image from "../components/Image.vue";

export default defineComponent({
  name: "DetailCollection",
  data() {
    return {
      grid: true,
    };
  },
  props: { name: String, date: String, images: Array, id: String },
  components: {
    Image,
  },
  computed: {
    ...mapState(["collection"]),
  },
  methods: {
    ...mapActions(["fetchLoadCollection"]),
  },

  mounted() {
    const route = useRoute();
    const { id } = route.params;
    this.fetchLoadCollection(id);
  },
});
</script>

<style scoped lang="scss">
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";
.detail {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  &__top {
    display: flex;
    flex-direction: row;
    border: none;
    justify-content: space-around;
    align-items: center;
    width: 340px;
    margin-top: 75px;
    &__title {
      font-weight: inherit;
      font-size: 50px;
    }
    &__arrow {
      display: flex;
      height: 90px;
    }
  }
  &__grid {
    display: grid;
    flex-direction: row;
    list-style: none;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 0;
    width: 100%;

    &__li {
      list-style: none;
    }
  }
}
@media (min-width: $tablet) {
  .detail {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    &__top {
      padding-top: 60px;
      width: 700px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-bottom: 50px;
      &__title {
        font-weight: inherit;
        font-size: 70px;
        padding-left: 40px;
      }
    }
    &__grid {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
    }
  }
}

@media (min-width: $desktop) {
  .detail {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    &__top {
      padding-top: 60px;
      width: 1100px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-bottom: 50px;
      &__title {
        font-weight: inherit;
        font-size: 70px;
        padding-left: 40px;
      }
    }
    &__grid {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
    }
  }
}
</style>
