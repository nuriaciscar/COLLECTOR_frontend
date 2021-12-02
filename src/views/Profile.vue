<template>
  <section class="profile">
    <section class="profile__image">
      <img :src="avatar" alt="Avatar" />
    </section>
    <section class="profile__data">
      <p>{{ idUser }}</p>
      <div class="button">
        <router-link to="/login">
          <button class="button__add">Logout</button>
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
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["fetchUser"]),
  },
});
</script>

<style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";
</style>
