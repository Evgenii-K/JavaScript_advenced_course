<template>
  <div>
    <div :class="$style.item">
      <img :src="getData[id].img" alt="img-item" />
      <h3 :class="$style.h">{{ getData[id].name }}</h3>
      <p :class="$style.p">Price: {{ getData[id].price }}$</p>
      <button :class="$style.btn" @click="add">Add to cart</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["addToCart"]),

    add() {
      this.addToCart(this.id);
    },
  },
  computed: {
    ...mapGetters(["getData"]),
  },
  props: {
    id: String,
  },
};
</script>

<style module>
.item {
  width: 220px;
  padding: 10px;
  margin-bottom: 30px;
  border: 2px solid darkgray;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
}
img {
  width: 200px;
  height: 200px;
  border: 2px solid darkgray;
  align-self: center;
  margin-bottom: 5px;
}
.h {
  padding-bottom: 5px;
}
.p {
  padding-bottom: 10px;
}
.btn {
  background-color: white;
  border-radius: 15px;
  border: 2px solid darkgray;
  width: 100px;
  height: 30px;
  align-self: flex-end;
}
.btn:hover {
  color: red;
}
</style>