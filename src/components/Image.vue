<template>
  <div :class="grid === true ? 'imageGrid' : 'image'">
    <img :src="image" :alt="description" :class="grid === true ? 'sizeGrid' : 'size'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { mapActions } from "vuex";

export default defineComponent({
  name: "Image",
  props: ["image", "description", "date", "category", "owner", "id", "grid"],

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

.imageGrid {
  object-fit: cover;
  overflow: hidden;
  height: 130px;
}

.size {
  width: 69px;
  height: 94px;
}
.sizeGrid {
  width: 100%;
  height: 130px;
  padding: 0;
  object-fit: cover;
}
@media (min-width: $tablet) {
  .size {
    width: 100px;
    height: 140px;
  }
  .sizeGrid {
    width: 100%;
    height: 220px;
    padding: 0;
    object-fit: cover;
  }
  .imageGrid {
    height: 200px;
  }
}

@media (min-width: $desktop) {
  .size {
    width: 130px;
    height: 170px;
  }
  .imageGrid {
    height: 350px;
  }
  .sizeGrid {
    width: 100%;
    height: 350px;
    padding: 0;
    object-fit: cover;
  }
}
</style>
