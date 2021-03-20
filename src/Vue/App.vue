<template>
  <div :class="$style.wrapper">
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
.wrapper {
  margin: 0 5px;
  min-height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
}
</style>