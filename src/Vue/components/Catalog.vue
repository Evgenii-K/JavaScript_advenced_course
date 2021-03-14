<template>
  <div :class="$style.catalog__wrapper">
    <div :class="$style.catalog">
      <CatalogItem v-for="item of products" :item="item" :key="item.name" />
    </div>
    <div>{{ getFullPrice }}</div>
    <button :class="$style.btn__show">Show more</button>
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue";
import { mapMutations, mapGetters } from "vuex";

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
  methods: {
    ...mapMutations(["setData"]),
  },
  computed: {
    ...mapGetters(["getData", "getFullPrice"]),
  },
  created() {
    this.setData({
      newData: {
        1: {
          id: "1",
          img: "https://picsum.photos/200?random=1",
          name: "Shirt",
          price: 150,
        },
        2: {
          id: "2",
          img: "https://picsum.photos/200?random=2",
          name: "Socks",
          price: 15,
        },
        3: {
          id: "3",
          img: "https://picsum.photos/200?random=3",
          name: "Jacke",
          price: 50,
        },
        4: {
          id: "4",
          img: "https://picsum.photos/200?random=4",
          name: "Shoes",
          price: 1500,
        },
        5: {
          id: "5",
          img: "https://picsum.photos/200?random=5",
          name: "Blue Shirt",
          price: 100,
        },
        6: {
          id: "6",
          img: "https://picsum.photos/200?random=6",
          name: "Red Socks",
          price: 25,
        },
      },
    });
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
.catalog {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 calc(50% - 700px) 0 calc(50% - 700px);
}
</style>