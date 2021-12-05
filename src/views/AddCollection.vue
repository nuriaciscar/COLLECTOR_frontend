<template>
  <section class="create">
    <div class="create__arrow">
      <router-link to="/collections">
        <img src="../assets/next.png" class="back" width="25" height="13" alt="arrow icon" />
      </router-link>
    </div>
    <form class="register-form" @submit.prevent="onSubmit" autocomplete="off">
      <div class="create__form">
        <div>
          <div
            v-if="previewImage !== null && previewImage !== undefined"
            class="imagePreviewWrapper"
            :style="{ 'background-image': `url(${previewImage})` }"
          ></div>

          <input ref="fileInput" type="file" name="file" id="file" @input="pickFile" multiple />
        </div>
        <div class="create__form__text"></div>
        <input ref="name" type="name" name="name" id="name" />
        <input ref="date" type="text" name="date" id="date" />
        <!-- <label for="category">Choose your category:</label>
        <input list="category" name="category" id="category" /> -->

        <!-- <datalist id="category">
          <option value="art"></option>
          <option value="architecture"></option>
          <option value="nature"></option>
          <option value="sports"></option>
          <option value="food"></option>
          <option value="sea"></option>
          <option value="decoration"></option>
          <option value="music"></option>
          <option value="aesthetic"></option>
        </datalist> -->

        <button>Submit</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

import { Image } from "@/types/interfaces";

export default defineComponent({
  name: "AddCollection",
  components: {},
  data() {
    return {
      name: "",
      date: "",
      images: [] as Array<Image>,
      id: "",
      isIncorrect: false,
      previewImage: null,
      file: "",
    };
  },
  methods: {
    ...mapActions(["fetchAddCollection"]),

    pickFile() {
      const input: HTMLInputElement = this.$refs.fileInput as HTMLInputElement;
      const file = input.files;
      if (file && file[0]) {
        // this.images = file;
        // [this.images] = file;
        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.previewImage = event.target.result;
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
    },

    async onSubmit() {
      const newCollection = new FormData();

      newCollection.append("name", this.name);
      newCollection.append("date", this.date);
      // newCollection.append("images", this.images);
      newCollection.append("id", this.id);

      try {
        await this.fetchAddCollection(newCollection);
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

  &__arrow {
    width: 340px;
    display: flex;
    justify-content: flex-start;
    padding-left: 20px;
  }
  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
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
</style>
