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
  &__form {
    &__image {
      width: 366px;
      height: 523px;
      border: 0.5px solid #000;
    }
  }
}
</style>
