<template>
  <section class="home">
    <div class="home__image">
      <div id="cf">
        <img
          class="home__image__big top"
          src="https://cdn.shopify.com/s/files/1/0072/5902/files/mgrote_ca_15_hi-res.jpg?4198740129910576952"
          alt="Description of an image"
        />
        <img
          class="home__image__big"
          src="https://64.media.tumblr.com/afe61afbcaacab90114de7f1fef31b87/tumblr_p4vza1iyKU1qhfogwo1_1280.jpg"
          alt="Description of an image"
        />
      </div>

      <p class="home__image__date">PLAYA CARMEN, 2 YEARS AGO</p>
      <div class="buttonn">
        <router-link to="/addCollection">
          <button class="buttonn__add">
            <img src="../assets/addButton.png" alt="Add buton" height="20" width="20" />
          </button>
        </router-link>
        <router-link to="/addCollection">
          <p class="buttonn__sort">New album</p>
        </router-link>
      </div>
    </div>

    <div class="home__collections">
      <CollectionList />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";
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
      object-position: top;
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

#cf {
  position: relative;
}

@keyframes cf3FadeInOut {
  0% {
    opacity: 1;
  }
  45% {
    opacity: 1;
  }
  55% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

#cf img.top {
  position: absolute;
  animation-name: cf3FadeInOut;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 6s;
  animation-direction: alternate;
}

.buttonn {
  border: none;
  margin-right: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 20px;
  background-color: transparent;
  z-index: 10;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  &__add {
    border: none;
    background-color: transparent;
  }
  &__sort {
    font-family: "Public Sans", sans-serif;
    color: $blue;
    padding-left: 8px;
    font-size: 15px;
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
    justify-content: flex-end;
    margin-right: 30px;

    &__add {
      width: 30px;
      height: 30px;

      & :hover {
        transform: scale(1.3);
      }
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
      align-items: center;
      flex-direction: column;
      margin-top: 50px;

      &__big {
        height: 500px;
        object-fit: cover;
        width: 950px;
        padding-top: 10px;
      }
      &__date {
        position: absolute;
        font-size: 14px;
        width: 950px;
        margin-top: 22px;
        justify-content: flex-start;
      }
    }
    &__collections {
      width: 960px;
      height: 100vh;
      margin-top: 350px;
      display: flex;
      justify-content: center;
      padding-bottom: 150px;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .buttonn {
    border: none;
    margin-left: 770px;
    padding-top: 32px;
    cursor: pointer;

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
