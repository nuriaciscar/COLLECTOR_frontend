<template>
  <section class="register">
    <img
      class="register__image"
      src="./../assets/Logo-Thin.png"
      alt="Logotype Collector"
      width="250"
      height="17"
    />
    <h2 class="register__title">New user</h2>
    <form
      class="register__form"
      autocomplete="off"
      @submit.prevent="onSubmit"
      @change="onChangeForm"
    >
      <label for="name" type="text">Name</label>
      <input id="name" placeholder="Lola" v-model="name" :class="isIncorrect ? 'incorrect' : ''" />
      <label for="username" type="text">Username</label>
      <input
        id="username"
        placeholder="LolaVue"
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
      <label for="password" type="password">Repeat password</label>
      <input
        id="repeatPassword"
        type="password"
        placeholder="******"
        v-model="repeatPassword"
        :class="isIncorrect ? 'incorrect' : ''"
      />
      <label for="email" type="email" :class="isIncorrect ? 'incorrect' : ''">Email</label>
      <input
        id="email"
        placeholder="lolaVue@best.com"
        v-model="email"
        :class="isIncorrect ? 'incorrect' : ''"
      />
      <div
        v-if="previewImage !== null && previewImage !== undefined"
        class="imagePreviewWrapper"
        :style="{ 'background-image': `url(${previewImage})` }"
      ></div>
      <input
        ref="fileInput"
        type="file"
        name="file"
        id="file"
        @change="onFileChange($event)"
        @input="pickFile"
        multiple
      />
      <div class="bottom">
        <div class="sign">
          <router-link to="/login">
            <p class="sign__signIn">or Login</p>
          </router-link>
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

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "Register",
  components: {},
  data() {
    return {
      name: "",
      username: "",
      password: "",
      email: "",
      avatar: "",
      images: "",
      repeatPassword: "",
      isIncorrect: false,
      isDisabled: true,
      isWrongEmail: false,
      previewImage: null,
      file: "",
    };
  },
  methods: {
    ...mapActions(["fetchRegisterUser"]),
    onFileChange(event: any) {
      [this.images] = event.target.files;
    },

    // pickFile() {
    //   const input: HTMLInputElement = this.$refs.fileInput as HTMLInputElement;
    //   const file = input.files;
    //   if (file && file[0]) {
    //     [this.images] = file;
    //     const reader = new FileReader();
    //     reader.onload = (event: any) => {
    //       this.previewImage = event.target.result;
    //     };
    //     reader.readAsDataURL(file[0]);
    //   }
    // },

    onChangeForm() {
      if (this.username.length > 2 && this.password.length > 2) {
        this.isDisabled = false;

        if (this.password !== this.repeatPassword) {
          this.isIncorrect = true;
        } else {
          if (!this.correctEmail(this.email)) {
            this.isIncorrect = true;
          }
          this.isIncorrect = false;
        }
      } else {
        this.isDisabled = true;
      }
    },

    correctEmail(email: string) {
      const regexValidation = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      );
      return regexValidation.test(email);
    },

    async onSubmit() {
      const registerUser = new FormData();
      if (this.username !== "" && this.password !== "") {
        registerUser.append("name", this.name);
        registerUser.append("username", this.username);
        registerUser.append("password", this.password);
        registerUser.append("email", this.email);
        registerUser.append("avatar", this.images);
      }

      try {
        await this.fetchRegisterUser(registerUser);
        this.isIncorrect = false;
        this.$router.push("/collections");
      } catch (error) {
        this.isIncorrect = true;
      }
    },
  },
});
</script>

<style lang="scss">
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

.register {
  display: flex;
  flex-direction: column;
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
  padding-bottom: 200px;

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
.label-avatar {
  border: none;
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
    color: black;
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
  .register {
    background-position-y: 100px;
  }
}

@media (min-width: $desktop) {
  .register {
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
