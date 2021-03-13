<template>
  <div class="wrapper">
    <Header />
    <Catalog />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Catalog from "./components/Catalog.vue";

export default {
  components: {
    Header,
    Catalog,
  },
};
</script>

<style module>
</style>