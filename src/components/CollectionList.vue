<template>
  <section class="collectionList">
    <!-- <p :class="user.user.collections[0] ? 'messageNone' : 'message'">No collections yet...</p> -->
    <ul>
      <li v-for="collection in user.user.collections" :key="collection.id">
        <Collection
          :name="collection.name"
          :date="collection.date"
          :images="collection.images"
          :id="collection.id"
        />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import Collection from "@/components/Collection.vue";

export default defineComponent({
  name: "CollectionList",
  components: {
    Collection,
  },
  computed: {
    ...mapState(["user"]),
  },
});
</script>

<style scoped lang="scss">
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

.collectionList {
  display: flex;
  align-items: flex-end;
  overflow-y: scroll;
  flex-direction: column;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  &::-webkit-scrollbar {
    display: none;
  }
}

.message {
  display: block;
}
.messageNone {
  display: none;
}
</style>
