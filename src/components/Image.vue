<template>
  <div class="image">
    <img :src="image" :alt="description" class="size" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { mapActions } from "vuex";

export default defineComponent({
  name: "Image",
  props: ["image", "description", "date", "category", "owner", "id"],

  methods: {
    getClass() {
      return {};
    },
    ...mapActions(["fetchLoadImage"]),
  },
});
</script>

<style scoped lang="scss">
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

.image {
  object-fit: cover;
  padding-left: 15px;
}

.size {
  width: 69px;
  height: 94px;
}

@media (min-width: $desktop) {
  .size {
    width: 130px;
    height: 170px;
  }
}
</style>
