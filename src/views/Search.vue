<template>
  <section class="searchlist">
    <div v-if="value.length >= 1" class="wrapper">
      <div v-for="collection in this.value" :key="collection.name">
        <router-link :to="`/collections/${collection.id}`">
          <div class="searchlist__collection">
            <p class="searchlist__collection__title">{{ collection.name }}</p>
            <div class="searchlist__collection__images">
              <ul v-for="image in collection.images" :key="image.id">
                <router-link :to="`/image/${image.id}`" @click="scrollToTop">
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
            </div>
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
import Image from "@/components/Image.vue";

export default defineComponent({
  name: "SearchCollection",
  components: {
    Image,
  },
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
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 250px;
  &__collection {
    display: flex;
    flex-direction: column;
    -webkit-overflow-scrolling: touch;
    overflow-y: scroll;
    width: 100vw;
    margin-top: 100px;
    width: 900px;
    justify-content: center;
    align-items: flex-start;
    &__title {
      font-size: 50px;
      color: #000;
      padding: 15px;
      padding-bottom: 25px;
    }
    &__images {
      display: flex;
      flex-direction: row;
    }
  }
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
