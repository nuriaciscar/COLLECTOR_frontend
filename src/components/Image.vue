<template>
  <div class="image">
    <img
      :src="image"
      :alt="description"
      :class="image.width > image.height ? 'horizontal' : 'vertical'"
    />
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
  methods:{
    getClass(){
      return {
'horizontal': {this.image.width > this.image.height;}
      }
    }
  }
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

.horizontal {
  width: 100px;
  height: 65px;
}

.vertical {
  width: 69px;
  height: 94px;
}
</style>
