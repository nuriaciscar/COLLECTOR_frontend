<template>
  <div class="image">
    <img class="image__img" :src="image" alt="Description of image" width="100px" height="65px" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Image",
  props: { images: String },
});
</script>

<style scoped lang="scss">
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

.collection__single {
  .image {
    object-fit: cover;
  }
}
</style>
