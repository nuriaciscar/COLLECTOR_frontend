<template>
  <section class="profile">
    <section class="profile__image">
      <img :src="avatar" alt="Avatar" />
    </section>
    <section class="profile__data">
      <p>{{ idUser }}</p>
      <div class="button">
        <router-link to="/login">
          <button class="button__add" @click="logoutUserAction">LOGOUT</button>
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
}
.button__add {
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
}
</style>
