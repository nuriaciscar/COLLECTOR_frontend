<template>
  <Login />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Login from "@/components/Login.vue";

export default defineComponent({
  name: "LoginPage",
  components: { Login },
});
</script>

<style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";

body {
  background-color: $red;
}
</style>
