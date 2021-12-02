<template>
  <section class="profile">
    <section class="profile__image">
      <img

        src="https://farm4.staticflickr.com/3935/15363200788_026cc5119e_b.jpg"
        alt="Avatar"
      />

   </section>
     <section class="profile__data">
   <p ></p>
      <div class="button">
        <router-link to="/login" >
        <button class="button__add">Logout</button>
        </router-link>

      </div>
 </section>




</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import { useRoute } from "vue-router";


export default defineComponent({
  name: "Profile",

 computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["fetchUser"]),
  },

mounted() {

    const route = useRoute();
    const { id } = route.params;
    this.fetchUser(id);
  },
});
</script>

<style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";

</style>
