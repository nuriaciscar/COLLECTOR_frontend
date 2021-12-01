<template>
  <div class="detail">
    <div class="detail__top">
      <router-link to="/collections">
        <img src="../assets/next.png" class="back" width="25" height="13" />
      </router-link>
    </div>
    <img :src="image" :alt="image.description" width="65" height="35" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "DetailImage",

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
