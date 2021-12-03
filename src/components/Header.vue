<template>
  <nav class="header">
    <router-link to="/collections"
      ><img class="header__home" src="@/assets/home.png" alt="Home icon" width="24" height="23" />
    </router-link>
    <p class="header__feed">Feed</p>
    <p class="header__logo">COLLECTOR</p>

    <img
      class="header__search"
      src="@/assets/lupa.png"
      alt="Search lens icon"
      width="26"
      height="24"
    />

    <router-link :to="`/user/${user.user.id}`">
      <!-- <router-link :to="{ name: 'Profile', params: { idUser: user.user.idUser } }"> -->
      <img class="header__avatar" :src="user.user.avatar" alt=" " width="35" height="35" />
    </router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Header",

  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["fetchUser"]),
  },

  mounted() {
    this.fetchUser(this.user.user.id);
  },
});
</script>

<style scoped lang="scss">
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

.header {
  display: flex;
  flex-direction: row;
  font-family: "Canela", sans-serif;
  position: absolute;
  font-size: 20px;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
  width: 100vw;
  z-index: 3;

  &__avatar {
    border-radius: 50%;
  }

  &__logo {
    padding-left: 26px;
    padding-right: 26px;
  }
  &__feed {
    padding-left: 12px;
  }
  &__search {
    padding-right: 12px;
    padding-bottom: 3px;
  }
  &__home {
    padding-bottom: 3px;
  }
}

@media screen and (min-width: 800px) {
  .header {
    font-size: 25px;
    margin-top: 30px;
    justify-content: space-between;
    &__home {
      display: none;
    }
  }
}
</style>
