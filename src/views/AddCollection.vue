<template>
  <section class="create">
    <div class="create__top">
      <div class="create__top__arrow">
        <router-link to="/collections">
          <img src="../assets/next.png" class="back" width="25" height="13" alt="Arrow icon" />
        </router-link>
      </div>
      <h1 class="create__top__title">Create your collection</h1>
    </div>

    <form class="createImage" action @submit.prevent="onSubmit" autocomplete="off">
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
            multiple
          />
        </div>
        <div class="column">
          <div class="create__form__text">
            <label class="create__form__text__label" for="name" type="text">Name:</label>
            <input
              class="create__form__text__input"
              id="name"
              v-model="name"
              placeholder="Summer"
            />
            <label class="create__form__text__label" for="date" type="date">Date/Time:</label>
            <input
              class="create__form__text__input"
              id="date"
              v-model="date"
              placeholder="July 2021"
            />
          </div>

          <div class="button">
            <button class="button__publish">PUBLISH</button>
          </div>
        </div>
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
      images: "",
      id: "",
      isIncorrect: false,
      previewImage: null,
      file: "",
      image: "",
    };
  },
  methods: {
    ...mapActions(["fetchAddCollection"]),

    // pickFile() {
    //   const input = this.$refs.fileInput;
    //   const file = input.files;
    //   console.log(file);
    //   if (file && file[0]) {
    //     this.images = [...this.images, file];
    //     console.log(this.images);
    //     const reader = new FileReader();
    //     reader.onload = (event) => {
    //       this.previewImage = event.target.result;
    //     };
    //     reader.readAsDataURL(file[0]);
    //   }
    // },

    onFileChange(event) {
      // const newImage = file[0];
      // // if (file.length > 0) {
      //   const imageUrl = URL.createObjectURL(newImage);
      // this.images = [...this.images, newImage];
      // console.log(newImage);

      [this.images] = event.target.files;
    },

    async onSubmit() {
      const newCollection = new FormData();

      newCollection.append("name", this.name);
      newCollection.append("date", this.date);
      newCollection.append("id", this.id);
      newCollection.append("images", this.images);

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
