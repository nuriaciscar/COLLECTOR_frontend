<template>
  <div class="detail">
    <div class="detail__items__top">
      <router-link to="/collections">
        <img src="../assets/next.png" class="back" width="25" height="13" />
      </router-link>

      <h1 class="detail__items__top__title">{{ name }}</h1>
    </div>

    <div class="detail__image">
      <img :src="image.image" :alt="description" width="390" height="248" />
      <p>{{ image.date }}</p>
      <p>{{ image.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import { useRoute } from "vue-router";
// import Collection from "../components/Collection.vue";

export default defineComponent({
  name: "DetailImage",
  props: { collection: String, name: String, description: String },
  components: {
    // Collection,
  },
  computed: {
    ...mapState(["image"]),
  },
  methods: {
    ...mapActions(["fetchLoadImage"]),
  },

  mounted() {
    const route = useRoute();
    const { id } = route.params;
    this.fetchLoadImage(id);
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &__items {
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
  &__image {
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>
