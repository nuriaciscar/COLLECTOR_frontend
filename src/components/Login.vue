<template>
  <section class="login">
    <h2 class="login__title">Welcome back</h2>
    <form class="login__form" autocomplete="off" @submit.prevent="onSubmit" @change="onChangeForm">
      <label for="username" type="text">Username</label>
      <input
        id="username"
        placeholder="Loling"
        v-model="username"
        :class="isIncorrect ? 'incorrect' : ''"
      />
      <label for="password" type="text">Password</label>
      <input
        id="password"
        placeholder="******"
        v-model="username"
        :class="isIncorrect ? 'incorrect' : ''"
      />
      <button
        class="button"
        type="submit"
        :disabled="isDisabled"
        :class="isDisabled ? 'disabled' : ''"
      >
        {{ isIncorrect ? "Something is wrong..." : "→" }}
      </button>
    </form>
    <router-link to="/register">
      <p class="signup">or Sign In</p>
    </router-link>

    <router-link to="/register">
      <p class="signup">Not an owner yet? Sign up!</p>
    </router-link>
    <router-link to="/home">
      <div class="go-back">_Go back</div>
    </router-link>
  </section>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import { UserLogin } from "@/types/interfaces";

export default defineComponent({
  name: "Login",
  components: {},
  data() {
    return {
      username: "",
      password: "",
      isDisabled: true,
      isWrong: false,
    };
  },
  methods: {
    ...mapActions(["fetchLoginUser"]),
    onChangeForm() {
      if (this.username.length > 2 && this.password.length > 2) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
    async onSubmit() {
      if (this.username !== "" && this.password !== "") {
        const user: UserLogin = {
          username: this.username,
          password: this.password,
        };
        try {
          await this.fetchLoginUser(user);
          this.isWrong = false;
        } catch (error) {
          this.isWrong = true;
        }
      }
    },
  },
});
</script>

<style lang="scss">
@import "../../assets/styles/_variables.scss";
@import "../../assets/styles/_mixins.scss";
.form {
  display: flex;
  flex-direction: column;
}
</style>
