<template>
  <div class="image">
    <img :src="imageLocal" alt="{{description}}" width="100px" height="65px" class="image__img" />
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
    imageLocal: String,
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
