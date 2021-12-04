<template>
  <section class="collection">
    <div class="collection__single">
      <ul v-for="image in images" :key="image.id">
        <router-link :to="`/image/${image.id}`">
          <Image
            :description="image.description"
            :date="image.date"
            :image="image.image"
            :category="image.category"
            :owner="image.owner"
            :id="image.id"
          />
        </router-link>
      </ul>
      <div class="collection__single__text">
        <router-link :to="{ name: 'DetailCollection', params: { id: id } }">
          <p class="collection__single__text__date">{{ date }}</p>
          <p class="collection__single__text__name">{{ name }}</p>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import { useRoute } from "vue-router";
import Image from "./Image.vue";

export default defineComponent({
  name: "Collection",
  props: { name: String, date: String, images: Array, id: String },
  components: {
    Image,
  },

  computed: {
    ...mapState(["collection"]),
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

.collection__single {
  padding-top: 20px;
  display: flex;
  align-items: flex-end;
  width: 100vw;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  &::-webkit-scrollbar {
    display: none;
  }

  &__text {
    padding-left: 15px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: column;
    bottom: 0;

    &__date {
      font-size: 14px;
      white-space: nowrap;
    }
    &__name {
      font-size: 30px;
      white-space: nowrap;
      font-weight: 200;
      padding-top: 14px;
      bottom: -10px;
    }
  }
  &__image {
    padding-left: 15px;
  }
}

@media (min-width: $tablet) {
  .collection__single {
    width: 650px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    justify-content: center;
    align-items: flex-end;
    &__text {
      &__name {
        padding-top: 5px;
        font-size: 50px;
      }
      &__date {
        font-size: 15px;
        white-space: nowrap;
        padding-bottom: 10px;
      }
    }
  }
}

@media (min-width: $desktop) {
  .collection__single {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 900px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;

    &__text {
      &__name {
        padding-top: 5px;
        font-size: 62px;
      }
      &__date {
        font-size: 16px;
        white-space: nowrap;
        padding-bottom: 10px;
      }
    }
  }
}
</style>
