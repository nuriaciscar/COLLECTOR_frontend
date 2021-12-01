<template>
  <div class="image">
    <img :src="image" :alt="description" width="100" height="65" class="image__img" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Image",
  props: {
    image: String,
    description: String,
    date: Date,
    category: String,
    owner: Array,
    id: String,
  },
});
</script>

<style scoped lang="scss">
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

.collection__single {
  .image {
    object-fit: cover;
    padding-left: 15px;
  }
}
</style>
