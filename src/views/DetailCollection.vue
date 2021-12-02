<template>
  <div class="detail">
    <div class="detail__top">
      <router-link to="/collections">
        <img src="../assets/next.png" class="back" width="25" height="13" />
      </router-link>

      <h1 class="detail__top__title">{{ collection.name }}</h1>
      <img src="../assets/Button.svg" class="detail__top__switch" width="65" height="35" />
    </div>

    <ul v-for="image in collection.images" :key="image.id">
      <router-link :to="`/image/${image.id}`">
        <Image
          :description="image.description"
          :date="image.date"
          :image="image.image"
          :category="image.lay"
          :owner="image.owner"
        />
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import { useRoute } from "vue-router";

import Image from "../components/Image.vue";

export default defineComponent({
  name: "DetailCollection",
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
  justify-content: space-around;
  align-items: flex-start;

  &__top {
    display: flex;
    flex-direction: row;
    border: none;
    justify-content: center;
    align-items: center;
    width: 340px;
    margin-top: 200px;

    &__title {
      font-weight: inherit;
      font-size: 50px;
    }
  }
}
</style>
