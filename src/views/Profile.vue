<template>
  <section class="profile">
    <div class="profile__image">
      <img class="profile__image__photo" :src="user.user.avatar" alt="Avatar" />
      <p class="profile__image__username">Username</p>
    </div>

    <section class="profile__data">
      <div class="profile__data__text">
        <p class="profile__data__text__little">Username</p>
        <p class="profile__data__text__api">{{ user.user.username }}</p>
      </div>
      <div class="profile__data__text">
        <p class="profile__data__text__little">Name</p>
        <p class="profile__data__text__api">{{ user.user.name }}</p>
      </div>
      <div class="profile__data__text">
        <p class="profile__data__text__little">Email</p>
        <p class="profile__data__text__api">{{ user.user.email }}</p>
      </div>
    </section>
  </section>
  <div class="button">
    <router-link to="/login">
      <button class="button__logout" @click="logoutUserAction">LOGOUT</button>
    </router-link>
  </div>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding-top: 80px;

  &__image {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-end;
    height: 170px;
    padding-bottom: 20px;
    &__photo {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
    &__username {
      font-size: 30px;
    }
  }
  &__data {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    &__text {
      padding-left: 0;
      &__little {
        font-family: "Public Sans", sans-serif;
        font-size: 11px;
        padding-bottom: 5px;
      }

      &__api {
        border: 0.1px solid #000000;
        box-sizing: border-box;
        border-radius: 60px;
        background-color: transparent;
        width: 240px;
        height: 30px;
        color: #000;
        font-family: "Public Sans", sans-serif;
        padding: 15px;
        padding-left: 18px;
        margin-bottom: 10px;
        font-size: 15px;
        display: flex;
        align-items: center;
      }
    }
  }
}
.button {
  display: flex;
  justify-content: center;
  &__logout {
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
    margin-top: 45px;
  }
}
</style>
