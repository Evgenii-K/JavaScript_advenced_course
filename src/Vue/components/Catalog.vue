<template>
  <div :class="$style.catalog__wrapper">
    <CatalogItem :products="products" />
    <button :class="$style.btn__show">Show more</button>
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue";

export default {
  data() {
    return {
      products: [
        {
          img: "https://picsum.photos/200?random=1",
          name: "Shirt",
          price: 150,
        },
        { img: "https://picsum.photos/200?random=2", name: "Socks", price: 15 },
        { img: "https://picsum.photos/200?random=3", name: "Jacke", price: 50 },
        {
          img: "https://picsum.photos/200?random=4",
          name: "Shoes",
          price: 1500,
        },
        {
          img: "https://picsum.photos/200?random=5",
          name: "Blue Shirt",
          price: 100,
        },
        {
          img: "https://picsum.photos/200?random=6",
          name: "Red Socks",
          price: 25,
        },
      ],
    };
  },
  components: {
    CatalogItem,
  },
};
</script>

<style module>
.catalog__wrapper {
  display: flex;
  flex-direction: column;
}
.btn__show {
  align-self: center;
  background-color: white;
  border-radius: 15px;
  border: 2px solid darkgray;
  width: 100px;
  height: 30px;
}
.btn__show:hover {
  color: red;
}
</style>