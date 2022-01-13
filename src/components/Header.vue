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
        <img
          class="header__search"
          src="@/assets/lupa.png"
          alt="Search lens icon"
          width="26"
          height="24"
        />
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
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "Header",

  computed: {
    ...mapState(["user", "isAuthenticated"]),
  },
  methods: {
    ...mapActions(["fetchUser", "logoutUserAction"]),
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
  }
}

.logo {
  position: absolute;
  display: flex;
  justify-content: center;
  margin-top: 32px;
  font-size: 17px;
  z-index: 30;
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
      padding-right: 20px;
      width: 28px;
    }
    &__feed {
      margin-left: 0;
    }
    &__logo {
      font-size: 21px;
      color: black;
      margin-top: 2px;
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
  }
}
</style>
