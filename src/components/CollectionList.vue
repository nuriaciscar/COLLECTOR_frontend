<template>
  <section class="collectionList">
    <ul v-for="collection in collections" :key="collection.id">
      <Collection
        :name="collection.name"
        :date="collection.date"
        :images="collection.images"
        :id="collection.id"
      />
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import Collection from "@/components/Collection.vue";

export default defineComponent({
  name: "CollectionList",

  components: {
    Collection,
  },
  computed: {
    ...mapState(["collections"]),
  },
  methods: {
    ...mapActions(["fetchLoadCollections"]),
  },

  mounted() {
    this.fetchLoadCollections();
  },
});
</script>

<style scoped lang="scss">
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

.collectionList {
  padding-top: 20px;
  display: flex;
  align-items: flex-end;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
