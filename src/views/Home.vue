<template>
  <section class="home">
    <div class="home__image">
      <img
        class="home__image__big"
        src="https://farm4.staticflickr.com/3935/15363200788_026cc5119e_b.jpg"
        alt="Description of image"
      />
      <p class="home__image__date">INDIA 2 YEARS AGO</p>
      <div class="buttonn">
        <button class="buttonn__add"><img src="../assets/addButton.png" /></button>
        <p class="buttonn__sort">Sort by</p>
      </div>
    </div>

    <div class="home__collections">
      <CollectionList />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import CollectionList from "@/components/CollectionList.vue";

export default defineComponent({
  name: "Home",
  components: {
    CollectionList,
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    redirectToLogin() {
      if (!this.user.isAuthenticated) {
        this.$router.push("/login");
      }
    },
  },
  mounted() {
    this.redirectToLogin();
  },
});
</script>

<style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";
.home {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  justify-content: space-between;

  &__image {
    width: 100%;
    margin-bottom: 20px;
    padding: 0;
    height: 280px;

    &__big {
      width: 100%;
      height: 210px;
      margin: 0;
      margin-top: 65px;
      object-fit: cover;
    }
    &__date {
      font-family: "Public Sans", sans-serif;
      font-size: 12px;
      padding-top: 6px;
      padding-left: 23px;
      z-index: 12;
    }
  }

  &__collections {
    width: 100vw;
    margin-top: 45px;
    height: 100vh;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}

.buttonn {
  border: none;
  margin-left: 72%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 20px;
  background-color: transparent;
  z-index: 10;
  &__add {
    border: none;
  }
  &__sort {
    font-family: "Public Sans", sans-serif;
    color: $blue;
    padding-left: 8px;
    font-size: 16px;
  }
}

@media (min-width: $tablet) {
  .home {
    &__image {
      &__big {
        height: 500px;
        padding-top: 20px;
      }
      &__date {
        padding-left: 40px;
      }
    }
    &__collections {
      width: 650px;
      margin-top: 340px;
      display: flex;
      justify-content: center;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .buttonn {
    border: none;

    padding-top: 15px;
    display: flex;
    justify-content: center;

    &__add {
      width: 30px;
      height: 30px;
    }
    &__sort {
      padding-left: 8px;
      font-size: 16px;
    }
  }
}
@media (min-width: $desktop) {
  .home {
    &__image {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      margin-top: 100px;
      &__big {
        height: 500px;
        object-fit: cover;
        width: 950px;
      }
      &__date {
        position: absolute;
        font-size: 15px;
        width: 950px;
        margin-top: 22px;
        justify-content: flex-start;
      }
    }
    &__collections {
      width: 960px;
      margin-top: 340px;
      display: flex;
      justify-content: center;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .buttonn {
    border: none;
    margin-left: 800px;
    padding-top: 32px;

    &__add {
      width: 30px;
      height: 30px;
    }
    &__sort {
      padding-left: 8px;
      font-size: 16px;
    }
  }
}
</style>
