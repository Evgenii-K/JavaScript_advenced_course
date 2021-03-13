<template>
  <div class="wrapper">
    <Header :namePage="products" />
    <main>
      <div :class="$style.redHeader">Content</div>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  data() {
    return {
      products: {
        name: "Shops",
        price: 125,
      },
    };
  },
  components: {
    Header,
  },
};
</script>

<style module>
.redHeader {
  color: blue;
}
</style>