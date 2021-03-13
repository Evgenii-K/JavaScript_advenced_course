<template>
  <div class="catalog center">
    <div class="catalog__item" v-for="item in products">
      <img :src="item.img" alt="img-item" />
      <h3>{{ item.name }}</h3>
      <p>Price: {{ item.price }}$</p>
      <button class="btn">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: "",
  },
};
</script>

<style>
</style>