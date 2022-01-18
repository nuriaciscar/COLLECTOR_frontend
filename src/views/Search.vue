<template>
  <section class="searchlist">
    <div v-if="value.length >= 1" class="searchlist__collections">
      <p class="searchlist__header">Estos son las colecciones que corresponden a tu búsqueda:</p>
      <div v-for="collection in this.value" :key="collection.name">
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
      <p class="searchlist__notFound__header">Any collection found...</p>
      <img
        class="searchlist__notFound__header__image"
        src="https://icon-library.com/images/unhappy-face-icon/unhappy-face-icon-29.jpg"
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

  computed: {
    ...mapState(["value", "user"]),
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

.searchlist {
  &__notFound {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
    margin-top: 210px;
    &__header {
      font-size: 35px;
      &__image {
        transform: scale(0.17);
        margin-top: -160px;
      }
    }
  }
}
@media (min-width: $tablet) {
}

@media (min-width: $desktop) {
}
</style>
