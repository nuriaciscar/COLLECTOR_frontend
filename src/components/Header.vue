<template>
  <nav class="nav">
    <section class="header">
      <div class="left">
        <router-link to="/collections"
          ><img
            class="header__home"
            src="@/assets/home.png"
            alt="Home icon"
            width="24"
            height="23"
          />
        </router-link>
        <router-link to="/collections">
          <p class="header__first">Home</p>
        </router-link>
        <p class="header__feed">Feed</p>
      </div>
      <div class="right">
        <router-link to="/collections/search">
          <div class="right__searchBox">
            <input
              class="searchInput"
              v-model="inputValue"
              v-on:input="searchingCollection()"
              type="text"
              name=""
              placeholder="Search a collection"
            />
            <img
              class="header__search"
              src="@/assets/lupa.png"
              alt="Search lens icon"
              width="26"
              height="24"
            />
          </div>
        </router-link>
        <router-link to="/login">
          <p @click="logoutUserAction" class="header__logout">Logout</p>
        </router-link>
        <router-link :to="`/user/${user.user.id}`">
          <img
            class="header__avatar"
            :src="user.user.avatar"
            alt="Avatar image"
            width="35"
            height="35"
          />
        </router-link>
      </div>
    </section>
    <router-link to="/collections">
      <div class="logo"><p class="header__logo">COLLECTOR</p></div>
    </router-link>
    <!-- <div class="bodyBlur"></div> -->
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "Header",

  computed: {
    ...mapState(["user", "isAuthenticated", "collection"]),
  },
  methods: {
    ...mapActions(["fetchUser", "logoutUserAction", "searchCollection"]),
    searchingCollection() {
      if (this.inputValue !== "") {
        this.searchCollection(this.inputValue);
        this.$router.push("/search");
      } else {
        this.$router.push("/");
      }
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },
});
</script>

<style scoped lang="scss">
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

.nav {
  display: flex;
  justify-content: center;
  width: 100vw;
}
.header {
  display: flex;
  flex-direction: row;
  font-family: "Canela", sans-serif;
  position: absolute;
  font-size: 17px;
  margin-top: 15px;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  z-index: 3;
  color: black;

  &__avatar {
    border-radius: 50%;
  }
  &__logout {
    visibility: hidden;
    color: black;
  }
  &__first {
    visibility: hidden;
    color: black;
  }
  &__feed {
    margin-left: -30px;
  }
  &__search {
    margin-right: -43px;
    margin-top: -2px;
  }
  &__logo {
    position: absolute;
    display: flex;
    justify-content: center;
    margin-top: -6px;
    font-size: 17px;
    color: black;
    cursor: pointer;
  }
}

.logo {
  display: flex;
  justify-content: center;
  margin-top: 32px;
  font-size: 17px;
  cursor: pointer;
}

.left {
  display: flex;
  flex-direction: row;
  width: 150px;
  justify-content: flex-start;
  align-items: center;
}

.right {
  display: flex;
  flex-direction: row;
  width: 60px;
  align-items: center;
  justify-content: flex-end;
}

@media (min-width: $tablet) {
  .header {
    font-size: 20px;
    width: 700px;
    justify-content: space-between;
    align-items: center;
    &__avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    &__search {
      margin-right: 0;
      margin-top: 0;
    }
    &__feed {
      margin-left: 0;
    }
    &__logo {
      font-size: 21px;
      color: black;
    }
  }

  .left {
    align-items: center;
    width: 120px;
  }

  .right {
    align-items: center;
    width: 80px;
  }
}
@media (min-width: $desktop) {
  .header {
    align-items: center;
    font-size: 20px;
    margin-top: 30px;
    width: 1200px;
    justify-content: space-between;
    &__home {
      display: none;
    }
    &__logout {
      visibility: visible;
      padding-left: 10px;
    }
    &__first {
      visibility: visible;
    }
    &__avatar {
      width: 50px;
      height: 50px;
      margin-left: 40px;
      border-radius: 50%;
    }
    &__search {
      margin-right: 0;
      margin-top: 0;
      padding-right: 10px;
      width: 28px;
      cursor: pointer;
    }
    &__feed {
      margin-left: 0;
    }
    &__logo {
      font-size: 21px;
      margin-top: 2px;
      cursor: pointer;
      pointer-events: auto;
    }
  }
  .logo {
    margin-top: 43px;
    font-size: 23px;
  }
  .left {
    display: flex;
    flex-direction: row;
    width: 170px;
    justify-content: space-between;
  }

  .right {
    display: flex;
    flex-direction: row;
    width: 275px;
    align-items: center;
    justify-content: flex-end;

    &__searchBox {
      height: 30px;
      border-radius: 40px;
      padding: 10px;
      transition: 0.4s;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $beige;
      z-index: 25;
    }
  }
  // .bodyBlur {
  //   position: absolute;
  //   width: 100vw;
  //   z-index: -1;
  //   height: 100vh;
  // }
  .right__searchBox:hover {
    padding: 0 6px;
    border: 0.1px solid #000000;
    border-radius: 60px;
  }

  // .right__searchBox:hover {
  //   .bodyBlur {
  //     background: rgba(251, 250, 249, 0.7);
  //     filter: blur(22px);
  //     backdrop-filter: blur(10px);
  //     z-index: 40;
  //   }
  // }
  .right__searchBox:hover > .searchInput {
    width: 780px;
    z-index: 20;
  }

  .searchInput {
    box-sizing: border-box;
    outline: none;
    float: left;
    padding: 10px;
    font-family: "Public Sans", sans-serif;
    font-size: 14px;
    color: #000;
    line-height: 40px;
    z-index: 20;
  }

  .right__searchBox .searchInput {
    background: transparent;
    border: none;
    outline: none;
    width: 0px;
    font-weight: 500;
    transition: 0.8s;
    z-index: 20;
  }
}
</style>
