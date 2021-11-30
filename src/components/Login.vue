<template>
  <section class="login">
    <img
      class="login__image"
      src="./../assets/Logo-Thin.png"
      alt="Logotype Collector"
      width="250"
      height="17"
    />
    <h2 class="login__title">Welcome back</h2>
    <form class="login__form" autocomplete="off" @submit.prevent="onSubmit" @change="onChangeForm">
      <label for="username" type="text">Username</label>
      <input
        id="username"
        placeholder="Loling"
        v-model="username"
        :class="isIncorrect ? 'incorrect' : ''"
      />
      <label for="password" type="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="******"
        v-model="password"
        :class="isIncorrect ? 'incorrect' : ''"
      />
      <div class="bottom">
        <div class="sign">
          <router-link to="/register">
            <p class="sign__signIn">or Sign In</p>
          </router-link>
        </div>
        <div class="arrow">
          <button
            class="arrow__button"
            type="submit"
            :disabled="isDisabled"
            :class="isDisabled ? 'disabled' : ''"
          >
            {{ isIncorrect ? "Something is wrong..." : "→" }}
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";
import { mapActions } from "vuex";
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
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

.login {
  display: flex;
  flex-direction: column;
  background-color: $red;
  width: 100vw;
  height: 100vh;
  align-items: center;
  flex-wrap: nowrap;
  top: 0;
  margin: 0;
  padding: 0;

  &__image {
    object-fit: contain;
    padding-top: 45px;
    padding-bottom: 55px;
  }

  &__title {
    @include title_form;
  }

  &__form {
    @include form;
  }
}

.arrow {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 20%;
  &__button {
    @include button;
  }
}

.sign {
  width: 80%;
  &__signIn {
    font: "Canela", serif;
    color: #000;
    outline: inherit;
    margin-left: 0;
  }
}

.bottom {
  width: 250px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 15px;
  &:active {
    box-shadow: none;
  }

  &:focus {
    border: none;
  }

  &.disabled {
    box-shadow: none;
    text-decoration: none;
    cursor: inherit;
  }
}
</style>
