<template>
  <Register />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Register from "@/components/Register.vue";

export default defineComponent({
  name: "RegisterPage",
  components: { Register },
});
</script>
