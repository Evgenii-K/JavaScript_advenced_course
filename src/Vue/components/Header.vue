<template>
  <header :class="$style.header">
    <h1>Shop</h1>
    <Cart />
  </header>
</template>

<script>
import Cart from "./Cart.vue";

export default {
  components: {
    Cart,
  },
};
</script>

<style module>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  border: 2px solid darkgray;
  position: relative;
  margin-bottom: 30px;
  padding: 0 calc(50% - 700px) 0 calc(50% - 700px);
}
</style>