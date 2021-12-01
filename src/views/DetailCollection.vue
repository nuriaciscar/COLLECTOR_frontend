<template>
  <div class="detail">

      <div class="detail__top">
       <button class="back">back</button>
       <h1 class="detail__top__title">{{collection.name}}<h1>
       <img class="detail__top__switch" />
      </div>
<ul v-for="image in images" :key="image.id" >
       <Image
          :description="image.description"
          :date="image.date"
          :image="image.image"
          :category="image.category"
          :owner="image.owner"
        />
      </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { useRoute } from "vue-router";
import "vue-horizontal-scroll/dist/vue-horizontal-scroll.css";
import { defineComponent } from "vue";

export default defineComponent({
  name: "DetailCollection",
    props: { name: String, date: String, images: Array, id: String },
     components: {
    Image,
  },
  computed: {
    ...mapState(["collection"]),
  },
  methods: {
    ...mapActions(["fetchLoadCollection"]),
  },
  mounted() {
    const route = useRoute();
    const { id } = req.params;
    this.fetchLoadCollection();
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.horizontal-scroll {
  display: flex;
  width: 100%;
  height: 150px;
  border: solid 2px #2c3e50;
}
.outer {
  display: flex;
  flex: 1;
  width: auto;
  height: 100%;
  padding: 0 20px;
  flex-flow: row nowrap;
  align-items: center;
}
.inner-content {
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: calc(100% - 40px);
  border: solid 1px #2c3e50;
  border-radius: 5px;
}
.inner-content:not(:first-of-type) {
  margin-left: 30px;
}
</style>
