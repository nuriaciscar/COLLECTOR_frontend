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
        <div class="create__form__text">
          <label for="name" type="text">Name:</label>
          <input id="name" v-model="name" placeholder="Summer" />
          <label for="date" type="date">Date/Time:</label>
          <input id="date" v-model="date" placeholder="July 2021" />
        </div>
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

        <button>Submit</button>
      </div>
    </form>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "AddCollection",
  components: {},
  data() {
    return {
      name: "",
      date: "",
      images: [],
      id: "",
      isIncorrect: false,
      previewImage: null,
      file: "",
      image: "",
    };
  },
  methods: {
    ...mapActions(["fetchAddCollection"]),

    pickFile() {
      const input = this.$refs.fileInput;
      const file = input.files;
      if (file && file[0]) {
        this.images = [...this.images, file];
        const reader = new FileReader();
        reader.onload = (event) => {
          this.previewImage = event.target.result;
        };
        reader.readAsDataURL(file[0]);
      }
    },

    async onSubmit() {
      const newCollection = new FormData();
      this.images.forEach((image) => newCollection.append("images", image));
      newCollection.append("name", this.name);
      newCollection.append("date", this.date);
      newCollection.append("id", this.id);

      try {
        await this.fetchAddCollection(newCollection);
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
    &__text {
      display: flex;
      flex-direction: column;
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
</style>
