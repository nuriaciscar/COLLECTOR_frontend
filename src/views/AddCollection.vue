<template>
  <section class="create">
    <div class="create__arrow">
      <router-link to="/collections">
        <img src="../assets/next.png" class="back" width="25" height="13" />
      </router-link>
    </div>
    <div class="create__form">
      <div class="create__form__image">+</div>
      <div class="create__form__text"></div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "AddCollection",
});
</script>

<style scoped lang="scss">
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

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
