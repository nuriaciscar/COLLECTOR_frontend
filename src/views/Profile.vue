<template>
  <section class="profile">
    <div class="profile__image">
      <img class="profile__image__photo" :src="user.user.avatar" alt="Avatar" />
    </div>

    <section class="profile__data">
      <p>{{ user.user.username }}</p>
      <div class="button">
        <router-link to="/login">
          <button class="button__logout" @click="logoutUserAction">LOGOUT</button>
        </router-link>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "Profile",

  computed: {
    ...mapState(["user", "isAuthenticated"]),
  },
  methods: {
    ...mapActions(["fetchUser", "logoutUserAction"]),
  },
});
</script>

<style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";

.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__image__photo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
}
.button__logout {
  cursor: pointer;
  margin-top: 600px;
  border: none;
  background-color: $red;
  border-radius: 60px;
  color: #000;
  font-family: "Public Sans", sans-serif;
  font-size: 15px;
  width: 110px;
  height: 37px;
  margin-top: 100px;
}
</style>
