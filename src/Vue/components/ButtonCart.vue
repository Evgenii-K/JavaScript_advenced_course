<template>
  <nav class="goods">
    <button class="btn" @click="onButtonClick">Cart</button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      cartDisplay: false,
    };
  },
  methods: {
    onButtonClick() {
      this.cartDisplay = !this.cartDisplay;
      this.$emit("cartDisplay", { showCart: this.cartDisplay });
    },
  },
};
</script>

<style>
</style>