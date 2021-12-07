<template>
  <section class="create">
    <div class="create__top">
      <div class="create__top__arrow">
        <router-link to="/collections">
          <img src="../assets/next.png" class="back" width="25" height="13" alt="Arrow icon" />
        </router-link>
      </div>
      <h1 class="create__top__title">Add a new image</h1>
    </div>

    <form class="createImage" @submit.prevent="onSubmit" autocomplete="off">
      <div class="create__form">
        <div class="create__form__file">
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
        </div>
        <div class="column">
          <div class="create__form__text">
            <!-- <label class="create__form__text__label" for="description" type="text-area"
              >Description:</label
            >
            <input
              class="create__form__text__input"
              id="description"
              v-model="description"
              placeholder="Good moments"
            /> -->
            <!---->
            <label for="date" type="date" class="create__form__text__label">Date:</label>

            <span class="datepicker-toggle">
              <span class="datepicker-toggle-button">{{
                new Date(date).toLocaleString("en-US", {
                  weekday: "short",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              }}</span></span
            >
            <input type="date" class="datepicker-input" v-model="date" />

            <!-- <select id="category" name="category" v-model="category" required>
              <option value="architecture">architecture</option>
              <option value="art">art</option>
              <option value="nature">nature</option>
              <option value="sports">sports</option>
              <option value="food">food</option>
              <option value="sea">sea</option>
              <option value="decoration">decoration</option>
              <option value="music">music</option>
              <option value="aesthetic">aesthetic</option>
            </select> -->
          </div>
          <div class="button">
            <button class="button__publish">SAVE</button>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import { useRoute } from "vue-router";
import state from "../store/state";

export default defineComponent({
  name: "AddImageToCollection",
  data() {
    return {
      image: "",
      date: "",
      description: "",
      isIncorrect: false,
      previewImage: null,
      category: "",
      name: "",
      images: "",
      file: "",
    };
  },
  methods: {
    ...mapActions(["fetchAddImageToCollection"]),
    ...mapState(["collection"]),

    onFileChange(event) {
      [this.images] = event.target.files;
    },
    pickFile() {
      const input = this.$refs.fileInput;
      const file = input.files;
      if (file && file[0]) {
        [this.images] = file;
        const reader = new FileReader();
        reader.onload = (event) => {
          this.previewImage = event.target.result;
        };
        reader.readAsDataURL(file[0]);
      }
    },

    async onSubmit() {
      const date = new Date(this.date).toISOString();

      const updatedCollection = new FormData();
      updatedCollection.append("images", this.images);

      if (this.date !== "") {
        updatedCollection.append("date", date);
      }

      if (this.name !== "") {
        updatedCollection.append("name", this.name);
      }

      updatedCollection.forEach((val) => console.log(val));
      try {
        await this.fetchAddImageToCollection(updatedCollection);

        this.$router.push("/collections");
        this.isIncorrect = false;
      } catch (error) {
        this.isIncorrect = true;
      }
    },
  },
});
</script>

<style scoped lang="scss">
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

.imagePreviewWrapper {
  width: 100px;
  height: 100px;
  display: block;
  cursor: pointer;
  margin: 0 auto 30px;
  background-size: cover;
  background-position: center center;
}
.create {
  padding-top: 100px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 300px;

  &__top {
    display: flex;
    flex-direction: row;
    border: none;
    justify-content: space-around;
    align-items: center;
    width: 340px;

    &__title {
      font-weight: inherit;
      font-size: 45px;
      padding-left: 40px;
    }
    &__arrow {
      display: flex;
      height: 90px;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 60px;
    &__text {
      display: flex;
      flex-direction: column;
      padding-top: 30px;

      &__label {
        font-family: "Public Sans", sans-serif;
        font-size: 11px;
        padding-bottom: 5px;
      }

      &__input {
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
    &__image {
      width: 300px;
      height: 200px;
      border: 0.5px solid #000;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 60px;
    }
  }
}
.button {
  display: flex;
  justify-content: center;
  &__publish {
    cursor: pointer;
    margin-top: 600px;
    border: none;
    background-color: $yellow;
    border-radius: 60px;
    color: #000;
    font-family: "Public Sans", sans-serif;
    font-size: 15px;
    width: 110px;
    height: 37px;
    margin-top: 30px;
  }
}
.column {
  display: flex;
  flex-direction: column;
}
@media (min-width: $tablet) {
  .create {
    &__top {
      width: 700px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      padding-bottom: 50px;
      margin-top: 20px;
      padding-top: 60px;
      &__title {
        font-weight: inherit;
        font-size: 50px;
        padding-left: 113px;
      }
    }

    &__form {
      display: flex;
      flex-direction: row;

      &__file {
        padding-top: 40px;
      }
    }
  }
}

@media (min-width: $desktop) {
  .create {
    padding-top: 0px;
    &__top {
      width: 1100px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      padding-bottom: 50px;
      margin-top: 75px;
      padding-top: 60px;
      &__title {
        font-weight: inherit;
        font-size: 70px;
        padding-left: 220px;
      }
    }
  }
  .create__form {
    display: flex;
    flex-direction: row;
  }
  .button {
    padding-top: 20px;
  }
}
</style>
