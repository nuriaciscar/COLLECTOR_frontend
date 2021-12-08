<template>
  <div class="detail">
    <div class="detail__items__top">
      <router-link :to="`/collections`">
        <img src="../assets/next.png" class="back" width="25" height="13" alt="Arrow icon" />
      </router-link>

      <h1 class="detail__items__top__title">{{ name }}</h1>
    </div>

    <div class="detail__image">
      <div class="buttons">
        <div class="divImage">
          <button @click="deleteImage" class="delete">
            <i class="fas fa-trash-alt"></i>
          </button>
          <img :src="image.image" :alt="description" class="bigImage" />
        </div>
      </div>
      <div class="detail__image__text">
        <p class="detail__image__text__date">{{ getDate() }}</p>
        <p class="detail__image__text__description">{{ image.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import { useRoute } from "vue-router";

// import Collection from "../components/Collection.vue";

export default defineComponent({
  name: "DetailImage",
  props: { collection: String, name: String, description: String },
  components: {
    // Collection,
  },
  data() {
    return {
      currentImage: 0,
    };
  },
  computed: {
    ...mapState(["image"]),
  },
  methods: {
    ...mapActions(["fetchLoadImage", "fetchDeleteImage", "getToken"]),

    deleteImage() {
      this.fetchDeleteImage(this.image.id);
      this.$router.push("/collections");
    },
    getDate() {
      return new Date(this.image.date)
        .toLocaleString("en-US", { month: "long", day: "numeric", year: "numeric" })
        .toUpperCase();
    },
  },

  mounted() {
    const route = useRoute();
    const { id } = route.params;
    this.fetchLoadImage(id);

    if (localStorage.getItem("token")) {
      this.getToken();
    }
  },
});
</script>

<style scoped lang="scss">
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";
.detail {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  &__items {
    justify-content: space-around;
    align-items: flex-start;

    &__top {
      display: flex;
      flex-direction: row;
      border: none;
      justify-content: flex-start;
      align-items: center;
      width: 320px;
      margin-top: 70px;

      &__title {
        font-weight: inherit;
        font-size: 50px;
      }
    }
  }
  &__image {
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &__text {
      display: flex;
      margin-top: 80px;
      align-items: center;
      flex-direction: column;

      &__date {
        font-size: 16px;
        padding-bottom: 20px;
      }
      &__description {
        font-family: "Public Sans", sans-serif;
        font-size: 14px;
      }
    }
  }

  img {
    object-fit: cover;
    font-size: 18px;
    padding-bottom: 20px;
  }
}
.buttons {
  display: flex;
  flex-direction: row;
  width: 1000px;
  justify-content: center;

  &__icon {
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: #bcb9b9;
    font-size: 17px;
  }
}

.bigImage {
  width: 100%;
  height: 230px;
}

.divImage {
  display: flex;
  justify-content: flex-end;
}

.delete {
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  font-size: 20px;
  z-index: 10;
  width: 40px;
  height: 40px;
}
.fa-trash-alt {
  color: black;
}

@media (min-width: $tablet) {
  .detail {
    &__items__top {
      width: 700px;
    }
  }
  .bigImage {
    width: 300px;
    height: 260px;
  }
}

@media (min-width: $desktop) {
  .detail {
    &__items__top {
      width: 1100px;
      margin-top: 135px;
    }
    &__image {
      max-width: 450px;
      padding-bottom: 170px;
      margin-top: -15px;

      &__text {
        display: flex;
        margin-top: 30px;
        align-items: center;
        flex-direction: column;
        margin-top: 60px;
        max-width: 450px;
        padding-bottom: 170px;

        &__date {
          font-size: 18px;
          padding-bottom: 17px;
        }
        &__description {
          font-family: "Public Sans", sans-serif;
          font-size: 16px;
          text-align: center;
        }
      }
    }
  }
  .bigImage {
    width: 530px;
    height: 390px;
  }

  .delete {
    display: none;
    font-size: 25px;
    width: 55px;
    height: 55px;
  }
  .divImage:hover .delete {
    display: block;
  }

  .delete :hover {
    color: $red;
  }
}
</style>
