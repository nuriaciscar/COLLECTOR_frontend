<template>
  <div class="image">
    <img
      :src="image"
      :alt="description"
      v-bind:class="image.width > image.height ? 'horizontal' : 'vertical'"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { mapActions } from "vuex";

export default defineComponent({
  name: "Image",
  props: ["image", "description", "date", "category", "owner", "id"],
  // image: String,
  // description: String,
  // date: Date || String,
  // category: String,
  // owner: Array,
  // id: String,

  methods: {
    getClass() {
      return {
        // 'horizontal': this.image(width > height)
      };
    },
    ...mapActions(["fetchLoadImage"]),
  },
  // mounted() {
  //   const route = useRoute();
  //   const { id } = route.params;
  //   this.fetchLoadImage(id);
  // },
});
</script>

<style scoped lang="scss">
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

.image {
  object-fit: cover;
  padding-left: 15px;
}
.horizontal {
  width: 100px;
  height: 65px;
}

.vertical {
  width: 69px;
  height: 94px;
}

// @media screen and (min-width: 800px) {
//   .image {
//     padding: 0;
//     object-fit: cover;
//   }
//   .vertical {
//     width: 360px;
//     height: 360px;
//   }
// }
</style>
