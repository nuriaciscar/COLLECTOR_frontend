<template>
  <section class="searchlist">
    <div v-if="collections.length >= 1" class="searchlist__collections">
      <p class="searchlist__header">Estos son las colecciones que corresponden a tu búsqueda:</p>
      <div v-for="collection in this.collections" :key="collection.name">
        <router-link :to="'/collections/:id' + collection._id">
          <div class="searchlist__collection">
            <p>{{ collection.name }}</p>
            <img
              class="searchlist__collection-image"
              :src="collection.image"
              alt="Logo of the lab"
            />
          </div>
        </router-link>
      </div>
    </div>
    <div v-else class="searchlist__notFound">
      <p class="searchlist__notFound__header">No hay laboratorios que coincidan con tu búsqueda.</p>
      <img
        class="searchlist__header__image"
        src="https://i.ibb.co/BwWCRnJ/pexels-markus-spiske-4201333.jpg"
        alt="Image of a film"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import CollectionList from "@/components/CollectionList.vue";

export default defineComponent({
  name: "SearchCollection",
  // components: {
  //   CollectionList,
  // },
  computed: {
    ...mapState(["collections", "user"]),
  },
  methods: {
    redirectToLogin() {
      if (!this.user.isAuthenticated) {
        this.$router.push("/login");
      }
    },
    ...mapActions(["getToken"]),
  },
  mounted() {
    this.redirectToLogin();
    if (localStorage.getItem("token")) {
      this.getToken();
    }
  },
});
</script>

<style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";

@media (min-width: $tablet) {
}

@media (min-width: $desktop) {
}
</style>
