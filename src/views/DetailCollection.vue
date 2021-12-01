<template>
  <div class="detail">
    <div class="detail__top">
      <button class="back"><router-link to="/">back</router-link></button>
      <h1 class="detail__top__title">{{ collection.name }}</h1>
      <img src="../assets/Button.svg" class="detail__top__switch" width="70" height="40" />
    </div>

    <ul v-for="image in images" :key="image.id">
      <Image
        :description="image.description"
        :date="image.date"
        :image="image.image"
        :category="image.category"
        :owner="image.owner"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";
import { useRoute } from "vue-router";
import Image from "@/components/Image.vue";

export default defineComponent({
  name: "DetailCollection",
  props: { name: String, date: String, images: Array, id: String },
  components: {
    Image,
  },
  computed: {
    ...mapState(["images", "collection"]),
  },
  methods: {
    ...mapActions(["fetchLoadImages", "fetchLoadCollection"]),
  },
  mounted() {
    this.fetchLoadImages();
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
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;

  &__top {
    display: flex;
    flex-direction: row;
    border: none;
    justify-content: center;
    align-items: center;
    width: 340px;

    &__title {
      font-weight: inherit;
      font-size: 43px;
    }
  }
}
</style>
