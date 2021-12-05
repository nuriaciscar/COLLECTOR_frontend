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
      <label for="username" type="text" :class="isIncorrect ? 'incorrect' : 'incorrect '"
        >Username</label
      >
      <input
        id="username"
        placeholder="Loling"
        v-model="username"
        :class="isIncorrect ? 'incorrect' : ''"
      />
      <div class="control">
        <label for="password" type="password" :class="isIncorrect ? 'incorrect' : 'incorrect '"
          >Password</label
        >

        <button class="eye" @click="seePassword">
          <span class="icon">
            <em class="fas" :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"></em>
          </span>
        </button>
      </div>
      <input
        v-if="showPassword"
        type="text"
        id="password"
        placeholder="******"
        v-model="password"
        :class="isIncorrect ? 'incorrect' : ''"
      />
      <input
        v-else
        type="password"
        id="password"
        placeholder="******"
        v-model="password"
        :class="isIncorrect ? 'incorrect' : ''"
      />

      <div class="bottom">
        <div class="sign">
          <!-- <router-link to="/register"> -->
          <p class="sign__signIn">or Sign In</p>
          <!-- </router-link> -->
        </div>
        <div class="arrow">
          <button
            class="arrow__button"
            type="submit"
            :disabled="username === '' || password === ''"
          >
            →
          </button>
        </div>
      </div>
      <div class="isWrong">
        <p class="isWrong__text">{{ isIncorrect ? "Something is wrong..." : "" }}</p>
      </div>
    </form>
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
      isIncorrect: false,
      showPassword: false,
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["getToken", "fetchLoginUser"]),
    async onSubmit() {
      try {
        if (this.username !== "" && this.password !== "") {
          const user: UserLogin = {
            username: this.username,
            password: this.password,
          };

          await this.fetchLoginUser(user);
          this.$router.push("/collections");
          this.isDisabled = false;
          this.isIncorrect = false;
        }
      } catch (error) {
        this.isIncorrect = true;
      }
    },
    goHome() {
      if (this.user.isAuthenticated) {
        this.$router.push("/collections");
      }
    },

    seePassword() {
      this.showPassword = !this.showPassword;
    },
  },
  mounted() {
    this.goHome();
  },
});
</script>

<style lang="scss">
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

.login {
  display: flex;
  flex-direction: column;
  background-color: #e5ecf6;
  width: 100vw;
  height: 100vh;
  align-items: center;
  flex-wrap: nowrap;
  top: 0;
  margin: 0;
  padding: 0;
  background-size: cover;
  background-image: url(https://i.ibb.co/zJgjpLr/pexels-photo-2086620.jpg);
  background-repeat: no-repeat;
  background-position-y: 260px;
  background-position-x: right;

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
  width: 25%;
  &__button {
    @include buttonForm;
  }
}

.sign {
  width: 75%;
  &__signIn {
    font: "Canela", serif;
    color: #000;
    outline: inherit;
    margin-left: 0;
    font-size: 22px;
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
    color: red;
  }

  &.disabled {
    box-shadow: none;
    text-decoration: none;
    cursor: inherit;
  }
}

.isWrong {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  padding-top: 25px;
  &__text {
    font-family: "Public Sans", sans-serif;
    color: #4dd7ea;
    font-size: 15px;
  }
}

.control {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 240px;
  justify-content: space-between;
}

.eye {
  background-color: transparent;
  border: none;
  height: 13px;
}
.icon {
  padding-top: 3px;
  display: flex;
}

@media (min-width: $tablet) {
  .login {
    background-position-y: 100px;
  }
}

@media (min-width: $desktop) {
  .login {
    background-position-y: -82px;
    background-position-x: right;
    &__image {
      object-fit: contain;
      padding-top: 45px;
      padding-bottom: 55px;
    }

    &__title {
      @include title_form;
      font-size: 78px;
      padding-top: 20px;
    }

    &__form {
      width: 340px;
      & input {
        width: 340px;
        height: 40px;
      }
    }
  }

  .control {
    width: 330px;
  }

  .bottom {
    width: 340px;
    padding-top: 30px;
  }

  .arrow__button {
    width: 70px;
    height: 70px;
  }

  .sign__signIn {
    font-size: 27px;
  }
}
</style>
